
import { Heart, Clock, BookOpen, Users, Sparkles } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { getAssetUrl } from "@/src/config"

export function BenefitsSection() {
  const benefits = [
    {
      icon: Heart,
      title: "Reduce tu estrés",
      description:
        "Sabiendo que tu hijo está cuidado en un espacio seguro con profesionales que velan por su bienestar.",
    },
    {
      icon: BookOpen,
      title: "Reportes diarios claros",
      description: "Recibe un registro detallado de las actividades, alimentación y emociones de tu hijo cada día.",
    },
    {
      icon: Clock,
      title: "Compatibiliza trabajo y familia",
      description: "Cumple con tus responsabilidades laborales sin culpa, con horarios flexibles que se adaptan a ti.",
    },
    {
      icon: Users,
      title: "Equipo que acompaña",
      description:
        "No solo cuidamos, acompañamos emocionalmente a tu hijo con respeto, calidez y atención personalizada.",
    },
  ]

  const handleCTAClick = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="beneficios" className="container mx-auto px-4 py-16 md:py-24 bg-muted/30">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Beneficios para tu familia</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Cómo AGUÚ mejora tu vida como madre o padre que trabaja
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Benefits list */}
          <div className="grid gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4 bg-background p-6 rounded-3xl border-2 shadow-sm">
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground text-balance">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image placeholder */}
          <div className="order-first md:order-last">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 shadow-lg">
              <img
                src={getAssetUrl('happy-children-playing-in-modern-daycare-center.webp')}
                alt="Educadora de AGUÚ interactuando con niños en actividad de cuidado personalizado"
                width="1200"
                height="900"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-br from-[#79BBAF]/10 to-[#DE886C]/10 p-8 md:p-10 rounded-3xl border-2 border-[#79BBAF]/30 space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-[#79BBAF] w-12 h-12 flex items-center justify-center flex-shrink-0">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div className="space-y-4 flex-1">
                <h3 className="text-2xl md:text-3xl font-bold">Transparencia total en el cuidado</h3>
                <p className="text-muted-foreground text-balance">
                  Cada día recibirás un registro completo de las actividades, alimentación, descansos y emociones de tu
                  hijo. Esta información está pensada para ti, para que siempre sepas cómo estuvo y puedas tomar
                  decisiones informadas sobre su cuidado.
                </p>
                <Button
                  onClick={handleCTAClick}
                  variant="default"
                  size="lg"
                  className="rounded-full bg-[#DE886C] hover:bg-[#DE886C]/90"
                >
                  Agenda tu visita gratuita
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
