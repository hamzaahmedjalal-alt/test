# WAGWELL — Store Operations Manager
## الدليل التشغيلي الكامل للمتجر | Complete Store Command Centre

> **Role:** Single source of truth for everything WAGWELL — products, pricing, offers, copy, suppliers, and daily decisions.  
> **Companion doc:** [BRAND-MARKETING-STRATEGY.md](./BRAND-MARKETING-STRATEGY.md) (full positioning & messaging)

---

## 1. STORE IDENTITY

| Field | Value |
|-------|-------|
| **Brand name** | WAGWELL |
| **Tagline** | Happy Dog. Clean Home. Sorted. |
| **Category owned** | Pet Home Harmony Essentials |
| **Market** | Australia only (Phase 1) |
| **Language** | Australian English |
| **Checkout currency** | AUD |
| **Planning currency** | USD (internal) |
| **Platform** | Next.js + React (custom) |
| **Payments** | Stripe AU + Afterpay + Apple Pay + PayPal |
| **Domain target** | wagwell.com.au |
| **ABN** | Register at business.gov.au (free) |
| **GST** | 10% — register when turnover exceeds $75K AUD/year |

---

## 2. PRODUCT CATALOG (Live Reference)

### Product 1 — FUR-VANISH™

| Field | Detail |
|-------|--------|
| **Marketing name** | WAGWELL FUR-VANISH™ Electrostatic Pet Hair Liberation Kit |
| **SKU internal** | WW-FUR-001 |
| **Problem solved** | Embedded pet fur on couches, car seats, clothes |
| **Core materials** | Bi-directional electrostatic micro-fibre polymer roller, silicone self-cleaning base, ABS handle, nylon crevice detail tool |
| **Price single** | $44.95 AUD (~$29 USD) |
| **Price duo** | $74.95 AUD (Most Popular) |
| **Price family (×3)** | $99.95 AUD |
| **Supplier cost** | $5–8 USD |
| **Supplier** | CJ Dropshipping AU / Dropshipzone |
| **Weight** | ~280g — light ship |
| **RCM required** | No |
| **Landing page** | /solutions/fur |

**One-line sell:** *"Lifts embedded fur your vacuum misses — 5-minute couch reset."*

---

### Product 2 — SNOOTROOT™

| Field | Detail |
|-------|--------|
| **Marketing name** | WAGWELL SNOOTROOT™ Canine Enrichment Snuffle Foraging Mat |
| **SKU internal** | WW-SNOOT-001 |
| **Problem solved** | Boredom destruction, fast eating, rainy-day energy, guilt when leaving dog alone |
| **Core materials** | OEKO-TEX® polar fleece base, multi-texture polyester shag strips, natural rubber non-slip backing, reinforced double-stitch |
| **Price single (M)** | $54.95 AUD (~$36 USD) |
| **Price bundle + treat pouch** | $69.95 AUD (Best Value) |
| **Price large** | $64.95 AUD |
| **Supplier cost** | $8–12 USD |
| **Supplier** | CJ Dropshipping AU |
| **Weight** | ~350g |
| **RCM required** | No |
| **Landing page** | /solutions/boredom |

**One-line sell:** *"15 minutes of brain work — save your sofa."*

**Compliance note:** Never claim "treats anxiety" or "cures separation anxiety." Use "enrichment" and "foraging behaviour" only.

---

### Product 3 — ROADIE-SHIELD™

| Field | Detail |
|-------|--------|
| **Marketing name** | WAGWELL ROADIE-SHIELD™ Waterproof Hammock Car Seat Protector |
| **SKU internal** | WW-ROAD-001 |
| **Problem solved** | Sand, mud, fur, and scratches in car after beach/park trips |
| **Core materials** | 600D Oxford waterproof polyester, nylon anchor straps, rubberised non-slip backing, mesh window door flaps |
| **Price standard** | $64.95 AUD (~$42 USD) |
| **Price SUV/UTE** | $74.95 AUD (Most Popular) |
| **Price road trip bundle** | $99.95 AUD (with Fur-Vanish detail tool) |
| **Supplier cost** | $10–15 USD |
| **Supplier** | CJ Dropshipping AU / Dropshipzone |
| **Weight** | ~900g |
| **RCM required** | No |
| **Landing page** | /solutions/car-mess |

**One-line sell:** *"Beach trips without the sandy, hairy back seat."*

---

## 3. BUNDLES & PRICING MATRIX

| Offer name | Products included | Full price | Sale price | Discount | Badge |
|------------|-------------------|------------|------------|----------|-------|
| **Full Harmony Kit** | All 3 products | $164.85 | **$119.95** | 27% | Hero bundle |
| **Any 2 products** | Customer choice | Variable | 20% off | 20% | Cart auto-apply |
| **Fur Duo** | 2× FUR-VANISH | $89.90 | **$74.95** | 17% | "One for car" |
| **Road Trip Bundle** | ROADIE-SHIELD + Fur detail | $89.90 | **$99.95** | Value add | Seasonal |
| **Snoot + Pouch** | SNOOTROOT + treat pouch | $69.95 | **$69.95** | Bundle | Best value |

**Free shipping threshold:** $60 AUD  
**AOV target:** $75–95 AUD

---

## 4. PROMOTIONAL OFFERS (Active Codes)

| Code | Discount | Conditions | Expiry | Channel |
|------|----------|------------|--------|---------|
| `WAGWELCOME` | 15% off | First order + email signup | Never (evergreen) | Popup, welcome email |
| `HARMONY20` | 20% off | Any 2 products in cart | Auto-applied | Cart logic |
| `FURFREE` | 20% off FUR-VANISH only | Jan campaign | 31 Jan | Meta/TikTok |
| `ROADREADY` | $15 off ROADIE-SHIELD | Sep–Oct road trip season | 31 Oct | Email, ads |
| `SNOOT15` | 15% off SNOOTROOT | Winter indoor season | 31 Aug | Email |
| `BLACKFUR` | 25% sitewide | Black Friday 48hrs | 48 hours only | All channels |
| `COMEBACK20` | 20% off | Win-back email (60-day inactive) | 7 days | Email only |

### Popup Offer (Email capture)
```
Headline: "What's your #1 pet problem?"
Sub: Take our 30-second quiz + get 15% off your first order
CTA: Start the Quiz
Code revealed: WAGWELCOME
```

---

## 5. PAYMENT OFFERS

### Enabled methods (Stripe Dashboard)
- [x] Credit/debit cards (Visa, Mastercard, Amex)
- [x] Apple Pay
- [x] Google Pay
- [x] Afterpay (installments)
- [x] PayPal

### Afterpay display copy (on product pages)
```
or 4 interest-free payments of $[price/4] with [Afterpay logo]
```
Examples:
- FUR-VANISH $44.95 → **4 × $11.24**
- SNOOTROOT $54.95 → **4 × $13.74**
- ROADIE-SHIELD $64.95 → **4 × $16.24**
- Full Harmony Kit $119.95 → **4 × $29.99**

### Checkout trust strip
```
🔒 Secure checkout  |  🇦🇺 Aussie-owned  |  📦 2–4 day AU shipping  |  ↩️ 30-Day Wag Guarantee
```

### Cart progress bar
```
$0–––––––––– $60 Free Shipping
"You're $[X] away from free AU shipping"
```

---

## 6. UPSELL & CROSS-SELL MAP

### At Checkout (Order bumps — one click add)

| If cart contains | Order bump offer | Price | Copy |
|------------------|------------------|-------|------|
| FUR-VANISH | Mini treat pouch | $9.95 | "Add a treat pouch for snuffle training" |
| SNOOTROOT | Fur-Vanish detail tool | $19.95 | "Fur on the couch too? Add the detail tool" |
| ROADIE-SHIELD | Fur-Vanish car tool | $24.95 | "Complete the car clean — fur remover add-on" |
| Any single item | "Add 2nd product — save 20%" | Auto | Show other 2 products |

### Post-Purchase (One-click upsell page before thank-you)

| Purchased | Upsell | Price | Discount |
|-----------|--------|-------|----------|
| FUR-VANISH | SNOOTROOT | $44.95 | 20% off ($43.96) |
| SNOOTROOT | ROADIE-SHIELD | $51.95 | 20% off |
| ROADIE-SHIELD | FUR-VANISH | $35.95 | 20% off |
| Any | Full Harmony Kit upgrade | $89.95 | Upgrade price |

### Email cross-sell (Day 10 post-purchase)

| Purchased | Email subject | Cross-sell product |
|-----------|---------------|-------------------|
| FUR-VANISH | "Fur's sorted. What about the cushions?" | SNOOTROOT |
| SNOOTROOT | "Brain busy. Car still a mess?" | ROADIE-SHIELD |
| ROADIE-SHIELD | "Car protected. Couch still furry?" | FUR-VANISH |

---

## 7. GUARANTEE & POLICIES

### 30-Day Wag Guarantee (display everywhere)
> *"Try any WAGWELL product for 30 days. If it doesn't solve the problem, email us for a full refund. No drama. We're Aussie pet parents too."*

**Conditions:**
- 30 days from delivery date
- Product must be returned in reasonable condition (unless defective)
- Refund within 5 business days of approval
- Customer pays return shipping unless faulty

### Shipping policy
- Standard: 2–4 business days (metro), 3–7 (regional)
- Ships from: Melbourne/Sydney AU warehouses
- Free shipping: orders $60+ AUD
- Express: not offered Phase 1

### Returns address
- Use supplier return address OR local PO box (set up before launch)

---

## 8. SUPPLIER OPERATIONS

| Supplier | Use for | Ship time | Integration |
|----------|---------|-----------|-------------|
| CJ Dropshipping AU | All 3 products (primary) | 2–4 days | API → Next.js order webhook |
| Dropshipzone | Backup / ROADIE-SHIELD | 2–5 days | Manual Phase 1 |

### Pre-launch checklist per product
- [ ] Order sample — inspect quality
- [ ] Photograph sample (minimum 8 images per product)
- [ ] Film 30-second demo video
- [ ] Verify AU warehouse stock count
- [ ] Test order end-to-end (friend's address)
- [ ] Confirm return process with supplier

---

## 9. DAILY KPIs (What to watch)

| Metric | Target Month 1 | Target Month 3 |
|--------|----------------|----------------|
| Conversion rate (cold) | 2–3% | 4–5% |
| AOV | $55 AUD | $80 AUD |
| CPA (Meta) | < $35 AUD | < $25 AUD |
| Return rate | < 6% | < 4% |
| Email capture rate | 8%+ | 12%+ |
| Review rate | 10% of orders | 20% of orders |
| Repeat purchase (90 day) | 5% | 15% |

---

## 10. CONTENT CALENDAR (Month 1 Launch)

| Week | Focus product | Content | Ad budget |
|------|---------------|---------|-----------|
| 1 | FUR-VANISH | "Couch fur POV" TikTok × 5 | $70 USD |
| 2 | FUR-VANISH | Review screenshots + Meta PAS ads | $70 USD |
| 3 | SNOOTROOT | "Dog destroys cushion" TikTok × 5 | $70 USD |
| 4 | ROADIE-SHIELD | "Beach trip car hack" + bundle push | $70 USD |

---

## 11. DECISION TREE (Quick answers)

```
Customer asks about anxiety medication? → "We're not vets — SNOOTROOT is enrichment, not medicine. See your vet for clinical anxiety."
Product out of stock? → Disable on site. Email waitlist. Never sell China-ship fallback without updating delivery ETA.
Bad review incoming? → Respond within 24hrs. Offer replacement or refund. Never argue publicly.
CPA above $40 for 3 days? → Kill ad. Test new hook. Don't increase budget on loser.
Which product to launch first? → FUR-VANISH (broadest appeal, lowest cost, easiest demo video)
```

---

## 12. FILE INDEX

| File | Purpose |
|------|---------|
| `BRAND-MARKETING-STRATEGY.md` | Positioning, messaging, ad copy, CRO |
| `STORE-OPERATIONS-MANAGER.md` | This file — daily operations |
| `../presentation/australia-3-niches-research.html` | Market research presentation |

---

*WAGWELL Store Operations Manager v1.0 — Update when prices, codes, or suppliers change.*
