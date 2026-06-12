export type ProductSku = "nama-styler" | "nama-mist" | "nama-glow";

export interface Product {
  sku: ProductSku;
  slug: string;
  name: string;
  subtitle: string;
  format: string;
  price: number;
  rating: number;
  reviewCount: number;
  heroCopy: string;
  problemTitle: string;
  problemCopy: string;
  solutionTitle: string;
  solutionCopy: string;
  ingredients: { name: string; description: string }[];
  howToUse: string[];
  faqs: { question: string; answer: string }[];
  reviews: { name: string; city: string; text: string; rating: number }[];
  color: string;
  emoji: string;
}

export interface CartItem {
  sku: ProductSku;
  name: string;
}

export interface OrderProduct {
  sku: ProductSku;
  name: string;
  qty: number;
  price: number;
}

export interface OrderPayload {
  timestamp: string;
  orderNumber: string;
  name: string;
  phone: string;
  products: OrderProduct[];
  upsell_accepted: boolean;
  upsell_product?: OrderProduct;
  subtotal: number;
  upsell: number;
  total: number;
  source_url: string;
  user_agent: string;
}
