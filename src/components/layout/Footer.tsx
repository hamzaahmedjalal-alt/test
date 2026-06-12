import Link from "next/link";
import { Shield, Truck, Award } from "lucide-react";
import { brand, brandCopyright } from "@/lib/brand";

export function Footer() {
  const policyLinks = [
    { href: "/privacy", label: "سياسة الخصوصية" },
    { href: "/terms", label: "الشروط والأحكام" },
    { href: "/returns", label: "سياسة الإرجاع" },
    { href: "/shipping", label: "سياسة الشحن" },
  ];

  return (
    <footer className="mt-auto border-t border-gray-100 bg-olive text-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-2xl font-bold">{brand.nameAr}</p>
            <p className="text-xs text-white/50">{brand.nameEn}</p>
            <p className="mt-2 text-sm text-white/70">{brand.taglineAr}</p>
            <p className="mt-4 text-sm text-white/60">{brand.positioningAr}</p>
          </div>

          <div>
            <p className="mb-4 font-semibold">روابط سريعة</p>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/products" className="hover:text-white">
                  المنتجات
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  تواصل معنا
                </Link>
              </li>
              {policyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-semibold">لماذا {brand.nameArShort}؟</p>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Shield size={16} className="text-gold" />
                دفع عند الاستلام — بدون مخاطرة
              </li>
              <li className="flex items-center gap-2">
                <Truck size={16} className="text-gold" />
                توصيل سريع داخل السعودية
              </li>
              <li className="flex items-center gap-2">
                <Award size={16} className="text-gold" />
                ضمان سنة على الأجهزة
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          {brandCopyright()}
        </div>
      </div>
    </footer>
  );
}
