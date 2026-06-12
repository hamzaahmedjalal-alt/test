import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  count?: number;
  size?: number;
}

export function StarRating({ rating, count, size = 16 }: StarRatingProps) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            size={size}
            className={
              i <= Math.round(rating)
                ? "fill-gold text-gold"
                : "fill-gray-200 text-gray-200"
            }
          />
        ))}
      </div>
      <span className="text-sm font-medium text-olive">{rating}</span>
      {count !== undefined && (
        <span className="text-sm text-gray-500">({count} تقييم)</span>
      )}
    </div>
  );
}
