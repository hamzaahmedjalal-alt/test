# WAGWELL Store — Next.js

Australian pet lifestyle e-commerce store.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/collections` | All products + Full Harmony Kit bundle |
| `/products/fur-vanish` | FUR-VANISH™ product page |
| `/products/snootroot` | SNOOTROOT™ product page |
| `/products/roadie-shield` | ROADIE-SHIELD™ product page |
| `/cart` | Cart + upsells + checkout modal trigger |
| `/thank-you` | Order confirmation + delivery stats + upsells |
| `/contact` | Contact form (email only) |
| `/policies/*` | Shipping, returns, privacy, terms |

## Features

- Add to Cart → redirects to `/cart` with promotional upsells
- Product page bottom promos + bundle banner
- 20% auto-discount when 2+ individual products in cart
- Free shipping over $60 AUD
- Checkout modal: order summary + Card / Afterpay / Apple Pay / PayPal
- Thank you page: delivery estimate, 94% on-time stat, post-purchase upsells
- No subscription, SMS, or WhatsApp

## Stack

Next.js 16 · React · Tailwind CSS · TypeScript · localStorage cart

## Stripe integration

Checkout modal is UI-ready. Connect Stripe Checkout Session in `CheckoutModal.tsx` for live payments.
