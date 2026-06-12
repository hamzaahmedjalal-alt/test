"use client";

import type { Product, ProductSku } from "@/lib/types";
import { Button } from "@/components/ui/Button";
import { SINGLE_PRICE } from "@/lib/pricing";
import { useCartStore } from "@/store/cart-store";

interface CrossSellsProps {
  products: Product[];
  title?: string;
}

export function CrossSells({
  products,
  title = "منتجات أخرى قد تعجبك",
}: CrossSellsProps) {
  const { items, addItem, openDrawer } = useCartStore();
  const inCart = new Set(items.map((i) => i.sku));

  const available = products.filter((p) => !inCart.has(p.sku));
  if (available.length === 0) return null;

  const handleAdd = (sku: ProductSku) => {
    addItem(sku);
    openDrawer();
  };

  return (
    <section className="mt-12">
      <h2 className="mb-6 text-xl font-bold text-olive">{title}</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {available.map((product) => (
          <div
            key={product.sku}
            className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4"
          >
            <div
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl text-3xl"
              style={{ backgroundColor: `${product.color}15` }}
            >
              {product.emoji}
            </div>
            <div className="flex-1">
              <p className="font-semibold text-olive">{product.name}</p>
              <p className="text-sm text-gray-500">{product.subtitle}</p>
              <p className="mt-1 font-bold text-olive">
                {SINGLE_PRICE} ر.س
              </p>
            </div>
            <Button size="sm" onClick={() => handleAdd(product.sku)}>
              أضيفي
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
