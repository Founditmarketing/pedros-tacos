import { MapPin, Phone, NavigationArrow } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/site";

/** Hairline-ruled hours ledger + framed map. Reused on Home (Visita) and Visit. */
export function HoursLocation() {
  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
      <div>
        <p className="plate-tag">Hours</p>
        <ul className="mt-5">
          {site.hours.map((h) => (
            <li
              key={h.days}
              className="flex items-baseline justify-between gap-4 border-b border-line py-4 first:border-t"
            >
              <span className="font-semibold text-ink">{h.days}</span>
              <span className="tabular text-ink-soft">{h.time}</span>
            </li>
          ))}
        </ul>

        <p className="plate-tag mt-10">Find Us</p>
        <p className="mt-5 flex items-start gap-3 text-lg leading-relaxed text-ink">
          <MapPin weight="fill" size={20} className="mt-1 shrink-0 text-terracotta" />
          <span>
            {site.address.street}
            <br />
            {site.address.city}, {site.address.state} {site.address.zip}
          </span>
        </p>
        <a
          href={site.phoneHref}
          className="link-slide mt-3 inline-flex items-center gap-3 text-lg text-terracotta-deep"
        >
          <Phone weight="fill" size={18} />
          {site.phone}
        </a>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={site.directionsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <NavigationArrow weight="fill" size={16} />
            Get Directions
          </a>
          <a href={site.phoneHref} className="btn btn-ghost">
            <Phone weight="fill" size={16} />
            Call to Order
          </a>
        </div>
      </div>

      <div className="min-h-[340px] overflow-hidden rounded-frame border border-line">
        <iframe
          title={`Map to ${site.name}`}
          src={site.mapEmbed}
          className="h-full min-h-[340px] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
