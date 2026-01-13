import { Check, X } from "lucide-react"

export function WhatIsAguuSection() {
  const weSomos = [
    "Un lugar seguro de cuidado diario donde tu hijo está protegido, alimentado y acompañado mientras trabajas",
    "Atención personalizada con grupos pequeños para que cada niño reciba el tiempo y cariño que necesita",
    "Transparencia total con bitácora manual escrita a mano cada día sobre todo lo que hace tu hijo",
    "Horario flexible de 8:00 a 19:00 hrs pensado para la realidad de familias que trabajan",
    "Estimulación respetuosa integrada al juego sin presión académica, siguiendo el ritmo de cada niño",
    "Ubicación céntrica en Concepción para que llegues rápido en caso de emergencia o imprevisto",
  ]

  const noSomos = [
    "No somos un jardín infantil formal con curriculum educativo estructurado ni sala cuna institucional",
    "No somos un centro de estimulación temprana enfocado en terapias, evaluaciones o planes de desarrollo específicos",
    "No somos una guardería masiva donde tu hijo es uno más sin seguimiento individual",
    "No hacemos promesas de desarrollo acelerado ni presionamos a los niños con objetivos académicos",
  ]

  return (
    <section id="que-es-aguu" className="container mx-auto px-4 py-16 md:py-24">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">¿Qué es AGUU?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Sabemos que elegir dónde dejar a tu hijo es una decisión difícil. Por eso queremos ser 100% claros sobre lo
            que hacemos (y lo que no) en AGUU.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {/* Somos */}
          <div className="bg-emerald-50 dark:bg-emerald-950/20 p-8 rounded-3xl border-2 border-emerald-200 dark:border-emerald-800">
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-full bg-emerald-500 p-2">
                <Check className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-900 dark:text-emerald-100">Somos</h3>
            </div>
            <ul className="space-y-4">
              {weSomos.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-base text-emerald-900 dark:text-emerald-100">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* No Somos */}
          <div className="bg-rose-50 dark:bg-rose-950/20 p-8 rounded-3xl border-2 border-rose-200 dark:border-rose-800">
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-full bg-rose-500 p-2">
                <X className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-rose-900 dark:text-rose-100">No somos</h3>
            </div>
            <ul className="space-y-4">
              {noSomos.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="h-5 w-5 text-rose-600 dark:text-rose-400 flex-shrink-0 mt-0.5" />
                  <span className="text-base text-rose-900 dark:text-rose-100">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
