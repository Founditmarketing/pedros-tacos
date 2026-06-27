/** Curated high-resolution photos (in /public/photos), with verified alt text. */

export type Photo = { src: string; alt: string };

/** Home "Las Favoritas" feature cards. Prices are real where on the menu;
 *  quesabirria and flautas are not on the transcribed lunch menu, so no price. */
export type Feature = {
  n: string;
  name: string;
  desc: string;
  price?: string;
  src: string;
  alt: string;
};

export const featureRail: Feature[] = [
  {
    n: "01",
    name: "Street Tacos",
    desc: "Al pastor and carne on double corn tortillas, with onion, cilantro and lime.",
    price: "12.99",
    src: "/photos/street-tacos.jpg",
    alt: "Street tacos topped with onion and cilantro.",
  },
  {
    n: "02",
    name: "Quesabirria",
    desc: "Griddled birria tacos with melted cheese and rich consommé for dipping.",
    src: "/photos/quesabirria.jpg",
    alt: "Quesabirria tacos with a side of consommé.",
  },
  {
    n: "03",
    name: "Sizzling Fajitas",
    desc: "Chicken, steak, shrimp or the full trio with peppers and onions, served loud.",
    price: "14.99",
    src: "/photos/fajitas.jpg",
    alt: "Sizzling fajitas with grilled meat, peppers and onions.",
  },
  {
    n: "04",
    name: "Crispy Flautas",
    desc: "Rolled and fried, finished with crema, cotija and a fresh pico de gallo.",
    src: "/photos/flautas.jpg",
    alt: "A plate of crispy flautas with crema and cotija.",
  },
];

/** Editorial masonry "Plates & Places" contact sheet. Balanced across the room,
 *  the food, the bar and the cocktails so it does not read as a drink catalog. */
export const gallery: Photo[] = [
  { src: "/photos/exterior-wide.jpg", alt: "Pedro's storefront on N MacArthur Drive." },
  { src: "/photos/bar-tequila.jpg", alt: "The tequila shelf and a round of margaritas." },
  { src: "/photos/fajitas-alt.jpg", alt: "Fajitas sizzling off the flat-top." },
  { src: "/photos/marg-sangria.jpg", alt: "A red sangria-style margarita with fresh fruit." },
  { src: "/photos/street-tacos-alt.jpg", alt: "Street tacos, dressed and ready to eat." },
  { src: "/photos/bar-beer.jpg", alt: "Cold beer poured at the bar." },
  { src: "/photos/marg-green.jpg", alt: "A green margarita on the rocks." },
  { src: "/photos/marg-pink.jpg", alt: "A pink margarita on the rocks." },
];
