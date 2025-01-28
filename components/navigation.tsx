"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Menu, X } from "lucide-react"

const menuItems = [
  { title: "Inicio", href: "/" },
  { title: "Grupo de WhatsApp", href: "/whatsapp-group" },
  { title: "Trámites", href: "/tramites" },
  { title: "Banco de Estudio", href: "/banco-estudio" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed w-full z-50 bg-blue-950/80 backdrop-blur-xl border-b border-white/10">
      <Container>
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600"
          >
            BACHOFEN
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive ? "text-orange-400" : "text-blue-200 hover:text-orange-400 hover:bg-white/5"
                  }`}
                >
                  {item.title}
                  {isActive && (
                    <motion.div
                      layoutId="active-nav"
                      className="absolute inset-0 bg-white/5 rounded-lg -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
            <Link
              href="/ingreso"
              className="ml-4 px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-200"
            >
              Ingreso
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg text-white hover:bg-white/5">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden border-t border-white/10"
        >
          <Container className="py-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 rounded-lg text-blue-200 hover:text-orange-400 hover:bg-white/5"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <Link
              href="/ingreso"
              className="block px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium hover:from-orange-600 hover:to-orange-700"
              onClick={() => setIsOpen(false)}
            >
              Ingreso
            </Link>
          </Container>
        </motion.div>
      )}
    </nav>
  )
}

