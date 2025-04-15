import { NextResponse } from "next/server"

export async function GET() {
  try {
    const response = await fetch(
      `https://desk.zoho.com/support/GenerateCaptcha?action=getNewCaptcha&_=${new Date().getTime()}`,
    )

    if (!response.ok) {
      return NextResponse.json({ error: "Error al obtener el captcha" }, { status: response.status })
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error generating captcha:", error)
    return NextResponse.json({ error: "Error al generar el captcha" }, { status: 500 })
  }
}
