import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.redirect(
    "https://github.com/ourswebsolutions-ux/whatsapp-automated/releases/download/v1.1.2/WhatsApp-Automated-Setup-1.1.2.exe"
  );
}