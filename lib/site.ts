/**
 * Single source of truth for Pedro's business facts.
 * All values recovered verbatim from the archived site (June 2024 snapshot).
 * Hours use plain hyphens (no en/em dashes) by brand-style choice.
 */

export const site = {
  name: "Pedro's Tacos & Tequila Bar",
  shortName: "Pedro's",
  city: "Alexandria, LA",
  tagline: "Tacos, tequila, and a table that feels like family.",
  description:
    "A multi-sensational Mexican kitchen and tequila bar in Alexandria, Louisiana. Modern Mexican cooking, fresh-squeezed margaritas, and service where everyone remembers your name.",

  phone: "(318) 427-7755",
  phoneHref: "tel:+13184277755",

  address: {
    street: "3024 N MacArthur Dr.",
    city: "Alexandria",
    state: "LA",
    zip: "71303",
    full: "3024 N MacArthur Dr., Alexandria, LA 71303",
  },

  hours: [
    { days: "Monday - Thursday", time: "10:30am - 10:00pm" },
    { days: "Friday - Saturday", time: "10:30am - 11:00pm" },
    { days: "Sunday", time: "10:30am - 10:00pm" },
  ],

  // Structured for schema.org openingHoursSpecification
  hoursSpec: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "10:30", closes: "22:00" },
    { days: ["Friday", "Saturday"], opens: "10:30", closes: "23:00" },
    { days: ["Sunday"], opens: "10:30", closes: "22:00" },
  ],

  social: {
    facebook: "https://www.facebook.com/pedrostacosalexandria",
  },

  // Google Maps embed + directions work from the address query (no API key needed)
  mapEmbed:
    "https://www.google.com/maps?q=Pedro%27s+Tacos+%26+Tequila+Bar+3024+N+MacArthur+Dr+Alexandria+LA+71303&output=embed",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=3024+N+MacArthur+Dr+Alexandria+LA+71303",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Pedro%27s+Tacos+%26+Tequila+Bar+3024+N+MacArthur+Dr+Alexandria+LA+71303",

  // 360-degree CloudPano virtual tour from the original site (data-short)
  tourShort: "GjB0LyjDB",

  url: "https://pedrostacosalexandria.com",
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Visit", href: "/visit" },
] as const;
