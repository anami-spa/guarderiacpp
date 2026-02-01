import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/src/components/ui/button"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Mostrar botón cuando el usuario ha scrolleado más de 400px
      if (window.scrollY > 400) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          size="lg"
          className="fixed bottom-24 right-6 z-40 h-14 w-14 rounded-full shadow-2xl transition-all duration-300 bg-[#79BBAF] hover:bg-[#79BBAF]/90 text-white border-4 border-white p-0 hover:scale-110 hover:shadow-[0_0_30px_rgba(121,187,175,0.5)]"
          aria-label="Volver al inicio"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      )}
    </>
  )
}
