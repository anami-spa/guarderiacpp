
import { useState } from "react"
import { Button } from "@/src/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const handleCTAClick = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo - Clickeable */}
        <button
          onClick={scrollToTop}
          className="flex items-center group cursor-pointer"
          aria-label="Volver al inicio"
        >
          <span className="text-3xl font-bold tracking-tight text-[#79BBAF] group-hover:text-[#DE886C] transition-colors duration-300">
            Aguú
          </span>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#servicios"
            className="relative text-xs font-bold uppercase tracking-wider text-foreground/70 hover:text-[#79BBAF] transition-all duration-300 py-2 group"
          >
            Servicios
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#79BBAF] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#que-es-aguu"
            className="relative text-xs font-bold uppercase tracking-wider text-foreground/70 hover:text-[#79BBAF] transition-all duration-300 py-2 group"
          >
            ¿Qué es AGUÚ?
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#79BBAF] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#metodo-aguu"
            className="relative text-xs font-bold uppercase tracking-wider text-foreground/70 hover:text-[#79BBAF] transition-all duration-300 py-2 group"
          >
            Nuestro Método
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#79BBAF] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#beneficios"
            className="relative text-xs font-bold uppercase tracking-wider text-foreground/70 hover:text-[#79BBAF] transition-all duration-300 py-2 group"
          >
            Beneficios
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#79BBAF] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#testimonios"
            className="relative text-xs font-bold uppercase tracking-wider text-foreground/70 hover:text-[#79BBAF] transition-all duration-300 py-2 group"
          >
            Testimonios
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#79BBAF] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        <div className="hidden md:block">
          <Button
            onClick={handleCTAClick}
            size="lg"
            className="rounded-full bg-[#DE886C] hover:bg-[#DE886C]/90 text-white transition-all duration-300 hover:shadow-xl hover:scale-105 font-bold text-sm px-6"
          >
            Agenda tu visita gratuita
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#79BBAF] hover:text-[#DE886C] transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-gradient-to-b from-white to-[#79BBAF]/5">
          <nav className="container mx-auto flex flex-col gap-1 p-4">
            <a
              href="#servicios"
              className="text-sm font-bold uppercase tracking-wide text-foreground/80 hover:text-[#79BBAF] hover:bg-[#79BBAF]/10 transition-all py-4 px-4 rounded-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </a>
            <a
              href="#que-es-aguu"
              className="text-sm font-bold uppercase tracking-wide text-foreground/80 hover:text-[#79BBAF] hover:bg-[#79BBAF]/10 transition-all py-4 px-4 rounded-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              ¿Qué es AGUÚ?
            </a>
            <a
              href="#metodo-aguu"
              className="text-sm font-bold uppercase tracking-wide text-foreground/80 hover:text-[#79BBAF] hover:bg-[#79BBAF]/10 transition-all py-4 px-4 rounded-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Nuestro Método
            </a>
            <a
              href="#beneficios"
              className="text-sm font-bold uppercase tracking-wide text-foreground/80 hover:text-[#79BBAF] hover:bg-[#79BBAF]/10 transition-all py-4 px-4 rounded-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Beneficios
            </a>
            <a
              href="#testimonios"
              className="text-sm font-bold uppercase tracking-wide text-foreground/80 hover:text-[#79BBAF] hover:bg-[#79BBAF]/10 transition-all py-4 px-4 rounded-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonios
            </a>
            <Button
              onClick={() => {
                setIsMenuOpen(false)
                handleCTAClick()
              }}
              size="lg"
              className="w-full rounded-full bg-[#DE886C] hover:bg-[#DE886C]/90 text-white font-bold mt-4"
            >
              Agenda tu visita gratuita
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
