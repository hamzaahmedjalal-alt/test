"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { afterpayInstallment, formatAUD } from "@/lib/pricing";

type PaymentMethod = "card" | "afterpay" | "apple" | "paypal";

export function CheckoutModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { lines, totals, clearCart } = useCart();
  const router = useRouter();
  const [payment, setPayment] = useState<PaymentMethod>("card");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    postcode: "",
  });

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const orderId = `WW-${Date.now().toString(36).toUpperCase()}`;
    const order = {
      id: orderId,
      lines,
      totals,
      payment,
      customer: form,
      createdAt: new Date().toISOString(),
      deliveryEstimate: "2–4 business days",
      onTimeRate: "94%",
    };

    sessionStorage.setItem("wagwell-last-order", JSON.stringify(order));
    clearCart();
    router.push(`/thank-you?order=${orderId}`);
  };

  const paymentOptions: { id: PaymentMethod; label: string; detail: string }[] =
    [
      { id: "card", label: "Credit / Debit Card", detail: "Visa, Mastercard, Amex" },
      { id: "afterpay", label: "Afterpay", detail: `4 payments of ${afterpayInstallment(totals.total).replace(" AUD", "")}` },
      { id: "apple", label: "Apple Pay", detail: "Fast & secure" },
      { id: "paypal", label: "PayPal", detail: "Pay with balance or card" },
    ];

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-4">
      <button
        type="button"
        className="absolute inset-0 bg-navy/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        aria-label="Close checkout"
      />

      <div className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-white shadow-2xl animate-slide-up sm:rounded-2xl">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-stone-100 bg-white px-5 py-4">
          <div>
            <h2 className="text-lg font-bold text-navy">Secure Checkout</h2>
            <p className="text-xs text-stone-500">🔒 Encrypted · Aussie-owned</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 p-5">
          {/* Order summary */}
          <div className="rounded-xl bg-sand/60 p-4">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-navy">
              Order Summary
            </h3>
            <ul className="space-y-2 text-sm">
              {lines.map((line) => (
                <li key={line.id} className="flex justify-between gap-2">
                  <span className="text-stone-700">
                    {line.name} × {line.quantity}
                  </span>
                  <span className="font-medium">
                    {formatAUD(line.price * line.quantity)}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-3 space-y-1 border-t border-stone-200 pt-3 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatAUD(totals.subtotal)}</span>
              </div>
              {totals.hasMultiDiscount && (
                <div className="flex justify-between text-emerald-700">
                  <span>Harmony 20% off (2+ products)</span>
                  <span>-{formatAUD(totals.bundleDiscount)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>
                  {totals.shipping === 0
                    ? "FREE"
                    : formatAUD(totals.shipping)}
                </span>
              </div>
              <div className="flex justify-between text-base font-bold text-navy">
                <span>Total</span>
                <span>{formatAUD(totals.total)}</span>
              </div>
            </div>
            <p className="mt-2 text-xs text-stone-500">
              or 4 interest-free payments with Afterpay
            </p>
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap gap-2 text-center text-xs">
            {["30-Day Wag Guarantee", "AU warehouse · 2–4 days", "94% on-time delivery"].map(
              (t) => (
                <span
                  key={t}
                  className="rounded-full bg-emerald-50 px-2.5 py-1 font-medium text-emerald-800"
                >
                  ✓ {t}
                </span>
              ),
            )}
          </div>

          {/* Contact & shipping */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-navy">Delivery Details</h3>
            <input
              required
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none focus:border-coral focus:ring-2 focus:ring-coral/20"
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                required
                placeholder="First name"
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                className="rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none focus:border-coral"
              />
              <input
                required
                placeholder="Last name"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                className="rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none focus:border-coral"
              />
            </div>
            <input
              required
              placeholder="Street address"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none focus:border-coral"
            />
            <div className="grid grid-cols-3 gap-3">
              <input
                required
                placeholder="City"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                className="rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none focus:border-coral"
              />
              <input
                required
                placeholder="State"
                value={form.state}
                onChange={(e) => setForm({ ...form, state: e.target.value })}
                className="rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none focus:border-coral"
              />
              <input
                required
                placeholder="Postcode"
                value={form.postcode}
                onChange={(e) => setForm({ ...form, postcode: e.target.value })}
                className="rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none focus:border-coral"
              />
            </div>
          </div>

          {/* Payment methods */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-navy">Payment Method</h3>
            {paymentOptions.map((opt) => (
              <label
                key={opt.id}
                className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 transition ${
                  payment === opt.id
                    ? "border-coral bg-coral/5 ring-2 ring-coral/20"
                    : "border-stone-200 hover:border-stone-300"
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value={opt.id}
                  checked={payment === opt.id}
                  onChange={() => setPayment(opt.id)}
                  className="accent-coral"
                />
                <div>
                  <p className="text-sm font-semibold text-navy">{opt.label}</p>
                  <p className="text-xs text-stone-500">{opt.detail}</p>
                </div>
              </label>
            ))}
          </div>

          <button
            type="submit"
            disabled={loading || lines.length === 0}
            className="w-full rounded-full bg-coral py-4 text-sm font-bold text-white shadow-lg transition hover:bg-coral-dark disabled:opacity-50"
          >
            {loading ? "Processing…" : `Pay ${formatAUD(totals.total)}`}
          </button>

          <p className="text-center text-[11px] leading-relaxed text-stone-400">
            By placing your order you agree to our{" "}
            <a href="/policies/terms" className="underline">
              Terms
            </a>{" "}
            and{" "}
            <a href="/policies/privacy" className="underline">
              Privacy Policy
            </a>
            . 30-Day Wag Guarantee on every order.
          </p>
        </form>
      </div>
    </div>
  );
}
