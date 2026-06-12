"use client";

import { X, Trash2, Lock } from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import { products } from "@/lib/products";
import { getBundleLabel, SINGLE_PRICE } from "@/lib/pricing";
import { Button } from "@/components/ui/Button";
import type { ProductSku } from "@/lib/types";

export function CartDrawer() {
  const {
    items,
    isDrawerOpen,
    closeDrawer,
    removeItem,
    addItem,
    openCheckout,
    getTotal,
  } = useCartStore();

  if (!isDrawerOpen) return null;

  const inCart = new Set(items.map((i) => i.sku));
  const crossSells = products.filter((p) => !inCart.has(p.sku));
  const total = getTotal();

  const handleAddCrossSell = (sku: ProductSku) => {
    if (items.length < 3) addItem(sku);
  };

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/40 animate-fade-in"
        onClick={closeDrawer}
      />
      <div className="fixed inset-y-0 left-0 z-50 flex w-full max-w-md flex-col bg-white shadow-2xl animate-slide-in">
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
          <h2 className="text-lg font-bold text-olive">
            سلتك ({items.length} {items.length === 1 ? "منتج" : "منتجات"})
          </h2>
          <button
            onClick={closeDrawer}
            className="rounded-lg p-2 hover:bg-sand"
            aria-label="إغلاق"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="py-12 text-center text-gray-500">
              <p className="text-4xl">🛍️</p>
              <p className="mt-4">سلتك فارغة</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={closeDrawer}
              >
                تسوقي الآن
              </Button>
            </div>
          ) : (
            <>
              <ul className="space-y-3">
                {items.map((item) => {
                  const product = products.find((p) => p.sku === item.sku);
                  return (
                    <li
                      key={item.sku}
                      className="flex items-center gap-3 rounded-xl border border-gray-100 p-3"
                    >
                      <span className="text-2xl">{product?.emoji}</span>
                      <div className="flex-1">
                        <p className="font-medium text-olive">{item.name}</p>
                        <p className="text-xs text-gray-500">
                          {product?.subtitle}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.sku)}
                        className="rounded-lg p-2 text-red-400 hover:bg-red-50"
                        aria-label="حذف"
                      >
                        <Trash2 size={16} />
                      </button>
                    </li>
                  );
                })}
              </ul>

              {items.length < 3 && crossSells.length > 0 && (
                <div className="mt-6">
                  <p className="mb-3 text-sm font-semibold text-olive">
                    {items.length === 1
                      ? "أضيفي منتج ثاني ووفّري!"
                      : "أكملي مجموعتك ووفّري أكثر!"}
                  </p>
                  <div className="space-y-2">
                    {crossSells.map((product) => (
                      <div
                        key={product.sku}
                        className="flex items-center gap-3 rounded-xl bg-sand p-3"
                      >
                        <span className="text-xl">{product.emoji}</span>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{product.name}</p>
                          <p className="text-xs text-gray-500">
                            {SINGLE_PRICE} ر.س
                          </p>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleAddCrossSell(product.sku)}
                        >
                          أضيفي
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-gray-100 px-5 py-4">
            <div className="mb-2 flex justify-between text-sm text-gray-500">
              <span>{getBundleLabel(items.length)}</span>
              {items.length > 1 && (
                <span className="text-gold">
                  وفّرتِ {items.length * SINGLE_PRICE - total} ر.س
                </span>
              )}
            </div>
            <div className="mb-4 flex justify-between text-lg font-bold text-olive">
              <span>المجموع</span>
              <span>{total} ر.س</span>
            </div>
            <div className="mb-3 flex items-center justify-center gap-2 text-xs text-gray-500">
              <Lock size={12} />
              دفع عند الاستلام — بدون مخاطرة
            </div>
            <Button fullWidth size="lg" onClick={openCheckout}>
              اطلبي الآن — دفع عند الاستلام
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
