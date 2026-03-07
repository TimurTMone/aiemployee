import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || '' });

const SYSTEM_PROMPT = `You are a helpful, concise assistant for AI Employees — a product that provides an AI front desk for dental clinics. You answer questions about:
- Answering missed calls and after-hours inquiries 24/7
- Booking appointments and reducing no-shows
- Saving front-desk time and capturing more leads
- Integration with phone, website chat, WhatsApp, SMS, Instagram, and scheduling tools

Keep answers short (2–4 sentences unless they ask for detail). Be friendly and professional. If they seem interested in the product or ask about pricing/demo, suggest they book a 15-minute demo and mention they can use the form on the page or the "Book demo" button. Do not make up specific prices or features we did not mention. Do not pretend to be a human; you can say you're an AI assistant for AI Employees.`;

export async function POST(req: Request) {
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { error: 'Chat is not configured. Set OPENAI_API_KEY.' },
      { status: 503 }
    );
  }

  try {
    const body = await req.json();
    const { messages } = body as { messages: { role: 'user' | 'assistant' | 'system'; content: string }[] };

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'messages array required' }, { status: 400 });
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
      max_tokens: 400,
      temperature: 0.7,
    });

    const content = response.choices[0]?.message?.content?.trim() || 'Sorry, I could not generate a response.';
    return NextResponse.json({ message: content });
  } catch (err) {
    console.error('[api/chat]', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
