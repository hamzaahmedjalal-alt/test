import Link from "next/link";

const footerLinks = {
  Shop: [
    { href: "/collections", label: "All Collections" },
    { href: "/products/fur-vanish", label: "FUR-VANISH™" },
    { href: "/products/snootroot", label: "SNOOTROOT™" },
    { href: "/products/roadie-shield", label: "ROADIE-SHIELD™" },
  ],
  Policies: [
    { href: "/policies/shipping", label: "Shipping Policy" },
    { href: "/policies/returns", label: "Returns & Guarantee" },
    { href: "/policies/privacy", label: "Privacy Policy" },
    { href: "/policies/terms", label: "Terms of Service" },
  ],
  Help: [{ href: "/contact", label: "Contact Us" }],
};

export function Footer() {
  return (
    <footer className="mt-auto border-t border-stone-200 bg-navy text-stone-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4 sm:px-6">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-coral text-sm">
              🐾
            </span>
            <span className="text-lg font-bold text-white">WAGWELL</span>
          </div>
          <p className="mb-4 text-sm leading-relaxed">
            Pet problems, properly solved. Fur, boredom, and car mess — shipped
            fast across Australia.
          </p>
          <p className="text-xs text-stone-500">
            Happy Dog. Clean Home. Sorted.
          </p>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              {title}
            </h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition hover:text-coral"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-navy-light px-4 py-5 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-stone-500 sm:flex-row">
          <p>© {new Date().getFullYear()} WAGWELL. Australian-owned.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <span>🔒 Secure checkout</span>
            <span>🇦🇺 AU warehouse</span>
            <span>↩️ 30-Day Wag Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
