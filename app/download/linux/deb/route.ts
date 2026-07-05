import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.redirect(
    "https://github.com/ourswebsolutions-ux/whatsapp-automated/releases/download/v1.0.4/whatsapp-automated_1.0.4_amd64.deb"
  );
}