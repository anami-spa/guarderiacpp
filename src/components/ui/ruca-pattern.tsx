import { useState, useEffect } from "react"

export function RucaPattern() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        {/* Filtro de relieve solo en desktop */}
        {!isMobile && (
          <filter id="ruca-relief">
            <feGaussianBlur in="SourceAlpha" stdDeviation="1.5"/>
            <feOffset dx="1" dy="1" result="offsetblur"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3"/>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        )}

        {/* Path simplificado del Ruca/Tipi */}
        <g id="ruca-shape">
          <path d="M 50 10 L 75 70 L 25 70 Z" />
          <line x1="50" y1="10" x2="50" y2="70" strokeWidth="1" />
          <line x1="40" y1="40" x2="60" y2="40" strokeWidth="1" />
          <line x1="35" y1="55" x2="65" y2="55" strokeWidth="1" />
        </g>
      </defs>

      {/* Patrón repetido de rucas */}
      <pattern
        id="ruca-pattern-teal"
        x="0" y="0"
        width="180"
        height="180"
        patternUnits="userSpaceOnUse"
      >
        <use
          href="#ruca-shape"
          fill="none"
          stroke="#79BBAF"
          strokeWidth="1.2"
          opacity="0.12"
          filter={isMobile ? undefined : "url(#ruca-relief)"}
        />
      </pattern>

      <pattern
        id="ruca-pattern-coral"
        x="90" y="90"
        width="180"
        height="180"
        patternUnits="userSpaceOnUse"
      >
        <use
          href="#ruca-shape"
          fill="none"
          stroke="#DE886C"
          strokeWidth="1.2"
          opacity="0.1"
          filter={isMobile ? undefined : "url(#ruca-relief)"}
        />
      </pattern>

      {/* Tercer patrón solo en desktop */}
      {!isMobile && (
        <pattern
          id="ruca-pattern-yellow"
          x="45" y="135"
          width="180"
          height="180"
          patternUnits="userSpaceOnUse"
        >
          <use
            href="#ruca-shape"
            fill="none"
            stroke="#ECD961"
            strokeWidth="1.2"
            opacity="0.08"
            filter="url(#ruca-relief)"
          />
        </pattern>
      )}

      {/* Aplicar patrones */}
      <rect width="100%" height="100%" fill="url(#ruca-pattern-teal)" />
      <rect width="100%" height="100%" fill="url(#ruca-pattern-coral)" />
      {!isMobile && <rect width="100%" height="100%" fill="url(#ruca-pattern-yellow)" />}
    </svg>
  )
}
