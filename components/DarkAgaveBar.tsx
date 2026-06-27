"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";

/** The single immersive dark section. The center drink flight scales 1.08 -> 1.0
 *  as the section arrives (a "walking into the lounge" temperature shift). */
export function DarkAgaveBar() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-charcoal py-24 text-on-dark md:py-32">
      {/* edge slivers bleeding in */}
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[11%] opacity-60 lg:block">
        <Image src="/photos/margarita.jpg" alt="" fill sizes="11vw" className="object-cover" />{/* strawberry margarita */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/30 to-charcoal" />
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[11%] opacity-60 lg:block">
        <Image src="/photos/margarita-jalapeno.jpg" alt="" fill sizes="11vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-l from-charcoal/30 to-charcoal" />
      </div>

      <div className="wrap relative text-center">
        <span className="numeral block text-6xl text-on-dark/15 md:text-8xl" aria-hidden>
          02
        </span>
        <h2 className="mt-2 text-5xl text-on-dark md:text-7xl">The Agave Bar</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-on-dark-soft">
          Fresh-squeezed margaritas, mojitos and a deep tequila list, poured tableside.
          Ask your server about the drink of the month.
        </p>

        <motion.div
          style={reduce ? undefined : { scale }}
          className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-card border border-agave/70"
        >
          <Image
            src="/photos/margaritas.jpg"
            alt="A pair of fresh-squeezed margaritas at the bar."
            width={1100}
            height={825}
            sizes="(max-width: 768px) 100vw, 42rem"
            className="aspect-[4/3] w-full object-cover"
          />
        </motion.div>

        <div className="mt-10">
          <Link href="/menu" className="btn btn-on-dark">
            See the Drink List
            <ArrowRight className="btn-arrow" weight="bold" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
