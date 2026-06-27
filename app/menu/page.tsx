import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { MenuTabs } from "@/components/MenuTabs";
import { menu } from "@/lib/menu";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Pedro's lunch specials, sizzling fajitas, burritos, enchiladas, fresh-squeezed margaritas, and a deep tequila list in Alexandria, LA.",
};

export default function MenuPage() {
  return (
    <>
      <PageHeader
        title="The Menu"
        subtitle="Lunch favorites, dinner classics, and a full tequila bar."
      />

      <section className="py-20 md:py-28">
        <div className="wrap">
          <MenuTabs groups={menu} />

          <p className="mx-auto mt-14 max-w-2xl text-center text-sm text-ink-soft">
            Menu and pricing may change. For the latest, call us at{" "}
            <a
              href={site.phoneHref}
              className="font-semibold text-terracotta-deep underline underline-offset-2"
            >
              {site.phone}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
