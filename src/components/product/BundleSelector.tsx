"use client";

import { getBundleLabel, getBundlePrice } from "@/lib/pricing";

interface BundleSelectorProps {
  selected: number;
  onChange: (count: number) => void;
}

export function BundleSelector({ selected, onChange }: BundleSelectorProps) {
  const options = [1, 2, 3];

  return (
    <div className="space-y-3">
      <p className="text-sm font-medium text-gray-600">اختاري باقتك:</p>
      <div className="grid grid-cols-3 gap-2">
        {options.map((count) => (
          <button
            key={count}
            type="button"
            onClick={() => onChange(count)}
            className={`rounded-xl border-2 p-3 text-center transition ${
              selected === count
                ? "border-olive bg-olive/5"
                : "border-gray-100 hover:border-olive/30"
            }`}
          >
            <p className="text-lg font-bold text-olive">
              {getBundlePrice(count)} ر.س
            </p>
            <p className="mt-1 text-xs text-gray-500">
              {getBundleLabel(count)}
            </p>
            {count === 3 && (
              <span className="mt-1 inline-block rounded-full bg-gold px-2 py-0.5 text-xs text-white">
                الأفضل
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
