import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartProvider } from "@/components/cart/CartProvider";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-tajawal",
});

export const metadata: Metadata = {
  title: "نما بيوتي | العناية والجمال",
  description:
    "العلامة السعودية الأولى للعناية والجمال — أداة تصفيف، عطر ثابت بالحر، وجهاز بشرة فاخر. دفع عند الاستلام.",
  metadataBase: new URL("https://namabeauty.shop"),
  openGraph: {
    title: "نما بيوتي | العناية والجمال",
    description: "نما ستيلر برو، نما ميست، نما جلو — دفع عند الاستلام",
    url: "https://namabeauty.shop",
    siteName: "نما بيوتي",
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
