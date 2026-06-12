import type { CartItem, Product, ProductSku } from "./types";
import { getProductBySku } from "./products";

export function getUpsellProduct(items: CartItem[]): Product | null {
  const inCart = new Set(items.map((i) => i.sku));
  const all: ProductSku[] = ["nama-styler", "nama-mist", "nama-glow"];

  if (inCart.size >= 3) {
    const top = items[0]?.sku ?? "nama-styler";
    return getProductBySku(top);
  }

  const priority: Record<string, ProductSku> = {
    "nama-styler": "nama-mist",
    "nama-mist": "nama-glow",
    "nama-glow": "nama-styler",
    "nama-mist,nama-styler": "nama-glow",
    "nama-styler,nama-mist": "nama-glow",
    "nama-glow,nama-styler": "nama-mist",
    "nama-styler,nama-glow": "nama-mist",
    "nama-glow,nama-mist": "nama-styler",
    "nama-mist,nama-glow": "nama-styler",
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
    "nama-styler": {
      "nama-mist": "شعرك حلو — خليه يفوح برائحة تدوم بالحر",
      "nama-glow": "بشرة نضيفة تكمّل إطلالة شعرك",
    },
    "nama-mist": {
      "nama-glow": "الرائحة حلوة — خلي بشرتك تبان مثلها",
      "nama-styler": "العطر يكمل — صففي شعرك بأداة واحدة",
    },
    "nama-glow": {
      "nama-styler": "بشرتك صارت أنظف — كملي بشعر يثبت",
      "nama-mist": "توهج البشرة يكتمل برائحة فاخرة",
    },
  };

  return (
    reasons[first.sku]?.[upsell.sku] ??
    `بما إنك اخترت ${first.name}… جربي ${upsell.name}`
  );
}
