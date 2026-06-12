"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Clock } from "lucide-react";
import { useCartStore, buildOrderPayload } from "@/store/cart-store";
import { getUpsellMessage } from "@/lib/upsell";
import { UPSELL_PRICE, SINGLE_PRICE } from "@/lib/pricing";
import { Button } from "@/components/ui/Button";

const TIMER_SECONDS = 15;

export function UpsellModal() {
  const router = useRouter();
  const [seconds, setSeconds] = useState(TIMER_SECONDS);
  const [submitting, setSubmitting] = useState(false);
  const submitted = useRef(false);

  const {
    items,
    isUpsellOpen,
    acceptUpsell,
    declineUpsell,
    setLastOrder,
    clearCart,
    closeUpsell,
    getUpsellProduct,
  } = useCartStore();

  const upsell = getUpsellProduct();

  const submitOrder = async (withUpsell: boolean) => {
    if (submitted.current || submitting) return;
    submitted.current = true;
    setSubmitting(true);

    if (withUpsell && upsell) {
      acceptUpsell();
    } else {
      declineUpsell();
    }

    const state = useCartStore.getState();
    const payload = buildOrderPayload(
      {
        items: state.items,
        customerName: state.customerName,
        customerPhone: state.customerPhone,
        upsellAccepted: withUpsell && !!upsell,
        upsellSku: withUpsell && upsell ? upsell.sku : null,
      },
      typeof window !== "undefined" ? window.location.href : "",
      typeof navigator !== "undefined" ? navigator.userAgent : ""
    );

    try {
      await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      // proceed anyway
    }

    setLastOrder(payload);
    clearCart();
    closeUpsell();
    router.push(`/thank-you?order=${payload.orderNumber}`);
  };

  useEffect(() => {
    if (!isUpsellOpen) {
      submitted.current = false;
      return;
    }

    if (!upsell) {
      submitOrder(false);
      return;
    }

    setSeconds(TIMER_SECONDS);
    const interval = setInterval(() => {
      setSeconds((s) => {
        if (s <= 1) {
          clearInterval(interval);
          submitOrder(false);
          return 0;
        }
        return s - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUpsellOpen, upsell?.sku]);

  if (!isUpsellOpen || !upsell) return null;

  const message = getUpsellMessage(items, upsell);

  return (
    <>
      <div className="fixed inset-0 z-[70] bg-black/60 animate-fade-in" />
      <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
        <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl animate-fade-in">
          <div className="mb-4 flex items-center justify-center gap-2 text-red-500">
            <Clock size={18} className="animate-countdown" />
            <span className="font-bold">
              عرض خاص — ينتهي خلال {seconds} ثانية
            </span>
          </div>

          <div className="text-center">
            <div
              className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-2xl text-5xl"
              style={{ backgroundColor: `${upsell.color}15` }}
            >
              {upsell.emoji}
            </div>
            <p className="text-sm text-gray-500">{message}</p>
            <h3 className="mt-2 text-xl font-bold text-olive">{upsell.name}</h3>
            <p className="text-sm text-gray-500">{upsell.subtitle}</p>

            <div className="mt-4 flex items-center justify-center gap-3">
              <span className="text-gray-400 line-through">
                {SINGLE_PRICE} ر.س
              </span>
              <span className="text-3xl font-bold text-gold">
                {UPSELL_PRICE} ر.س
              </span>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <Button
              fullWidth
              size="lg"
              variant="secondary"
              onClick={() => submitOrder(true)}
              disabled={submitting}
            >
              نعم، أضيفيها بـ {UPSELL_PRICE} ر.س!
            </Button>
            <Button
              fullWidth
              variant="ghost"
              onClick={() => submitOrder(false)}
              disabled={submitting}
            >
              لا شكراً
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
