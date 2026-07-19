import type { ComponentPropsWithoutRef } from "react";
import styles from "./SkipLink.module.css";

type SkipLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  href?: `#${string}`;
};

export function SkipLink({ children = "本文へ移動", className, href = "#main-content", ...props }: SkipLinkProps) {
  return <a {...props} className={[styles.link, className].filter(Boolean).join(" ")} href={href}>{children}</a>;
}
