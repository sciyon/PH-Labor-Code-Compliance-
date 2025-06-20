import { Resend } from "resend";
import { NextResponse } from "next/server";
import { EmailTemplate } from "@/components/EmailTemplate";
import { questions } from "@/lib/questions";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { email, answers, theme } = await request.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "PH Labor Code Compliance <onboarding@resend.dev>",
      to: [email],
      subject: "Your Labor Code Compliance Assessment Results",
      react: EmailTemplate({ answers, questions, theme }) as React.ReactElement,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
