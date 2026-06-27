import type { ReactNode } from "react";

/** Editorial section heading. The oversized agave `numeral` replaces a per-section
 *  eyebrow; `eyebrow` is rationed to at most 2 per page. */
export function SectionHeading({
  numeral,
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "ink",
}: {
  numeral?: string;
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "ink" | "onDark";
}) {
  const centered = align === "center";
  const titleColor = tone === "onDark" ? "text-on-dark" : "text-ink";
  const introColor = tone === "onDark" ? "text-on-dark-soft" : "text-ink-soft";

  return (
    <div className={`${centered ? "mx-auto text-center" : ""} max-w-2xl`}>
      {numeral && (
        <span
          className={`numeral block text-6xl md:text-7xl ${centered ? "mx-auto" : ""}`}
          aria-hidden
        >
          {numeral}
        </span>
      )}
      {eyebrow && <p className="eyebrow mt-3">{eyebrow}</p>}
      <h2 className={`mt-3 text-4xl leading-[1] md:text-5xl lg:text-6xl ${titleColor}`}>
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 max-w-xl text-lg leading-relaxed ${introColor} ${centered ? "mx-auto" : ""}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
