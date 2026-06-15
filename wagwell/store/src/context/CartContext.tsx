"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { bundles, getProduct, products } from "@/lib/products";
import { CartLine, getOrderTotals } from "@/lib/pricing";

type CartContextValue = {
  lines: CartLine[];
  addProduct: (productId: string, quantity?: number) => void;
  addBundle: (bundleId: string) => void;
  removeLine: (lineId: string) => void;
  updateQuantity: (lineId: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  totals: ReturnType<typeof getOrderTotals>;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "wagwell-cart-v1";

function loadCart(): CartLine[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CartLine[]) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setLines(loadCart());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    }
  }, [lines, hydrated]);

  const addProduct = useCallback((productId: string, quantity = 1) => {
    const product = getProduct(productId);
    if (!product) return;

    setLines((prev) => {
      const existing = prev.find(
        (l) => l.productId === productId && !l.isBundle,
      );
      if (existing) {
        return prev.map((l) =>
          l.id === existing.id
            ? { ...l, quantity: l.quantity + quantity }
            : l,
        );
      }
      return [
        ...prev,
        {
          id: `${productId}-${Date.now()}`,
          productId,
          name: product.shortName,
          price: product.price,
          quantity,
        },
      ];
    });
  }, []);

  const addBundle = useCallback((bundleId: string) => {
    const bundle = bundles.find((b) => b.id === bundleId);
    if (!bundle) return;

    setLines((prev) => {
      const withoutIndividuals = prev.filter(
        (l) =>
          !bundle.productIds.includes(l.productId) && l.productId !== bundleId,
      );
      const existing = withoutIndividuals.find((l) => l.productId === bundleId);
      if (existing) {
        return withoutIndividuals.map((l) =>
          l.id === existing.id ? { ...l, quantity: l.quantity + 1 } : l,
        );
      }
      return [
        ...withoutIndividuals,
        {
          id: `${bundleId}-${Date.now()}`,
          productId: bundleId,
          name: bundle.name,
          price: bundle.price,
          quantity: 1,
          isBundle: true,
        },
      ];
    });
  }, []);

  const removeLine = useCallback((lineId: string) => {
    setLines((prev) => prev.filter((l) => l.id !== lineId));
  }, []);

  const updateQuantity = useCallback((lineId: string, quantity: number) => {
    if (quantity < 1) return;
    setLines((prev) =>
      prev.map((l) => (l.id === lineId ? { ...l, quantity } : l)),
    );
  }, []);

  const clearCart = useCallback(() => setLines([]), []);

  const itemCount = useMemo(
    () => lines.reduce((s, l) => s + l.quantity, 0),
    [lines],
  );

  const totals = useMemo(() => getOrderTotals(lines), [lines]);

  const value = useMemo(
    () => ({
      lines,
      addProduct,
      addBundle,
      removeLine,
      updateQuantity,
      clearCart,
      itemCount,
      totals,
    }),
    [
      lines,
      addProduct,
      addBundle,
      removeLine,
      updateQuantity,
      clearCart,
      itemCount,
      totals,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
