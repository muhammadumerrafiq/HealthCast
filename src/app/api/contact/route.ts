import { NextResponse } from "next/server";
import { site } from "@/lib/site";

/**
 * Contact form endpoint.
 *
 * Set RESEND_API_KEY (and optionally CONTACT_TO / CONTACT_FROM) to start
 * delivering enquiries. Without it the route returns 503 and the form falls
 * back to a pre-filled mail link, so nothing is ever silently swallowed.
 */

type Payload = {
  name?: string;
  email?: string;
  organisation?: string;
  service?: string;
  message?: string;
  /** Honeypot — real users never fill this in. */
  website?: string;
};

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Silently accept honeypot hits so bots do not learn anything.
  if (body.website) return NextResponse.json({ ok: true });

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Please enter your name.";
  if (!isEmail(email)) errors.email = "Please enter a valid email address.";
  if (message.length < 10) errors.message = "Please tell us a little more.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY ?? "6bfb40db-11c8-4d8f-a664-cf8a64da79f0";

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        organisation: body.organisation?.trim() || "—",
        service: body.service?.trim() || "General Enquiry",
        message,
        subject: `New enquiry — ${name}${body.organisation ? ` (${body.organisation})` : ""}`,
      }),
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok || !result.success) {
      return NextResponse.json(
        { error: "send_failed", message: "Something went wrong. Please try again in a moment." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "send_failed", message: "Something went wrong. Please try again in a moment." },
      { status: 502 },
    );
  }
}
