import { Suspense } from "react";

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<div className="p-12 text-center">جاري التحميل...</div>}>{children}</Suspense>;
}
