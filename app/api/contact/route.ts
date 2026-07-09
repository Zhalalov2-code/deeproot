import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// nodemailer needs the Node.js runtime (not the Edge runtime).
export const runtime = "nodejs";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  message?: unknown;
  // Honeypot: real users never see or fill this field.
  company_url?: unknown;
};

function asTrimmedString(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Honeypot filled → treat as spam, but answer OK so the bot gets no signal.
  if (asTrimmedString(body.company_url, 200).length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = asTrimmedString(body.name, 120);
  const email = asTrimmedString(body.email, 200);
  const company = asTrimmedString(body.company, 160);
  const message = asTrimmedString(body.message, 5000);

  const errors: Record<string, string> = {};
  if (!name) errors.name = "required";
  if (!email) errors.email = "required";
  else if (!EMAIL_REGEX.test(email)) errors.email = "invalid";
  if (!message) errors.message = "required";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, error: "validation", fields: errors }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE, CONTACT_TO, CONTACT_FROM } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("[contact] SMTP configuration is missing. Set SMTP_HOST, SMTP_USER and SMTP_PASS in .env.local.");
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 500 });
  }

  const port = Number(SMTP_PORT ?? 587);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    // Port 465 uses implicit TLS; 587/25 upgrade via STARTTLS. Allow explicit override.
    secure: SMTP_SECURE ? SMTP_SECURE === "true" : port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS }
  });

  const recipient = CONTACT_TO ?? SMTP_USER;
  const sender = CONTACT_FROM ?? SMTP_USER;
  const submittedAt = new Date().toISOString();

  const textBody = [
    "Neue Kontaktanfrage über deeproot.one",
    "----------------------------------------",
    `Name:        ${name}`,
    `E-Mail:      ${email}`,
    `Unternehmen: ${company || "—"}`,
    "",
    "Nachricht:",
    message,
    "",
    "----------------------------------------",
    `Gesendet: ${submittedAt}`
  ].join("\n");

  const esc = (value: string) =>
    value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const htmlBody = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#0b1b33;line-height:1.6">
      <h2 style="margin:0 0 16px">Neue Kontaktanfrage</h2>
      <table style="border-collapse:collapse">
        <tr><td style="padding:4px 12px 4px 0;font-weight:bold">Name</td><td>${esc(name)}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;font-weight:bold">E-Mail</td><td><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
        <tr><td style="padding:4px 12px 4px 0;font-weight:bold">Unternehmen</td><td>${esc(company) || "—"}</td></tr>
      </table>
      <p style="margin:16px 0 4px;font-weight:bold">Nachricht</p>
      <p style="white-space:pre-wrap;margin:0">${esc(message)}</p>
      <hr style="margin:20px 0;border:none;border-top:1px solid #d7e3f4" />
      <p style="font-size:12px;color:#6b7a90;margin:0">Gesendet über das Kontaktformular auf deeproot.one · ${submittedAt}</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"DeepRoot Kontaktformular" <${sender}>`,
      to: recipient,
      replyTo: `"${name}" <${email}>`,
      subject: `Neue Kontaktanfrage${company ? ` – ${company}` : ""} (${name})`,
      text: textBody,
      html: htmlBody
    });
  } catch (error) {
    console.error("[contact] Failed to send email:", error);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
