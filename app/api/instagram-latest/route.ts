import { NextResponse } from "next/server"

export async function GET() {
  // Note: You'll need to implement the actual Instagram API integration here
  // This is just a placeholder response
  return NextResponse.json({
    id: "123",
    media_url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GXsjLFHFvlPlmRO6U3KArDIBm2KmkP.png",
    caption: "Latest post from BACHOFEN",
  })
}

