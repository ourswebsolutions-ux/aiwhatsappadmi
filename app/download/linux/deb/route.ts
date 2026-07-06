import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.redirect(
    "https://github.com/ourswebsolutions-ux/whatsapp-automated/releases/download/v1.1.2/whatsapp-automated_1.1.2_amd64.deb"
  );
}