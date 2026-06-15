"use client";

import Link from "next/link";
import { AddToCartButton } from "./AddToCartButton";
import { PriceTag, ProductVisual } from "./ui";
import { Product, getProduct } from "@/lib/products";
import { formatAUD } from "@/lib/pricing";

export function ProductUpsellSection({
  title,
  subtitle,
  slugs,
  variant = "bottom",
}: {
  title: string;
  subtitle: string;
  slugs: string[];
  variant?: "bottom" | "cart";
}) {
  const items = slugs.map((s) => getProduct(s)).filter(Boolean) as Product[];

  if (items.length === 0) return null;

  return (
    <section
      className={
        variant === "cart"
          ? "rounded-2xl border border-dashed border-coral/40 bg-orange-50/50 p-5"
          : "mt-16 rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"
      }
    >
      <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          {variant === "cart" && (
            <span className="mb-1 inline-block rounded-full bg-coral/10 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-coral">
              Cart offer
            </span>
          )}
          <h2 className="text-lg font-bold text-navy sm:text-xl">{title}</h2>
          <p className="text-sm text-stone-600">{subtitle}</p>
        </div>
        {variant === "bottom" && (
          <p className="text-sm font-semibold text-coral">
            Add 2+ products → 20% off auto-applied
          </p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((product) => (
          <div
            key={product.id}
            className="flex gap-4 rounded-xl border border-stone-100 bg-sand/40 p-4"
          >
            <Link href={`/products/${product.slug}`} className="shrink-0 w-24">
              <ProductVisual product={product} className="!aspect-square !rounded-xl" />
            </Link>
            <div className="flex min-w-0 flex-1 flex-col justify-between">
              <div>
                <Link
                  href={`/products/${product.slug}`}
                  className="font-bold text-navy hover:text-coral"
                >
                  {product.shortName}
                </Link>
                <p className="mt-0.5 line-clamp-2 text-xs text-stone-600">
                  {product.description}
                </p>
                <p className="mt-1 text-sm font-bold text-navy">
                  {formatAUD(product.price)}
                </p>
              </div>
              <AddToCartButton
                productId={product.id}
                label="Add"
                className="!px-4 !py-2 !text-xs mt-2 w-full sm:w-auto"
                redirectToCart={variant === "cart"}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function BundlePromoBanner() {
  return (
    <div className="rounded-xl bg-navy p-5 text-white sm:flex sm:items-center sm:justify-between sm:gap-4">
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-coral">
          Save $44.90
        </p>
        <p className="mt-1 font-bold">Full Harmony Kit — all 3 problems solved</p>
        <p className="mt-1 text-sm text-stone-300">
          FUR-VANISH™ + SNOOTROOT™ + ROADIE-SHIELD™ for{" "}
          <span className="font-semibold text-white">$119.95</span>
        </p>
      </div>
      <AddToCartButton
        bundleId="full-harmony-kit"
        label="Add Bundle"
        className="mt-4 shrink-0 sm:mt-0"
      />
    </div>
  );
}
