import { Heart, Users, Sparkles, Shield } from "lucide-react"

export function WhatIsAguuSection() {
  return (
    <section id="que-es-aguu" className="container mx-auto px-4 py-16 md:py-24">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">¿Qué es AGUÚ?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Sabemos que elegir dónde dejar a tu hijo es una decisión difícil. Por eso queremos ser 100% claros sobre
            quiénes somos y cómo trabajamos.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#79BBAF]/10 to-[#DE886C]/10 p-8 md:p-12 rounded-3xl border-2 border-[#79BBAF]/30 space-y-8">
            {/* Mensaje principal */}
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-[#79BBAF] text-center">
                Aquí tu hijo no es un número más
              </h3>
              <p className="text-lg text-foreground/80 text-center leading-relaxed">
                Conocemos quién es, qué le gusta, qué le cuesta y cómo acompañarlo mejor cada día. Mantenemos una
                comunicación constante contigo, porque creemos que el cuidado se construye en equipo.
              </p>
            </div>

            {/* Valores clave */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-4 bg-white/50 p-6 rounded-2xl">
                <div className="rounded-full bg-[#79BBAF] w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-[#79BBAF]">Trato personalizado</h4>
                  <p className="text-sm text-foreground/70">
                    Conocemos a cada niño por su nombre, sus preferencias y su historia.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/50 p-6 rounded-2xl">
                <div className="rounded-full bg-[#DE886C] w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-[#DE886C]">Comunicación constante</h4>
                  <p className="text-sm text-foreground/70">
                    Trabajamos en equipo contigo para el bienestar de tu hijo.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/50 p-6 rounded-2xl">
                <div className="rounded-full bg-[#C18FC0] w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-[#C18FC0]">Sin presiones académicas</h4>
                  <p className="text-sm text-foreground/70">
                    No trabajamos con presiones académicas ni promesas irreales.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/50 p-6 rounded-2xl">
                <div className="rounded-full bg-[#ECD961] w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-[#ECD961]">Desarrollo sano y feliz</h4>
                  <p className="text-sm text-foreground/70">
                    Creemos en el juego, el vínculo, la rutina y el respeto como bases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
