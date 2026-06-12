"use client";

import { products } from "@/lib/products";
import { ProductCard } from "@/components/product/ProductCard";
import { BundleSelector } from "@/components/product/BundleSelector";
import { Button } from "@/components/ui/Button";
import { useCartStore } from "@/store/cart-store";
import { useState } from "react";
import { getBundlePrice } from "@/lib/pricing";

export default function ProductsPage() {
  const [bundleSize, setBundleSize] = useState(3);
  const { addItem, openDrawer, clearCart } = useCartStore();

  const handleBundleAdd = () => {
    clearCart();
    const toAdd = products.slice(0, bundleSize);
    toAdd.forEach((p) => addItem(p.sku));
    openDrawer();
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-olive">منتجات نما بيوتي</h1>
        <p className="mt-3 text-gray-500">
          اختاري منتجاتك أو وفّري مع الباقة
        </p>
      </div>

      {/* Bundle builder */}
      <div className="mb-12 rounded-2xl border-2 border-olive/20 bg-sand p-6">
        <h2 className="text-lg font-bold text-olive">أكملي مجموعتك</h2>
        <p className="mt-1 text-sm text-gray-500">
          كل ما زادت منتجاتك، كل ما وفّرتِ أكثر
        </p>
        <div className="mt-4">
          <BundleSelector selected={bundleSize} onChange={setBundleSize} />
        </div>
        <Button
          fullWidth
          size="lg"
          className="mt-4"
          onClick={handleBundleAdd}
        >
          أضيفي {bundleSize}{" "}
          {bundleSize === 1 ? "منتج" : bundleSize === 2 ? "منتجين" : "منتجات"}{" "}
          — {getBundlePrice(bundleSize)} ر.س
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.sku} product={product} />
        ))}
      </div>
    </div>
  );
}
