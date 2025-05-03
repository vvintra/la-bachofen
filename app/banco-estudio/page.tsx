"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Book, Download, Search, Star } from "lucide-react"
import { Input } from "@/components/ui/input"

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

export default function BancoEstudioPage() {
  const años = [
    {
      titulo: "año",
      materias: [
        {
          nombre: "ALGEBRA 1",
          link: "https://drive.google.com/drive/folders/1505r3wLJc5kcazyQDgJMF3iseOvHeK3s?usp=sharing",
        },
        {
          nombre: "CALCULO 1",
          link: "https://drive.google.com/drive/folders/1SFiaUCoVn5XoMmgyrUi9PMp1SOx5G07_?usp=sharing",
        },
        {
          nombre: "FISICA 1",
          link: "https://drive.google.com/drive/folders/1ptnnvi075nmsz9wC-k86RDZ62Z9DeF95?usp=sharing",
        },
        {
          nombre: "QUIMICA",
          link: "https://drive.google.com/drive/folders/1PlLWsSP70pM_Y2qQxJE5jmtQ6Z7zpctN?usp=sharing",
        },
        {
          nombre: "ALGEBRA 2",
          link: "https://drive.google.com/drive/folders/17gEbXH3jzlXLbB0iYYYN8uo8NotUdUfp?usp=sharing",
        },
        {
          nombre: "CALCULO 2",
          link: "https://drive.google.com/drive/folders/1Y3mLv8GE0h1vXZjtMBbJzugIqab6WOgs?usp=sharing",
        },
        {
          nombre: "FISICA 2",
          link: "https://drive.google.com/drive/folders/1Yzaxj_eCDwcbJpllSlCIAOCqssEsY7pP?usp=sharing",
        },
        {
          nombre: "SISTEMA",
          link: "https://drive.google.com/drive/folders/1G9AQ_wQKhJ6MNOJnbixgjccT5fb4PAi0?usp=sharing",
        },
      ],
    },
    {
      titulo: "año",
      materias: [
        {
          nombre: "CALCULO 3",
          link: "https://drive.google.com/drive/folders/15-ymqgXf4usVZTckBSPZ-5zyaFM28WtO?usp=sharing",
        },
        {
          nombre: "FISICA 3",
          link: "https://drive.google.com/drive/folders/1ZuVsfTvAA6QzosQWQ6R25iNEn7WRwn2M?usp=sharing",
        },
        {
          nombre: "PROBABILIDAD Y ESTADISTICA",
          link: "https://drive.google.com/drive/folders/1JbIzQB-UkdRjGXy3nsywqw3msuBQWad7?usp=sharing",
        },
        {
          nombre: "CALCULO 4",
          link: "https://drive.google.com/drive/folders/1JbIzQB-UkdRjGXy3nsywqw3msuBQWad7?usp=sharing",
        },
      ],
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
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            Banco de Estudio
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Accede a todos los materiales de estudio organizados por año y materia
          </p>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show" className="space-y-16">
          {años.map((año, index) => (
            <section key={año.titulo} className="space-y-8">
              <motion.h2 variants={item} className="text-3xl font-bold text-white flex items-center gap-3">
                <span className="w-12 h-12 rounded-xl bg-orange-400/20 flex items-center justify-center text-orange-400">
                  {index === 0 ? "1er" : "2do"}
                </span>
                año
              </motion.h2>

              <motion.div variants={container} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {año.materias.map((materia) => (
                  <motion.div key={materia.nombre} variants={item} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                    <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 transition-all duration-300 p-6">
                      <div className="space-y-4">
                        <div className="w-12 h-12 rounded-xl bg-orange-400/20 flex items-center justify-center text-orange-400">
                          <Book className="w-6 h-6" />
                        </div>

                        <h3 className="font-semibold text-lg text-white">{materia.nombre}</h3>

                        <a
                          href={materia.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full px-4 py-2 rounded-xl bg-orange-500/20 text-orange-400 hover:bg-orange-500/30 transition-colors duration-200 text-center"
                        >
                          Ver material
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </section>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-orange-500/20 to-blue-600/20 border border-white/10 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">¿No encontrás el material que buscas?</h3>
          <p className="text-blue-200 max-w-2xl mx-auto">Contacta con nosotros y te ayudaremos a encontrarlo</p>
          <button>
            <Search className="w-4 h-4" />
          </button>
        </motion.div>
      </Container>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/5 to-transparent" />
    </div>
  )
}
