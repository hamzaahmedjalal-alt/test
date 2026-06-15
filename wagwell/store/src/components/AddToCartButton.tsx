"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

type Props = {
  productId?: string;
  bundleId?: string;
  label?: string;
  className?: string;
  redirectToCart?: boolean;
};

export function AddToCartButton({
  productId,
  bundleId,
  label = "Add to Cart",
  className = "",
  redirectToCart = true,
}: Props) {
  const { addProduct, addBundle } = useCart();
  const router = useRouter();
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    if (productId) addProduct(productId);
    if (bundleId) addBundle(bundleId);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
    if (redirectToCart) {
      router.push("/cart");
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`rounded-full bg-coral px-8 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-coral-dark hover:shadow-lg active:scale-[0.98] ${className}`}
    >
      {added ? "✓ Added — View Cart" : label}
    </button>
  );
}
