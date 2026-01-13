
import { useState } from "react"
import { Button } from "@/src/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold tracking-tight text-[#4FB7AD]">Aguu</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#inicio" className="text-sm font-medium text-foreground/70 hover:text-[#4FB7AD] transition-colors">
            Inicio
          </a>
          <a
            href="#que-es-aguu"
            className="text-sm font-medium text-foreground/70 hover:text-[#4FB7AD] transition-colors"
          >
            ¿Qué es AGUU?
          </a>
          <a
            href="#servicios"
            className="text-sm font-medium text-foreground/70 hover:text-[#4FB7AD] transition-colors"
          >
            Servicios
          </a>
          <a
            href="#metodo-aguu"
            className="text-sm font-medium text-foreground/70 hover:text-[#4FB7AD] transition-colors"
          >
            Nuestro Método
          </a>
          <a
            href="#beneficios"
            className="text-sm font-medium text-foreground/70 hover:text-[#4FB7AD] transition-colors"
          >
            Beneficios
          </a>
          <a
            href="#testimonios"
            className="text-sm font-medium text-foreground/70 hover:text-[#4FB7AD] transition-colors"
          >
            Testimonios
          </a>
        </nav>

        <div className="hidden md:block">
          <Button
            size="lg"
            className="rounded-full bg-[#F18868] hover:bg-[#F18868]/90 text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 font-semibold"
          >
            Agenda tu visita gratuita
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#4FB7AD]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="container mx-auto flex flex-col gap-4 p-4">
            <a
              href="#inicio"
              className="text-sm font-medium text-foreground/70 hover:text-[#4FB7AD] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </a>
            <a
              href="#que-es-aguu"
              className="text-sm font-medium text-foreground/70 hover:text-[#4FB7AD] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              ¿Qué es AGUU?
            </a>
            <a
              href="#servicios"
              className="text-sm font-medium text-foreground/70 hover:text-[#4FB7AD] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </a>
            <a
              href="#metodo-aguu"
              className="text-sm font-medium text-foreground/70 hover:text-[#4FB7AD] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Nuestro Método
            </a>
            <a
              href="#beneficios"
              className="text-sm font-medium text-foreground/70 hover:text-[#4FB7AD] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Beneficios
            </a>
            <a
              href="#testimonios"
              className="text-sm font-medium text-foreground/70 hover:text-[#4FB7AD] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonios
            </a>
            <Button
              size="lg"
              className="w-full rounded-full bg-[#F18868] hover:bg-[#F18868]/90 text-white font-semibold"
            >
              Agenda tu visita gratuita
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
