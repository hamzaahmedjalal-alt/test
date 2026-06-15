export function PolicyLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-black text-navy">{title}</h1>
      <p className="mt-1 text-sm text-stone-500">Last updated: {updated}</p>
      <div className="prose-policy mt-8 space-y-6 text-sm leading-relaxed text-stone-700 [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-navy [&_ol]:list-decimal [&_ol]:pl-5 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mt-1">
        {children}
      </div>
    </div>
  );
}
