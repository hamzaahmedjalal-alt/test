"use client";

import Link from "next/link";
import { useState } from "react";
import { CheckoutModal } from "@/components/CheckoutModal";
import {
  BundlePromoBanner,
  ProductUpsellSection,
} from "@/components/ProductUpsellSection";
import { ProductVisual } from "@/components/ui";
import { useCart } from "@/context/CartContext";
import { formatAUD, getUpsellProducts } from "@/lib/pricing";
import { getProduct } from "@/lib/products";

export default function CartPage() {
  const { lines, removeLine, updateQuantity, totals } = useCart();
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const upsellProducts = getUpsellProducts(lines);
  const upsellSlugs = upsellProducts.map((p) => p!.slug);

  if (lines.length === 0) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center sm:px-6">
        <p className="text-5xl">🛒</p>
        <h1 className="mt-4 text-2xl font-bold text-navy">Your cart is empty</h1>
        <p className="mt-2 text-stone-600">
          Pick a solution for fur, boredom, or car mess.
        </p>
        <Link
          href="/collections"
          className="mt-6 inline-block rounded-full bg-coral px-8 py-3 font-bold text-white hover:bg-coral-dark"
        >
          Shop Collections
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h1 className="text-3xl font-black text-navy">Your Cart</h1>

        {!totals.qualifiesForFreeShipping && totals.freeShippingRemaining > 0 && (
          <div className="mt-4 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3 text-sm">
            <div className="mb-2 flex justify-between font-medium text-amber-900">
              <span>Free shipping progress</span>
              <span>{formatAUD(totals.freeShippingRemaining)} to go</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-amber-100">
              <div
                className="h-full rounded-full bg-coral transition-all"
                style={{
                  width: `${Math.min(100, ((totals.discountedSubtotal || totals.subtotal) / 60) * 100)}%`,
                }}
              />
            </div>
          </div>
        )}

        {totals.qualifiesForFreeShipping && (
          <p className="mt-4 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800">
            ✓ You&apos;ve unlocked free AU shipping!
          </p>
        )}

        <div className="mt-8 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            {lines.map((line) => {
              const product = line.isBundle
                ? null
                : getProduct(line.productId);
              return (
                <div
                  key={line.id}
                  className="flex gap-4 rounded-2xl border border-stone-200 bg-white p-4"
                >
                  {product ? (
                    <ProductVisual
                      product={product}
                      className="!h-24 !w-24 shrink-0 !rounded-xl !aspect-square"
                    />
                  ) : (
                    <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-100 to-orange-100 text-2xl">
                      📦
                    </div>
                  )}
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex justify-between gap-2">
                      <h2 className="font-bold text-navy">{line.name}</h2>
                      <button
                        type="button"
                        onClick={() => removeLine(line.id)}
                        className="text-xs text-stone-400 hover:text-red-500"
                      >
                        Remove
                      </button>
                    </div>
                    <p className="mt-1 text-sm font-semibold text-navy">
                      {formatAUD(line.price)}
                    </p>
                    <div className="mt-auto flex items-center gap-3 pt-3">
                      <label className="text-xs text-stone-500">Qty</label>
                      <div className="flex items-center rounded-lg border border-stone-200">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(line.id, line.quantity - 1)
                          }
                          className="px-3 py-1 text-stone-600 hover:bg-stone-50"
                          disabled={line.quantity <= 1}
                        >
                          −
                        </button>
                        <span className="min-w-[2rem] text-center text-sm font-medium">
                          {line.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(line.id, line.quantity + 1)
                          }
                          className="px-3 py-1 text-stone-600 hover:bg-stone-50"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <p className="text-right font-bold text-navy">
                    {formatAUD(line.price * line.quantity)}
                  </p>
                </div>
              );
            })}

            {/* Cart upsells */}
            {upsellSlugs.length > 0 && (
              <ProductUpsellSection
                title="Complete your pet home harmony"
                subtitle="Add another solution — different problem, 20% off when you buy 2+."
                slugs={upsellSlugs}
                variant="cart"
              />
            )}

            <BundlePromoBanner />
          </div>

          {/* Summary sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-36 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-navy">Order Summary</h2>
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt>Subtotal</dt>
                  <dd>{formatAUD(totals.subtotal)}</dd>
                </div>
                {totals.hasMultiDiscount && (
                  <div className="flex justify-between text-emerald-700">
                    <dt>Harmony 20% off</dt>
                    <dd>-{formatAUD(totals.bundleDiscount)}</dd>
                  </div>
                )}
                <div className="flex justify-between">
                  <dt>Shipping</dt>
                  <dd>
                    {totals.shipping === 0
                      ? "FREE"
                      : formatAUD(totals.shipping)}
                  </dd>
                </div>
                <div className="flex justify-between border-t border-stone-100 pt-2 text-base font-bold text-navy">
                  <dt>Total</dt>
                  <dd>{formatAUD(totals.total)}</dd>
                </div>
              </dl>

              {totals.hasMultiDiscount && (
                <p className="mt-3 rounded-lg bg-emerald-50 px-3 py-2 text-xs font-medium text-emerald-800">
                  ✓ 20% multi-product discount applied
                </p>
              )}

              <button
                type="button"
                onClick={() => setCheckoutOpen(true)}
                className="mt-6 w-full rounded-full bg-coral py-4 text-sm font-bold text-white shadow-lg transition hover:bg-coral-dark"
              >
                Checkout — {formatAUD(totals.total)}
              </button>

              <p className="mt-4 text-center text-xs text-stone-500">
                🔒 Secure checkout · 30-Day Wag Guarantee
                <br />
                Card · Afterpay · Apple Pay · PayPal
              </p>

              <Link
                href="/collections"
                className="mt-4 block text-center text-sm font-medium text-coral hover:underline"
              >
                Continue shopping
              </Link>
            </div>
          </div>
        </div>
      </div>

      <CheckoutModal open={checkoutOpen} onClose={() => setCheckoutOpen(false)} />
    </>
  );
}
