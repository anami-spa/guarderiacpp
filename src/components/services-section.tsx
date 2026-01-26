
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { Baby, GraduationCap, Building2 } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Baby,
      title: "Guardería",
      description: "Cuidado integral para niños desde los 3 meses hasta los 4 años",
      benefits: [
        "Grupos pequeños con atención personalizada",
        "Estimulación respetuosa integrada al juego",
        "Bitácora diaria detallada de actividades",
        "Horario flexible de 8:00 a 19:00 hrs",
      ],
      color: "#ECD961",
      borderColor: "#ECD961",
      link: "#servicio-guarderia",
    },
    {
      icon: GraduationCap,
      title: "After School",
      description: "Apoyo escolar y talleres para niños en edad escolar",
      benefits: [
        "Reforzamiento académico y ayuda con tareas",
        "Talleres recreativos y actividades deportivas",
        "Merienda incluida y colación saludable",
        "Recogida desde el colegio (opcional)",
      ],
      color: "#C18FC0",
      borderColor: "#C18FC0",
      link: "#servicio-after-school",
    },
    {
      icon: Building2,
      title: "Convenios",
      description: "Opciones especiales para grupos y organizaciones",
      benefits: [
        "Convenio para Tribus: emprendedoras/es e independientes",
        "Convenio de Empresa: beneficios corporativos",
        "Tarifas preferenciales grupales",
        "Flexibilidad según tus necesidades",
      ],
      color: "#ECD961",
      borderColor: "#ECD961",
      link: "#servicio-convenios",
    },
  ]

  const handleServiceClick = (serviceLink: string) => {
    window.location.hash = serviceLink
    setTimeout(() => {
      document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  return (
    <section id="servicios" className="container mx-auto px-4 py-16 md:py-24 bg-white">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Nuestros Servicios</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Soluciones de cuidado adaptadas a cada etapa y necesidad de tu familia
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="rounded-3xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden flex flex-col"
              style={{
                borderTopWidth: "8px",
                borderTopColor: service.borderColor,
              }}
            >
              <CardHeader className="space-y-4 flex-shrink-0">
                <div
                  className="rounded-full w-16 h-16 flex items-center justify-center"
                  style={{ backgroundColor: `${service.color}30` }}
                >
                  <service.icon className="h-8 w-8" style={{ color: service.color }} />
                </div>
                <CardTitle className="text-2xl text-[#79BBAF]">{service.title}</CardTitle>
                <CardDescription className="text-base text-foreground/80">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between space-y-6">
                <ul className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-[#79BBAF] mt-0.5 flex-shrink-0">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full rounded-full border-2 hover:bg-primary/10 transition-all bg-transparent"
                  style={{ borderColor: service.color }}
                  onClick={() => handleServiceClick(service.link)}
                >
                  Quiero este servicio
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
