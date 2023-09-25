"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    console.log(formData);
    const senderName = formData.get("name");
    const senderEmail = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    if (!senderName || !senderEmail || !subject || !message) {
        return;
    }

    // forwards email to me
    resend.emails.send({
        from: "Izhar <mohamed@izhar.xyz>",
        to: "melegend.forever@protonmail.com",
        subject: `new message from ${senderName}`,
        reply_to: senderEmail as string,
        text: message as string,
    });

    // forwards email to sender
    resend.emails.send({
        from: "Izhar <mohamed@izhar.xyz>",
        to: senderEmail as string,
        subject: "Thank you for contacting me!",
        reply_to: "melegend.forever@protonmail.com",
        text: "I will get back to you as soon as possible.",
    });
};
