import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { WhatsAppSection } from "@/components/whatsapp-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <WhatsAppSection />
    </div>
  )
}
