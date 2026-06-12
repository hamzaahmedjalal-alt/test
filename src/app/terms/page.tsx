import { PolicyPage } from "@/components/layout/PolicyPage";

export default function TermsPage() {
  return (
    <PolicyPage title="الشروط والأحكام">
      <p>
        باستخدامك لموقع نما بيوتي (namabeauty.shop)، فإنك توافقين على هذه
        الشروط.
      </p>
      <h2 className="text-lg font-bold text-olive">المنتجات</h2>
      <p>
        منتجاتنا مكملات غذائية وليست أدوية. لا تُستخدم لعلاج أو تشخيص أي مرض.
        استشيري طبيبك قبل الاستخدام إذا كنتِ حاملاً أو مرضعة أو تتناولين أدوية.
      </p>
      <h2 className="text-lg font-bold text-olive">الطلبات والدفع</h2>
      <p>
        جميع الطلبات بالدفع عند الاستلام (COD). السعر المعروض شامل — بدون
        رسوم خفية. نحتفظ بحق تعديل الأسعار دون إشعار مسبق.
      </p>
      <h2 className="text-lg font-bold text-olive">الملكية الفكرية</h2>
      <p>
        جميع المحتويات والعلامة التجارية «نما بيوتي» محمية ولا يجوز نسخها أو
        استخدامها دون إذن.
      </p>
    </PolicyPage>
  );
}
