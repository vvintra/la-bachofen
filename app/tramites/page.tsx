"use client"

import React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { FileText, Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"
import { ErrorBoundary } from "react-error-boundary"

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

function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  )
}

export default function TramitesPage() {
  const [error, setError] = React.useState<Error | null>(null)

  React.useEffect(() => {
    // Simulate error checking
    // In a real scenario, you might check for data loading errors, etc.
    const checkForErrors = () => {
      // Example: Uncomment the next line to simulate an error
      // setError(new Error("Simulated error in TramitesPage"));
    }

    checkForErrors()
  }, [])

  if (error) {
    return <ErrorFallback error={error} />
  }

  const tramites = [
    {
      titulo: "Trámite Cambio De Carrera",
      fecha: "19/08/24 al 30/08/24",
      pasos: [
        "Formular nota dirigida al Decano (haciendo el pedido correspondiente)",
        "Hacer el pago del trámite ($1000) en tesorería de la FACET (lunes a viernes de 9 a 12hs, block 3 PB)",
        "Enviar ambas cosas juntas al correo: mesaentradas.facet@herrera.unt.edu.ar",
      ],
    },
    {
      titulo: "Solicitud para Excepción de Correlativas",
      fecha: "19/08/24 al 30/08/24",
      pasos: [
        "Realizar nota dirigida al Decano (solicitando la excepción de correlativa)",
        "Hacer el pago del trámite ($1000) en tesorería de la FACET (lunes a viernes de 9 a 12hs, block 3 PB)",
        "Enviar todo al correo: mesaentradas.facet@herrera.unt.edu.ar",
      ],
    },
    {
      titulo: "Baja de Inscripción",
      fecha: "26/08/24 al 06/09/24",
      pasos: [
        "Elaborar una nota dirigida al Decano (solicitando la baja en la inscripción)",
        "Realizar el pago del trámite ($1000) en tesorería de la FACET (lunes a viernes de 9 a 12hs, block 3 PB)",
        "Enviar foto clara de la nota y comprobante al correo: mesaentradas.facet@herrera.unt.edu.ar",
      ],
    },
    {
      titulo: "Inscripciones a Cursadas por SIU Guaraní",
      fecha: "19/08/24 al 25/08/24",
      pasos: [
        "Autogestionar sus inscripciones a las materias del Segundo Cuatrimestre",
        "Ingresar al sistema SIU Guaraní",
      ],
      especial: true,
    },
    {
      titulo: "Solicitud de inscripción fuera de término",
      fecha: "26/08/24 al 06/09/24",
      pasos: [
        "Formular nota dirigida al decano (colocando nombre de la o las materias)",
        "Realizar el pago del trámite ($1000) en tesorería de la FACET (lunes a viernes de 9 a 12hs, block 3 PB)",
        "Enviar al correo de mesas de entradas la nota y el comprobante: mesaentradas.facet@herrera.unt.edu.ar",
      ],
      importante: "Sin Excepciones",
    },
  ]

  return (
    <div className="min-h-screen bg-blue-950 text-white relative overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <Container className="py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6 mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            Guía de Trámites
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Todo lo que necesitas saber para gestionar tus trámites académicos
          </p>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show" className="grid gap-8 relative">
          {tramites.map((tramite, index) => (
            <motion.div
              key={tramite.titulo}
              variants={item}
              className={`relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm p-6 border border-white/10 hover:border-orange-500/50 transition-all duration-300 ${
                tramite.especial ? "bg-gradient-to-r from-blue-900/50 to-blue-800/50" : ""
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-orange-400">{tramite.titulo}</h3>
                    <div className="flex items-center gap-2 text-blue-200">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{tramite.fecha}</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-orange-400/10 flex items-center justify-center text-orange-400">
                    <FileText className="w-6 h-6" />
                  </div>
                </div>

                <div className="space-y-4">
                  {tramite.importante && <p className="text-orange-400 font-semibold">{tramite.importante}</p>}
                  <ol className="space-y-2">
                    {tramite.pasos.map((paso, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-400/20 text-orange-400 flex items-center justify-center text-sm">
                          {idx + 1}
                        </span>
                        <span className="text-blue-100">{paso}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {!tramite.especial && (
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-sm text-blue-200">
                      Valor del trámite: <span className="text-orange-400 font-semibold">$1000</span>
                    </p>
                  </div>
                )}
              </div>

              {/* Decorative elements */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-orange-500/10 to-transparent -z-10" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-orange-500/20 to-blue-600/20 border border-white/10"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-blue-100 font-medium">¿Necesitas ayuda con algún trámite?</p>
            <a
              href="mailto:mesaentradas.facet@herrera.unt.edu.ar"
              className="group inline-flex items-center gap-2 px-6 py-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-200"
            >
              Contactar Mesa de Entradas
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </Container>

      {/* Decorative torn paper effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/5 to-transparent" />
    </div>
  )
}

