"use client";

import { useEffect, useRef } from "react";
import { site } from "@/lib/site";

/** Embeds the original CloudPano 360-degree tour by injecting its share script.
 *  A static interior photo sits behind as a graceful fallback if the tour
 *  account is no longer live. */
export function Tour() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const s = document.createElement("script");
    s.async = true;
    s.src = "https://app.cloudpano.com/public/shareScript.js";
    s.setAttribute("data-short", site.tourShort);
    s.setAttribute("width", "100%");
    s.setAttribute("height", "100%");
    container.appendChild(s);
    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-frame border border-line bg-charcoal">
      {/* Fallback poster (covered by the tour iframe when it loads) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: "url(/photos/bar-tequila.jpg)" }}
        aria-hidden
      />
      <div
        id={site.tourShort}
        ref={ref}
        className="relative h-full w-full [&>iframe]:h-full [&>iframe]:w-full [&>iframe]:border-0"
      />
    </div>
  );
}
