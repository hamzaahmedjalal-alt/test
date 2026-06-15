import { PolicyLayout } from "@/components/PolicyLayout";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPolicyPage() {
  return (
    <PolicyLayout title="Terms of Service" updated="June 2026">
      <h2>Agreement</h2>
      <p>
        By using wagwell.com.au and placing an order, you agree to these terms.
        WAGWELL is an Australian-owned e-commerce business selling pet home
        harmony essentials.
      </p>

      <h2>Products</h2>
      <p>
        WAGWELL products are lifestyle and enrichment essentials. They are not
        veterinary medical devices and are not intended to diagnose, treat, or
        cure any condition. For health concerns about your pet, consult a
        qualified veterinarian.
      </p>

      <h2>Pricing & Payment</h2>
      <p>
        All prices are in Australian Dollars (AUD) and include GST where
        applicable. Payment is processed securely via Stripe. We accept credit
        cards, Afterpay, Apple Pay, and PayPal.
      </p>

      <h2>Automatic Discounts</h2>
      <p>
        A 20% discount is automatically applied when you purchase 2 or more
        individual products in a single order. Bundle pricing is as displayed on
        the product page.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        WAGWELL is not liable for indirect or consequential damages arising
        from product use. Our liability is limited to the purchase price of the
        product.
      </p>

      <h2>Governing Law</h2>
      <p>
        These terms are governed by the laws of Australia. Disputes are subject
        to the jurisdiction of Australian courts.
      </p>
    </PolicyLayout>
  );
}
