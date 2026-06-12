import { NextRequest, NextResponse } from "next/server";
import type { OrderPayload } from "@/lib/types";

export async function POST(request: NextRequest) {
  try {
    const payload: OrderPayload = await request.json();

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    if (webhookUrl) {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        console.error("Webhook failed:", await response.text());
      }
    } else {
      console.log("Order received (no webhook configured):", payload);
    }

    return NextResponse.json({
      success: true,
      orderNumber: payload.orderNumber,
    });
  } catch (error) {
    console.error("Order API error:", error);
    return NextResponse.json(
      { success: false, error: "فشل إرسال الطلب" },
      { status: 500 }
    );
  }
}
