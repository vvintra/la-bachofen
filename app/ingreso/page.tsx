"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, FileText, GraduationCap, Users, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function IngresoPage() {
  const [isOpen, setIsOpen] = useState(false)
  const tabItems = [
    { value: "info", label: "Información General" },
    { value: "courses", label: "Cursos de Nivelación" },
    { value: "tests", label: "Pruebas de Suficiencia" },
    { value: "faq", label: "Preguntas Frecuentes" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-950 text-white">
      <Container className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6 mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold">Ingreso FACET</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Bienvenido a la Facultad de Ciencias Exactas y Tecnología de la Universidad Nacional de Tucumán. Aquí
            encontrarás información importante para tu ingreso.
          </p>
        </motion.div>

        <Tabs defaultValue="info" className="space-y-8">
          <div className="relative mb-4 md:mb-0">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-full flex items-center justify-between p-2 bg-blue-800/20 rounded-lg text-white"
            >
              <span>Seleccionar sección</span>
              <ChevronDown className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {isOpen && <div className="fixed inset-0 bg-blue-950/80 z-40 md:hidden" onClick={() => setIsOpen(false)} />}
            <TabsList
              className={`${
                isOpen ? "absolute" : "hidden"
              } md:relative md:flex z-50 w-full flex-col md:flex-row md:grid md:grid-cols-4 gap-2 bg-blue-800/20 p-2 rounded-lg shadow-lg`}
            >
              {tabItems.map((item) => (
                <TabsTrigger
                  key={item.value}
                  value={item.value}
                  onClick={() => setIsOpen(false)}
                  className="w-full text-left md:text-center"
                >
                  {item.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="info">
            <Card className="bg-blue-800/20 border-blue-700">
              <CardHeader>
                <CardTitle>Información General</CardTitle>
                <CardDescription className="text-blue-200">
                  Proceso de inscripción y requisitos para el ingreso
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Pasos para la Inscripción</h3>
                  <div className="space-y-4">
                    <div className="bg-blue-900/30 p-4 rounded-lg">
                      <p className="font-semibold text-orange-400 mb-2">1. Pago de Inscripción</p>
                      <p className="text-blue-200">$2.000 (efectivo) hasta el miércoles 11/12</p>
                      <p className="text-blue-200">Lugar: Tesorería de la FACET (Planta Baja del Block 3)</p>
                      <p className="text-blue-200">Horario: Lunes a Viernes, de 8 a 12</p>
                    </div>

                    <div className="bg-blue-900/30 p-4 rounded-lg">
                      <p className="font-semibold text-orange-400 mb-2">2. Pre-inscripción (UNA SOLA CARRERA)</p>
                      <p className="text-blue-200">Realizar la pre-inscripción a través del sistema SIU Guaraní</p>
                      <Button className="mt-2" asChild>
                        <Link href="https://guarani.unt.edu.ar/preinscripciones/facet/">Acceder al SIU Guaraní</Link>
                      </Button>
                    </div>

                    <div className="bg-blue-900/30 p-4 rounded-lg">
                      <p className="font-semibold text-orange-400 mb-2">3. Presentación de Documentación</p>
                      <p className="text-blue-200 mb-2">Presentar la siguiente documentación de manera virtual:</p>
                      <ul className="list-disc list-inside space-y-2 text-blue-200">
                        <li>Ficha pre-inscripción</li>
                        <li>Comprobante de Pago de Inscripción</li>
                        <li>DNI (escaneado color de ambos lados)</li>
                        <li>Acta de Nacimiento legalizada y actualizada</li>
                        <li>Certificado Analítico de Estudios Secundarios o Constancia de Título en trámite</li>
                        <li>Fotografía color tipo carnet 4x4 (fondo claro frente perfil derecho)</li>
                      </ul>
                      <Button className="mt-4" asChild>
                        <Link href="https://forms.gle/5uDvKFkpBSTZ68Dn6">Formulario de Documentación</Link>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Eximición de Ingreso</h3>
                  <div className="bg-blue-900/30 p-4 rounded-lg space-y-4">
                    <p className="text-blue-200">
                      Puedes solicitar la eximición del ingreso si cuentas con alguna de estas condiciones:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-blue-200">
                      <li>Constancia de Ingreso Aprobado</li>
                      <li>Matemática aprobada en cualquier carrera Universitaria</li>
                      <li>Matemática de Nivel Terciario (sujeto a evaluación del programa)</li>
                    </ul>

                    <div className="mt-4">
                      <p className="font-semibold text-orange-400 mb-2">Proceso de Eximición:</p>
                      <ol className="list-decimal list-inside space-y-2 text-blue-200">
                        <li>Presentar nota dirigida al decano en Mesa de Entradas (Block 3, PB)</li>
                        <li>Adjuntar Estado Académico de la institución de origen</li>
                        <li>Incluir programas legalizados de materias a equiparar</li>
                        <li>Adjuntar comprobante de pago del trámite</li>
                        <li>Presentar Cancelación de Matrícula (si proviene de otra universidad)</li>
                      </ol>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-orange-500/20 rounded-lg">
                  <p className="text-white font-semibold">Inicio de Clases</p>
                  <p className="text-blue-200">Las clases inician en modalidad presencial el Lunes 17/03/2025</p>
                </div>

                <div className="mt-6">
                  <p className="text-blue-200">
                    Para consultas sobre preinscripciones, contactar al Depto. Despacho de Dirección Alumnos:
                  </p>
                  <Button variant="link" className="text-orange-400 hover:text-orange-300" asChild>
                    <Link href="mailto:despachoalumnos_facet@herrera.unt.edu.ar">
                      despachoalumnos_facet@herrera.unt.edu.ar
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="courses">
            <Card className="bg-blue-800/20 border-blue-700">
              <CardHeader>
                <CardTitle>Cursos de Nivelación</CardTitle>
                <CardDescription className="text-blue-200">
                  Información sobre los cursos de nivelación disponibles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Curso de Nivelación: Agosto / Noviembre 2024</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc list-inside space-y-2">
                        <li>
                          Inicio: <strong>Semana del 26 de Agosto de 2024</strong>
                        </li>
                        <li>Duración: 15 semanas</li>
                        <li>Carga horaria semanal: 3 clases de 2 horas</li>
                        <li>Modalidades: Presencial y Virtual</li>
                        <li>Inscripción: del 1 de Julio al 22 de Agosto de 2024</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Curso de Nivelación: Febrero 2025</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc list-inside space-y-2">
                        <li>
                          Inicio: <strong>Jueves 30 de Enero de 2025</strong>
                        </li>
                        <li>Duración: 4 ½ semanas</li>
                        <li>Modalidad: Presencial</li>
                        <li>Inscripción Online: del 3 de Diciembre de 2024 al 27 de Enero de 2025</li>
                      </ul>
                      <Button className="mt-4" asChild>
                        <Link href="https://www.facet.unt.edu.ar/ingreso/cursofebrero2025/">
                          Inscripción Online - Curso Febrero 2025
                        </Link>
                      </Button>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tests">
            <Card className="bg-blue-800/20 border-blue-700">
              <CardHeader>
                <CardTitle>Pruebas de Suficiencia</CardTitle>
                <CardDescription className="text-blue-200">
                  Fechas y detalles de las pruebas de suficiencia
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    {
                      date: "Sábado 10 de Agosto de 2024",
                      time: "07:45 hs",
                      location: "Anfiteatro A1",
                      registration: "del 1 de Julio al 8 de Agosto de 2024",
                    },
                    {
                      date: "Sábado 14 de Diciembre de 2024",
                      time: "07:45 hs",
                      location: "Anfiteatro A1",
                      registration: "del 18 de Noviembre al 12 de Diciembre de 2024",
                    },
                    {
                      date: "Jueves 30 de Enero de 2025",
                      time: "09:45 hs",
                      location: "Anfiteatro A2",
                      registration: "del 16 de Diciembre de 2024 al 27 de Enero de 2025",
                    },
                    {
                      date: "Miércoles 12 de Marzo de 2025",
                      time: "07:45 hs",
                      location: "Anfiteatro A1",
                      registration: "del 17 de Febrero al 9 de Marzo de 2025",
                    },
                  ].map((test, index) => (
                    <div key={index} className="bg-blue-700/20 p-4 rounded-lg">
                      <h3 className="font-semibold text-lg mb-2">
                        Prueba de Suficiencia: {test.date.split(" ")[1]} {test.date.split(" ")[2]}
                      </h3>
                      <p>
                        <Calendar className="inline-block mr-2" /> Fecha: <strong>{test.date}</strong> - {test.time}
                      </p>
                      <p>
                        <Users className="inline-block mr-2" /> Lugar: {test.location}
                      </p>
                      <p>
                        <FileText className="inline-block mr-2" /> Inscripción: {test.registration}
                      </p>
                    </div>
                  ))}
                </div>
                <Button className="mt-6" asChild>
                  <Link href="https://www.facet.unt.edu.ar/ingreso/pruebasuficienciamarzo2025/">
                    Inscripción Online - Prueba Suficiencia Marzo 2025
                  </Link>
                </Button>

                <div className="mt-8 space-y-6">
                  <h3 className="text-2xl font-semibold">Ejemplos de Pruebas de Suficiencia</h3>
                  <div className="bg-blue-700/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Ejemplo 1 de Prueba de Suficiencia</h4>
                    <p>
                      Este es un ejemplo de una Prueba de Suficiencia anterior. Estudia este modelo para prepararte
                      mejor.
                    </p>
                  </div>
                  <div className="bg-blue-700/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Ejemplo 2 de Prueba de Suficiencia</h4>
                    <p className="mb-4">
                      A continuación, encontrarás dos imágenes de un ejemplo reciente de Prueba de Suficiencia:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Link
                        href="https://www.facet.unt.edu.ar/ingreso/wp-content/uploads/sites/66/2024/11/SUFICIENCIA-1-Ingreso-Marzo-2024-T1.jpg"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src="https://www.facet.unt.edu.ar/ingreso/wp-content/uploads/sites/66/2024/11/SUFICIENCIA-1-Ingreso-Marzo-2024-T1.jpg"
                          alt="Ejemplo de Prueba de Suficiencia - Parte 1"
                          width={400}
                          height={600}
                          className="rounded-lg hover:opacity-80 transition-opacity"
                        />
                      </Link>
                      <Link
                        href="https://www.facet.unt.edu.ar/ingreso/wp-content/uploads/sites/66/2024/11/SUFICIENCIA-2-Ingreso-Marzo-2024-T1.jpg"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src="https://www.facet.unt.edu.ar/ingreso/wp-content/uploads/sites/66/2024/11/SUFICIENCIA-2-Ingreso-Marzo-2024-T1.jpg"
                          alt="Ejemplo de Prueba de Suficiencia - Parte 2"
                          width={400}
                          height={600}
                          className="rounded-lg hover:opacity-80 transition-opacity"
                        />
                      </Link>
                    </div>
                    <p className="mt-4">Haz clic en las imágenes para verlas en tamaño completo.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="faq">
            <Card className="bg-blue-800/20 border-blue-700">
              <CardHeader>
                <CardTitle>Preguntas Frecuentes</CardTitle>
                <CardDescription className="text-blue-200">
                  Respuestas a las dudas más comunes sobre el ingreso
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>¿Cómo puedo obtener los cuadernillos de teoría y práctica?</AccordionTrigger>
                    <AccordionContent>
                      <p>
                        Podrás adquirir la nueva edición de los Cuadernillos originales de la Teoría y la Práctica de la
                        Nivelación en Matemáticas en nuestra Facultad (Centro Herrera de la UNT - Ingreso por Av.
                        Independencia 1800).
                      </p>
                      <p>
                        Atención presencial desde el jueves 30 de Enero de 2025 en adelante, de lunes a viernes, de 8:00
                        a 12:00 hs. y de 15:00 a 17:00 hs. en Oficina Área Ingreso (ubicado entre los anfiteatros B1 y
                        B2).
                      </p>
                      <p>Costo de los Ejemplares (puede variar de acuerdo al costo de impresión):</p>
                      <ul className="list-disc list-inside">
                        <li>Teoría: $ 8.000</li>
                        <li>Práctica $ 8.000</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>¿Qué debo hacer si soy estudiante extranjero?</AccordionTrigger>
                    <AccordionContent>
                      <p>
                        Si eres estudiante extranjero, te recomendamos visitar nuestra guía especial para estudiantes
                        extranjeros donde encontrarás información detallada sobre los requisitos y procesos específicos.
                      </p>
                      <Button className="mt-2" asChild>
                        <Link href="https://www.facet.unt.edu.ar/blog/2019/07/guia-para-estudiantes-extranjeros/">
                          <GraduationCap className="mr-2 h-4 w-4" /> Guía para Estudiantes Extranjeros
                        </Link>
                      </Button>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">¿Necesitas más información?</h2>
          <p className="mb-4">Si tienes alguna duda sobre las instancias del ingreso, contáctanos:</p>
          <Button asChild>
            <Link href="mailto:ingresofacet@herrera.unt.edu.ar">Contactar por Email</Link>
          </Button>
        </div>
      </Container>
    </div>
  )
}

