"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { AddToCartButton } from "@/components/AddToCartButton";
import { PriceTag, ProductVisual } from "@/components/ui";
import { formatAUD } from "@/lib/pricing";
import { Product, products } from "@/lib/products";

type StoredOrder = {
  id: string;
  lines: { name: string; quantity: number; price: number; productId: string }[];
  totals: { total: number };
  customer: { email: string; firstName: string };
  deliveryEstimate: string;
  onTimeRate: string;
};

function ThankYouContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("order");
  const [order, setOrder] = useState<StoredOrder | null>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem("wagwell-last-order");
    if (raw) {
      try {
        setOrder(JSON.parse(raw) as StoredOrder);
      } catch {
        setOrder(null);
      }
    }
  }, []);

  const purchasedIds = new Set(
    order?.lines.map((l) => l.productId) ?? [],
  );
  const upsellProducts = products.filter(
    (p) => !purchasedIds.has(p.id) && !purchasedIds.has("full-harmony-kit"),
  ) as Product[];

  const displayId = orderId ?? order?.id ?? "WW-CONFIRMED";

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      {/* Confirmation hero */}
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl">
          ✓
        </div>
        <h1 className="mt-5 text-3xl font-black text-navy">
          Order Confirmed!
        </h1>
        <p className="mt-2 text-stone-600">
          Thanks{order?.customer.firstName ? `, ${order.customer.firstName}` : ""}
          ! We&apos;re getting your WAGWELL essentials ready.
        </p>
        <p className="mt-3 inline-block rounded-full bg-sand px-4 py-1.5 text-sm font-mono font-semibold text-navy">
          Order {displayId}
        </p>
        {order?.customer.email && (
          <p className="mt-2 text-sm text-stone-500">
            Confirmation sent to {order.customer.email}
          </p>
        )}
      </div>

      {/* Delivery stats — conversion reinforcement */}
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-center">
          <p className="text-2xl font-black text-emerald-800">
            {order?.deliveryEstimate ?? "2–4 days"}
          </p>
          <p className="mt-1 text-xs font-medium text-emerald-700">
            Estimated delivery
          </p>
          <p className="mt-2 text-[11px] text-emerald-600">
            Ships from AU warehouse
          </p>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-white p-5 text-center">
          <p className="text-2xl font-black text-coral">
            {order?.onTimeRate ?? "94%"}
          </p>
          <p className="mt-1 text-xs font-medium text-stone-600">
            On-time delivery rate
          </p>
          <p className="mt-2 text-[11px] text-stone-500">
            Aussie Post network
          </p>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-white p-5 text-center">
          <p className="text-2xl font-black text-navy">30</p>
          <p className="mt-1 text-xs font-medium text-stone-600">
            Day Wag Guarantee
          </p>
          <p className="mt-2 text-[11px] text-stone-500">
            Not happy? Full refund.
          </p>
        </div>
      </div>

      {/* Order recap */}
      {order && (
        <div className="mt-8 rounded-2xl border border-stone-200 bg-white p-6">
          <h2 className="font-bold text-navy">What you ordered</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {order.lines.map((line, i) => (
              <li key={i} className="flex justify-between">
                <span>
                  {line.name} × {line.quantity}
                </span>
                <span className="font-medium">
                  {formatAUD(line.price * line.quantity)}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-3 border-t border-stone-100 pt-3 text-right font-bold text-navy">
            Total paid: {formatAUD(order.totals.total)}
          </p>
        </div>
      )}

      {/* Post-purchase upsells */}
      {upsellProducts.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold text-navy">
            While you wait — solve your other pet problems
          </h2>
          <p className="mt-1 text-sm text-stone-600">
            Different problem, different solution. Add now and we&apos;ll ship
            together if your order hasn&apos;t dispatched yet.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {upsellProducts.map((product) => (
              <div
                key={product.id}
                className="flex gap-4 rounded-2xl border border-stone-200 bg-white p-4"
              >
                <ProductVisual
                  product={product}
                  className="!h-28 !w-28 shrink-0 !rounded-xl !aspect-square"
                />
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-navy">{product.shortName}</h3>
                    <p className="mt-0.5 line-clamp-2 text-xs text-stone-600">
                      {product.description}
                    </p>
                    <div className="mt-2">
                      <PriceTag price={product.price} size="sm" />
                    </div>
                  </div>
                  <AddToCartButton
                    productId={product.id}
                    label="Add to New Order"
                    className="!px-4 !py-2 !text-xs mt-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {purchasedIds.has("full-harmony-kit") && (
        <p className="mt-8 rounded-xl bg-emerald-50 p-4 text-center text-sm text-emerald-800">
          You&apos;ve got the Full Harmony Kit — all three problems covered. 🐾
        </p>
      )}

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          href="/collections"
          className="rounded-full bg-coral px-6 py-3 text-sm font-bold text-white hover:bg-coral-dark"
        >
          Keep Shopping
        </Link>
        <Link
          href="/"
          className="rounded-full border border-stone-200 px-6 py-3 text-sm font-semibold text-navy hover:border-navy"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Loading…</div>}>
      <ThankYouContent />
    </Suspense>
  );
}
