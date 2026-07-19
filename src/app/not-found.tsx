import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/Icons";

export default function NotFound() {
  return (
    <main className="not-found shell"><p className="eyebrow">404 / NOT FOUND</p><h1>ページが見つかりません。</h1><p>URLが変更されたか、ページが削除された可能性があります。</p><Link className="button" href="/">トップへ戻る <ArrowRightIcon /></Link></main>
  );
}
