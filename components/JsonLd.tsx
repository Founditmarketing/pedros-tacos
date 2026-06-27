import { site } from "@/lib/site";

/** schema.org Restaurant structured data, rendered as a sanitized <script>. */
export function RestaurantJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: site.name,
    description: site.description,
    servesCuisine: ["Mexican", "Tex-Mex"],
    priceRange: "$$",
    url: site.url,
    telephone: site.phone,
    image: [
      `${site.url}/photos/exterior-wide.jpg`,
      `${site.url}/photos/street-tacos.jpg`,
    ],
    hasMenu: `${site.url}/menu`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    sameAs: [site.social.facebook],
    openingHoursSpecification: site.hoursSpec.map((s) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: s.days,
      opens: s.opens,
      closes: s.closes,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
