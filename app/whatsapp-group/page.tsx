"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { PhoneIcon as WhatsappIcon, Users, MessageCircle, Share2 } from "lucide-react"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function WhatsAppGroupPage() {
  const groups = [
    {
      title: "Canal de Difusión",
      description: "Recibe todas las novedades importantes directamente en tu WhatsApp",
      icon: Share2,
      members: "1000+",
      features: ["Novedades académicas", "Fechas importantes", "Avisos oficiales", "Eventos especiales"],
      link: "https://whatsapp.com/channel/0029VaZN3u9EwEk4LvU48O2y",
    },
    {
      title: "Grupo de Ingreso FACET",
      description: "Comunidad exclusiva para ingresantes. Conecta con otros estudiantes y recibe apoyo.",
      icon: Users,
      members: "500+",
      features: ["Consultas sobre ingreso", "Material de estudio", "Fechas importantes", "Apoyo entre estudiantes"],
      link: "https://chat.whatsapp.com/BzdRNIFgyUnAgXYxdk9F4F",
    },
    {
      title: "Grupo BACHOFEN",
      description: "La comunidad más grande de estudiantes de la FACET",
      icon: MessageCircle,
      members: "2000+",
      features: ["Recursos académicos", "Consultas generales", "Eventos estudiantiles", "Networking"],
      link: "https://whatsapp.com/channel/0029VaZN3u9EwEk4LvU48O2y",
    },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden pt-20">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <Container className="py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6 mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
            Comunidad WhatsApp
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Mantente conectado con toda la comunidad estudiantil
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {groups.map((group) => (
            <motion.div key={group.title} variants={item} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-500/50 transition-all duration-300">
                <div className="p-8 space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-green-100/10 flex items-center justify-center text-green-400">
                    <group.icon className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">{group.title}</h3>
                    <p className="text-blue-200">{group.description}</p>
                  </div>

                  <ul className="space-y-3">
                    {group.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-blue-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-end pt-4 border-t border-white/10">
                    <a
                      href={group.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-green-500 text-white hover:bg-green-600 transition-all duration-200"
                    >
                      <WhatsappIcon className="w-4 h-4" />
                      Unirse
                    </a>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-green-500/10 to-transparent -z-10" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-green-500/20 to-blue-600/20 border border-white/10 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">¿No encontrás tu grupo?</h3>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Si eres delegado o quieres crear un nuevo grupo para tu carrera, contáctanos
          </p>
          <a
            href="https://www.instagram.com/labachofen/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 mt-6 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-200"
          >
            Contactar por Instagram
            <Share2 className="w-4 h-4" />
          </a>
        </motion.div>
      </Container>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/5 to-transparent" />
    </div>
  )
}
