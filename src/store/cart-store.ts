"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem, OrderPayload, ProductSku } from "@/lib/types";
import { calculateCartTotal, UPSELL_PRICE } from "@/lib/pricing";
import { getProductBySku } from "@/lib/products";
import { getUpsellProduct } from "@/lib/upsell";

interface CartState {
  items: CartItem[];
  isDrawerOpen: boolean;
  isCheckoutOpen: boolean;
  isUpsellOpen: boolean;
  customerName: string;
  customerPhone: string;
  upsellAccepted: boolean;
  upsellSku: ProductSku | null;
  lastOrder: OrderPayload | null;

  openDrawer: () => void;
  closeDrawer: () => void;
  openCheckout: () => void;
  closeCheckout: () => void;
  openUpsell: () => void;
  closeUpsell: () => void;

  addItem: (sku: ProductSku) => void;
  removeItem: (sku: ProductSku) => void;
  clearCart: () => void;

  setCustomer: (name: string, phone: string) => void;
  acceptUpsell: () => void;
  declineUpsell: () => void;
  setLastOrder: (order: OrderPayload) => void;

  getTotal: () => number;
  getUpsellProduct: () => ReturnType<typeof getUpsellProduct>;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isDrawerOpen: false,
      isCheckoutOpen: false,
      isUpsellOpen: false,
      customerName: "",
      customerPhone: "",
      upsellAccepted: false,
      upsellSku: null,
      lastOrder: null,

      openDrawer: () => set({ isDrawerOpen: true }),
      closeDrawer: () => set({ isDrawerOpen: false }),
      openCheckout: () => set({ isCheckoutOpen: true, isDrawerOpen: false }),
      closeCheckout: () => set({ isCheckoutOpen: false }),
      openUpsell: () => set({ isUpsellOpen: true, isCheckoutOpen: false }),
      closeUpsell: () => set({ isUpsellOpen: false }),

      addItem: (sku) => {
        const product = getProductBySku(sku);
        set((state) => {
          if (state.items.some((i) => i.sku === sku)) return state;
          if (state.items.length >= 3) return state;
          return {
            items: [...state.items, { sku, name: product.name }],
          };
        });
      },

      removeItem: (sku) => {
        set((state) => ({
          items: state.items.filter((i) => i.sku !== sku),
        }));
      },

      clearCart: () => set({ items: [] }),

      setCustomer: (name, phone) => set({ customerName: name, customerPhone: phone }),

      acceptUpsell: () => {
        const upsell = get().getUpsellProduct();
        if (upsell) {
          set({ upsellAccepted: true, upsellSku: upsell.sku });
        }
      },

      declineUpsell: () => set({ upsellAccepted: false, upsellSku: null }),

      setLastOrder: (order) => set({ lastOrder: order }),

      getTotal: () => calculateCartTotal(get().items),

      getUpsellProduct: () => getUpsellProduct(get().items),
    }),
    {
      name: "nama-cart",
      partialize: (state) => ({
        items: state.items,
        lastOrder: state.lastOrder,
      }),
    }
  )
);

export function buildOrderPayload(
  state: Pick<
    CartState,
    "items" | "customerName" | "customerPhone" | "upsellAccepted" | "upsellSku"
  >,
  sourceUrl: string,
  userAgent: string
): OrderPayload {
  const subtotal = calculateCartTotal(state.items);
  const orderNumber = `NAMA-${new Date().toISOString().slice(0, 10).replace(/-/g, "")}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;

  const products = state.items.map((item) => ({
    sku: item.sku,
    name: item.name,
    qty: 1,
    price: subtotal / state.items.length,
  }));

  let upsellProduct;
  let upsell = 0;

  if (state.upsellAccepted && state.upsellSku) {
    const p = getProductBySku(state.upsellSku);
    upsell = UPSELL_PRICE;
    upsellProduct = {
      sku: p.sku,
      name: p.name,
      qty: 1,
      price: UPSELL_PRICE,
    };
  }

  return {
    timestamp: new Date().toISOString(),
    orderNumber,
    name: state.customerName,
    phone: state.customerPhone,
    products,
    upsell_accepted: state.upsellAccepted,
    upsell_product: upsellProduct,
    subtotal,
    upsell,
    total: subtotal + upsell,
    source_url: sourceUrl,
    user_agent: userAgent,
  };
}
