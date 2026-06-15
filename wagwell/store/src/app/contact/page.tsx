import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the WAGWELL team.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-black text-navy">Contact Us</h1>
      <p className="mt-2 text-stone-600">
        Aussie pet parents helping Aussie pet parents. We typically reply within
        24 hours on business days.
      </p>

      <div className="mt-8 space-y-6">
        <div className="rounded-2xl border border-stone-200 bg-white p-6">
          <h2 className="font-bold text-navy">Customer Support</h2>
          <p className="mt-2 text-sm text-stone-600">
            Orders, shipping, returns, or product questions.
          </p>
          <a
            href="mailto:hello@wagwell.com.au"
            className="mt-3 inline-block text-coral font-semibold hover:underline"
          >
            hello@wagwell.com.au
          </a>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-6">
          <h2 className="font-bold text-navy">30-Day Wag Guarantee</h2>
          <p className="mt-2 text-sm text-stone-600">
            Not satisfied? Email us within 30 days of delivery for a full
            refund. No drama.
          </p>
          <a
            href="mailto:returns@wagwell.com.au"
            className="mt-3 inline-block text-coral font-semibold hover:underline"
          >
            returns@wagwell.com.au
          </a>
        </div>

        <form className="rounded-2xl border border-stone-200 bg-white p-6 space-y-4">
          <h2 className="font-bold text-navy">Send a message</h2>
          <input
            type="text"
            placeholder="Your name"
            className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none focus:border-coral"
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none focus:border-coral"
          />
          <textarea
            rows={4}
            placeholder="How can we help?"
            className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none focus:border-coral"
          />
          <button
            type="button"
            className="rounded-full bg-navy px-6 py-3 text-sm font-bold text-white hover:bg-navy-light"
          >
            Send Message
          </button>
          <p className="text-xs text-stone-400">
            We respond by email only — no phone or messaging apps.
          </p>
        </form>
      </div>
    </div>
  );
}
