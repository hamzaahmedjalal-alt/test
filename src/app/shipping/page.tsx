import { PolicyPage } from "@/components/layout/PolicyPage";

export default function ShippingPage() {
  return (
    <PolicyPage title="سياسة الشحن والتوصيل">
      <h2 className="text-lg font-bold text-olive">مناطق التوصيل</h2>
      <p>نوصّل لجميع مدن المملكة العربية السعودية.</p>
      <h2 className="text-lg font-bold text-olive">مدة التوصيل</h2>
      <ul className="list-inside list-disc space-y-2">
        <li>الرياض وجدة والدمام: 2–3 أيام عمل</li>
        <li>باقي المدن: 3–5 أيام عمل</li>
      </ul>
      <h2 className="text-lg font-bold text-olive">تكلفة الشحن</h2>
      <p>الشحن مجاني لجميع الطلبات — السعر المعروض شامل التوصيل.</p>
      <h2 className="text-lg font-bold text-olive">الدفع عند الاستلام</h2>
      <p>
        تدفعين عند استلام الطلب من المندوب. راح نتصل عليك قبل الشحن لتأكيد
        عنوانك — تأكدي من الرد على المكالمة لضمان وصول طلبك.
      </p>
      <h2 className="text-lg font-bold text-olive">تتبع الطلب</h2>
      <p>
        بعد تأكيد طلبك، راح نرسل لك تفاصيل التوصيل عبر اتصال هاتفي.
      </p>
    </PolicyPage>
  );
}
