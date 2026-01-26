
import { Button } from "@/src/components/ui/button"

export function FinalCTASection() {
  const handleCTAClick = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="cta-final" className="py-16 md:py-24 bg-gradient-to-br from-[#79BBAF]/10 to-[#DE886C]/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
              ¿Buscas un espacio seguro, flexible y cercano para tu hijo?
            </h2>
            <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
              Agenda una visita gratuita y conversemos sobre cómo podemos apoyar a tu familia
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleCTAClick}
              size="lg"
              className="rounded-full text-lg px-10 py-7 bg-[#DE886C] hover:bg-[#DE886C]/90 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
            >
              Agenda tu visita gratuita
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">Te responderemos en menos de 2 horas · Visita sin compromiso</p>
        </div>
      </div>
    </section>
  )
}
