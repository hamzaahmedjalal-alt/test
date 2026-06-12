interface PolicyPageProps {
  title: string;
  children: React.ReactNode;
}

export function PolicyPage({ title, children }: PolicyPageProps) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-olive">{title}</h1>
      <div className="prose-policy mt-8 space-y-4 text-gray-600 leading-relaxed">
        {children}
      </div>
    </div>
  );
}
