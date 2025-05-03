"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { FileText, Download, Info, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

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

export default function NotasModeloPage() {
  const notasModelos = [
    {
      titulo: "Notas Generales",
      descripcion: "Equiparación de materias, eximición de ingreso, alumno vocacional, etc.",
      link: "https://www.facet.unt.edu.ar/sbe/wp-content/uploads/sites/77/2022/07/Modelo-de-nota-Rev-07.pdf",
    },
    {
      titulo: "Cursado Simultáneo y Cambio de Carrera",
      descripcion: "Solicitud para cursar dos carreras simultáneamente o cambiar de carrera",
      link: "https://www.facet.unt.edu.ar/sbe/wp-content/uploads/sites/77/2022/07/Cursado-Simultaneo-Cambio-de-Carrera.pdf",
    },
    {
      titulo: "Inscripción fuera de término",
      descripcion: "Solicitud para inscribirse a materias fuera del período establecido",
      link: "https://www.facet.unt.edu.ar/sbe/wp-content/uploads/sites/77/2022/07/Inscripcion-fuera-de-ternimo.pdf",
    },
    {
      titulo: "Extensión de Regularidad",
      descripcion: "Solicitud para extender el período de regularidad de una materia",
      link: "https://www.facet.unt.edu.ar/sbe/wp-content/uploads/sites/77/2022/07/Extension-de-Regularidad.pdf",
    },
    {
      titulo: "Excepción de Correlativas",
      descripcion: "Solicitud para cursar materias sin tener aprobadas las correlativas",
      link: "https://www.facet.unt.edu.ar/sbe/wp-content/uploads/sites/77/2022/07/Excepcion-de-Correlativas.pdf",
    },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden pt-20">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
            Notas Modelo
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">Modelos oficiales de notas para trámites académicos</p>
        </motion.div>

        <Alert className="mb-8 bg-blue-900/50 border-blue-700">
          <Info className="h-5 w-5 text-blue-400" />
          <AlertTitle className="text-blue-200">Información importante</AlertTitle>
          <AlertDescription className="text-blue-300">
            Las notas deben ser presentadas escaneadas vía mail a Mesa de Entradas:{" "}
            <a
              href="mailto:mesaentradas.facet@herrera.unt.edu.ar"
              className="text-orange-400 hover:text-orange-300 underline"
            >
              mesaentradas.facet@herrera.unt.edu.ar
            </a>
          </AlertDescription>
        </Alert>

        <motion.div variants={container} initial="hidden" animate="show" className="grid gap-6">
          {notasModelos.map((nota, index) => (
            <motion.div key={index} variants={item} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              <Card className="relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl text-white">{nota.titulo}</CardTitle>
                      <CardDescription className="text-blue-200">{nota.descripcion}</CardDescription>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-orange-400/20 flex items-center justify-center text-orange-400">
                      <FileText className="w-6 h-6" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <a
                    href={nota.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500/20 text-orange-400 hover:bg-orange-500/30 transition-colors duration-200"
                  >
                    <Download className="w-4 h-4" /> Descargar modelo
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-orange-500/20 to-blue-600/20 border border-white/10"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Información sobre trámites y pagos</h3>
          <div className="space-y-4 text-blue-200">
            <p>El trámite de eximición de ingreso y equiparación de materias se debe realizar de forma física.</p>
            <p>
              A partir del <strong>19/02/24</strong>, todos los trámites deben abonarse en{" "}
              <strong>Tesorería de la Facultad</strong>, Block 3, Planta Baja, de lunes a viernes, de 8 a 12 hs. Sólo se
              abona en efectivo.
            </p>
            <p>
              La <strong>Solicitud de la Constancia de Ingreso Aprobado</strong> y los{" "}
              <strong>Pagos de las Instancias del Ingreso</strong> se realizan de manera virtual, a través de Mi Tienda
              Nube:
            </p>
            <a
              href="https://acoopfacet.mitiendanube.com/ingreso-a-facet/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-200"
            >
              Ir a Mi Tienda Nube <ExternalLink className="w-4 h-4" />
            </a>
            <div className="mt-4 p-4 bg-blue-800/30 rounded-lg">
              <p className="italic">
                <span className="underline">Procedimiento de Pago</span>: Selecciona «AGREGAR AL CARRITO» (Cantidad 1) y
                selecciona en «INICIAR COMPRA». Luego continúa con los pasos del proceso de compra para poder abonar tu
                solicitud (Notas dirigidas al Decano: $ 1.000). Cuando soliciten los datos de facturación se debe
                ingresar los datos del alumno, independientemente de que el titular de la tarjeta con la que se pague
                sea de otra persona.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/5 to-transparent" />
    </div>
  )
}
