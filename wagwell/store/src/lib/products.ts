export type Product = {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  price: number;
  compareAtPrice?: number;
  description: string;
  longDescription: string;
  features: string[];
  materials: { label: string; value: string }[];
  problemHeadline: string;
  problemCopy: string;
  badge?: string;
  gradient: string;
  upsellSlugs: string[];
};

export type Bundle = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  price: number;
  compareAtPrice: number;
  description: string;
  productIds: string[];
  badge: string;
  gradient: string;
};

export const products: Product[] = [
  {
    id: "fur-vanish",
    slug: "fur-vanish",
    name: "FUR-VANISH™ Electrostatic Pet Hair Liberation Kit",
    shortName: "FUR-VANISH™",
    tagline: "The fur-removal system that actually works on Aussie couches.",
    price: 44.95,
    compareAtPrice: 69.95,
    description:
      "Lifts embedded fur your vacuum misses — 5-minute couch reset.",
    longDescription:
      "Cheap lint rollers only grab surface fluff. WAGWELL FUR-VANISH™ uses bi-directional electrostatic micro-fibre to lift embedded fur from couches, car seats, and clothes. The self-cleaning base means you never touch a fur clump again.",
    features: [
      "Bi-directional electrostatic micro-fibre roller",
      "Silicone self-cleaning collection base",
      "Crevice detail tool for car seats & stairs",
      "Reusable — pays for itself in 3 weeks",
      "Works on linen, leather, and fabric",
    ],
    materials: [
      { label: "Roller", value: "Electrostatic micro-fibre polymer" },
      { label: "Handle", value: "Ergonomic ABS with rubber grip" },
      { label: "Base", value: "Silicone self-release chamber" },
      { label: "Detail tool", value: "Angled nylon crevice brush" },
    ],
    problemHeadline: "Fur on the couch. Again.",
    problemCopy:
      "You've vacuumed. You've lint-rolled. The sun hits the lounge and it's still a fur carpet. FUR-VANISH™ fixes it in 5 minutes.",
    badge: "Bestseller",
    gradient: "from-amber-100 via-orange-50 to-coral-100",
    upsellSlugs: ["snootroot", "roadie-shield"],
  },
  {
    id: "snootroot",
    slug: "snootroot",
    name: "SNOOTROOT™ Canine Enrichment Snuffle Foraging Mat",
    shortName: "SNOOTROOT™",
    tagline: "Give their brain a job — save your sofa.",
    price: 54.95,
    compareAtPrice: 79.95,
    description: "15 minutes of brain work — save your sofa.",
    longDescription:
      "A bored dog is a demolition crew. SNOOTROOT™ hides treats across 40+ foraging pockets with variable textures — engaging your dog's natural sniff-and-seek instinct for focused calm activity.",
    features: [
      "40+ multi-texture foraging pockets",
      "OEKO-TEX® certified polar fleece base",
      "Natural rubber non-slip backing",
      "Machine washable (cold, gentle)",
      "Extends mealtimes to 10+ minutes",
    ],
    materials: [
      { label: "Base", value: "OEKO-TEX® polar fleece" },
      { label: "Foraging strips", value: "Multi-length polyester shag" },
      { label: "Backing", value: "Natural rubber dot matrix" },
      { label: "Stitching", value: "Reinforced double-stitch seams" },
    ],
    problemHeadline: "Cushions destroyed. Again.",
    problemCopy:
      "He doesn't hate you — he's bored. Scatter kibble before you leave. Come home to an intact couch.",
    badge: "Enrichment pick",
    gradient: "from-emerald-100 via-teal-50 to-green-100",
    upsellSlugs: ["fur-vanish", "roadie-shield"],
  },
  {
    id: "roadie-shield",
    slug: "roadie-shield",
    name: "ROADIE-SHIELD™ Waterproof Hammock Car Seat Protector",
    shortName: "ROADIE-SHIELD™",
    tagline: "Beach trips without the sandy, hairy back seat.",
    price: 64.95,
    compareAtPrice: 89.95,
    description: "Beach trips without the sandy, hairy back seat.",
    longDescription:
      "Every beach run leaves sand, mud, and fur woven into your upholstery. ROADIE-SHIELD™ installs in 2 minutes. Waterproof 600D Oxford catches the mess. Pull it off, shake it out, machine wash. Car sorted.",
    features: [
      "600D Oxford waterproof polyester",
      "Hammock mode blocks seat-gap mess",
      "Door flap guards against claw scratches",
      "Universal fit — sedans, SUVs & utes",
      "Seat belt access holes included",
    ],
    materials: [
      { label: "Panel", value: "600D Oxford waterproof polyester" },
      { label: "Straps", value: "Heavy-duty nylon with click buckles" },
      { label: "Backing", value: "Rubberised non-slip matrix" },
      { label: "Flaps", value: "Mesh-window door protectors" },
    ],
    problemHeadline: "The back seat's a disaster.",
    problemCopy:
      "Sand in the seams. Fur in the fabric. An hour of vacuuming every Sunday. Not anymore.",
    badge: "Road trip essential",
    gradient: "from-sky-100 via-blue-50 to-indigo-100",
    upsellSlugs: ["fur-vanish", "snootroot"],
  },
];

export const bundles: Bundle[] = [
  {
    id: "full-harmony-kit",
    slug: "full-harmony-kit",
    name: "Full Harmony Kit",
    tagline: "All three pet problems — solved in one box.",
    price: 119.95,
    compareAtPrice: 164.85,
    description:
      "FUR-VANISH™ + SNOOTROOT™ + ROADIE-SHIELD™. The complete WAGWELL system for fur, boredom, and car mess.",
    productIds: ["fur-vanish", "snootroot", "roadie-shield"],
    badge: "Save $44.90 · Most popular",
    gradient: "from-violet-100 via-purple-50 to-fuchsia-100",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getBundle(slug: string): Bundle | undefined {
  return bundles.find((b) => b.slug === slug);
}

export const FREE_SHIPPING_THRESHOLD = 60;
export const STANDARD_SHIPPING = 7.95;
export const MULTI_PRODUCT_DISCOUNT = 0.2;
