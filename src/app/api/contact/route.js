import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const data = {
      name: formData.get("userName"),
      email: formData.get("userEmail"),
      message: formData.get("userMessage"),
    };

    console.log("Contact form submission:", data);

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send message" },
      { status: 500 }
    );
  }
}