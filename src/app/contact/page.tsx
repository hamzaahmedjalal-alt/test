"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="mx-auto max-w-xl px-4 py-12">
      <div className="text-center">
        <Mail className="mx-auto text-olive" size={40} />
        <h1 className="mt-4 text-3xl font-bold text-olive">تواصلي معنا</h1>
        <p className="mt-3 text-gray-500">
          فريق نما بيوتي جاهز يساعدك — رد خلال 24 ساعة
        </p>
      </div>

      {sent ? (
        <div className="mt-10 rounded-2xl bg-olive/5 p-8 text-center">
          <p className="text-lg font-semibold text-olive">
            تم إرسال رسالتك بنجاح!
          </p>
          <p className="mt-2 text-gray-500">راح نرد عليك خلال 24 ساعة</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-10 space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium">الاسم</label>
            <input
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:border-olive focus:outline-none focus:ring-2 focus:ring-olive/20"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              required
              dir="ltr"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-left focus:border-olive focus:outline-none focus:ring-2 focus:ring-olive/20"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium">الرسالة</label>
            <textarea
              required
              rows={5}
              className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:border-olive focus:outline-none focus:ring-2 focus:ring-olive/20"
            />
          </div>
          <Button type="submit" fullWidth size="lg">
            <Send size={18} className="ml-2" />
            أرسلي الرسالة
          </Button>
        </form>
      )}
    </div>
  );
}
