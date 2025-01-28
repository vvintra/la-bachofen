"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Calendar, Clock, MapPin } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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

interface Event {
  title: string
  date: string
  time?: string
  location?: string
  description?: string
  registrationPeriod?: string
}

export default function CalendarioPage() {
  const events = {
    suficiencia: [
      {
        title: "Prueba de suficiencia - Enero 2025",
        date: "JUEVES 30/01",
        time: "09:45 am",
        location: "ANFITEATRO A2",
        description: "Evaluación presencial integral de ejercicios prácticos",
        registrationPeriod: "Inscripción virtual desde el 16/12 al 27/01",
      },
      {
        title: "Prueba de suficiencia - Marzo 2025",
        date: "Miércoles 12/03",
        time: "07:45 am",
        location: "ANFITEATRO A1",
        description: "Evaluación presencial integral de ejercicios prácticos",
        registrationPeriod: "Inscripción virtual desde el 17/02 al 03/03",
      },
    ],
    primerCuatrimestre: [
      {
        title: "Inicio de clases",
        date: "Lunes 17/03",
        description: "Inicio de clase del primer cuatrimestre",
      },
      {
        title: "Inscripción 1er Año",
        date: "Lunes 10/03 al Domingo 23/03",
        description: "Período de Inscripción asignaturas de 1er Año de todas las carreras",
      },
      {
        title: "Inscripción general",
        date: "Lunes 17/03 al Domingo 23/03",
        description: "Período de Inscripción asignaturas del primer cuatrimestre y materias anuales",
      },
      {
        title: "Finalización de clases",
        date: "Viernes 04/07",
        description: "Finalización de clases del primer cuatrimestre de 2025",
      },
      {
        title: "Receso invernal",
        date: "Lunes 07/07 al Domingo 20/07",
        description: "RECESO INVERNAL (a confirmar con Resolución Rectoral)",
      },
      {
        title: "Período de Recuperaciones",
        date: "Lunes 21/07 al Viernes 15/08",
        description: "Período de Recuperaciones Primer cuatrimestre 2025",
      },
    ],
    segundoCuatrimestre: [
      {
        title: "Inscripción",
        date: "Lunes 18/08 al Domingo 24/08",
        description: "Período de Inscripción asignaturas segundo cuatrimestre",
      },
      {
        title: "Inicio de clases",
        date: "Lunes 18/08",
        description: "Inicio de clase del segundo cuatrimestre de 2025",
      },
      {
        title: "Finalización de clases",
        date: "Viernes 05/12",
        description: "Finalización segundo cuatrimestre de 2025",
      },
      {
        title: "Período de Recuperaciones",
        date: "Lunes 09/02/2026 al Viernes 06/03/2026",
        description: "Período de Recuperaciones Segundo cuatrimestre 2025",
      },
    ],
    examenes: [
      {
        title: "Turno Julio-Agosto",
        date: "Múltiples fechas",
        description:
          "• Viernes, 4 de julio de 2025\n• Miércoles, 23 de julio de 2025\n• Lunes, 4 de agosto de 2025\n• Viernes, 15 de agosto de 2025",
      },
      {
        title: "Turno Diciembre",
        date: "Múltiples fechas",
        description: "• Viernes, 12 de diciembre de 2025\n• Lunes, 22 de diciembre de 2025",
      },
      {
        title: "Turno Febrero-Marzo 2026",
        date: "Múltiples fechas",
        description:
          "• Lunes, 16 de febrero de 2026\n• Miércoles, 25 de febrero de 2026\n• Viernes, 06 de marzo de 2026\n• Lunes, 16 de marzo de 2026",
      },
    ],
  }

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
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            Calendario Académico 2025
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Mantente al día con todas las fechas importantes del año académico
          </p>
        </motion.div>

        <Tabs defaultValue="suficiencia" className="space-y-8">
          <TabsList className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-transparent">
            {[
              ["suficiencia", "Pruebas de Suficiencia"],
              ["primerCuatrimestre", "Primer Cuatrimestre"],
              ["segundoCuatrimestre", "Segundo Cuatrimestre"],
              ["examenes", "Mesas de Examen"],
            ].map(([value, label]) => (
              <TabsTrigger
                key={value}
                value={value}
                className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
              >
                {label}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(events).map(([period, periodEvents]) => (
            <TabsContent key={period} value={period}>
              <motion.div variants={container} initial="hidden" animate="show" className="grid gap-6">
                {periodEvents.map((event, index) => (
                  <motion.div key={index} variants={item} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                    <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 transition-all duration-300 p-6">
                      <div className="space-y-4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="space-y-2">
                            <h3 className="text-xl font-bold text-white">{event.title}</h3>
                            <div className="flex items-center gap-2 text-orange-400">
                              <Calendar className="w-4 h-4" />
                              <span>{event.date}</span>
                              {event.time && (
                                <>
                                  <Clock className="w-4 h-4 ml-2" />
                                  <span>{event.time}</span>
                                </>
                              )}
                              {event.location && (
                                <>
                                  <MapPin className="w-4 h-4 ml-2" />
                                  <span>{event.location}</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>

                        {event.description && <p className="text-blue-200">{event.description}</p>}

                        {event.registrationPeriod && (
                          <div className="mt-4 pt-4 border-t border-white/10">
                            <p className="text-sm text-orange-400">{event.registrationPeriod}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-orange-500/20 to-blue-600/20 border border-white/10 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Preinscripciones 2025</h3>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Del 09/12/2024 al 31/03/2025 mediante el SISTEMA SIU GUARANI
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <a
              href="https://guarani.unt.edu.ar/preinscripciones/facet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-200"
            >
              Sistema SIU GUARANI
            </a>
            <a
              href="https://forms.gle/LtB4b8oxQ7tCghcn7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-200"
            >
              Enviar documentación
            </a>
          </div>
        </motion.div>
      </Container>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/5 to-transparent" />
    </div>
  )
}

