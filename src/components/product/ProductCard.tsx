import Link from "next/link";
import type { Product } from "@/lib/types";
import { StarRating } from "@/components/ui/StarRating";
import { Badge } from "@/components/ui/Badge";
import { SINGLE_PRICE } from "@/lib/pricing";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-lg"
    >
      <div
        className="flex h-48 items-center justify-center text-6xl"
        style={{ backgroundColor: `${product.color}15` }}
      >
        {product.emoji}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <Badge variant="sand">{product.format}</Badge>
        <h3 className="mt-3 text-lg font-bold text-olive group-hover:text-olive-light">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-gray-500">{product.subtitle}</p>
        <div className="mt-3">
          <StarRating rating={product.rating} count={product.reviewCount} />
        </div>
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-xl font-bold text-olive">
            {SINGLE_PRICE} <span className="text-sm font-normal">ر.س</span>
          </span>
          <span className="text-sm font-medium text-gold group-hover:underline">
            اكتشفي المزيد ←
          </span>
        </div>
      </div>
    </Link>
  );
}
