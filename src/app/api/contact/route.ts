// src/app/api/contact/route.ts
export const dynamic = "force-dynamic"; // allow request.json()
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || "";
const SENDGRID_FROM = process.env.SENDGRID_FROM || "";
const SENDGRID_TO   = process.env.SENDGRID_TO   || "";
const SITE_NAME     = process.env.SITE_NAME     || "Rajesh Sharma";

if (!SENDGRID_API_KEY || !SENDGRID_FROM || !SENDGRID_TO) {
  console.warn("[Contact] Missing env vars", {
    hasKey: !!SENDGRID_API_KEY,
    hasFrom: !!SENDGRID_FROM,
    hasTo: !!SENDGRID_TO,
  });
}

sgMail.setApiKey(SENDGRID_API_KEY);
console.log("[Contact] route handler loaded");

export async function GET() {
  // Simple health check so you can hit /api/contact in the browser
  return NextResponse.json({ ok: true, via: "GET" });
}

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, type, message } = await req.json();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // 1) Notification to you
    await sgMail.send({
      to: SENDGRID_TO,
      from: SENDGRID_FROM, // must be a verified sender in SendGrid
      subject: `New contact — ${firstName} ${lastName} (${type})`,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nInterest: ${type}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${firstName} ${lastName}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Interest:</strong> ${type}</p>
             <p>${(message || "").replace(/\n/g, "<br/>")}</p>`,
    });

    // 2) Auto-reply to the sender
    await sgMail.send({
      to: email,
      from: SENDGRID_FROM,
      bcc: SENDGRID_TO, 
      // replyTo: SENDGRID_TO,
      subject: `Thanks for contacting ${SITE_NAME}!`,
      text: `Hi ${firstName},

Thanks for reaching out. I received your message and will get back to you soon.

Interest: ${type}
Message: ${message}

Best,
${SITE_NAME}
`,
      html: `<p>Hi ${firstName},</p>
             <p>Thanks for reaching out — I received your message and will get back to you soon.</p>
             <p><strong>Interest:</strong> ${type}</p>
             <p>${(message || "").replace(/\n/g, "<br/>")}</p>
             <p>Best,<br/>${SITE_NAME}</p>`,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("Send email failed");
    const msg =
      "Email send failed";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}