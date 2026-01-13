"use client"

import { Quote } from "lucide-react"
import { useState } from "react"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Desde que mi hijo está en AGUU puedo trabajar tranquila. El acompañamiento es cercano y se nota el cariño.",
      author: "María José",
      role: "Mamá de After School",
      childAge: "6 años",
    },
    {
      quote:
        "La bitácora diaria es lo que más valoro. Me encanta leer los detalles del día de mi hija, siento que realmente la observan.",
      author: "Daniela",
      role: "Mamá de Guardería",
      childAge: "2 años",
    },
    {
      quote: "La flexibilidad horaria fue clave para mí. AGUU entiende las necesidades de las familias que trabajamos.",
      author: "Roberto",
      role: "Papá de Guardería",
      childAge: "3 años",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <section id="testimonios" className="container mx-auto px-4 py-16 md:py-24 bg-white">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Lo que dicen las familias</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Experiencias reales de madres y padres que confían en AGUU
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-muted/30 p-8 rounded-3xl border-2 space-y-6 relative">
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="h-12 w-12 text-foreground" />
              </div>
              <p className="text-lg text-balance relative z-10 italic leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="pt-4 border-t space-y-1">
                <p className="font-bold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-xs text-muted-foreground">Hijo/a de {testimonial.childAge}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden space-y-6">
          <div className="bg-muted/30 p-8 rounded-3xl border-2 space-y-6 relative">
            <div className="absolute top-6 right-6 opacity-10">
              <Quote className="h-12 w-12 text-foreground" />
            </div>
            <p className="text-lg text-balance relative z-10 italic leading-relaxed">
              &ldquo;{testimonials[currentIndex].quote}&rdquo;
            </p>
            <div className="pt-4 border-t space-y-1">
              <p className="font-bold text-foreground">{testimonials[currentIndex].author}</p>
              <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
              <p className="text-xs text-muted-foreground">Hijo/a de {testimonials[currentIndex].childAge}</p>
            </div>
          </div>

          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                }`}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
