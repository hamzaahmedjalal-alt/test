import { PolicyPage } from "@/components/layout/PolicyPage";

export default function PrivacyPage() {
  return (
    <PolicyPage title="سياسة الخصوصية">
      <p>
        نما بيوتي (namabeauty.shop) تحترم خصوصيتك. هذه السياسة توضح كيف نجمع
        ونستخدم بياناتك.
      </p>
      <h2 className="text-lg font-bold text-olive">البيانات التي نجمعها</h2>
      <p>
        عند تقديم طلب، نجمع اسمك ورقم جوالك فقط — وهذا ضروري لتوصيل طلبك
        والتواصل معك لتأكيد العنوان.
      </p>
      <h2 className="text-lg font-bold text-olive">كيف نستخدم بياناتك</h2>
      <ul className="list-inside list-disc space-y-2">
        <li>معالجة وتسليم طلبك</li>
        <li>التواصل معك لتأكيد الطلب والعنوان</li>
        <li>تحسين تجربة التسوق</li>
      </ul>
      <h2 className="text-lg font-bold text-olive">مشاركة البيانات</h2>
      <p>
        لا نبيع أو نشارك بياناتك مع أطراف ثالثة إلا شركاء التوصيل اللازمين
        لتسليم طلبك.
      </p>
      <h2 className="text-lg font-bold text-olive">التواصل</h2>
      <p>
        لأي استفسار حول الخصوصية، تواصلي معنا عبر صفحة{" "}
        <a href="/contact" className="text-olive underline">
          تواصل معنا
        </a>
        .
      </p>
    </PolicyPage>
  );
}
