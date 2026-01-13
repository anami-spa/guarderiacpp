
import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"
import { Sparkles, Moon, Star } from "lucide-react"
import { getAssetUrl } from "@/src/config"

export function HeroSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    edadNino: "",
    servicio: "",
  })

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash === "#servicio-guarderia") {
        setFormData((prev) => ({ ...prev, servicio: "Guardería" }))
      } else if (hash === "#servicio-after-school") {
        setFormData((prev) => ({ ...prev, servicio: "After School" }))
      } else if (hash === "#servicio-empresas") {
        setFormData((prev) => ({ ...prev, servicio: "Convenios Empresas" }))
      }
    }

    handleHashChange()
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const servicioText = formData.servicio ? `%0AServicio de interés: ${formData.servicio}` : ""
    const whatsappMessage = `Hola! Quiero agendar una visita gratuita a AGUU.%0A%0ANombre: ${formData.nombre}%0ATeléfono: ${formData.telefono}%0AEdad del niño/a: ${formData.edadNino}${servicioText}`
    window.open(`https://wa.me/56412345678?text=${whatsappMessage}`, "_blank")
  }

  return (
    <section
      id="contacto"
      className="container mx-auto px-4 py-16 md:py-24 lg:py-28 relative overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, white, #FDE2CC20)`,
      }}
    >
      <div className="absolute top-10 left-5 md:left-10 text-[#F4D862] opacity-20 animate-float">
        <Star className="h-6 w-6 md:h-8 md:w-8" fill="currentColor" />
      </div>
      <div className="absolute top-32 right-10 md:right-20 text-[#CB90BF] opacity-20 animate-float-slow">
        <Moon className="h-8 w-8 md:h-10 md:w-10" fill="currentColor" />
      </div>
      <div className="absolute bottom-20 left-1/4 text-[#C1CB33] opacity-20 animate-float-slower">
        <Sparkles className="h-5 w-5 md:h-6 md:w-6" fill="currentColor" />
      </div>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center relative z-10 max-w-7xl mx-auto">
        {/* Text Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-tight">
              Trabaja tranquila: tu hijo está seguro, cuidado y feliz en pleno centro de Concepción
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 font-medium text-pretty leading-relaxed">
              AGUU es la guardería que construimos para nuestros propios hijos: cuidado cercano, transparencia total y
              horarios flexibles de 8:00 a 19:00 hrs en pleno centro de Concepción.
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-3xl border-2 border-[#4FB7AD]/30 shadow-xl">
            <h3 className="text-xl md:text-2xl font-bold text-[#4FB7AD] mb-6 text-center">Agenda tu visita gratuita</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="nombre" className="text-foreground font-semibold">
                  Nombre completo
                </Label>
                <Input
                  id="nombre"
                  placeholder="Ingresa tu nombre"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  required
                  className="rounded-2xl border-2 border-[#4FB7AD]/30 focus:border-[#4FB7AD] focus:ring-[#4FB7AD] h-12 text-base"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telefono" className="text-foreground font-semibold">
                  Teléfono / WhatsApp
                </Label>
                <Input
                  id="telefono"
                  type="tel"
                  placeholder="+56 9 1234 5678"
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  required
                  inputMode="tel"
                  className="rounded-2xl border-2 border-[#4FB7AD]/30 focus:border-[#4FB7AD] focus:ring-[#4FB7AD] h-12 text-base"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edadNino" className="text-foreground font-semibold">
                  Edad de tu hijo/a
                </Label>
                <Input
                  id="edadNino"
                  placeholder="Ej: 2 años y 6 meses"
                  value={formData.edadNino}
                  onChange={(e) => setFormData({ ...formData, edadNino: e.target.value })}
                  required
                  className="rounded-2xl border-2 border-[#4FB7AD]/30 focus:border-[#4FB7AD] focus:ring-[#4FB7AD] h-12 text-base"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="servicio" className="text-foreground font-semibold">
                  Servicio de interés
                </Label>
                <Select
                  value={formData.servicio}
                  onValueChange={(value) => setFormData({ ...formData, servicio: value })}
                >
                  <SelectTrigger className="rounded-2xl border-2 border-[#4FB7AD]/30 focus:border-[#4FB7AD] focus:ring-[#4FB7AD] h-12 text-base">
                    <SelectValue placeholder="Selecciona un servicio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Guardería">Guardería</SelectItem>
                    <SelectItem value="After School">After School</SelectItem>
                    <SelectItem value="Convenios Empresas">Convenios Empresas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full bg-[#F18868] hover:bg-[#F18868]/90 text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 font-bold text-lg py-7 mt-2"
              >
                Agenda tu visita gratuita
              </Button>
              <p className="text-sm text-center text-muted-foreground pt-2 leading-relaxed">
                Te responderemos en menos de 2 horas · Visita sin compromiso
              </p>
            </form>
          </div>
        </div>

        {/* Image */}
        <div className="relative aspect-[4/3] lg:aspect-square overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#4FB7AD]/10 to-[#F18868]/10 shadow-2xl border-4 border-white">
          <img
            src={getAssetUrl('happy-children-playing-in-modern-daycare-center.jpg')}
            alt="Niños felices jugando en guardería AGUU Concepción"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}
