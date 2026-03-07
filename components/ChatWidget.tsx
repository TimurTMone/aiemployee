'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

type Message = { role: 'user' | 'assistant'; content: string };

const WELCOME_MESSAGE =
  "Hi! I'm here to answer questions about AI Employees — our AI front desk for dental clinics. Ask about missed calls, booking, no-shows, or how we work with your phone, chat, and scheduling tools. Want to see it in action? Book a 15-minute demo below.";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [open, messages]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    setInput('');
    const userMessage: Message = { role: 'user', content: text };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Something went wrong.');
        setMessages((prev) => prev.slice(0, -1));
        return;
      }
      setMessages((prev) => [...prev, { role: 'assistant', content: data.message }]);
    } catch {
      setError('Network error. Please try again.');
      setMessages((prev) => prev.slice(0, -1));
    } finally {
      setLoading(false);
    }
  }

  const showWelcome = messages.length === 0 && !loading;

  return (
    <>
      {/* Floating button */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white shadow-lg transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        {open ? (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-40 flex w-full max-w-sm flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl"
          role="dialog"
          aria-label="Chat with AI Employees"
        >
          <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-3">
            <span className="font-semibold text-slate-900">Chat with us</span>
            <Link
              href="#demo-form"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-slate-800"
            >
              Book demo
            </Link>
          </div>

          <div
            ref={listRef}
            className="flex max-h-[320px] min-h-[200px] flex-col gap-3 overflow-y-auto p-4"
          >
            {showWelcome && (
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-slate-100 px-4 py-3 text-sm text-slate-800">
                  {WELCOME_MESSAGE}
                </div>
              </div>
            )}
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                    m.role === 'user'
                      ? 'rounded-tr-sm bg-slate-900 text-white'
                      : 'rounded-tl-sm bg-slate-100 text-slate-800'
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-tl-sm bg-slate-100 px-4 py-3 text-sm text-slate-500">
                  Thinking…
                </div>
              </div>
            )}
            {error && (
              <p className="text-sm text-red-600" role="alert">
                {error}
              </p>
            )}
          </div>

          <form onSubmit={handleSubmit} className="border-t border-slate-200 p-3">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about AI front desk, booking, no-shows..."
                className="min-w-0 flex-1 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500"
                disabled={loading}
                aria-label="Message"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800 disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
