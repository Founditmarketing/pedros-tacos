"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useScroll, useMotionValueEvent } from "motion/react";
import { List, X, Phone } from "@phosphor-icons/react";
import { site, nav } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 8);
  });

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md transition-[background-color,box-shadow,padding] duration-300 ${
        scrolled
          ? "border-b border-line bg-bg/95 py-2"
          : "border-b border-transparent bg-bg/85 py-4"
      }`}
    >
      <div className="wrap-wide flex items-center justify-between gap-6">
        <Link href="/" aria-label={`${site.name} home`} className="shrink-0">
          <Image
            src="/logo.png"
            alt={site.name}
            width={900}
            height={397}
            priority
            className={`w-auto transition-[height] duration-300 ${scrolled ? "h-9" : "h-11"}`}
          />
        </Link>

        {/* Desktop nav - centered */}
        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                data-active={active}
                className="link-slide text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-ink"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop phone CTA - ghost that fills terracotta on hover */}
        <a
          href={site.phoneHref}
          className="hidden items-center gap-2 rounded-frame bg-terracotta px-4 py-2.5 text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-on-dark shadow-soft transition-colors duration-200 hover:bg-terracotta-deep md:inline-flex"
        >
          <Phone weight="fill" size={15} />
          {site.phone}
        </a>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={site.phoneHref}
            aria-label={`Call ${site.name}`}
            className="grid h-11 w-11 place-items-center rounded-frame bg-terracotta text-on-dark"
          >
            <Phone weight="fill" size={18} />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center rounded-frame border border-line text-ink"
          >
            {open ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav className="border-t border-line bg-bg md:hidden">
          <div className="wrap flex flex-col py-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line/60 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-ink"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="py-4 text-sm font-semibold uppercase tracking-[0.16em] text-terracotta-deep"
            >
              Get Directions
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
