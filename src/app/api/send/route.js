import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_RESEND);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["camilo.b.q@hotmail.com"],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "Camilo" }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
