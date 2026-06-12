# نما بيوتي — Nama Beauty Store

متجر Next.js مخصص للدفع عند الاستلام (COD) — عربي RTL.

**النطاق:** [namabeauty.shop](https://namabeauty.shop)

## التشغيل المحلي

```bash
npm install
cp .env.example .env.local
# أضف GOOGLE_SHEETS_WEBHOOK_URL في .env.local
npm run dev
```

افتح [http://localhost:3000](http://localhost:3000)

## البناء والنشر

```bash
npm run build
npm start
```

انشر على Vercel واربط النطاق `namabeauty.shop`.

## هيكل المشروع

- `src/app/` — الصفحات (رئيسية، منتجات، سياسات، شكر)
- `src/components/` — المكوّنات (سلة، دفع، منتجات)
- `src/lib/` — بيانات المنتجات، التسعير، التحقق
- `src/store/` — حالة السلة (Zustand)
- `NAMA-BEAUTY-STORE-PLAYBOOK.md` — دليل الاستراتيجية الكامل

## التسعير

| الكمية | السعر |
|--------|-------|
| منتج واحد | 199 ر.س |
| منتجين | 279 ر.س |
| 3 منتجات | 349 ر.س |
| عرض إضافي بعد الطلب | 99 ر.س |

## ويب هوك Google Sheets

1. أنشئ Google Apps Script Web App
2. أضف الرابط في `GOOGLE_SHEETS_WEBHOOK_URL`
3. الطلبات تُرسل تلقائياً عند التأكيد
