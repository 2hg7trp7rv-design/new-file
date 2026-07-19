import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

const root = join(process.cwd(), "out");
const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || "127.0.0.1";

const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".xml": "application/xml; charset=utf-8",
};

function resolveFile(url = "/") {
  const cleanPath = decodeURIComponent(url.split("?")[0]);
  const relativePath = normalize(cleanPath).replace(/^(\.\.(\/|\\|$))+/, "").replace(/^[/\\]+/, "");
  const requested = join(root, relativePath);
  const candidates = [
    requested,
    join(requested, "index.html"),
    `${requested}.html`,
    join(root, "404.html"),
  ];
  return candidates.find((candidate) => existsSync(candidate) && statSync(candidate).isFile());
}

createServer((request, response) => {
  const file = resolveFile(request.url);
  if (!file) {
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  const isFallback = file.endsWith("404.html") && !request.url?.includes("404.html");
  response.writeHead(isFallback ? 404 : 200, {
    "content-type": types[extname(file).toLowerCase()] || "application/octet-stream",
    "x-content-type-options": "nosniff",
  });
  createReadStream(file).pipe(response);
}).listen(port, host, () => {
  console.log(`Static export ready at http://${host}:${port}`);
});
