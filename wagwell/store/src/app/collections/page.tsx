import Link from "next/link";
import { AddToCartButton } from "@/components/AddToCartButton";
import { PriceTag, ProductVisual } from "@/components/ui";
import { bundles, products } from "@/lib/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop All Collections",
  description: "WAGWELL pet home harmony essentials — fur, boredom, and car mess solved.",
};

export default function CollectionsPage() {
  const bundle = bundles[0];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="mb-10">
        <h1 className="text-3xl font-black text-navy sm:text-4xl">Shop All</h1>
        <p className="mt-2 max-w-xl text-stone-600">
          Three independent solutions for the three daily pet parent problems.
          Add any 2 products for 20% off automatically at checkout.
        </p>
      </div>

      {/* Hero bundle */}
      <article
        id="full-harmony-kit"
        className="mb-12 overflow-hidden rounded-2xl border-2 border-coral/30 bg-gradient-to-br from-violet-50 to-orange-50"
      >
        <div className="grid gap-6 p-6 sm:grid-cols-2 sm:p-8">
          <ProductVisual
            product={{
              shortName: "HARMONY KIT",
              gradient: bundle.gradient,
              tagline: bundle.tagline,
            }}
          />
          <div className="flex flex-col justify-center">
            <span className="mb-2 w-fit rounded-full bg-coral px-3 py-1 text-xs font-bold text-white">
              {bundle.badge}
            </span>
            <h2 className="text-2xl font-black text-navy">{bundle.name}</h2>
            <p className="mt-2 text-stone-600">{bundle.description}</p>
            <ul className="mt-4 space-y-1 text-sm text-stone-700">
              {products.map((p) => (
                <li key={p.id}>✓ {p.shortName}</li>
              ))}
            </ul>
            <div className="mt-5">
              <PriceTag price={bundle.price} compareAt={bundle.compareAtPrice} />
            </div>
            <AddToCartButton
              bundleId={bundle.id}
              label="Add Full Harmony Kit"
              className="mt-5"
            />
          </div>
        </div>
      </article>

      {/* Individual products */}
      <h2 className="mb-6 text-xl font-bold text-navy">Individual Solutions</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <article
            key={product.id}
            className="flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm"
          >
            <Link href={`/products/${product.slug}`}>
              <ProductVisual product={product} className="!rounded-none" />
            </Link>
            <div className="flex flex-1 flex-col p-5">
              {product.badge && (
                <span className="mb-2 w-fit rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-bold text-navy-light">
                  {product.badge}
                </span>
              )}
              <Link href={`/products/${product.slug}`}>
                <h3 className="text-lg font-bold text-navy hover:text-coral">
                  {product.shortName}
                </h3>
              </Link>
              <p className="mt-1 text-sm text-stone-600">{product.tagline}</p>
              <div className="mt-4">
                <PriceTag
                  price={product.price}
                  compareAt={product.compareAtPrice}
                  size="sm"
                />
              </div>
              <div className="mt-5 flex gap-2">
                <AddToCartButton
                  productId={product.id}
                  className="flex-1 !px-4"
                />
                <Link
                  href={`/products/${product.slug}`}
                  className="flex items-center justify-center rounded-full border border-stone-200 px-4 py-3 text-sm font-semibold text-navy hover:border-navy"
                >
                  Details
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
