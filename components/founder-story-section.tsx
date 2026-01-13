export function FounderStorySection() {
  return (
    <section id="historia" className="py-16 md:py-24 bg-gradient-to-br from-[#CB90BF]/10 to-[#F4D862]/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="inline-block bg-[#4FB7AD] text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
              Fundado por una mamá que también trabaja
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">AGUU nace desde...</h2>
            <p className="text-xl text-muted-foreground italic">La experiencia real de una mamá</p>
          </div>

          <div className="bg-white/80 backdrop-blur p-8 md:p-10 rounded-3xl border-2 space-y-6 text-left">
            <p className="text-lg text-balance leading-relaxed">
              AGUU nace desde la experiencia real de una mamá que necesitó compatibilizar su desarrollo profesional con
              el cuidado de sus hijos, sintiéndose acompañada y segura.
            </p>
            <p className="text-muted-foreground text-balance leading-relaxed">
              Entendemos lo que significa buscar un espacio donde tu hijo no sea solo un número más, donde el cuidado
              sea genuino y la comunicación sea cercana. Por eso creamos AGUU: un lugar donde las familias trabajadoras
              encuentran apoyo real, sin culpas y con total confianza.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
