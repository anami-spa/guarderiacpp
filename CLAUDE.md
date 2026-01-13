# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing page para Aguu Guardería y After School, ubicada en Concepción, Chile. Es una single-page application (SPA) construida con Next.js 16, React 19 y Tailwind CSS 4.

## Commands

### Development
```bash
pnpm dev          # Inicia el servidor de desarrollo en localhost:3000
pnpm build        # Genera el build de producción
pnpm start        # Inicia el servidor de producción
pnpm lint         # Ejecuta ESLint
```

**Nota importante**: Este proyecto usa `pnpm` como gestor de paquetes.

## Architecture

### Stack Principal
- **Framework**: Next.js 16 con App Router
- **React**: v19.2.0 (React Server Components habilitado)
- **Styling**: Tailwind CSS v4 con PostCSS
- **UI Components**: shadcn/ui (configuración "new-york" style)
- **Analytics**: Vercel Analytics integrado

### Estructura del Proyecto

```
app/
  ├── layout.tsx       # Root layout con fuentes (Geist, Nunito) y metadata SEO
  ├── page.tsx         # Página principal que orquesta todas las secciones
  └── globals.css      # Variables CSS personalizadas y tema de colores

components/
  ├── ui/              # Componentes shadcn/ui (Button, Card, Dialog, etc.)
  ├── header.tsx       # Navegación principal
  ├── hero-section.tsx
  ├── what-is-aguu-section.tsx
  ├── value-proposition.tsx
  ├── services-section.tsx
  ├── benefits-section.tsx
  ├── manual-method-section.tsx
  ├── founder-story-section.tsx
  ├── testimonials-section.tsx
  ├── final-cta-section.tsx
  ├── footer.tsx
  └── whatsapp-float.tsx  # Botón flotante de WhatsApp

lib/
  └── utils.ts         # Utility functions (cn, clsx + tailwind-merge)

hooks/                 # Custom React hooks
```

### Arquitectura de la Landing Page

La página principal (`app/page.tsx`) es un componente simple que importa y renderiza secciones en orden secuencial. Cada sección es un componente autocontenido en `/components/`.

**Orden de las secciones**:
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

**Paleta de colores personalizada** (definida en `app/globals.css`):
- Primary (Teal): `#4FB7AD`
- Secondary (Coral): `#F18868`
- Accent (Yellow): `#F4D862`
- Purple Accent: `#CB90BF`
- Lime Accent: `#C1CB33`
- Background (Peach): `#FDE2CC`

**Fuentes**:
- Sans: Geist (variable `--font-sans`)
- Mono: Geist Mono (variable `--font-mono`)
- Heading: Nunito (variable `--font-heading`, pesos: 400, 600, 700, 800)

**Tema**: Soporta light/dark mode mediante CSS variables y la clase `.dark`.

### Configuración Importante

**Path aliases** (`tsconfig.json`):
- `@/*` → apunta a la raíz del proyecto
- Ejemplos: `@/components/ui/button`, `@/lib/utils`

**shadcn/ui config** (`components.json`):
- Style: "new-york"
- RSC: true (React Server Components)
- Base color: neutral
- CSS variables: true
- Icon library: lucide-react

**Next.js config** (`next.config.mjs`):
- TypeScript build errors ignorados (`ignoreBuildErrors: true`)
- Imágenes sin optimizar (`unoptimized: true`)

### Tailwind CSS 4

Este proyecto usa **Tailwind CSS v4** (nueva versión mayor) con el nuevo plugin de PostCSS (`@tailwindcss/postcss`).

**Diferencias clave**:
- No existe `tailwind.config.ts/js` tradicional
- La configuración está embebida en `@theme inline` dentro de `globals.css`
- Usa `@import "tailwindcss"` en lugar de directivas `@tailwind`

### Componentes UI

Todos los componentes UI son de shadcn/ui y están en `/components/ui/`. Incluye componentes como:
- Accordion, Alert Dialog, Avatar
- Button, Card, Calendar
- Carousel, Chart, Command
- Dialog, Dropdown, Form
- Navigation, Popover, Select
- Tabs, Toast, Tooltip
- Y muchos más...

Para agregar nuevos componentes shadcn/ui, usa el CLI configurado con los aliases del proyecto.

### Idioma y Localización

- **Idioma**: Español de Chile (`lang="es"`, `locale: "es_CL"`)
- Todo el contenido debe estar en español chileno
- Los metadatos SEO están optimizados para búsquedas locales en Concepción

### Analytics

Vercel Analytics está integrado en `app/layout.tsx` mediante el componente `<Analytics />`.
