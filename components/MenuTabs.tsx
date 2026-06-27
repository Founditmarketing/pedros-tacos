"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { MenuGroup, MenuCategory } from "@/lib/menu";

function RowItem({
  name,
  desc,
  price,
  options,
}: {
  name: string;
  desc?: string;
  price?: string;
  options?: { label: string; price: string }[];
}) {
  return (
    <li className="py-5">
      <div className="flex flex-col gap-0.5 md:flex-row md:items-baseline md:gap-3">
        <h4 className="font-display text-[1.75rem] leading-[1.05] text-ink md:text-[1.875rem]">{name}</h4>
        <span className="mb-2 hidden flex-1 border-b border-dotted border-agave/60 md:block" aria-hidden />
        {price && <span className="tabular text-lg font-semibold text-terracotta-deep">${price}</span>}
      </div>
      {desc && <p className="mt-2 max-w-2xl text-[0.95rem] leading-relaxed text-ink-soft">{desc}</p>}
      {options && (
        <ul className="mt-2.5 flex flex-wrap gap-x-6 gap-y-1.5 text-sm">
          {options.map((o) => (
            <li key={o.label} className="text-ink-soft">
              {o.label} <span className="tabular font-semibold text-terracotta-deep">${o.price}</span>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

function Category({ category, index }: { category: MenuCategory; index: number }) {
  const isChips = category.style === "chips";
  const num = String(index + 1).padStart(2, "0");
  return (
    <section className="mt-16 first:mt-0 md:mt-20">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-line pb-3">
        <h3 className="flex items-baseline gap-3 text-3xl text-ink md:text-4xl">
          <span className="numeral text-xl opacity-80">{num}</span>
          {category.title}
        </h3>
        {category.sizes && (
          <span className="plate-tag">{category.sizes}</span>
        )}
      </div>
      {category.note && <p className="mt-3 text-sm italic text-ink-soft">{category.note}</p>}

      {isChips ? (
        <div className="mt-6 rounded-card border border-line bg-surface/60 p-5 md:p-7">
          <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {category.items.map((it) => (
              <li key={it.name} className="border-b border-line/70 pb-3">
                <p className="font-semibold text-ink">{it.name}</p>
                {it.desc && <p className="mt-0.5 text-sm text-ink-soft">{it.desc}</p>}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <ul className="mt-2 divide-y divide-line md:grid md:grid-cols-2 md:gap-x-14 md:divide-y-0">
          {category.items.map((it) => (
            <RowItem key={it.name} {...it} />
          ))}
        </ul>
      )}
    </section>
  );
}

export function MenuTabs({ groups }: { groups: MenuGroup[] }) {
  const [active, setActive] = useState(groups[0].id);
  const reduce = useReducedMotion();
  const group = groups.find((g) => g.id === active) ?? groups[0];

  const onTabKey = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const i = groups.findIndex((g) => g.id === active);
    const next = e.key === "ArrowRight" ? (i + 1) % groups.length : (i - 1 + groups.length) % groups.length;
    setActive(groups[next].id);
    document.getElementById(`tab-${groups[next].id}`)?.focus();
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Menu sections"
        className="sticky top-[52px] z-30 -mx-6 flex justify-center gap-8 border-b border-line bg-bg/95 px-6 pt-3 backdrop-blur-md md:-mx-10 md:gap-10 md:px-10"
      >
        {groups.map((g) => {
          const isActive = g.id === active;
          return (
            <button
              key={g.id}
              id={`tab-${g.id}`}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${g.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(g.id)}
              onKeyDown={onTabKey}
              className={`-mb-px flex min-h-[48px] items-center border-b-2 text-sm font-semibold uppercase tracking-[0.18em] transition-colors ${
                isActive
                  ? "border-terracotta text-terracotta-deep"
                  : "border-transparent text-ink-soft hover:text-ink"
              }`}
            >
              {g.title}
            </button>
          );
        })}
      </div>

      <motion.div
        key={active}
        role="tabpanel"
        id={`panel-${active}`}
        aria-labelledby={`tab-${active}`}
        tabIndex={0}
        initial={reduce ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-ink-soft">{group.blurb}</p>
          {group.note && (
            <p className="mx-auto mt-4 max-w-xl border-y border-line py-3 text-left text-sm font-medium text-ink md:text-center">
              {group.note}
            </p>
          )}
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          {group.categories.map((c, i) => (
            <Category key={c.id} category={c} index={i} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
