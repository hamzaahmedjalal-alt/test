import Link from "next/link";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/product/ProductCard";
import { TrustBadges } from "@/components/layout/TrustBadges";
import { Button } from "@/components/ui/Button";
import { getBundlePrice } from "@/lib/pricing";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-sand">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium tracking-widest text-gold">
              نما بيوتي
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-olive md:text-5xl">
              جمالك يستحق
              <br />
              <span className="text-gold">أكثر من كريم</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              العلامة السعودية الأولى للعناية والجمال. أدوات تصفيف، عطور ثابتة
              بالحر، وأجهزة بشرة فاخرة — بدون أسعار خيالية ولا منتجات مجهولة.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/products">
                <Button size="lg">تسوقي الآن</Button>
              </Link>
              <Link href="/products">
                <Button size="lg" variant="outline">
                  اكتشفي المنتجات
                </Button>
              </Link>
            </div>
            <div className="mt-8">
              <TrustBadges />
            </div>
          </div>
        </div>
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-olive/5" />
        <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-gold/10" />
      </section>

      {/* Social proof bar */}
      <section className="border-y border-gray-100 bg-white py-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-8 px-4 text-center text-sm text-gray-600">
          <span>
            <strong className="text-olive">+2,000</strong> سيدة سعودية
          </span>
          <span className="hidden h-4 w-px bg-gray-200 sm:block" />
          <span>
            تقييم <strong className="text-gold">4.9</strong> من 5
          </span>
          <span className="hidden h-4 w-px bg-gray-200 sm:block" />
          <span>
            توصيل <strong className="text-olive">2–4 أيام</strong>
          </span>
          <span className="hidden h-4 w-px bg-gray-200 sm:block" />
          <span>
            <strong className="text-olive">دفع عند الاستلام</strong>
          </span>
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-olive">منتجاتنا</h2>
          <p className="mt-3 text-gray-500">
            3 مشاكل. 3 حلول. علامة واحدة تثقي فيها.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.sku} product={product} />
          ))}
        </div>
      </section>

      {/* Bundle CTA */}
      <section className="bg-olive py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold">وفّري مع الباقة الكاملة</h2>
          <p className="mt-4 text-white/70">
            3 منتجات بـ {getBundlePrice(3)} ريال فقط — بدل 597 ريال
          </p>
          <Link href="/products" className="mt-8 inline-block">
            <Button size="lg" variant="secondary">
              اطلبي الباقة الكاملة — {getBundlePrice(3)} ر.س
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Nama */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-10 text-center text-3xl font-bold text-olive">
          لماذا نما بيوتي؟
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              emoji: "💎",
              title: "فخامة بسعر عادل",
              desc: "جودة Dyson وForeo بتسعير معقول. تغليف فاخر وعلامة سعودية تثقي فيها.",
            },
            {
              emoji: "🇸🇦",
              title: "مصممة للخليج",
              desc: "ثبات عطر بالحر، تصفيف يثبت بالرطوبة، بشرة تناسب مناخنا. مو منتجات أوروبية ما تناسبنا.",
            },
            {
              emoji: "📦",
              title: "بدون مخاطرة",
              desc: "دفع عند الاستلام فقط. ما تدفعين إلا لما يوصلك المنتج بيدك.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm"
            >
              <span className="text-4xl">{item.emoji}</span>
              <h3 className="mt-4 text-lg font-bold text-olive">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
