import { formatAUD } from "@/lib/pricing";
import { Product } from "@/lib/products";

export function ProductVisual({
  product,
  className = "",
}: {
  product: Pick<Product, "shortName" | "gradient" | "tagline">;
  className?: string;
}) {
  return (
    <div
      className={`relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br shadow-inner ${product.gradient} ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.8),transparent_50%)]" />
      <div className="relative z-10 px-6 text-center">
        <p className="text-5xl font-black tracking-tighter text-navy/20 sm:text-6xl">
          WW
        </p>
        <p className="mt-2 text-sm font-bold uppercase tracking-widest text-navy/70">
          {product.shortName.replace("™", "")}
        </p>
      </div>
    </div>
  );
}

export function PriceTag({
  price,
  compareAt,
  size = "md",
}: {
  price: number;
  compareAt?: number;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <div className="flex flex-wrap items-baseline gap-2">
      <span className={`font-bold text-navy ${sizes[size]}`}>
        {formatAUD(price)}
      </span>
      {compareAt && compareAt > price && (
        <span className="text-sm text-stone-400 line-through">
          {formatAUD(compareAt)}
        </span>
      )}
    </div>
  );
}

export function TrustBadges({ compact = false }: { compact?: boolean }) {
  const badges = [
    "30-Day Wag Guarantee",
    "Ships from AU · 2–4 days",
    "4.8★ Aussie reviews",
  ];

  if (compact) {
    return (
      <p className="text-xs text-stone-500">
        {badges.join(" · ")}
      </p>
    );
  }

  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((b) => (
        <span
          key={b}
          className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-medium text-navy-light"
        >
          {b}
        </span>
      ))}
    </div>
  );
}
