import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-900 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        {/* ロゴ部分 */}
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-neutral-500">
            Auto Collection
          </span>
          <span className="text-lg font-semibold text-red-500">
            Bondage
          </span>
        </Link>

        {/* シンプルナビ（まずは最小限） */}
        <nav className="flex items-center gap-3 text-[11px] sm:text-xs">
          <Link
            href="/"
            className="rounded-full px-3 py-1 text-neutral-300 transition hover:bg-neutral-900 hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/inventory"
            className="hidden rounded-full px-3 py-1 text-neutral-300 transition hover:bg-neutral-900 hover:text-white sm:inline"
          >
            Inventory
          </Link>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-red-700/70 bg-black px-3 py-1 text-[11px] font-medium text-[#ecdab9] shadow-[0_0_20px_rgba(220,38,38,0.45)] transition hover:bg-red-600/20"
          >
            Instagram
          </a>
        </nav>
      </div>
    </header>
  );
}
