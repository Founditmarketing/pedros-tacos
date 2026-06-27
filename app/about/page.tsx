import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ForkKnife } from "@phosphor-icons/react/dist/ssr";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { Tour } from "@/components/Tour";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Pedro's Tacos & Tequila Bar is a multi-sensational Mexican kitchen in Alexandria, LA, with a Chicano ambience and service where everyone remembers your name.",
};

const values = [
  { n: "01", title: "Like Family", body: "Personalized service where the staff remembers your name and your order." },
  { n: "02", title: "Made Fresh", body: "Modern Mexican plates and five signature sauces made here every single day." },
  { n: "03", title: "An Experience", body: "A Chicano ambience and agave bar that turn dinner into a night out." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Our Story"
        subtitle="New-wave Mexico, right here in Alexandria."
        image="/photos/exterior-wide.jpg"
        imageAlt="Pedro's Tacos & Tequila Bar storefront on N MacArthur Drive."
      />

      {/* STORY */}
      <section className="py-20 md:py-28">
        <div className="wrap-wide grid gap-14 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
          <Reveal>
            <div className="flex items-start gap-5">
              <span className="numeral shrink-0 text-7xl md:text-8xl" aria-hidden>01</span>
              <div>
                <p className="font-display text-3xl italic leading-tight text-ink md:text-4xl">
                  A multi-sensational Mexican restaurant where your experience begins the
                  moment you set foot through the door.
                </p>
                <div className="mt-7 space-y-5 leading-relaxed text-ink-soft">
                  <p>
                    Walk into our world of Mexican spices and maize and you have just entered
                    new-wave Mexico. Our Chicano ambience is part of what makes us unique, along
                    with our constant effort to provide outstanding, personalized service where
                    everyone remembers your name.
                  </p>
                  <p>
                    At Pedro&rsquo;s you will find modern Mexican dishes that pay homage to the
                    original chefs of Mexico, who showed that exceptionally tasty food could be
                    made with flair and artistry and still be for everyone. Since our humble roots
                    as a taqueria, we have committed to bringing our vision of Mexico to you.
                  </p>
                  <p>
                    So whether you are drawn in by the antojito feel of our restaurant or you just
                    want the best Mexican food you have ever eaten, come for the food and the
                    atmosphere, and stay for an experience like no other.
                  </p>
                </div>
                <Link href="/menu" className="btn btn-primary mt-8">
                  <ForkKnife weight="fill" size={16} />
                  Explore the Menu
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { src: "/photos/quesabirria.jpg", alt: "Quesabirria tacos with rich consommé.", tag: "Pl.02" },
                { src: "/photos/marg-mango.jpg", alt: "A bright mango-orange margarita.", tag: "Pl.03" },
                { src: "/photos/flautas.jpg", alt: "Crispy flautas with crema and cotija.", tag: "Pl.04" },
                { src: "/photos/marg-green.jpg", alt: "A green margarita on the rocks.", tag: "Pl.05" },
              ].map((img, i) => (
                <figure key={img.src} className={i % 2 === 1 ? "mt-8" : ""}>
                  <div className="overflow-hidden border border-line">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={500}
                      height={620}
                      sizes="(max-width: 1024px) 45vw, 22vw"
                      className="aspect-[4/5] w-full object-cover"
                    />
                  </div>
                  <figcaption className="plate-tag mt-2">{img.tag}</figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUES - numbered hairline editorial list */}
      <section className="border-t border-line py-16 md:py-24">
        <div className="wrap-wide">
          <ul>
            {values.map((v) => (
              <li
                key={v.n}
                className="grid items-baseline gap-3 border-b border-line py-8 first:border-t md:grid-cols-[auto_1fr_2fr] md:gap-10"
              >
                <span className="numeral text-4xl md:text-5xl">{v.n}</span>
                <h3 className="text-3xl text-ink md:text-4xl">{v.title}</h3>
                <p className="leading-relaxed text-ink-soft">{v.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 360 TOUR */}
      <section className="border-t border-line py-20 md:py-28">
        <div className="wrap-wide">
          <SectionHeading numeral="02" title="Step inside" intro="Spin around our dining room and bar with the 360-degree tour before you visit." />
          <div className="mt-10">
            <Tour />
            <p className="plate-tag mt-3">Pl.06 &middot; The room</p>
          </div>
        </div>
      </section>
    </>
  );
}
