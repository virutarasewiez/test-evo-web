import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    // Enviar los datos a Zoho Desk
    const response = await fetch("https://desk.zoho.com/support/WebToCase", {
      method: "POST",
      body: formData,
      // No incluimos headers personalizados para evitar problemas con preflight CORS
    })

    // Si la respuesta es exitosa, devolvemos un mensaje de éxito
    if (response.ok) {
      return NextResponse.json({ success: true })
    } else {
      // Si hay un error en la respuesta, devolvemos el código de estado y el mensaje
      const errorText = await response.text()
      console.error("Error from Zoho:", errorText)
      return NextResponse.json(
        { error: "Error al enviar el formulario a Zoho", details: errorText },
        { status: response.status },
      )
    }
  } catch (error) {
    console.error("Error submitting form:", error)
    return NextResponse.json({ error: "Error al procesar el formulario" }, { status: 500 })
  }
}
