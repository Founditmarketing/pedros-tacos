import type { Metadata } from "next";
import { FacebookLogo, Phone } from "@phosphor-icons/react/dist/ssr";
import { PageHeader } from "@/components/PageHeader";
import { HoursLocation } from "@/components/HoursLocation";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Visit",
  description: `Find Pedro's Tacos & Tequila Bar at ${site.address.full}. Hours, directions, and phone for dine-in and takeout in Alexandria, LA.`,
};

export default function VisitPage() {
  return (
    <>
      <PageHeader
        eyebrow="Visítanos"
        title="Visit Pedro's"
        subtitle="On N MacArthur Drive in Alexandria. Dine in, take out, or call ahead."
        image="/photos/exterior-sign.jpg"
        imageAlt="Pedro's Tacos & Tequila Bar sign on N MacArthur Drive."
      />

      <section className="py-20 md:py-28">
        <div className="wrap-wide">
          <HoursLocation />
        </div>
      </section>

      {/* Stay in touch - light band */}
      <section className="border-t border-line py-16 md:py-24">
        <div className="wrap-wide flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-lg">
            <h2 className="text-4xl text-ink md:text-5xl">See what is cooking</h2>
            <p className="mt-4 text-ink-soft">
              Follow Pedro&rsquo;s on Facebook for specials, the drink of the month, and the
              latest from the kitchen.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <FacebookLogo weight="fill" size={18} />
              Pedro&rsquo;s on Facebook
            </a>
            <a href={site.phoneHref} className="btn btn-ghost">
              <Phone weight="fill" size={16} />
              {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
