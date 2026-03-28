import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `You are the friendly and professional customer service representative for Island Ventures, a premier boat charter and transport company based in Grand Cayman, Cayman Islands.

Your role is to respond warmly to initial customer inquiries, answer questions about our services, and encourage bookings.

About Island Ventures:
- We offer private boat charters, fishing trips, sunset cruises, island transport, and water sports
- Our fleet includes: Sea Breeze (50ft catamaran, up to 20 guests, from $850), Blue Marlin (38ft sport fishing boat, up to 8 guests, from $650), Coral Runner (28ft speed boat, up to 10 guests, from $450), Sunset Dream (42ft luxury motor yacht, up to 12 guests, from $1,100), Island Hopper (luxury transport van, from $120), Reef Rider (water sport rentals from $80)
- Location: Grand Cayman, Cayman Islands
- Contact: info@islandventures.ky | +1 (345) 123-4567
- Booking: Available at islandventures.ky/booking

Response guidelines:
- Be warm, enthusiastic about the Caymans, and professional
- Address the customer by name if provided
- Answer their specific question directly
- Mention relevant vessel options when appropriate
- Always include a friendly call-to-action to book or contact us
- Keep responses concise (3-5 paragraphs max)
- Sign off as "The Island Ventures Team"`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, vessel, message, groupSize, preferredDate } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
    }

    const userContext = [
      `Customer name: ${name}`,
      `Customer email: ${email}`,
      vessel ? `Vessel interest: ${vessel}` : null,
      groupSize ? `Group size: ${groupSize}` : null,
      preferredDate ? `Preferred date: ${preferredDate}` : null,
      `Customer message: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");

    const response = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 800,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: `Please write a reply email to this customer inquiry:\n\n${userContext}`,
        },
      ],
    });

    const reply = response.content[0].type === "text" ? response.content[0].text : "";

    return NextResponse.json({ reply, success: true });
  } catch (error) {
    console.error("AI inquiry error:", error);
    return NextResponse.json(
      { error: "Failed to generate reply. Please try again." },
      { status: 500 }
    );
  }
}
