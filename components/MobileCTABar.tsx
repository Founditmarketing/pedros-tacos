import Link from "next/link";
import { ForkKnife, NavigationArrow, Phone } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/site";

/** Thumb-friendly sticky action bar, mobile/tablet only. Menu is the primary. */
export function MobileCTABar() {
  const quiet =
    "flex flex-col items-center justify-center gap-1 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-ink active:bg-ink/5";
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-line bg-bg/95 backdrop-blur-md lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <Link
        href="/menu"
        className="flex flex-col items-center justify-center gap-1 bg-terracotta py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-on-dark active:bg-terracotta-deep"
      >
        <ForkKnife weight="fill" size={19} />
        Menu
      </Link>
      <a
        href={site.directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${quiet} border-r border-line`}
      >
        <NavigationArrow weight="fill" size={19} className="text-terracotta" />
        Directions
      </a>
      <a href={site.phoneHref} className={quiet}>
        <Phone weight="fill" size={19} className="text-terracotta" />
        Call
      </a>
    </nav>
  );
}
