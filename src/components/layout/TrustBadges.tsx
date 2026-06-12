import { Shield, FlaskConical, Leaf, Truck } from "lucide-react";

const badges = [
  { icon: Shield, text: "دفع عند الاستلام" },
  { icon: FlaskConical, text: "جودة فاخرة معتمدة" },
  { icon: Leaf, text: "ضمان سنة" },
  { icon: Truck, text: "توصيل 2–4 أيام" },
];

export function TrustBadges() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {badges.map(({ icon: Icon, text }) => (
        <div
          key={text}
          className="flex items-center gap-2 rounded-full border border-olive/10 bg-white px-4 py-2 text-sm text-olive shadow-sm"
        >
          <Icon size={16} className="text-gold" />
          {text}
        </div>
      ))}
    </div>
  );
}
