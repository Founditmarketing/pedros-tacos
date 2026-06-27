import Image from "next/image";

/** Editorial inner-page header. With `image` it becomes a short photo masthead. */
export function PageHeader({
  numeral,
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
}: {
  numeral?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
}) {
  if (image) {
    return (
      <section className="relative h-[46vh] min-h-[320px] w-full overflow-hidden">
        <Image src={image} alt={imageAlt ?? ""} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-charcoal/25" />
        <div className="absolute inset-0 flex items-end">
          <div className="wrap-wide pb-12">
            {eyebrow && <p className="eyebrow !text-on-dark-soft">{eyebrow}</p>}
            <h1 className="mt-2 text-5xl text-on-dark md:text-7xl">{title}</h1>
            {subtitle && <p className="mt-4 max-w-xl text-lg text-on-dark-soft">{subtitle}</p>}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="border-b border-line">
      <div className="wrap-wide py-16 md:py-24">
        {numeral && <span className="numeral block text-6xl md:text-8xl" aria-hidden>{numeral}</span>}
        {eyebrow && <p className="eyebrow mt-3">{eyebrow}</p>}
        <h1 className="mt-3 text-6xl text-ink md:text-8xl">{title}</h1>
        {subtitle && <p className="mt-5 max-w-xl text-lg text-ink-soft">{subtitle}</p>}
      </div>
    </section>
  );
}
