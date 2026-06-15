import { PolicyLayout } from "@/components/PolicyLayout";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Shipping Policy" };

export default function ShippingPolicyPage() {
  return (
    <PolicyLayout title="Shipping Policy" updated="June 2026">
      <h2>Delivery Times</h2>
      <p>
        All WAGWELL orders ship from Australian warehouses. Typical delivery
        times:
      </p>
      <ul>
        <li>Metro areas: 2–4 business days</li>
        <li>Regional areas: 3–7 business days</li>
        <li>Remote areas: up to 10 business days</li>
      </ul>

      <h2>Shipping Costs</h2>
      <p>
        Standard shipping is <strong>$7.95 AUD</strong> Australia-wide.{" "}
        <strong>Free shipping</strong> on all orders over <strong>$60 AUD</strong>.
      </p>

      <h2>Order Processing</h2>
      <p>
        Orders placed before 2pm AEST on business days are typically dispatched
        within 1 business day. You will receive a tracking email once your
        order ships.
      </p>

      <h2>Delivery Partners</h2>
      <p>
        We ship via Australia Post and reputable courier partners. Our current
        on-time delivery rate is approximately <strong>94%</strong>.
      </p>
    </PolicyLayout>
  );
}
