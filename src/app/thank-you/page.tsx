"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle, Phone, Truck, Shield } from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import { products } from "@/lib/products";
import { CrossSells } from "@/components/product/CrossSells";
import { Button } from "@/components/ui/Button";

export default function ThankYouPage() {
  const searchParams = useSearchParams();
  const orderParam = searchParams.get("order");
  const { lastOrder } = useCartStore();

  const orderNumber = orderParam ?? lastOrder?.orderNumber ?? "NAMA-PENDING";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="text-center">
        <CheckCircle className="mx-auto text-olive" size={64} />
        <h1 className="mt-6 text-3xl font-bold text-olive">
          تم تأكيد طلبك بنجاح! 🎉
        </h1>
        <p className="mt-3 text-gray-600">
          راح يتواصل معك فريق نما خلال ساعات لتأكيد التوصيل
        </p>
        <p className="mt-2 text-sm text-gray-400">
          رقم الطلب: <span className="font-mono font-medium">{orderNumber}</span>
        </p>
      </div>

      {/* Order summary */}
      {lastOrder && (
        <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 font-bold text-olive">ملخص طلبك</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-gray-500">
              <span>الاسم</span>
              <span>{lastOrder.name}</span>
            </div>
            <div className="flex justify-between text-gray-500" dir="ltr">
              <span>الجوال</span>
              <span>{lastOrder.phone}</span>
            </div>
            <hr className="my-3 border-gray-100" />
            {lastOrder.products.map((p) => (
              <div key={p.sku} className="flex justify-between">
                <span>{p.name}</span>
                <span>{Math.round(p.price)} ر.س</span>
              </div>
            ))}
            {lastOrder.upsell_accepted && lastOrder.upsell_product && (
              <div className="flex justify-between text-gold">
                <span>✨ {lastOrder.upsell_product.name} (عرض خاص)</span>
                <span>{lastOrder.upsell_product.price} ر.س</span>
              </div>
            )}
            <hr className="my-3 border-gray-100" />
            <div className="flex justify-between text-lg font-bold text-olive">
              <span>المجموع</span>
              <span>{lastOrder.total} ر.س</span>
            </div>
          </div>
        </div>
      )}

      {/* Delivery expectations — CRO for confirmation rate */}
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {[
          {
            icon: Phone,
            title: "راح نتصل عليك",
            desc: "خلال ساعات لتأكيد عنوان التوصيل",
          },
          {
            icon: Truck,
            title: "2–4 أيام عمل",
            desc: "توصيل سريع داخل السعودية",
          },
          {
            icon: Shield,
            title: "ادفعي عند الاستلام",
            desc: "ما تدفعين إلا لما يوصلك الطلب",
          },
        ].map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="rounded-2xl bg-sand p-4 text-center"
          >
            <Icon className="mx-auto text-olive" size={24} />
            <p className="mt-2 font-semibold text-olive">{title}</p>
            <p className="mt-1 text-xs text-gray-500">{desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl bg-olive/5 p-6 text-center">
        <p className="text-sm text-gray-600">
          انضمي لأكثر من{" "}
          <strong className="text-olive">2,000 سيدة سعودية</strong> تثق في
          نما بيوتي
        </p>
      </div>

      {/* Cross-sells at full price */}
      <CrossSells
        products={products}
        title="منتجات أخرى قد تعجبك"
      />

      <div className="mt-8 text-center">
        <Link href="/products">
          <Button variant="outline" size="lg">
            تسوقي المزيد
          </Button>
        </Link>
      </div>
    </div>
  );
}
