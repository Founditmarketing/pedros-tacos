"use client";

import { useSyncExternalStore } from "react";
import { site } from "@/lib/site";

function fmt(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  const ampm = h >= 12 ? "pm" : "am";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return m === 0 ? `${h12}${ampm}` : `${h12}:${String(m).padStart(2, "0")}${ampm}`;
}

type Status = { open: boolean; label: string; range: string };

function compute(): Status {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());

  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "";
  let hour = Number(parts.find((p) => p.type === "hour")?.value ?? "0");
  if (hour === 24) hour = 0;
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? "0");
  const nowMin = hour * 60 + minute;

  const spec = site.hoursSpec.find((s) => (s.days as readonly string[]).includes(weekday));
  if (!spec) return { open: false, label: "Closed today", range: "" };

  const [oh, om] = spec.opens.split(":").map(Number);
  const [ch, cm] = spec.closes.split(":").map(Number);
  const openMin = oh * 60 + om;
  const closeMin = ch * 60 + cm;
  const range = `${fmt(spec.opens)} - ${fmt(spec.closes)}`;

  if (nowMin < openMin) return { open: false, label: `Opens ${fmt(spec.opens)}`, range };
  if (nowMin >= closeMin) return { open: false, label: "Closed now", range };
  return { open: true, label: `Open now until ${fmt(spec.closes)}`, range };
}

// Cache the snapshot so getSnapshot returns a stable reference (refresh each minute).
let cached: Status | null = null;
let cachedAt = 0;
function getSnapshot(): Status | null {
  const now = Date.now();
  if (!cached || now - cachedAt > 60_000) {
    cached = compute();
    cachedAt = now;
  }
  return cached;
}
const subscribe = () => () => {};

/** Live open/closed status in the restaurant's local time (Central). Renders a
 *  stable, true fallback on the server, then refines on the client. */
export function TodayHours({ tone = "ink" }: { tone?: "ink" | "onDark" }) {
  const status = useSyncExternalStore(subscribe, getSnapshot, () => null);

  const soft = tone === "onDark" ? "text-on-dark-soft" : "text-ink-soft";
  const strong = tone === "onDark" ? "text-on-dark" : "text-ink";

  if (!status) {
    return <span className={`text-sm ${soft}`}>Open daily from 10:30am</span>;
  }

  return (
    <span className="inline-flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm">
      <span className="inline-flex items-center gap-2">
        <span
          className={`h-2 w-2 rounded-full ${status.open ? "bg-green" : "bg-terracotta"}`}
          aria-hidden
        />
        <span className={`font-semibold ${strong}`}>{status.label}</span>
      </span>
      {status.range && <span className={`tabular ${soft}`}>Today {status.range}</span>}
    </span>
  );
}
