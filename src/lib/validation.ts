import { z } from "zod";

export const checkoutSchema = z.object({
  name: z
    .string()
    .min(3, "الاسم قصير جداً — اكتبي اسمك الكامل")
    .max(100, "الاسم طويل جداً"),
  phone: z
    .string()
    .regex(/^05\d{8}$/, "رقم الجوال غير صحيح — يجب أن يبدأ بـ 05 ويتكون من 10 أرقام"),
});

export type CheckoutFormData = z.infer<typeof checkoutSchema>;
