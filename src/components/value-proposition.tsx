import { Shield, Notebook, MapPin } from "lucide-react"

export function ValueProposition() {
  const features = [
    {
      icon: Shield,
      title: "Seguridad Monitoreada",
      description: "Cámaras de seguridad y protocolos activos para tu tranquilidad",
      color: "#4FB7AD",
    },
    {
      icon: Notebook,
      title: "Registro Diario Completo",
      description: "Sabrás exactamente cómo estuvo tu hijo: actividades, alimentación y emociones",
      color: "#F18868",
    },
    {
      icon: MapPin,
      title: "Centro de Concepción",
      description: "Lautaro 431. Fácil acceso y cerca de tu trabajo",
      color: "#CB90BF",
    },
  ]

  return (
    <section className="border-y bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4">
              <div
                className="rounded-full w-16 h-16 flex items-center justify-center"
                style={{ backgroundColor: `${feature.color}20` }}
              >
                <feature.icon className="h-7 w-7" style={{ color: feature.color }} />
              </div>
              <h3 className="text-xl font-semibold" style={{ color: feature.color }}>
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-balance leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
