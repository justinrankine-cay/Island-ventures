import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `You are the friendly and professional customer service representative for Cayman Exclusive Charters, a premier private boat charter company based in Grand Cayman, Cayman Islands.

Your role is to respond warmly to initial customer inquiries, answer questions about our services, and encourage bookings.

About Cayman Exclusive Charters:
- We offer private boat charters, Stingray City tours, sunset cruises, deep-sea fishing, snorkelling adventures, and island transport
- Our fleet includes: Grand Mariner (55ft catamaran, up to 22 guests, from $950), Blue Marlin (40ft sport fishing boat, up to 8 guests, from $700), Stingray Runner (32ft powerboat, up to 12 guests, from $500), Sunset Exclusive (45ft motor yacht, up to 12 guests, from $1,250), Island Express (luxury transfer van, from $120), Reef Thrills (water sport rentals from $85)
- Location: Grand Cayman, Cayman Islands
- Contact: info@caymanexclusivecharters.com | +1 (345) 526-1234
- WhatsApp: +1 (345) 526-1234
- Booking: Available at caymanexclusivecharters.com/booking

Response guidelines:
- Be warm, enthusiastic about the Caymans, and professional
- Address the customer by name if provided
- Answer their specific question directly
- Mention relevant vessel options when appropriate
- Always include a friendly call-to-action to book or WhatsApp us
- Keep responses concise (3-5 paragraphs max)
- Sign off as "The Cayman Exclusive Charters Team"`;

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
