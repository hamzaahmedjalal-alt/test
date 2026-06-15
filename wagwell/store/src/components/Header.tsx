import Link from "next/link";
import { CartButton } from "./CartButton";

const nav = [
  { href: "/collections", label: "Shop" },
  { href: "/products/fur-vanish", label: "Fur" },
  { href: "/products/snootroot", label: "Boredom" },
  { href: "/products/roadie-shield", label: "Car" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-cream/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="group flex shrink-0 items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-coral text-lg text-white shadow-sm">
            🐾
          </span>
          <div className="leading-tight">
            <span className="block text-lg font-bold tracking-tight text-navy group-hover:text-coral-dark">
              WAGWELL
            </span>
            <span className="hidden text-[10px] font-medium uppercase tracking-widest text-stone-500 sm:block">
              Pet Home Harmony
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-navy-light transition hover:text-coral"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/collections"
            className="hidden rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white transition hover:bg-navy-light sm:inline-block"
          >
            Shop All
          </Link>
          <CartButton />
        </div>
      </div>

      <div className="border-t border-stone-100 bg-sand/60 py-1.5 text-center text-xs text-stone-600">
        <span className="font-medium text-navy">★ 4.8/5</span> from Aussie pet
        parents · Ships from AU in{" "}
        <span className="font-medium">2–4 days</span> ·{" "}
        <span className="font-medium">30-Day Wag Guarantee</span>
      </div>
    </header>
  );
}
