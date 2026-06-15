import { PolicyLayout } from "@/components/PolicyLayout";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Returns & 30-Day Wag Guarantee" };

export default function ReturnsPolicyPage() {
  return (
    <PolicyLayout title="Returns & 30-Day Wag Guarantee" updated="June 2026">
      <h2>30-Day Wag Guarantee</h2>
      <p>
        Try any WAGWELL product for <strong>30 days</strong> from delivery. If
        it doesn&apos;t solve your pet problem, contact us for a{" "}
        <strong>full refund</strong>. No drama — we&apos;re Aussie pet parents
        too.
      </p>

      <h2>How to Return</h2>
      <ol>
        <li>Email returns@wagwell.com.au with your order number</li>
        <li>We&apos;ll send return instructions within 1 business day</li>
        <li>Refund processed within 5 business days of approval</li>
      </ol>

      <h2>Return Shipping</h2>
      <p>
        Customers are responsible for return shipping unless the item is
        defective or not as described. Defective items receive a prepaid return
        label.
      </p>

      <h2>Exchanges</h2>
      <p>
        We don&apos;t offer direct exchanges. For a different product, return
        the original item and place a new order.
      </p>
    </PolicyLayout>
  );
}
