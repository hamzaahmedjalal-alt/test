interface BadgeProps {
  children: React.ReactNode;
  variant?: "olive" | "gold" | "sand";
}

export function Badge({ children, variant = "olive" }: BadgeProps) {
  const colors = {
    olive: "bg-olive/10 text-olive border-olive/20",
    gold: "bg-gold/10 text-gold-dark border-gold/30",
    sand: "bg-sand text-foreground border-gray-200",
  };

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium ${colors[variant]}`}
    >
      {children}
    </span>
  );
}
