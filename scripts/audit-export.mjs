import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, extname, join, normalize, relative, resolve } from "node:path";

const root = resolve("out");
const errors = [];
let referenceCount = 0;

function walk(directory) {
  return readdirSync(directory).flatMap((name) => {
    const path = join(directory, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

function candidatesFor(reference, htmlFile) {
  const withoutFragment = reference.split("#")[0].split("?")[0];
  if (!withoutFragment) return [];
  const base = withoutFragment.startsWith("/")
    ? join(root, withoutFragment.replace(/^\/+/, ""))
    : resolve(dirname(htmlFile), withoutFragment);
  const normalized = normalize(base);
  return extname(normalized)
    ? [normalized]
    : [normalized, `${normalized}.html`, join(normalized, "index.html")];
}

if (!existsSync(root)) {
  console.error("out/ is missing. Run npm run build first.");
  process.exit(1);
}

const htmlFiles = walk(root).filter((file) => file.endsWith(".html"));

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const label = relative(root, file);
  const mainMatches = html.match(/<main\b/gi) || [];
  if (mainMatches.length !== 1 || !/<main\b[^>]*\bid=["']main-content["']/i.test(html)) {
    errors.push(`${label}: expected one <main id="main-content">`);
  }

  const h1Matches = html.match(/<h1\b/gi) || [];
  if (h1Matches.length !== 1) errors.push(`${label}: expected exactly one h1, found ${h1Matches.length}`);
  if (!/<title>[^<]+<\/title>/i.test(html)) errors.push(`${label}: missing document title`);
  if (!/<meta\b[^>]*\bname=["']description["'][^>]*\bcontent=["'][^"']+["']/i.test(html)) {
    errors.push(`${label}: missing meta description`);
  }
  if (!/<link\b[^>]*\brel=["']canonical["'][^>]*\bhref=["'][^"']+["']/i.test(html)) {
    errors.push(`${label}: missing canonical URL`);
  }

  const ids = [...html.matchAll(/\bid=["']([^"']+)["']/gi)].map((match) => match[1]);
  const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
  if (duplicateIds.length) errors.push(`${label}: duplicate ids ${duplicateIds.join(", ")}`);

  for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\balt=["'][^"']*["']/i.test(match[0])) errors.push(`${label}: image without alt text`);
  }

  for (const match of html.matchAll(/<a\b[^>]*\btarget=["']_blank["'][^>]*>/gi)) {
    if (!/\brel=["'][^"']*(?:noopener|noreferrer)[^"']*["']/i.test(match[0])) {
      errors.push(`${label}: target="_blank" link without noopener/noreferrer`);
    }
  }

  for (const match of html.matchAll(/\b(?:href|src)=["']([^"']+)["']/gi)) {
    const reference = match[1];
    if (/^(?:https?:|tel:|mailto:|data:|javascript:|#)/i.test(reference)) continue;
    referenceCount += 1;
    const candidates = candidatesFor(decodeURIComponent(reference), file);
    if (candidates.length && !candidates.some(existsSync)) {
      errors.push(`${label}: broken local reference ${reference}`);
    }
  }
}

if (errors.length) {
  console.error(`Export audit failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Export audit passed: ${htmlFiles.length} HTML files, ${referenceCount} local references, no duplicate IDs or missing image alt attributes.`);
