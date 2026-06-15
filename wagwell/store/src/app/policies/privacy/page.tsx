import { PolicyLayout } from "@/components/PolicyLayout";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout title="Privacy Policy" updated="June 2026">
      <h2>Information We Collect</h2>
      <p>
        When you place an order, we collect your name, email address, shipping
        address, and payment information (processed securely by Stripe — we
        never store card details).
      </p>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>Process and fulfil your orders</li>
        <li>Send order confirmations and shipping updates by email</li>
        <li>Respond to customer support enquiries</li>
        <li>Improve our products and website</li>
      </ul>

      <h2>What We Don&apos;t Do</h2>
      <ul>
        <li>We do not sell your personal data to third parties</li>
        <li>We do not send SMS or WhatsApp messages</li>
        <li>We do not operate a subscription service at this time</li>
      </ul>

      <h2>Cookies</h2>
      <p>
        We use essential cookies for cart functionality and basic analytics. You
        can disable cookies in your browser settings.
      </p>

      <h2>Contact</h2>
      <p>
        Privacy questions:{" "}
        <a href="mailto:hello@wagwell.com.au" className="text-coral">
          hello@wagwell.com.au
        </a>
      </p>
    </PolicyLayout>
  );
}
