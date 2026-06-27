import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, FacebookLogo, NavigationArrow } from "@phosphor-icons/react/dist/ssr";
import { site, nav } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-charcoal text-on-dark">
      <div className="wrap-wide pt-16">
        <div className="grid gap-10 border-t border-on-dark/15 pt-12 md:grid-cols-[1.4fr_1fr_1fr_0.9fr]">
          <div>
            <Image src="/logo.png" alt={site.name} width={900} height={397} className="h-14 w-auto" />
            <p className="mt-5 max-w-xs leading-relaxed text-on-dark-soft">
              A Mexican kitchen and agave bar in the heart of Alexandria, Louisiana.
            </p>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="link-slide mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-on-dark"
            >
              <FacebookLogo weight="fill" size={18} />
              Facebook
            </a>
          </div>

          <div>
            <p className="plate-tag !text-on-dark-soft">Find Us</p>
            <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-on-dark-soft">
              <MapPin weight="fill" size={16} className="mt-1 shrink-0 text-terracotta" />
              <span>
                {site.address.street}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </span>
            </p>
            <a href={site.phoneHref} className="link-slide mt-3 inline-flex items-center gap-2 text-sm text-on-dark">
              <Phone weight="fill" size={16} className="text-terracotta" />
              {site.phone}
            </a>
            <a
              href={site.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-slide mt-3 flex items-center gap-2 text-sm text-on-dark"
            >
              <NavigationArrow weight="fill" size={16} className="text-terracotta" />
              Get Directions
            </a>
          </div>

          <div>
            <p className="plate-tag !text-on-dark-soft">Hours</p>
            <ul className="mt-4 space-y-2.5 text-sm text-on-dark-soft">
              {site.hours.map((h) => (
                <li key={h.days}>
                  <span className="block font-semibold text-on-dark">{h.days}</span>
                  <span className="tabular">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="plate-tag !text-on-dark-soft">Explore</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-slide text-on-dark">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Oversized Bodoni sign-off, bleeding to baseline */}
        <div className="pointer-events-none mt-10 -mb-3 select-none overflow-hidden md:mt-16 md:-mb-6">
          <p className="font-display text-[clamp(4rem,22vw,14rem)] font-medium leading-[0.8] tracking-[-0.01em] text-on-dark/95">
            Pedro&rsquo;s
          </p>
        </div>
      </div>

      <div className="border-t border-on-dark/15">
        <div className="wrap-wide flex flex-col items-center justify-between gap-2 py-5 text-[0.7rem] uppercase tracking-[0.14em] text-on-dark-soft sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {site.name}</p>
          <p className="normal-case tracking-normal">{site.address.full}</p>
        </div>
      </div>
    </footer>
  );
}
