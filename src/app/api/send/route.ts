import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

import { EmailForwardToMe, EmailReplyToSender } from "@/app/emails";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const { name, email, subject, message } = await request.json();
        if (!name || !email || !message) {
            return NextResponse.json({ error: "missing fields" });
        }
        // forwards email to me
        const data = await resend.emails.send({
            from: "Izhar <mohamed@izhar.xyz>",
            to: "melegend.forever@protonmail.com",
            subject: `new message from ${name}`,
            reply_to: email as string,
            react: EmailForwardToMe({ name, email, subject, message }),
        });

        // forwards email to sender
        resend.emails.send({
            from: "Izhar <mohamed@izhar.xyz>",
            to: email as string,
            subject: "Thank you for contacting me!",
            reply_to: "melegend.forever@protonmail.com",
            react: EmailReplyToSender({ name }),
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}
