import {
  FREE_SHIPPING_THRESHOLD,
  MULTI_PRODUCT_DISCOUNT,
  STANDARD_SHIPPING,
  getProduct,
} from "./products";

export type CartLine = {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  isBundle?: boolean;
};

export function uniqueProductCount(lines: CartLine[]): number {
  const ids = new Set(
    lines.filter((l) => !l.isBundle).map((l) => l.productId),
  );
  lines
    .filter((l) => l.isBundle)
    .forEach((l) => {
      const bundle = l.productId;
      if (bundle === "full-harmony-kit") {
        ids.add("fur-vanish");
        ids.add("snootroot");
        ids.add("roadie-shield");
      }
    });
  return ids.size;
}

export function getSubtotal(lines: CartLine[]): number {
  return lines.reduce((sum, l) => sum + l.price * l.quantity, 0);
}

export function getBundleDiscount(lines: CartLine[]): number {
  const uniqueProducts = lines.filter((l) => !l.isBundle);
  if (uniqueProducts.length >= 2) {
    const sub = uniqueProducts.reduce((s, l) => s + l.price * l.quantity, 0);
    return sub * MULTI_PRODUCT_DISCOUNT;
  }
  return 0;
}

export function getShipping(subtotalAfterDiscount: number): number {
  return subtotalAfterDiscount >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING;
}

export function getOrderTotals(lines: CartLine[]) {
  const subtotal = getSubtotal(lines);
  const bundleDiscount = getBundleDiscount(lines);
  const discountedSubtotal = subtotal - bundleDiscount;
  const shipping = getShipping(discountedSubtotal);
  const total = discountedSubtotal + shipping;

  return {
    subtotal,
    bundleDiscount,
    discountedSubtotal,
    shipping,
    total,
    freeShippingRemaining: Math.max(0, FREE_SHIPPING_THRESHOLD - discountedSubtotal),
    qualifiesForFreeShipping: discountedSubtotal >= FREE_SHIPPING_THRESHOLD,
    hasMultiDiscount: bundleDiscount > 0,
  };
}

export function formatAUD(amount: number): string {
  return `$${amount.toFixed(2)} AUD`;
}

export function afterpayInstallment(total: number): string {
  return formatAUD(total / 4);
}

export function linesNotInCart(
  lines: CartLine[],
  candidateSlugs: string[],
): string[] {
  const inCart = new Set(lines.map((l) => l.productId));
  return candidateSlugs.filter((s) => !inCart.has(s));
}

export function getUpsellProducts(lines: CartLine[]) {
  const inCart = new Set(lines.map((l) => l.productId));
  const hasBundle = inCart.has("full-harmony-kit");
  if (hasBundle) return [];

  return ["fur-vanish", "snootroot", "roadie-shield"]
    .filter((id) => !inCart.has(id))
    .map((id) => getProduct(id))
    .filter(Boolean);
}
