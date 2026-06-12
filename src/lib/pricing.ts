import type { CartItem } from "./types";

export const SINGLE_PRICE = 199;
export const UPSELL_PRICE = 99;

const BUNDLE_PRICES: Record<number, number> = {
  1: 199,
  2: 279,
  3: 349,
};

export function getBundlePrice(itemCount: number): number {
  if (itemCount <= 0) return 0;
  if (itemCount >= 3) return BUNDLE_PRICES[3];
  return BUNDLE_PRICES[itemCount];
}

export function getBundleLabel(itemCount: number): string {
  const labels: Record<number, string> = {
    1: "منتج واحد",
    2: "منتجين — وفّري 119 ريال",
    3: "٣ منتجات — وفّري 248 ريال",
  };
  return labels[Math.min(itemCount, 3)] ?? labels[3];
}

export function calculateCartTotal(items: CartItem[]): number {
  return getBundlePrice(items.length);
}

export function getSavings(itemCount: number): number {
  if (itemCount <= 1) return 0;
  return itemCount * SINGLE_PRICE - getBundlePrice(itemCount);
}
