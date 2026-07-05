import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.redirect(
    "https://github.com/ourswebsolutions-ux/whatsapp-automated/releases/download/v1.0.4/WhatsApp-Automated-1.0.4.AppImage"
  );
}