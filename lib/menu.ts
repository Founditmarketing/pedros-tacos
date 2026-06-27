/**
 * Pedro's menu data.
 *
 * SOURCES (recovered from archived printed-menu photos, ~2023):
 *   - Lunch: full item list + prices transcribed verbatim from the lunch menu photo.
 *   - Drinks: cocktails, margaritas, mojitos, beer, tequilas from the drink menu photos.
 *
 * GAPS for the owner to fill before launch:
 *   - DINNER MENU was not in the web archive. The `dinner` group below lists
 *     signature dishes by name with NO prices (we do not invent prices). Replace
 *     with the current dinner menu + prices.
 *   - Verify ALL lunch prices: these are from a ~2023 snapshot and may be stale.
 */

export type MenuOption = { label: string; price: string };
export type MenuItem = {
  name: string;
  desc?: string;
  price?: string;
  options?: MenuOption[];
};
export type MenuCategory = {
  id: string;
  title: string;
  note?: string;
  sizes?: string;
  style?: "rows" | "chips";
  items: MenuItem[];
};
export type MenuGroup = {
  id: "lunch" | "dinner" | "drinks";
  title: string;
  blurb: string;
  note?: string;
  categories: MenuCategory[];
};

const lunch: MenuGroup = {
  id: "lunch",
  title: "Lunch",
  blurb: "Served 10:30am to 3:00pm, Monday through Friday.",
  note: "All burritos and enchiladas come with red sauce.",
  categories: [
    {
      id: "lunch-specials",
      title: "Lunch Specials",
      style: "rows",
      items: [
        { name: "Pedro's Favorite", desc: "One burrito, one beef taco, one beef enchilada and one chalupa.", price: "12.99" },
        {
          name: "Fajita Burrito",
          desc: "Large flour tortilla rolled with beans, bell peppers, onions and your choice of meat, topped with cheese sauce, lettuce, guacamole, sour cream and pico de gallo.",
          options: [
            { label: "Grilled Chicken", price: "14.99" },
            { label: "Grilled Steak", price: "15.99" },
            { label: "Grilled Shrimp", price: "16.99" },
          ],
        },
        { name: "One Beef Taco, One Beef Enchilada & One Burrito", price: "12.99" },
        { name: "One Beef Tostada, One Tamale", desc: "Served with rice.", price: "12.99" },
        { name: "One Burrito", desc: "Served with rice and refried beans.", price: "12.99" },
        { name: "Two Beef Tacos", desc: "Served with rice and refried beans.", price: "12.99" },
        { name: "One Burrito with Chile Con Carne", desc: "Served with rice.", price: "12.99" },
        { name: "One Beef Taco, One Burrito & One Flauta", price: "12.99" },
        { name: "One Chile Relleno & One Beef Taco", desc: "Served with beans and guacamole salad.", price: "12.99" },
        { name: "One Enchilada Burrito, One Beef Taco & One Tamale", price: "12.99" },
        {
          name: "Burrito Supreme",
          desc: "One flour tortilla rolled with ground beef and beans, topped with cheese, lettuce, tomatoes, guacamole and sour cream, with rice or beans on the side and red sauce on top.",
          price: "12.99",
        },
        { name: "Los Tres Amigos", desc: "One beef taco and one beef enchilada. Served with rice and refried beans.", price: "12.99" },
        { name: "Speedy Gonzales", desc: "One burrito, one shredded beef quesadilla and one chile relleno.", price: "12.99" },
        {
          name: "Huevos Al Gusto",
          desc: "Mexican-style eggs prepared your way: machaca (shredded beef), ham, chorizo, bacon, a la Mexicana or rancheros. Served with rice, beans and tortillas.",
          price: "12.99",
        },
        {
          name: "Chimichanga",
          desc: "Fried burrito with lettuce, tomato, guacamole and sour cream, topped with cheese sauce. Served with rice and beans.",
          options: [
            { label: "Chicken, Ground Beef or Shredded Beef", price: "14.99" },
            { label: "Grilled Chicken", price: "14.99" },
            { label: "Steak", price: "15.99" },
            { label: "Shrimp", price: "15.99" },
          ],
        },
        {
          name: "Taco Salad",
          desc: "Fried flour tortilla shell filled with lettuce, topped with cheese, guacamole and sour cream.",
          options: [
            { label: "Shredded Chicken or Ground Beef", price: "12.99" },
            { label: "Grilled Chicken", price: "12.99" },
            { label: "Steak", price: "14.99" },
            { label: "Shrimp", price: "14.99" },
          ],
        },
        {
          name: "Lunch Enchiladas",
          desc: "Two enchiladas served with rice and refried beans, topped with red sauce.",
          options: [
            { label: "Shredded Chicken, Ground Beef or Cheese", price: "12.99" },
            { label: "Grilled Chicken", price: "12.99" },
            { label: "Steak", price: "14.99" },
            { label: "Shrimp", price: "15.99" },
          ],
        },
        { name: "Puff Taco", desc: "Large crunchy flour tortilla filled with ground beef, lettuce and tomatoes, topped with chile con carne and cheese.", price: "12.99" },
        {
          name: "Pedro's Quesadillas",
          desc: "Two quesadillas served with a guacamole salad.",
          options: [
            { label: "Shredded Chicken or Ground Beef", price: "12.99" },
            { label: "Grilled Chicken", price: "14.99" },
            { label: "Steak", price: "16.99" },
            { label: "Shrimp", price: "17.99" },
          ],
        },
        {
          name: "Fajitas",
          desc: "Sizzling with onions and bell peppers. Lettuce, tomatoes, sour cream, guacamole and flour tortillas on the side. Served with rice and refried beans.",
          options: [
            { label: "Chicken", price: "14.99" },
            { label: "Steak", price: "16.99" },
            { label: "Shrimp", price: "17.99" },
            { label: "Chicken & Steak Combo", price: "17.99" },
          ],
        },
        {
          name: "Fajitas Trio",
          desc: "Chicken, steak and shrimp sizzling with onions and bell peppers. Lettuce, tomatoes, sour cream, guacamole and flour tortillas on the side. Served with rice and refried beans.",
          price: "18.99",
        },
        { name: "Chilaquiles Rojos", desc: "Tortilla chips with scrambled eggs, red sauce and steak strips on top. Served with rice and beans, lettuce, sour cream and pico de gallo.", price: "14.99" },
        { name: "Pollo Loco", desc: "Chicken breast topped with mushrooms, bell peppers and onions. Served with rice, cheese and steamed vegetables.", price: "15.99" },
        { name: "Fish or Shrimp Tacos", desc: "Three tacos served with your choice of tortilla soup or charro bean soup, soft or hard tortillas.", price: "14.99" },
        { name: "Mexican Burger", desc: "Half-pound 100% pure ground beef burger topped with sliced jalapeños, sliced avocado and cheese. Served with steak fries.", price: "14.99" },
        {
          name: "Lunch Quesadilla",
          desc: "One quesadilla, rice and beans.",
          options: [
            { label: "Chicken", price: "11.99" },
            { label: "Steak", price: "13.99" },
            { label: "Shrimp", price: "14.99" },
          ],
        },
        {
          name: "Happy Plate",
          desc: "A bed of rice or french fries with your choice of meat and cheese dip on top.",
          options: [
            { label: "Chicken", price: "13.99" },
            { label: "Steak", price: "14.99" },
            { label: "Shrimp", price: "15.99" },
            { label: "Trio", price: "16.99" },
          ],
        },
        { name: "Chorizo Burritos", desc: "Two chorizo and egg filled burritos. Served with rice and beans.", price: "12.99" },
      ],
    },
    {
      id: "lunch-sauces",
      title: "Signature Sauces",
      note: "Made here every day. Choose your favorite.",
      style: "chips",
      items: [
        { name: "Tomatillo" },
        { name: "Chili Sauce" },
        { name: "Jalapeño" },
        { name: "Pipian" },
        { name: "Habanero" },
      ],
    },
  ],
};

/**
 * DINNER: not recovered from the archive. Names only, no prices (we don't invent prices).
 * OWNER TODO: replace with the real dinner menu + current prices.
 */
const dinner: MenuGroup = {
  id: "dinner",
  title: "Dinner",
  blurb: "Served daily until close. Full dinner portions of the dishes Pedro's is known for.",
  note: "We're rebuilding our online dinner menu after a site refresh. Call (318) 427-7755 for tonight's full lineup and pricing.",
  categories: [
    {
      id: "dinner-favorites",
      title: "House Favorites",
      style: "chips",
      items: [
        { name: "Fajitas (Chicken, Steak, Shrimp or Trio)" },
        { name: "Chimichanga" },
        { name: "Enchiladas" },
        { name: "Burrito Supreme" },
        { name: "Chile Relleno" },
        { name: "Pollo Loco" },
        { name: "Tacos (Beef, Chicken, Fish or Shrimp)" },
        { name: "Quesadillas" },
        { name: "Taco Salad" },
        { name: "Mexican Burger" },
      ],
    },
  ],
};

const drinks: MenuGroup = {
  id: "drinks",
  title: "Drinks",
  blurb: "From the tequila bar: fresh-squeezed margaritas, mojitos, cocktails and a deep tequila list.",
  note: "Ask your server about our specialty drink of the month.",
  categories: [
    {
      id: "featured-cocktails",
      title: "Featured Cocktails",
      style: "chips",
      items: [
        { name: "Peach Laguna" },
        { name: "Malibu Wave" },
        { name: "Malibu Rose" },
        { name: "Banana Mama" },
        { name: "Watermelon Martini" },
        { name: "Blueberry Martini" },
        { name: "Freaking Cucumber Margarita" },
        { name: "Pineapple Jalapeño" },
      ],
    },
    {
      id: "fresh-margaritas",
      title: "Fresh Squeezed Margaritas",
      sizes: "Medium 27 oz / Large 38 oz",
      style: "chips",
      items: [
        { name: "Grand Margarita", desc: "Frozen or on the rocks" },
        { name: "Premium Margarita", desc: "Frozen or on the rocks" },
        { name: "Cadillac Margarita", desc: "On the rocks only" },
        { name: "Skinny Margarita", desc: "On the rocks only" },
        { name: "Cucumber Jalapeño Margarita" },
        { name: "Pineapple Jalapeño Margarita" },
      ],
    },
    {
      id: "special-margaritas",
      title: "Special Margaritas",
      sizes: "Medium 27 oz / Large 38 oz, frozen or on the rocks",
      style: "chips",
      items: [
        { name: "Locoarita" },
        { name: "Hennessy Margarita" },
        { name: "Coronarita" },
        { name: "Jamaica Margarita", desc: "Medium only" },
        { name: "Modelorita" },
      ],
    },
    {
      id: "flavored-margaritas",
      title: "Flavored Margaritas",
      sizes: "Small 12 oz / Medium 27 oz / Large 38 oz, frozen or on the rocks",
      style: "chips",
      items: [
        { name: "Mango" }, { name: "Strawberry" }, { name: "Peach" }, { name: "Passion Fruit" },
        { name: "Raspberry" }, { name: "Pomegranate" }, { name: "Blue Margarita" }, { name: "Rainbow" },
        { name: "Watermelon" }, { name: "Cucumber" },
      ],
    },
    {
      id: "champagne-margaritas",
      title: "Champagne Margaritas",
      sizes: "Medium 27 oz / Large 38 oz, frozen or on the rocks",
      style: "chips",
      items: [
        { name: "Mango" }, { name: "Passion Fruit" }, { name: "Strawberry" }, { name: "Watermelon" },
        { name: "Raspberry" }, { name: "Peach" }, { name: "Dragon Fruit" },
      ],
    },
    {
      id: "mojitos",
      title: "Mojitos",
      sizes: "Medium 27 oz",
      style: "chips",
      items: [{ name: "Classic Mojito" }, { name: "Strawberry Mojito" }],
    },
    {
      id: "ranch-water",
      title: "Ranch Water",
      style: "chips",
      items: [{ name: "Topo Chico, tequila and fresh lime" }],
    },
    {
      id: "draft-beer",
      title: "Draft Beer",
      sizes: "12 oz / 32 oz",
      style: "chips",
      items: [
        { name: "Miller Lite" }, { name: "Dos Equis Lager" }, { name: "Blue Moon" },
        { name: "Modelo Especial" }, { name: "Modelo Negra" }, { name: "Sand Bar Blonde" },
        { name: "Corona Premier" }, { name: "Riverboat Razz" }, { name: "Michelob Ultra" },
        { name: "Bud Light" },
      ],
    },
    {
      id: "tequila-blanco",
      title: "Tequila - Blanco",
      style: "chips",
      items: [
        { name: "1800" }, { name: "Jose Cuervo" }, { name: "Avion" }, { name: "Espolon" },
        { name: "Maestro Dobel" }, { name: "Cabo Wabo" }, { name: "Cazadores" }, { name: "Clase Azul" },
        { name: "Casamigos" }, { name: "Don Julio" }, { name: "Patron" }, { name: "Herradura" },
        { name: "Tres Generaciones" },
      ],
    },
    {
      id: "tequila-reposado",
      title: "Tequila - Reposado",
      style: "chips",
      items: [
        { name: "Espolon" }, { name: "Cabo Wabo" }, { name: "Casamigos" }, { name: "Don Julio" },
        { name: "Patron" }, { name: "Hornitos" }, { name: "1800" }, { name: "Jose Cuervo Gold" },
        { name: "Tres Generaciones" },
      ],
    },
    {
      id: "tequila-anejo",
      title: "Tequila - Añejo",
      style: "chips",
      items: [
        { name: "Espolon" }, { name: "Cabo Wabo" }, { name: "Don Julio" }, { name: "Maestro Dobel" },
        { name: "Herradura" }, { name: "Patron" }, { name: "Tres Generaciones" }, { name: "Hornitos Black Barrel" },
      ],
    },
    {
      id: "tequila-extra-anejo",
      title: "Tequila - Extra Añejo",
      style: "chips",
      items: [{ name: "Don Julio 1942" }, { name: "Herradura" }, { name: "Patron" }],
    },
  ],
};

export const menu: MenuGroup[] = [lunch, dinner, drinks];
