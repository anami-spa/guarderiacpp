
import { Pencil, Heart, Star, Check } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { getAssetUrl } from "@/src/config"

export function ManualMethodSection() {
  const handleCTAClick = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: "#FDE2CC" }}>
      <div className="absolute top-0 left-0 right-0 h-16 bg-white">
        <svg
          className="absolute bottom-0 w-full h-16"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,50 C300,100 500,0 800,50 C1000,80 1100,30 1200,50 L1200,120 L0,120 Z" fill="#FDE2CC" />
        </svg>
      </div>

      <div className="absolute top-20 left-10 text-[#F18868] opacity-20 animate-float">
        <Pencil className="h-12 w-12" />
      </div>
      <div className="absolute top-40 right-20 text-[#CB90BF] opacity-20 animate-float-slow">
        <Heart className="h-10 w-10" fill="currentColor" />
      </div>
      <div className="absolute bottom-32 left-1/4 text-[#F4D862] opacity-20 animate-float-slower">
        <Star className="h-8 w-8" fill="currentColor" />
      </div>
      <div className="absolute bottom-20 right-1/3 text-[#4FB7AD] opacity-20 animate-float">
        <Heart className="h-10 w-10" fill="currentColor" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image - styled like a physical notebook with shadow and border */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-white border-4 border-[#4FB7AD]/30 order-2 lg:order-1 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300">
            <div className="absolute top-0 left-12 right-0 h-full border-l-2 border-red-200/50" />
            <img
              src={getAssetUrl('teacher-writing-detailed-notes-in-journal-notebook.jpg')}
              alt="Educadora documentando el día de tu hijo"
              width="1200"
              height="900"
              loading="lazy"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
                Vas a saber cómo estuvo tu hijo
              </h2>
              <p className="text-xl md:text-2xl text-foreground/70 font-medium text-pretty">
                Porque cuando trabajas todo el día, necesitas estar segura de que tu hijo está bien.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#4FB7AD] flex items-center justify-center">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#4FB7AD] mb-1">Sabes cómo estuvo durante el día</h3>
                  <p className="text-foreground/80">
                    Te contamos todo: si comió bien, cómo durmió la siesta, con qué jugó y cómo se sintió.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F18868] flex items-center justify-center">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#F18868] mb-1">Te avisamos si notamos algo distinto</h3>
                  <p className="text-foreground/80">
                    Si vemos que no comió como siempre o que está más callado de lo normal, te lo decimos el mismo día.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#CB90BF] flex items-center justify-center">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#CB90BF] mb-1">Tienes información para actuar</h3>
                  <p className="text-foreground/80">
                    Con datos concretos puedes ajustar horarios en casa o ir al pediatra con información clara.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 space-y-4">
              <p className="text-foreground/80 text-pretty">
                En tu visita te mostramos cómo funciona este sistema de información. Así sabes desde el primer día qué
                esperar.
              </p>
              <Button
                onClick={handleCTAClick}
                size="lg"
                className="bg-[#4FB7AD] hover:bg-[#4FB7AD]/90 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Agenda tu visita gratuita
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white">
        <svg
          className="absolute top-0 w-full h-16"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,50 C300,20 500,100 800,50 C1000,20 1100,80 1200,50 L1200,0 L0,0 Z" fill="#FDE2CC" />
        </svg>
      </div>
    </section>
  )
}
