import Link from "next/link";
import { MapPin, Clock, Phone, NavigationArrow, ForkKnife } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/site";
import { TodayHours } from "@/components/TodayHours";

/** Utility strip directly under the hero: where, when, and how to order. */
export function QuickInfo() {
  return (
    <section className="border-y border-line bg-cream-deep/50">
      <div className="wrap-wide grid divide-y divide-line md:grid-cols-3 md:divide-x md:divide-y-0">
        <div className="flex items-start gap-3 py-5 md:px-8 md:py-6 md:first:pl-0">
          <MapPin weight="fill" size={20} className="mt-0.5 shrink-0 text-terracotta" />
          <div>
            <p className="plate-tag">Find Us</p>
            <p className="mt-1 text-sm text-ink">{site.address.street}, {site.address.city}</p>
            <a
              href={site.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-slide mt-1 inline-flex items-center gap-1 text-sm font-semibold text-terracotta-deep"
            >
              <NavigationArrow weight="fill" size={13} />
              Get directions
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3 py-5 md:px-8 md:py-6">
          <Clock weight="fill" size={20} className="mt-0.5 shrink-0 text-terracotta" />
          <div>
            <p className="plate-tag">Hours</p>
            <div className="mt-1">
              <TodayHours />
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3 py-5 md:px-8 md:py-6 md:last:pr-0">
          <Phone weight="fill" size={20} className="mt-0.5 shrink-0 text-terracotta" />
          <div>
            <p className="plate-tag">Order</p>
            <a href={site.phoneHref} className="mt-1 block text-sm font-semibold text-ink hover:text-terracotta-deep">
              {site.phone}
            </a>
            <Link
              href="/menu"
              className="link-slide mt-1 inline-flex items-center gap-1 text-sm font-semibold text-terracotta-deep"
            >
              <ForkKnife weight="fill" size={13} />
              See the menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
