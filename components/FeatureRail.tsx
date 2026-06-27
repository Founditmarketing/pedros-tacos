import Image from "next/image";
import { featureRail } from "@/lib/gallery";
import { Reveal } from "@/components/Reveal";

/** Las Favoritas: large editorial food cards, consistent 4:3 crop, caption below.
 *  Hover lift/scale + name underline are desktop-only (lg:). */
export function FeatureRail() {
  return (
    <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2 md:gap-y-16">
      {featureRail.map((f, i) => (
        <Reveal key={f.name} delay={(i % 2) * 0.06}>
          <article className="group">
            <div className="overflow-hidden rounded-card border border-line transition-[transform,box-shadow] duration-300 lg:group-hover:-translate-y-1.5 lg:group-hover:shadow-lift">
              <Image
                src={f.src}
                alt={f.alt}
                width={1200}
                height={900}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 lg:group-hover:scale-[1.04]"
              />
            </div>

            <div className="mt-5 border-b border-line pb-4">
              <h3 className="font-display text-3xl leading-[1.05] text-ink md:text-[2.1rem]">
                <span className="bg-gradient-to-r from-terracotta to-terracotta bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-300 lg:group-hover:bg-[length:100%_2px]">
                  {f.name}
                </span>
              </h3>
            </div>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">{f.desc}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
