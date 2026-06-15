import Link from "next/link";
import { AddToCartButton } from "@/components/AddToCartButton";
import { BundlePromoBanner } from "@/components/ProductUpsellSection";
import { PriceTag, ProductVisual, TrustBadges } from "@/components/ui";
import { products } from "@/lib/products";

const problems = [
  {
    emoji: "🛋️",
    title: "Fur everywhere",
    copy: "Embedded hair your vacuum can't touch.",
    href: "/products/fur-vanish",
  },
  {
    emoji: "🐕",
    title: "Boredom destruction",
    copy: "Cushions destroyed while you're out.",
    href: "/products/snootroot",
  },
  {
    emoji: "🚗",
    title: "Car mess",
    copy: "Sand, mud, and fur after every beach run.",
    href: "/products/roadie-shield",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-stone-200 bg-gradient-to-b from-white to-sand/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-coral">
              Australian Pet Home Harmony
            </p>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl">
              Pet Problems,
              <br />
              <span className="text-coral">Properly Solved.</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-stone-600">
              Fur on the couch. Cushions destroyed. Sand in the back seat.
              WAGWELL builds essentials that fix the chaos — shipped from
              Aussie warehouses in 2–4 days.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/collections"
                className="rounded-full bg-coral px-8 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-coral-dark"
              >
                Shop Solutions
              </Link>
              <Link
                href="/collections#full-harmony-kit"
                className="rounded-full border-2 border-navy px-8 py-3.5 text-sm font-bold text-navy transition hover:bg-navy hover:text-white"
              >
                Full Harmony Kit — Save $44.90
              </Link>
            </div>
            <div className="mt-8">
              <TrustBadges />
            </div>
          </div>
        </div>
      </section>

      {/* 3 problems */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
          Three problems. Three solutions.
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-stone-600">
          Each product solves a different daily frustration — not a bundle of
          the same thing.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {problems.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:border-coral/40 hover:shadow-md"
            >
              <span className="text-3xl">{p.emoji}</span>
              <h3 className="mt-3 text-lg font-bold text-navy group-hover:text-coral">
                {p.title}
              </h3>
              <p className="mt-1 text-sm text-stone-600">{p.copy}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-coral">
                Shop solution →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-navy">Bestsellers</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-cream"
              >
                <Link href={`/products/${product.slug}`}>
                  <ProductVisual product={product} className="!rounded-none" />
                </Link>
                <div className="flex flex-1 flex-col p-5">
                  {product.badge && (
                    <span className="mb-2 w-fit rounded-full bg-coral/10 px-2.5 py-0.5 text-xs font-bold text-coral">
                      {product.badge}
                    </span>
                  )}
                  <Link href={`/products/${product.slug}`}>
                    <h3 className="font-bold text-navy hover:text-coral">
                      {product.shortName}
                    </h3>
                  </Link>
                  <p className="mt-1 flex-1 text-sm text-stone-600">
                    {product.description}
                  </p>
                  <div className="mt-4">
                    <PriceTag price={product.price} compareAt={product.compareAtPrice} size="sm" />
                  </div>
                  <AddToCartButton
                    productId={product.id}
                    className="mt-4 w-full"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <BundlePromoBanner />
      </section>

      {/* Social proof */}
      <section className="border-t border-stone-200 bg-sand/40 py-14">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <p className="text-3xl font-black text-navy">4.8★</p>
          <p className="mt-1 text-stone-600">
            Trusted by thousands of Aussie pet parents
          </p>
          <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-3">
            {[
              { stat: "94%", label: "On-time delivery rate" },
              { stat: "2–4", label: "Business days shipping" },
              { stat: "30", label: "Day Wag Guarantee" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl bg-white p-4 shadow-sm"
              >
                <p className="text-2xl font-bold text-coral">{s.stat}</p>
                <p className="text-xs text-stone-600">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
