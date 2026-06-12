"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { X, Lock } from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import { checkoutSchema, type CheckoutFormData } from "@/lib/validation";
import { Button } from "@/components/ui/Button";
import { products } from "@/lib/products";

export function CheckoutModal() {
  const {
    items,
    isCheckoutOpen,
    closeCheckout,
    setCustomer,
    openUpsell,
    getTotal,
  } = useCartStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  });

  if (!isCheckoutOpen) return null;

  const total = getTotal();

  const onSubmit = (data: CheckoutFormData) => {
    setCustomer(data.name, data.phone);
    closeCheckout();
    openUpsell();
  };

  return (
    <>
      <div className="fixed inset-0 z-[60] bg-black/50 animate-fade-in" />
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
        <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl animate-fade-in">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-bold text-olive">ملخص طلبك</h2>
            <button
              onClick={closeCheckout}
              className="rounded-lg p-2 hover:bg-sand"
            >
              <X size={20} />
            </button>
          </div>

          <div className="mb-5 space-y-2 rounded-xl bg-sand p-4">
            {items.map((item) => {
              const product = products.find((p) => p.sku === item.sku);
              return (
                <div
                  key={item.sku}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="flex items-center gap-2">
                    <span>{product?.emoji}</span>
                    {item.name}
                  </span>
                </div>
              );
            })}
            <div className="border-t border-olive/10 pt-2 flex justify-between font-bold text-olive">
              <span>المجموع</span>
              <span>{total} ر.س</span>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                الاسم الكامل
              </label>
              <input
                {...register("name")}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-right focus:border-olive focus:outline-none focus:ring-2 focus:ring-olive/20"
                placeholder="مثال: فاطمة العتيبي"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                رقم الجوال
              </label>
              <input
                {...register("phone")}
                type="tel"
                dir="ltr"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-left focus:border-olive focus:outline-none focus:ring-2 focus:ring-olive/20"
                placeholder="05xxxxxxxx"
              />
              <p className="mt-1 text-xs text-gray-400">مثال: 0551234567</p>
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div className="flex items-center justify-center gap-2 rounded-xl bg-olive/5 py-3 text-sm text-olive">
              <Lock size={14} />
              دفع عند الاستلام — بدون مخاطرة
            </div>

            <Button type="submit" fullWidth size="lg">
              تأكيد الطلب — دفع عند الاستلام
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
