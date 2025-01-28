import { Container } from "@/components/ui/container"
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ]

  const sections = [
    {
      title: "Enlaces Rápidos",
      links: [
        { text: "Inicio", href: "/" },
        { text: "Trámites", href: "/tramites" },
        { text: "Banco de Estudio", href: "/banco-estudio" },
        { text: "Ingreso", href: "/ingreso" },
      ],
    },
    {
      title: "Recursos",
      links: [
        { text: "Calendario Académico", href: "#" },
        { text: "Horarios", href: "#" },
        { text: "Preguntas Frecuentes", href: "#" },
        { text: "Contacto", href: "#" },
      ],
    },
    {
      title: "Contacto",
      content: [
        { icon: Mail, text: "contacto@bachofen.edu.ar" },
        { icon: Phone, text: "+54 381 4364093" },
      ],
    },
  ]

  return (
    <footer className="relative border-t border-white/10">
      <Container className="py-12 text-blue-200">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              BACHOFEN
            </h2>
            <p className="text-sm">Facultad de Ciencias Exactas y Tecnología - UNT</p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {sections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              {"links" in section ? (
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.text}>
                      <a href={link.href} className="text-sm hover:text-orange-400 transition-colors">
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="space-y-2">{/* Contact item removed */}</ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm">
          <p>© 2024 BACHOFEN. Todos los derechos reservados.</p>
        </div>
      </Container>
    </footer>
  )
}

