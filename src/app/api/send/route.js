import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "camilo.b.q@hotmail.com",
    subject: "Hello world",
    react: EmailTemplate({ firstName: "Camilo" }),
  });

  if (error) {
    return Response.json({ error });
  }

  return Response.json(data);
}
