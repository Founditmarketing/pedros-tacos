import Link from "next/link";
import Image from "next/image";
import { ForkKnife, NavigationArrow, ArrowRight, Phone } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/site";
import { gallery } from "@/lib/gallery";
import { SectionHeading } from "@/components/SectionHeading";
import { HoursLocation } from "@/components/HoursLocation";
import { QuickInfo } from "@/components/QuickInfo";
import { FeatureRail } from "@/components/FeatureRail";
import { DarkAgaveBar } from "@/components/DarkAgaveBar";
import { Reveal } from "@/components/Reveal";
import { RestaurantJsonLd } from "@/components/JsonLd";

const sauces = ["Tomatillo", "Chili", "Jalapeño", "Pipian", "Habanero"];

export default function HomePage() {
  return (
    <>
      <RestaurantJsonLd />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-line">
        {/* MOBILE - full-bleed food image, copy overlaid */}
        <div className="lg:hidden">
          <div className="relative h-[82vh] min-h-[560px] w-full">
            <Image
              src="/photos/street-tacos.jpg"
              alt="Street tacos with al pastor, onion and cilantro at Pedro's."
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal from-35% via-charcoal/80 via-72% to-charcoal/10" />
            <div className="absolute inset-x-0 bottom-0 px-6 pb-24 [text-shadow:0_1px_14px_rgba(15,13,11,0.7)]">
              <svg viewBox="0 0 128 13" width="112" height="11" className="block text-terracotta drop-shadow" aria-hidden role="presentation">
                {Array.from({ length: 8 }).map((_, i) => (
                  <polygon key={i} points={`${i * 16},0 ${i * 16 + 16},0 ${i * 16 + 8},13`} fill="currentColor" />
                ))}
              </svg>
              <p className="eyebrow mt-3 !text-on-dark">Mexican Kitchen &amp; Tequila Bar &middot; Alexandria, LA</p>
              <h1 className="mt-3 text-pretty text-[clamp(2.05rem,8.5vw,2.75rem)] leading-[1.04] text-on-dark">
                Tacos, Tequila &amp; <span className="italic">New-Wave</span> Mexican Flavor in Alexandria
              </h1>
              <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-on-dark/90">
                Street tacos, sizzling fajitas, fresh margaritas, and made-here sauces on
                N MacArthur Drive.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Link href="/menu" className="btn btn-primary w-full justify-center py-4 text-sm">
                  <ForkKnife weight="fill" size={18} />
                  View Menu
                </Link>
                <a
                  href={site.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn w-full justify-center border border-on-dark/45 py-4 text-on-dark active:bg-on-dark/10"
                >
                  <NavigationArrow weight="fill" size={16} className="text-terracotta" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP - split editorial */}
        <div className="hidden lg:block">
          <div className="wrap-wide grid items-center gap-16 py-20 lg:grid-cols-[1.04fr_1fr]">
            <div>
              <svg viewBox="0 0 128 13" width="116" height="12" className="block text-terracotta" aria-hidden role="presentation">
                {Array.from({ length: 8 }).map((_, i) => (
                  <polygon key={i} points={`${i * 16},0 ${i * 16 + 16},0 ${i * 16 + 8},13`} fill="currentColor" />
                ))}
              </svg>
              <p className="eyebrow mt-4">Issue No.01 &middot; Cocina Mexicana + Tequila Bar</p>
              <h1 className="mt-4 text-pretty text-[clamp(2.75rem,4.4vw,4.25rem)] leading-[1.02] text-ink">
                Alexandria&rsquo;s Tacos, Tequila &amp;{" "}
                <span className="italic text-terracotta">New-Wave</span> Mexican Kitchen
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
                Made-here sauces, sizzling plates, fresh margaritas, and Chicano-inspired
                atmosphere on N MacArthur Drive.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link href="/menu" className="btn btn-primary">
                  <ForkKnife weight="fill" size={16} />
                  View the Menu
                </Link>
                <a href={site.directionsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                  <NavigationArrow weight="fill" size={16} className="text-terracotta" />
                  Get Directions
                </a>
              </div>
              <a
                href={site.phoneHref}
                className="link-slide mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-terracotta-deep"
              >
                <Phone weight="fill" size={14} />
                Call to Order &middot; {site.phone}
              </a>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-frame border border-line shadow-lift">
                <Image
                  src="/photos/street-tacos.jpg"
                  alt="Street tacos with al pastor, onion and cilantro at Pedro's."
                  width={1200}
                  height={900}
                  priority
                  sizes="50vw"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-7 -left-7 w-44 overflow-hidden rounded-frame border-4 border-bg shadow-lift">
                <Image
                  src="/photos/exterior-sign.jpg"
                  alt="Pedro's storefront sign on N MacArthur Drive."
                  width={360}
                  height={480}
                  sizes="11rem"
                  className="aspect-[3/4] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK INFO STRIP - where / when / order */}
      <QuickInfo />

      {/* LAS FAVORITAS - editorial food cards */}
      <section className="py-20 md:py-28">
        <div className="wrap-wide">
          <Reveal>
            <SectionHeading numeral="01" title="Las Favoritas" intro="The plates Alexandria keeps coming back for." />
          </Reveal>
          <FeatureRail />
          <div className="mt-16 text-center">
            <Link href="/menu" className="btn btn-ghost">
              See the Full Menu
              <ArrowRight className="btn-arrow" weight="bold" size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* THE AGAVE BAR - dark immersive (numeral 02) */}
      <DarkAgaveBar />

      {/* MARTES + SALSAS - light typographic band */}
      <section className="relative overflow-hidden border-t border-line py-20 md:py-28">
        <div className="pointer-events-none absolute -left-10 bottom-0 hidden h-2/3 w-[36%] opacity-[0.07] lg:block">
          <Image src="/photos/street-tacos-alt.jpg" alt="" fill sizes="36vw" className="object-cover" />
        </div>
        <div className="wrap-wide relative grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="md:border-r md:border-line md:pr-16">
            <span className="numeral text-3xl">03</span>
            <h2 className="mt-2 text-6xl leading-[0.9] text-ink md:text-8xl">Martes</h2>
            <p className="mt-3 text-2xl text-ink-soft">Taco Tuesday at Pedro&rsquo;s</p>
            <p className="mt-5 max-w-sm leading-relaxed text-ink-soft">
              Bring the table. Every plate is finished with one of our five signature sauces,
              made fresh here every single day.
            </p>
          </div>

          <div>
            <p className="plate-tag">Salsas de la Casa</p>
            <ul className="mt-6">
              {sauces.map((s, i) => (
                <li key={s} className="flex items-baseline gap-4 border-b border-line py-4 first:border-t">
                  <span className="numeral text-xl">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-2xl text-ink md:text-3xl">{s}</span>
                  <span className="ml-auto h-px w-8 bg-terracotta" aria-hidden />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* THE STORY - editor's note (now after the food) */}
      <section className="border-t border-line py-20 md:py-28">
        <div className="wrap-wide grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <Reveal>
            <div className="flex items-start gap-5">
              <span className="numeral shrink-0 text-7xl md:text-8xl" aria-hidden>04</span>
              <div>
                <p className="text-xl leading-snug text-ink md:text-2xl">
                  <span className="font-display text-3xl md:text-4xl">Walk through our doors</span>{" "}
                  and you have entered new-wave Mexico. Our Chicano ambience, modern plates, and
                  made-here sauces are what make Pedro&rsquo;s worth the trip.
                </p>
                <p className="mt-5 max-w-xl leading-relaxed text-ink-soft">
                  Since our humble roots as a taqueria, we have brought our vision of Mexico to
                  Alexandria with flair, artistry, and service where everyone remembers your name.
                </p>
                <Link
                  href="/about"
                  className="link-slide mt-7 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-terracotta-deep"
                >
                  Read our story
                  <ArrowRight weight="bold" size={15} />
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <figure>
              <div className="overflow-hidden rounded-card border border-line">
                <Image
                  src="/photos/exterior-sign.jpg"
                  alt="Pedro's storefront and sign on N MacArthur Drive."
                  width={903}
                  height={1206}
                  sizes="(max-width: 1024px) 100vw, 34vw"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <figcaption className="plate-tag mt-3">Pl.01 &middot; The house</figcaption>
              <p className="mt-6 border-l border-agave/50 pl-5 font-display text-2xl italic leading-snug text-ink md:text-[1.75rem]">
                Service where everyone remembers your name.
              </p>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* THE GALLERY - editorial masonry */}
      <section className="border-t border-line py-20 md:py-28">
        <div className="wrap-wide">
          <Reveal>
            <SectionHeading numeral="05" title="Plates &amp; Places" intro="A taste of the food, the bar, and the room." />
          </Reveal>
          <div className="mt-12 columns-1 gap-4 sm:columns-2 md:columns-3 [&>figure]:mb-4">
            {gallery.map((p, i) => (
              <Reveal key={p.src} delay={(i % 3) * 0.05}>
                <figure className="group break-inside-avoid">
                  <div className="overflow-hidden rounded-card border border-line transition-[transform,box-shadow] duration-300 lg:group-hover:-translate-y-1 lg:group-hover:shadow-soft">
                    <Image
                      src={p.src}
                      alt={p.alt}
                      width={700}
                      height={i % 3 === 0 ? 933 : 525}
                      sizes="(max-width: 768px) 50vw, 30vw"
                      className={`w-full object-cover transition-transform duration-500 lg:group-hover:scale-[1.03] ${
                        i % 3 === 0 ? "aspect-[3/4]" : "aspect-[4/3]"
                      }`}
                    />
                  </div>
                  <figcaption className="plate-tag mt-2">Pl.{String(i + 1).padStart(2, "0")}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VISITA - hours + map */}
      <section className="border-t border-line py-20 md:py-28">
        <div className="wrap-wide">
          <SectionHeading numeral="06" title="Come see us" intro="On N MacArthur Drive in Alexandria. Dine in, take out, or call ahead." />
          <div className="mt-12">
            <HoursLocation />
          </div>
        </div>
      </section>
    </>
  );
}
