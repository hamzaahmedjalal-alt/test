import { PolicyPage } from "@/components/layout/PolicyPage";

export default function ReturnsPage() {
  return (
    <PolicyPage title="سياسة الإرجاع والاستبدال">
      <h2 className="text-lg font-bold text-olive">الدفع عند الاستلام</h2>
      <p>
        بما إن الدفع عند الاستلام، تقدرين ترفضين الطلب عند التوصيل إذا لم
        يعجبك المنتج — بدون أي تكلفة عليك.
      </p>
      <h2 className="text-lg font-bold text-olive">الإرجاع بعد الاستلام</h2>
      <ul className="list-inside list-disc space-y-2">
        <li>يمكنك إرجاع المنتج خلال 7 أيام من الاستلام</li>
        <li>يجب أن يكون المنتج بحالته الأصلية وبالتغليف الأصلي</li>
        <li>المنتجات المفتوحة أو المستخدمة لا تُقبل للإرجاع</li>
      </ul>
      <h2 className="text-lg font-bold text-olive">الاستبدال</h2>
      <p>
        إذا وصلك منتج تالف أو خاطئ، تواصلي معنا خلال 48 ساعة وسنستبدله مجاناً.
      </p>
      <h2 className="text-lg font-bold text-olive">كيف تطلبين الإرجاع</h2>
      <p>
        تواصلي معنا عبر{" "}
        <a href="/contact" className="text-olive underline">
          صفحة التواصل
        </a>{" "}
        مع رقم طلبك وسبب الإرجاع.
      </p>
    </PolicyPage>
  );
}
