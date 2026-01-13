# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing page para Aguu Guardería y After School, ubicada en Concepción, Chile. Es una aplicación estática construida con **Astro 5** + **React 18** + **Tailwind CSS 3**.

### ¿Por qué Astro?

Este proyecto usa Astro para obtener:
- **SEO perfecto**: Pre-renderizado estático a HTML completo
- **Rendimiento óptimo**: Mínimo JavaScript enviado al cliente
- **Componentes React**: Donde se necesita interactividad
- **Deploy simple**: Archivos estáticos que funcionan en cualquier hosting

## Commands

### Development
```bash
npm run dev       # Inicia servidor de desarrollo en localhost:4321
npm run build     # Genera build de producción (estático)
npm run preview   # Preview del build de producción
npm run astro     # CLI de Astro
```

**Nota importante**: Este proyecto usa `npm` como gestor de paquetes.

## Architecture

### Stack Principal
- **Framework**: Astro 5 (generador de sitios estáticos)
- **React**: v18.3.1 (solo para componentes interactivos)
- **Styling**: Tailwind CSS v3.4
- **UI Components**: shadcn/ui (adaptados para Astro + React)
- **Build**: Completamente estático (sin servidor)

### Estructura del Proyecto

```
src/
  ├── layouts/
  │   └── BaseLayout.astro    # Layout base con SEO y meta tags
  ├── pages/
  │   └── index.astro         # Página principal (usa componentes React)
  ├── components/
  │   ├── ui/                 # Componentes shadcn/ui (React)
  │   ├── header.tsx          # Navegación (React)
  │   ├── hero-section.tsx
  │   ├── what-is-aguu-section.tsx
  │   ├── value-proposition.tsx
  │   ├── services-section.tsx
  │   ├── benefits-section.tsx
  │   ├── manual-method-section.tsx
  │   ├── founder-story-section.tsx
  │   ├── testimonials-section.tsx
  │   ├── final-cta-section.tsx
  │   ├── footer.tsx
  │   └── whatsapp-float.tsx
  ├── lib/
  │   └── utils.ts            # Utility functions (cn, clsx + tailwind-merge)
  ├── hooks/                  # Custom React hooks
  └── styles/
      └── globals.css         # Variables CSS y estilos personalizados

public/                       # Assets estáticos (íconos, imágenes)
```

### Arquitectura de Astro + React

**Archivos `.astro`**:
- `BaseLayout.astro`: Layout con HTML, head, SEO
- `index.astro`: Página principal que importa componentes React

**Componentes React (`.tsx`)**:
- Todos los componentes de secciones están en React
- Se hidratan en el cliente con directivas `client:*`
- NO usan `"use client"` (eso es de Next.js)

**Directivas de Cliente en Astro**:
```astro
<Header client:load />          # Carga e hidrata inmediatamente
<WhatsAppFloat client:only="react" />  # Solo se renderiza en cliente
<Component client:visible />    # Carga cuando es visible (lazy)
<Component client:idle />       # Carga cuando el navegador está idle
```

### Orden de las Secciones

1. Header (navegación)
2. Hero
3. What is Aguu
4. Value Proposition
5. Services
6. Benefits
7. Manual Method
8. Founder Story
9. Testimonials
10. Final CTA
11. Footer
12. WhatsApp Float (fixed)

### Sistema de Diseño

**Paleta de colores personalizada** (definida en `src/styles/globals.css`):
- Primary (Teal): `#4FB7AD`
- Secondary (Coral): `#F18868`
- Accent (Yellow): `#F4D862`
- Purple Accent: `#CB90BF`
- Lime Accent: `#C1CB33`
- Background (Peach): `#FDE2CC`

**Fuentes**:
- Sans: Geist (de Google Fonts)
- Mono: Geist Mono
- Heading: Nunito (pesos: 400, 600, 700, 800)

**Tema**: Variables CSS configuradas en `:root` y `.dark`

### Configuración Importante

**Path aliases** (`tsconfig.json`):
- `@/*` → apunta a la raíz del proyecto
- Ejemplos: `@/src/components/ui/button`, `@/src/lib/utils`

**Astro config** (`astro.config.mjs`):
```js
integrations: [
  react(),              // Habilita componentes React
  tailwind({
    applyBaseStyles: false  // Usamos nuestro globals.css
  })
]
output: 'static'        // Generación estática
```

**Tailwind config** (`tailwind.config.mjs`):
- Usa Tailwind CSS v3 (no v4)
- Content: `src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}`
- Plugin: `tailwindcss-animate`

### Componentes UI

Todos los componentes UI son de shadcn/ui adaptados para React en Astro.
Ubicación: `src/components/ui/`

Incluye:
- Accordion, Alert Dialog, Avatar
- Button, Card, Calendar
- Carousel, Chart, Command
- Dialog, Dropdown, Form
- Navigation, Popover, Select
- Tabs, Toast, Tooltip
- Y muchos más...

**Importante**:
- NO uses `"use client"` (eso es de Next.js)
- Los imports deben usar `@/src/components/...`

### SEO

El SEO está configurado en `src/layouts/BaseLayout.astro`:
- Meta tags completos (title, description, keywords)
- Open Graph / Facebook tags
- Favicon adaptativo (light/dark mode)
- Theme color: `#4FB7AD`
- Idioma: `es` (español)
- Locale: `es_CL` (Chile)

Todo el HTML se pre-renderiza, por lo que los bots de búsqueda ven contenido completo.

### Idioma y Localización

- **Idioma**: Español de Chile (`lang="es"`)
- Todo el contenido está en español chileno
- Los metadatos SEO están optimizados para búsquedas locales en Concepción

### Deploy

Como este es un sitio completamente estático:
- Se puede deployar en Vercel, Netlify, GitHub Pages, Cloudflare Pages
- El build genera carpeta `dist/` con archivos estáticos
- No requiere servidor Node.js en producción

### Diferencias con Next.js

Si vienes de Next.js:
- ❌ NO hay `"use client"` directive
- ❌ NO hay Server/Client Components
- ❌ NO hay `next/image` (usa `<img>` normal)
- ❌ NO hay `next-themes` (no se usa por ahora)
- ✅ Archivos `.astro` para páginas y layouts
- ✅ Componentes React con directivas `client:*`
- ✅ Todo se pre-renderiza a HTML estático
