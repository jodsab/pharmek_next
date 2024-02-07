/* import { EmailTemplate } from "@/components/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();

  const {
    Nombre = "Nombre",
    Apellido = "Apellido",
    Email = "Email",
    Phone = "Phone",
    Edad = "Edad",
    Asunto = "Asunto",
    Mensaje = "Mensaje",
    Ocupation = "Ocupation",
  } = body;

  try {
    const data = await resend.emails.send({
      from: "Pharmek <onboarding@resend.dev>",
      to: ["contacto@pharmek.com"],
      subject: Asunto,
      react: EmailTemplate({
        Nombre,
        Apellido,
        Email,
        Phone,
        Edad,
        Asunto,
        Mensaje,
        Ocupation,
      }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
 */
