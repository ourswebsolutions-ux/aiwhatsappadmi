import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.redirect(
    "https://github.com/ourswebsolutions-ux/fb-frontend/releases/download/v1.1.3/Facebook-Automation-Setup-1.1.3.exe"
  );
}