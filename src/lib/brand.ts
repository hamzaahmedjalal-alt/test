/**
 * Nama Beauty — locked brand identity
 * Domain purchased: namabeauty.shop
 * Do not change without explicit brand decision.
 */
export const brand = {
  /** English full name — legal, invoices, meta */
  nameEn: "Nama Beauty",
  /** English short — logo, social handles */
  nameEnShort: "Nama",
  /** Arabic full name — footer, policies, formal copy */
  nameAr: "نما بيوتي",
  /** Arabic short — header logo, casual copy */
  nameArShort: "نما",
  /** Primary domain (purchased & locked) */
  domain: "namabeauty.shop",
  url: "https://namabeauty.shop",
  taglineAr: "جمالك يستحق أكثر من كريم",
  taglineEn: "Your beauty deserves more than a cream",
  nicheAr: "العناية والجمال",
  positioningAr:
    "العلامة السعودية الأولى للعناية والجمال — أدوات، عطور، وأجهزة فاخرة للمرأة السعودية.",
  email: "hello@namabeauty.shop",
} as const;

export function brandCopyright(year = new Date().getFullYear()) {
  return `© ${year} ${brand.nameAr} — ${brand.domain} — جميع الحقوق محفوظة`;
}
