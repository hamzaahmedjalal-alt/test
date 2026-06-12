import type { CartItem, Product, ProductSku } from "./types";
import { getProductBySku } from "./products";

export function getUpsellProduct(items: CartItem[]): Product | null {
  const inCart = new Set(items.map((i) => i.sku));
  const all: ProductSku[] = ["nama-hair", "nama-rest", "nama-glow"];

  if (inCart.size >= 3) {
    const top = items[0]?.sku ?? "nama-hair";
    return getProductBySku(top);
  }

  const priority: Record<string, ProductSku> = {
    "nama-hair": "nama-rest",
    "nama-rest": "nama-glow",
    "nama-glow": "nama-hair",
    "nama-hair,nama-rest": "nama-glow",
    "nama-rest,nama-hair": "nama-glow",
    "nama-hair,nama-glow": "nama-rest",
    "nama-glow,nama-hair": "nama-rest",
    "nama-rest,nama-glow": "nama-hair",
    "nama-glow,nama-rest": "nama-hair",
  };

  const key = [...inCart].sort().join(",");
  const upsellSku = priority[key];

  if (upsellSku && !inCart.has(upsellSku)) {
    return getProductBySku(upsellSku);
  }

  for (const sku of all) {
    if (!inCart.has(sku)) return getProductBySku(sku);
  }

  return null;
}

export function getUpsellMessage(items: CartItem[], upsell: Product): string {
  const first = items[0];
  if (!first) return `جربي ${upsell.name} بسعر خاص`;

  const reasons: Record<string, Partial<Record<ProductSku, string>>> = {
    "nama-hair": {
      "nama-rest": "التوتر من أسباب تساقط الشعر — جربي أمالج نما للراحة",
      "nama-glow": "الكولاجين يفيد الشعر والبشرة معاً",
    },
    "nama-rest": {
      "nama-glow": "قلة النوم تُبهت البشرة — أكملي روتينك",
      "nama-hair": "الراحة تنعكس على صحة شعرك",
    },
    "nama-glow": {
      "nama-hair": "الكولاجين يقوّي الشعر من الجذور",
      "nama-rest": "النوم الكافي = توهج أفضل",
    },
  };

  return (
    reasons[first.sku]?.[upsell.sku] ??
    `بما إنك اخترت ${first.name}… جربي ${upsell.name}`
  );
}
