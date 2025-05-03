import { NextResponse } from "next/server"

// Esta línea es necesaria para rutas de API en modo de exportación estática
export const dynamic = "force-static"

// Si quieres que los datos se actualicen periódicamente (solo funciona en despliegues con servidor)
// export const revalidate = 3600 // revalidar cada hora

export async function GET() {
  // Nota: En modo estático, esta función se ejecuta SOLO durante el build
  // No se ejecutará en tiempo de ejecución para cada solicitud

  // Aquí puedes poner datos estáticos o hacer fetch a una API externa durante el build
  return NextResponse.json({
    id: "123",
    media_url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GXsjLFHFvlPlmRO6U3KArDIBm2KmkP.png",
    caption: "Latest post from BACHOFEN",
  })
}
