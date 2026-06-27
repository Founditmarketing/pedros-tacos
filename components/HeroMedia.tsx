"use client";

import { useReducedMotion } from "motion/react";

/** Hero background media: a muted, looping boomerang clip of the storefront at
 *  golden hour. Falls back to the static poster under prefers-reduced-motion.
 *  Decorative (the headline carries the meaning), so it is aria-hidden. */
export function HeroMedia({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div
        aria-hidden
        className={`h-full w-full bg-cover bg-center ${className}`}
        style={{ backgroundImage: "url(/hero/hero-poster.jpg)" }}
      />
    );
  }

  return (
    <video
      className={`h-full w-full object-cover ${className}`}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      poster="/hero/hero-poster.jpg"
      aria-hidden
    >
      <source src="/hero/hero.mp4" type="video/mp4" />
    </video>
  );
}
