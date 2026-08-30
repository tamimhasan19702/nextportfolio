import { NextResponse } from "next/server";
import type { ContactFormData, ContactResponse } from "@/types";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const data: ContactFormData = {
      name: String(formData.get("userName") || ""),
      email: String(formData.get("userEmail") || ""),
      message: String(formData.get("userMessage") || ""),
    };

    console.log("Contact form submission:", data);

    const response: ContactResponse = {
      success: true,
      message: "Message sent successfully",
    };
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    const response: ContactResponse = {
      success: false,
      message: "Failed to send message",
    };
    return NextResponse.json(response, { status: 500 });
  }
}
