import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartProvider } from "@/components/cart/CartProvider";
import { brand } from "@/lib/brand";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-tajawal",
});

export const metadata: Metadata = {
  title: `${brand.nameAr} | ${brand.nicheAr}`,
  description: `${brand.positioningAr} دفع عند الاستلام.`,
  metadataBase: new URL(brand.url),
  openGraph: {
    title: `${brand.nameAr} | ${brand.nicheAr}`,
    description: `${brand.nameArShort} ستيلر برو، ${brand.nameArShort} ميست، ${brand.nameArShort} جلو — دفع عند الاستلام`,
    url: brand.url,
    siteName: brand.nameAr,
    locale: "ar_SA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${tajawal.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
