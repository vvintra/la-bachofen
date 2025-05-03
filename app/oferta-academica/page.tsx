"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BookOpen, Clock, Search, GraduationCap, Award } from "lucide-react"

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

export default function OfertaAcademicaPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const carrerasGrado = [
    {
      nombre: "Agrimensura",
      duracion: "5 años",
      descripcion: "Formación en medición, representación y delimitación de terrenos y propiedades.",
    },
    {
      nombre: "Diseño de Iluminación",
      duracion: "4 años",
      descripcion: "Especialización en el diseño de sistemas de iluminación para interiores y exteriores.",
    },
    {
      nombre: "Ingeniería Azucarera",
      duracion: "5 años",
      descripcion: "Especialización en procesos industriales relacionados con la producción de azúcar.",
    },
    {
      nombre: "Ingeniería Biomédica",
      duracion: "5 años",
      descripcion: "Aplicación de principios de ingeniería a problemas médicos y biológicos.",
    },
    {
      nombre: "Ingeniería Civil",
      duracion: "5 y 1/2 años",
      descripcion: "Diseño, construcción y mantenimiento de infraestructuras como edificios, puentes y carreteras.",
    },
    {
      nombre: "Ingeniería Eléctrica",
      duracion: "5 años",
      descripcion: "Estudio de la generación, transmisión y distribución de energía eléctrica.",
    },
    {
      nombre: "Ingeniería Electrónica",
      duracion: "5 años",
      descripcion: "Diseño y desarrollo de sistemas electrónicos y circuitos integrados.",
    },
    {
      nombre: "Ingeniería en Computación",
      duracion: "4 y 1/2 años",
      descripcion: "Diseño y desarrollo de sistemas computacionales y hardware.",
    },
    {
      nombre: "Ingeniería en Informática",
      duracion: "5 años",
      descripcion: "Desarrollo de software, sistemas de información y tecnologías informáticas.",
    },
    {
      nombre: "Ingeniería Geodésica y Geofísica",
      duracion: "5 años",
      descripcion: "Estudio de la forma y dimensiones de la Tierra y sus campos gravitatorios y magnéticos.",
    },
    {
      nombre: "Ingeniería Industrial",
      duracion: "5 años",
      descripcion: "Optimización de procesos y sistemas de producción industrial.",
    },
    {
      nombre: "Ingeniería Mecánica",
      duracion: "5 años",
      descripcion: "Diseño, análisis y mantenimiento de sistemas mecánicos y térmicos.",
    },
    {
      nombre: "Ingeniería Química",
      duracion: "5 años",
      descripcion: "Diseño y operación de procesos químicos industriales.",
    },
    {
      nombre: "Licenciatura en Física",
      duracion: "5 años",
      descripcion: "Estudio de las leyes fundamentales que gobiernan el universo y la materia.",
    },
    {
      nombre: "Licenciatura en Informática",
      duracion: "5 años",
      descripcion: "Formación en ciencias de la computación con enfoque teórico y práctico.",
    },
    {
      nombre: "Licenciatura en Matemática",
      duracion: "5 años",
      descripcion: "Estudio avanzado de las matemáticas puras y aplicadas.",
    },
  ]

  const carrerasPreGrado = [
    {
      nombre: "Programador Universitario",
      duracion: "3 años",
      descripcion: "Formación técnica en programación y desarrollo de software.",
    },
    {
      nombre: "Tecnicatura Universitaria en Tecnología Azucarera e Industrias Derivadas",
      duracion: "3 años",
      descripcion: "Formación técnica especializada en la industria azucarera y sus derivados.",
    },
    {
      nombre: "Tecnicatura Universitaria en Física",
      duracion: "3 años",
      descripcion: "Formación técnica en física aplicada y experimental.",
    },
    {
      nombre: "Tecnicatura Universitaria en Física Ambiental",
      duracion: "2 y 1/2 años",
      descripcion: "Especialización técnica en aplicaciones de la física al medio ambiente.",
    },
  ]

  const filteredCarrerasGrado = carrerasGrado.filter((carrera) =>
    carrera.nombre.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredCarrerasPreGrado = carrerasPreGrado.filter((carrera) =>
    carrera.nombre.toLowerCase().includes(searchTerm.toLowerCase()),
  )

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
            Oferta Académica FACET
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Conoce todas las carreras que ofrece la Facultad de Ciencias Exactas y Tecnología
          </p>

          <div className="max-w-md mx-auto mt-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" />
              <Input
                type="text"
                placeholder="Buscar carrera..."
                className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-blue-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </motion.div>

        <Tabs defaultValue="grado" className="space-y-8">
          <TabsList className="flex flex-wrap justify-center gap-2 bg-blue-800/20 p-2 rounded-lg">
            <TabsTrigger className="flex-1 min-w-[120px] text-sm sm:text-base py-2" value="grado">
              Carreras de Grado
            </TabsTrigger>
            <TabsTrigger className="flex-1 min-w-[120px] text-sm sm:text-base py-2" value="pregrado">
              Carreras de Pregrado
            </TabsTrigger>
          </TabsList>

          <TabsContent value="grado">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredCarrerasGrado.length > 0 ? (
                filteredCarrerasGrado.map((carrera, index) => (
                  <motion.div key={index} variants={item} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                    <Card className="relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 transition-all duration-300 h-full">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-xl text-white">{carrera.nombre}</CardTitle>
                            <CardDescription className="text-blue-200 flex items-center mt-2">
                              <Clock className="w-4 h-4 mr-1" /> Duración: {carrera.duracion}
                            </CardDescription>
                          </div>
                          <div className="w-12 h-12 rounded-xl bg-orange-400/20 flex items-center justify-center text-orange-400">
                            <GraduationCap className="w-6 h-6" />
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-blue-100">{carrera.descripcion}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-10">
                  <BookOpen className="w-12 h-12 mx-auto text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white">No se encontraron resultados</h3>
                  <p className="text-blue-200 mt-2">Intenta con otra búsqueda</p>
                </div>
              )}
            </motion.div>
          </TabsContent>

          <TabsContent value="pregrado">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredCarrerasPreGrado.length > 0 ? (
                filteredCarrerasPreGrado.map((carrera, index) => (
                  <motion.div key={index} variants={item} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                    <Card className="relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300 h-full">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-xl text-white">{carrera.nombre}</CardTitle>
                            <CardDescription className="text-blue-200 flex items-center mt-2">
                              <Clock className="w-4 h-4 mr-1" /> Duración: {carrera.duracion}
                            </CardDescription>
                          </div>
                          <div className="w-12 h-12 rounded-xl bg-blue-400/20 flex items-center justify-center text-blue-400">
                            <Award className="w-6 h-6" />
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-blue-100">{carrera.descripcion}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-10">
                  <BookOpen className="w-12 h-12 mx-auto text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white">No se encontraron resultados</h3>
                  <p className="text-blue-200 mt-2">Intenta con otra búsqueda</p>
                </div>
              )}
            </motion.div>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-orange-500/20 to-blue-600/20 border border-white/10 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">¿Necesitas más información?</h3>
          <p className="text-blue-200 max-w-2xl mx-auto mb-6">
            Si tienes dudas sobre alguna carrera, planes de estudio o proceso de inscripción, no dudes en contactarnos.
          </p>
          <a
            href="mailto:info@facet.unt.edu.ar"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-200"
          >
            Contactar por Email
          </a>
        </motion.div>
      </Container>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/5 to-transparent" />
    </div>
  )
}
