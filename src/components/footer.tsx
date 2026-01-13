import { Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { getAssetUrl } from "@/src/config"

export function Footer() {
  return (
    <footer id="contacto" className="border-t py-16 md:py-20" style={{ backgroundColor: "#4FB7AD" }}>
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8 text-white lg:col-span-2">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-white">Aguu</h3>
              <p className="text-white/80 text-lg">Guardería y After School</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-white/20 w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-lg mb-1">Teléfono</p>
                  <a
                    href="tel:+56412345678"
                    className="text-white/90 hover:text-white transition-colors text-lg underline underline-offset-4"
                  >
                    +56 41 234 5678
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-white/20 w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-lg mb-1">Email</p>
                  <a
                    href="mailto:contacto@aguu.cl"
                    className="text-white/90 hover:text-white transition-colors text-lg underline underline-offset-4"
                  >
                    contacto@aguu.cl
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-white/20 w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-lg mb-1">Ubicación</p>
                  <p className="text-white/90 text-lg mb-2">Lautaro 431, Concepción, Chile</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white rounded-full"
                    asChild
                  >
                    <a
                      href="https://maps.google.com/?q=Lautaro+431+Concepcion+Chile"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver en Google Maps
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-3">
            <div className="relative aspect-video overflow-hidden rounded-3xl bg-white border-4 border-white/30 shadow-2xl">
              <img
                src={getAssetUrl('google-maps-location-pin-concepcion-chile.jpg')}
                alt="Mapa de ubicación AGUU en Concepción"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <div className="bg-white backdrop-blur-sm rounded-2xl px-6 py-3 border-2 border-[#4FB7AD] shadow-lg">
                  <p className="font-semibold flex items-center gap-2 text-[#4FB7AD]">
                    <MapPin className="h-5 w-5" />
                    Lautaro 431, Centro Concepción
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/30 text-center">
          <p className="text-white/80">&copy; 2025 Aguu Guardería y After School. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
