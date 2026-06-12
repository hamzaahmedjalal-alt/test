"use client";

import { useState } from "react";
import type { Product } from "@/lib/types";
import { getOtherProducts } from "@/lib/products";
import { useCartStore } from "@/store/cart-store";
import { StarRating } from "@/components/ui/StarRating";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { TrustBadges } from "@/components/layout/TrustBadges";
import { BundleSelector } from "./BundleSelector";
import { CrossSells } from "./CrossSells";
import { Check, X } from "lucide-react";

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [bundleSize, setBundleSize] = useState(1);
  const { addItem, openDrawer } = useCartStore();

  const handleAddToCart = () => {
    addItem(product.sku);
    if (bundleSize >= 2) openDrawer();
    else openDrawer();
  };

  const others = getOtherProducts(product.sku);

  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="bg-sand">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-2 md:py-16">
          <div
            className="flex aspect-square items-center justify-center rounded-3xl text-8xl shadow-inner"
            style={{ backgroundColor: `${product.color}20` }}
          >
            {product.emoji}
          </div>
          <div className="flex flex-col justify-center">
            <Badge>{product.format}</Badge>
            <h1 className="mt-4 text-3xl font-bold text-olive md:text-4xl">
              {product.name}
            </h1>
            <p className="mt-2 text-lg text-gray-500">{product.subtitle}</p>
            <div className="mt-4">
              <StarRating
                rating={product.rating}
                count={product.reviewCount}
                size={18}
              />
            </div>
            <p className="mt-6 leading-relaxed text-gray-700">
              {product.heroCopy}
            </p>
            <div className="mt-6">
              <BundleSelector selected={bundleSize} onChange={setBundleSize} />
            </div>
            <Button size="lg" fullWidth className="mt-6" onClick={handleAddToCart}>
              أضيفي للسلة
            </Button>
            <div className="mt-4">
              <TrustBadges />
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-3xl px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-olive">{product.problemTitle}</h2>
        <p className="mt-4 leading-relaxed text-gray-600">{product.problemCopy}</p>
      </section>

      {/* Solution */}
      <section className="bg-olive/5 py-12">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-olive">{product.solutionTitle}</h2>
          <p className="mt-4 leading-relaxed text-gray-600">{product.solutionCopy}</p>
        </div>
      </section>

      {/* Ingredients */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-8 text-center text-2xl font-bold text-olive">
          المكوّنات الأساسية
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {product.ingredients.map((ing) => (
            <div
              key={ing.name}
              className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
            >
              <h3 className="font-bold text-olive">{ing.name}</h3>
              <p className="mt-2 text-sm text-gray-600">{ing.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How to use */}
      <section className="bg-sand py-12">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-olive">
            طريقة الاستخدام
          </h2>
          <ol className="space-y-4">
            {product.howToUse.map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-olive text-sm font-bold text-white">
                  {i + 1}
                </span>
                <p className="pt-1 text-gray-700">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Comparison */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="mb-8 text-center text-2xl font-bold text-olive">
          لماذا نما؟
        </h2>
        <div className="overflow-hidden rounded-2xl border border-gray-100">
          <table className="w-full text-sm">
            <thead className="bg-olive text-white">
              <tr>
                <th className="p-4 text-right">الميزة</th>
                <th className="p-4 text-center">نما بيوتي</th>
                <th className="p-4 text-center">المنتجات الصينية الرخيصة</th>
                <th className="p-4 text-center">العلامات العالمية</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["مصمم لمناخ الخليج", true, false, false],
                ["جودة فاخرة بسعر معقول", true, false, false],
                ["دفع عند الاستلام", true, true, false],
                ["ضمان سنة", true, false, true],
                ["تغليف فاخر + علامة سعودية", true, false, false],
              ].map(([feature, nama, cheap, premium], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-sand/50"}>
                  <td className="p-4 font-medium">{feature as string}</td>
                  <td className="p-4 text-center">
                    {nama ? (
                      <Check className="mx-auto text-olive" size={20} />
                    ) : (
                      <X className="mx-auto text-red-300" size={20} />
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {cheap ? (
                      <Check className="mx-auto text-olive" size={20} />
                    ) : (
                      <X className="mx-auto text-red-300" size={20} />
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {premium ? (
                      <Check className="mx-auto text-olive" size={20} />
                    ) : (
                      <X className="mx-auto text-red-300" size={20} />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-sand py-12">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-2 text-center text-2xl font-bold text-olive">
            ماذا تقول عميلاتنا
          </h2>
          <p className="mb-8 text-center text-gray-500">
            أكثر من {product.reviewCount} سيدة سعودية اختارن نما
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {product.reviews.map((review, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white p-5 shadow-sm"
              >
                <StarRating rating={review.rating} size={14} />
                <p className="mt-3 text-sm leading-relaxed text-gray-700">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="mt-3 text-sm font-medium text-olive">
                  {review.name} — {review.city}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-12">
        <h2 className="mb-8 text-center text-2xl font-bold text-olive">
          أسئلة شائعة
        </h2>
        <div className="space-y-4">
          {product.faqs.map((faq, i) => (
            <details
              key={i}
              className="group rounded-2xl border border-gray-100 bg-white"
            >
              <summary className="cursor-pointer p-5 font-medium text-olive marker:content-none">
                <span className="flex items-center justify-between">
                  {faq.question}
                  <span className="text-gold transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="border-t border-gray-50 px-5 pb-5 pt-3 text-sm leading-relaxed text-gray-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Cross-sells */}
      <div className="mx-auto max-w-6xl px-4 pb-12">
        <CrossSells products={others} />
      </div>

      {/* Sticky mobile CTA */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-gray-100 bg-white p-4 shadow-lg md:hidden">
        <div className="flex items-center gap-4">
          <div>
            <p className="text-xs text-gray-500">يبدأ من</p>
            <p className="text-xl font-bold text-olive">199 ر.س</p>
          </div>
          <Button fullWidth size="lg" onClick={handleAddToCart}>
            أضيفي للسلة
          </Button>
        </div>
      </div>
    </div>
  );
}
