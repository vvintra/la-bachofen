"use client"

import { useParams, notFound } from "next/navigation"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, BookOpen, Calendar, GraduationCap, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CarreraPage() {
  const { carrera } = useParams()

  // Esta es una página de ejemplo para mostrar cómo se vería una carrera específica
  // En una implementación real, buscarías la información de la carrera en una base de datos

  const carreraInfo = {
    nombre: "Ingeniería en Computación",
    duracion: "4 años y medio",
    descripcion:
      "La carrera de Ingeniería en Computación forma profesionales capacitados para diseñar, desarrollar y mantener sistemas computacionales, tanto a nivel de hardware como de software.",
    modulos: [
      {
        nombre: "Módulo I - Primer Cuatrimestre",
        materias: ["Cálculo I", "Álgebra I", "Física I", "Fundamentos de Química General"],
      },
      {
        nombre: "Módulo II - Segundo Cuatrimestre",
        materias: ["Cálculo II", "Álgebra II", "Física II", "Informática", "Sistemas de Representación"],
      },
      {
        nombre: "Módulo III - Primer Cuatrimestre",
        materias: ["Cálculo III", "Física III", "Circuito I", "Programación I"],
      },
      {
        nombre: "Módulo IV - Segundo Cuatrimestre",
        materias: ["Cálculo IV", "Probabilidad y Estadística", "Electrónica I", "Programación II"],
      },
      {
        nombre: "Módulo V - Primer Cuatrimestre",
        materias: [
          "Diseño Lógico I",
          "Estructura de Datos y Algoritmos",
          "Lógica y Álgebra Discreta",
          "Materiales y Dispositivos Electrónicos",
        ],
      },
      {
        nombre: "Módulo VI - Segundo Cuatrimestre",
        materias: ["Base de Datos", "Fundamentos de Redes", "Métodos Numéricos", "Sistemas con Microprocesadores"],
      },
      {
        nombre: "Módulo VII - Primer Cuatrimestre",
        materias: [
          "Arquitectura de Computadoras",
          "Fundamentos de Telecomunicaciones",
          "Ingeniería de Software",
          "Inteligencia Artificial",
        ],
      },
      {
        nombre: "Módulo VIII - Segundo Cuatrimestre",
        materias: [
          "Protocolos de Comunicación TCP-IP",
          "Sistemas Operativos",
          "Taller de Legislación y Organizaciones",
          "Transmisión de Datos",
          "Gestión Ambiental, Salud Ocupacional y Seguridad",
        ],
      },
      {
        nombre: "Módulo IX - Primer Cuatrimestre",
        materias: [
          "Administración de Proyectos",
          "Redes de Área Extendida",
          "Procesamiento Digital de Señales",
          "Gestión de Tecnología de la Información",
          "Laboratorio de Bases de Datos",
        ],
      },
    ],
    perfilProfesional:
      "El Ingeniero en Computación es un profesional capacitado para diseñar, desarrollar, implementar y mantener sistemas computacionales, tanto a nivel de hardware como de software. Puede desempeñarse en empresas de desarrollo de software, telecomunicaciones, industrias con procesos automatizados, y en general en cualquier organización que requiera soluciones tecnológicas avanzadas.",
    campoLaboral:
      "Los graduados pueden trabajar en empresas de desarrollo de software, telecomunicaciones, industrias con procesos automatizados, consultoras tecnológicas, instituciones educativas, centros de investigación, y emprendimientos propios.",
  }

  if (!carreraInfo) {
    return notFound()
  }

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
        <Link
          href="/oferta-academica"
          className="inline-flex items-center text-blue-300 hover:text-orange-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Volver a Oferta Académica
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            {carreraInfo.nombre}
          </h1>

          <div className="flex flex-wrap gap-4 items-center text-blue-200">
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2 text-orange-400" />
              <span>Duración: {carreraInfo.duracion}</span>
            </div>
            <div className="flex items-center">
              <GraduationCap className="w-5 h-5 mr-2 text-orange-400" />
              <span>Título: Ingeniero/a en Computación</span>
            </div>
          </div>

          <p className="text-lg text-blue-100 max-w-3xl">{carreraInfo.descripcion}</p>
        </motion.div>

        <Tabs defaultValue="plan" className="space-y-8">
          <TabsList className="flex flex-wrap justify-center gap-2 bg-blue-800/20 p-2 rounded-lg">
            <TabsTrigger className="flex-1 min-w-[120px] text-sm sm:text-base py-2" value="plan">
              Plan de Estudios
            </TabsTrigger>
            <TabsTrigger className="flex-1 min-w-[120px] text-sm sm:text-base py-2" value="perfil">
              Perfil Profesional
            </TabsTrigger>
          </TabsList>

          <TabsContent value="plan">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <Calendar className="w-6 h-6 mr-2 text-orange-400" />
                  Plan de Estudios
                </CardTitle>
                <CardDescription className="text-blue-200">
                  Organización curricular por módulos y materias
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {carreraInfo.modulos.map((modulo, index) => (
                  <div key={index} className="border border-white/10 rounded-lg p-4 bg-white/5">
                    <h3 className="text-lg font-semibold text-orange-400 mb-3">{modulo.nombre}</h3>
                    <ul className="space-y-2">
                      {modulo.materias.map((materia, mIndex) => (
                        <li key={mIndex} className="flex items-start">
                          <span className="inline-block w-2 h-2 rounded-full bg-orange-400 mt-2 mr-2"></span>
                          <span className="text-blue-100">{materia}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="perfil">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <BookOpen className="w-6 h-6 mr-2 text-orange-400" />
                  Perfil Profesional
                </CardTitle>
                <CardDescription className="text-blue-200">Competencias y campo laboral</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border border-white/10 rounded-lg p-4 bg-white/5">
                  <h3 className="text-lg font-semibold text-orange-400 mb-3">Perfil del Graduado</h3>
                  <p className="text-blue-100">{carreraInfo.perfilProfesional}</p>
                </div>

                <div className="border border-white/10 rounded-lg p-4 bg-white/5 mt-4">
                  <h3 className="text-lg font-semibold text-orange-400 mb-3">Campo Laboral</h3>
                  <p className="text-blue-100">{carreraInfo.campoLaboral}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-orange-500/20 to-blue-600/20 border border-white/10 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">¿Interesado en esta carrera?</h3>
          <p className="text-blue-200 max-w-2xl mx-auto mb-6">
            Si deseas más información sobre el proceso de inscripción, requisitos o contenidos específicos, no dudes en
            contactarnos.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:info@facet.unt.edu.ar"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-200"
            >
              Contactar por Email
            </a>
            <Link
              href="/ingreso"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-all duration-200"
            >
              Información de Ingreso
            </Link>
          </div>
        </motion.div>
      </Container>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/5 to-transparent" />
    </div>
  )
}
