"use client";

import { AddToCartButton } from "@/components/AddToCartButton";
import {
  BundlePromoBanner,
  ProductUpsellSection,
} from "@/components/ProductUpsellSection";
import { PriceTag, ProductVisual, TrustBadges } from "@/components/ui";
import { afterpayInstallment } from "@/lib/pricing";
import { Product } from "@/lib/products";

export function ProductPageContent({ product }: { product: Product }) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <ProductVisual product={product} />
          <div className="mt-4 flex flex-wrap gap-2">
            <TrustBadges />
          </div>
        </div>

        <div>
          {product.badge && (
            <span className="mb-3 inline-block rounded-full bg-coral/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-coral">
              {product.badge}
            </span>
          )}
          <h1 className="text-2xl font-black leading-tight text-navy sm:text-3xl">
            {product.name}
          </h1>
          <p className="mt-2 text-lg text-stone-600">{product.tagline}</p>

          <div className="mt-5">
            <PriceTag
              price={product.price}
              compareAt={product.compareAtPrice}
            />
            <p className="mt-1 text-sm text-stone-500">
              or 4 payments of {afterpayInstallment(product.price)} with Afterpay
            </p>
          </div>

          <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm font-bold text-amber-900">
              {product.problemHeadline}
            </p>
            <p className="mt-1 text-sm text-amber-800">{product.problemCopy}</p>
          </div>

          <AddToCartButton
            productId={product.id}
            label="Add to Cart"
            className="mt-6 w-full sm:w-auto"
          />

          <p className="mt-3 text-xs text-stone-500">
            Free AU shipping on orders over $60 · 30-Day Wag Guarantee
          </p>

          <div className="mt-8">
            <h2 className="text-sm font-bold uppercase tracking-wide text-navy">
              Why it works
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">
              {product.longDescription}
            </p>
            <ul className="mt-4 space-y-2">
              {product.features.map((f) => (
                <li key={f} className="flex gap-2 text-sm text-stone-700">
                  <span className="text-coral">✓</span> {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-sm font-bold uppercase tracking-wide text-navy">
              Materials
            </h2>
            <dl className="mt-3 space-y-2">
              {product.materials.map((m) => (
                <div
                  key={m.label}
                  className="flex justify-between gap-4 border-b border-stone-100 pb-2 text-sm"
                >
                  <dt className="font-medium text-navy">{m.label}</dt>
                  <dd className="text-right text-stone-600">{m.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Bottom promos */}
      <ProductUpsellSection
        title="Solve your other pet problems too"
        subtitle="Different problem, different solution — add another and save 20% automatically."
        slugs={product.upsellSlugs}
        variant="bottom"
      />

      <div className="mt-6">
        <BundlePromoBanner />
      </div>

      {/* Reviews strip */}
      <section className="mt-10 rounded-2xl bg-navy p-6 text-white sm:p-8">
        <p className="text-sm font-bold uppercase tracking-wider text-coral">
          Aussie pet parents say
        </p>
        <blockquote className="mt-3 text-lg font-medium leading-relaxed">
          &ldquo;First thing that actually worked. Arrived in 3 days from
          Melbourne.&rdquo;
        </blockquote>
        <p className="mt-2 text-sm text-stone-400">
          — Verified buyer, VIC · ★★★★★
        </p>
      </section>
    </div>
  );
}
