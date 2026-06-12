"use client";

import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCartStore } from "@/store/cart-store";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { items, openDrawer } = useCartStore();
  const count = items.length;

  const links = [
    { href: "/products", label: "المنتجات" },
    { href: "/contact", label: "تواصل معنا" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-2xl font-bold text-olive">نما</span>
          <span className="text-xs tracking-widest text-gold">بيوتي</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 transition hover:text-olive"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={openDrawer}
            className="relative rounded-xl bg-sand p-2.5 transition hover:bg-olive/10"
            aria-label="فتح السلة"
          >
            <ShoppingBag size={22} className="text-olive" />
            {count > 0 && (
              <span className="absolute -left-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-xs font-bold text-white">
                {count}
              </span>
            )}
          </button>

          <button
            className="rounded-xl p-2 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="القائمة"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-gray-100 bg-white px-4 py-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 text-gray-700 hover:text-olive"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
