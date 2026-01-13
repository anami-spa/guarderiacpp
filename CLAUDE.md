# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing page para Aguu Guardería y After School, ubicada en Concepción, Chile. Es una aplicación estática construida con **Astro 5** + **React 18** + **Tailwind CSS 3**.

### ¿Por qué Astro?

Este proyecto usa Astro para obtener:
- **SEO perfecto**: Pre-renderizado estático a HTML completo con Schema.org
- **Rendimiento óptimo**: Mínimo JavaScript enviado al cliente
- **Componentes React**: Donde se necesita interactividad
- **Deploy simple**: Archivos estáticos que funcionan en cualquier hosting

**URL Producción**: https://anami-spa.github.io/guarderiacpp/

---

## Commands

### Development
```bash
npm run dev       # Servidor de desarrollo en localhost:4321/guarderiacpp
npm run build     # Genera build de producción (dist/)
npm run preview   # Preview del build de producción
npm run astro     # CLI de Astro
```

**Nota**: Este proyecto usa `npm` como gestor de paquetes.

---

## Architecture

### Stack Principal
- **Framework**: Astro 5 (generador de sitios estáticos)
- **React**: v18.3.1 (solo para componentes interactivos)
- **Styling**: Tailwind CSS v3.4.17
- **UI Components**: shadcn/ui (adaptados para Astro + React)
- **Build**: Completamente estático (sin servidor)
- **Deploy**: GitHub Pages con GitHub Actions

### Estructura del Proyecto

```
.github/
  └── workflows/
      └── deploy.yml          # GitHub Actions - Deploy automático

src/
  ├── config.ts               # Configuración (getAssetUrl helper)
  ├── layouts/
  │   └── BaseLayout.astro    # Layout base con SEO completo
  ├── pages/
  │   └── index.astro         # Página principal
  ├── components/             # Componentes React
  │   ├── ui/                 # shadcn/ui components
  │   ├── header.tsx
  │   ├── hero-section.tsx
  │   ├── benefits-section.tsx
  │   ├── footer.tsx
  │   └── ...
  ├── lib/
  │   └── utils.ts            # Utilities (cn, clsx + tailwind-merge)
  ├── hooks/                  # Custom React hooks
  └── styles/
      └── globals.css         # Variables CSS y estilos

public/                       # Assets estáticos (imágenes, íconos)
  ├── robots.txt
  ├── *.jpg                   # Imágenes
  └── *.png/svg               # Íconos

.sessions/                    # Historial de sesiones de trabajo
```

### Arquitectura de Astro + React

**Archivos `.astro`**:
- `BaseLayout.astro`: Layout con HTML, head, SEO, Schema.org
- `index.astro`: Página principal que importa componentes React

**Componentes React (`.tsx`)**:
- Todos los componentes de secciones están en React
- Se hidratan en el cliente con directivas `client:*`
- NO usan `"use client"` (eso es de Next.js)

**Directivas de Cliente en Astro**:
```astro
<Header client:load />          # Carga inmediata (crítico)
<Section client:visible />      # Lazy load cuando es visible
<Component client:idle />       # Carga cuando navegador idle
<WhatsApp client:only="react"/> # Solo en cliente (no SSR)
```

**Optimización Actual**:
- Header y Hero: `client:load` (críticos)
- Resto de secciones: `client:visible` (lazy load)
- Reduce ~70% JavaScript inicial

### Manejo de Assets (IMPORTANTE)

**Problema**: GitHub Pages usa base path `/guarderiacpp`

**Solución**: Usar helper `getAssetUrl()` en componentes React

```tsx
import { getAssetUrl } from '@/src/config';

// ✅ CORRECTO
<img src={getAssetUrl('imagen.jpg')} />

// ❌ INCORRECTO (no funciona en GitHub Pages)
<img src="/imagen.jpg" />
```

**En archivos Astro**: Usar `${import.meta.env.BASE_URL}` directamente

```astro
<link rel="icon" href={`${import.meta.env.BASE_URL}icon.svg`} />
```

### Sistema de Diseño

**Paleta de colores** (definida en `src/styles/globals.css`):
- Primary (Teal): `#4FB7AD`
- Secondary (Coral): `#F18868`
- Accent (Yellow): `#F4D862`
- Purple Accent: `#CB90BF`
- Lime Accent: `#C1CB33`
- Background (Peach): `#FDE2CC`

**Fuentes**:
- Sans: Geist (de Google Fonts)
- Mono: Geist Mono
- Heading: Nunito (400, 600, 700, 800)

**Tema**: Variables CSS en `:root` y `.dark`

### Path Aliases

Configurados en `tsconfig.json`:
- `@/*` → raíz del proyecto
- Ejemplos:
  - `@/src/components/ui/button`
  - `@/src/lib/utils`
  - `@/src/config`

### Configuraciones Importantes

**astro.config.mjs**:
```js
site: 'https://anami-spa.github.io'
base: '/guarderiacpp'                    // IMPORTANTE para GitHub Pages
integrations: [react(), tailwind(), sitemap()]
output: 'static'
```

**tailwind.config.mjs**:
- Tailwind CSS v3.4 (NO v4)
- Content: `src/**/*.{astro,tsx,ts}`
- Plugin: `tailwindcss-animate`

---

## SEO - Configuración Completa

### Datos Estructurados (Schema.org)

Ubicación: `src/layouts/BaseLayout.astro`

**Tipo**: `ChildCare` (negocio local)
**Incluye**:
- Información de negocio
- Dirección: Lautaro 431, Concepción, Biobío
- Coordenadas: -36.827, -73.050
- Horarios: Lun-Vie 8:00-19:00
- Contacto: teléfono, email

### Meta Tags

**Open Graph**:
- Tipo: `business.business`
- Imagen social: 1200x630px
- URL canónica
- Locale: `es_CL`

**Twitter Cards**: `summary_large_image`

### Indexación

- **Sitemap**: Generado automáticamente por `@astrojs/sitemap`
- **URL**: `/sitemap-index.xml`
- **robots.txt**: En `public/robots.txt`

---

## Performance

### Optimizaciones Implementadas

1. **Lazy Loading de Componentes**:
   - Header/Hero: carga inmediata
   - Resto: `client:visible` (lazy)
   - Reduce 70% JS inicial

2. **Imágenes Optimizadas**:
   - `loading="lazy"` en imágenes no críticas
   - `width` y `height` explícitos (previene layout shift)
   - Hero sin lazy (primera imagen visible)

3. **CSS**:
   - Variables CSS en lugar de clases dinámicas
   - Animaciones optimizadas
   - Critical CSS inline

### Métricas Esperadas

- **Lighthouse Performance**: 90-100
- **SEO**: 95-100
- **Accessibility**: 90-100
- **Best Practices**: 95-100

---

## Accesibilidad

### Implementaciones

1. **Skip Link**: "Saltar al contenido principal"
   - Visible solo con teclado (Tab)
   - Mejora navegación lectores de pantalla

2. **ARIA Labels**:
   - Botones interactivos
   - Enlaces externos
   - Formularios

3. **Estructura Semántica**:
   - `<main>`, `<header>`, `<footer>`, `<nav>`
   - Heading hierarchy correcto
   - Landmarks ARIA

---

## GitHub Pages - Deploy

### URL del Sitio
**Producción**: https://anami-spa.github.io/guarderiacpp/

### Workflow Automático

Archivo: `.github/workflows/deploy.yml`

**Trigger**: Push a rama `main`

**Proceso**:
1. Checkout del código
2. Setup Node.js 20
3. `npm ci` (instala dependencias)
4. `npm run build` (genera `dist/`)
5. Upload artifact
6. Deploy a GitHub Pages

**Duración**: ~1-2 minutos

### Configuración en GitHub

**Settings → Pages**:
- Source: **GitHub Actions** (NO "Deploy from branch")
- El workflow se ejecuta automáticamente

### Verificar Deploy

1. **Actions**: https://github.com/anami-spa/guarderiacpp/actions
2. Ver círculo amarillo → verde ✅
3. Visitar: https://anami-spa.github.io/guarderiacpp/

---

## Componentes UI (shadcn/ui)

Todos en `src/components/ui/`

**Componentes disponibles**:
- Accordion, Alert Dialog, Avatar
- Button, Card, Calendar
- Carousel, Chart, Command
- Dialog, Dropdown, Form
- Navigation, Popover, Select
- Tabs, Toast, Tooltip
- Y 50+ más...

**Importante**:
- NO usar `"use client"` (es de Next.js)
- Imports: `@/src/components/ui/...`

---

## Idioma y Localización

- **Idioma**: Español de Chile
- **Locale**: `es_CL`
- **Contenido**: Optimizado para búsquedas locales en Concepción
- **SEO Local**: Configurado con Schema.org

---

## Diferencias con Next.js

**Si vienes de Next.js**:

❌ **NO usar**:
- `"use client"` directive
- `next/image` (usar `<img>`)
- `next-themes`
- `next/link` (usar `<a>`)

✅ **SÍ usar**:
- Archivos `.astro` para páginas
- Directivas `client:*` para React
- `getAssetUrl()` para assets en React
- `import.meta.env.BASE_URL` en Astro

---

## Workflow de Desarrollo

### Agregar Nueva Sección

1. Crear componente React en `src/components/`
2. Usar `getAssetUrl()` para imágenes
3. Importar en `src/pages/index.astro`
4. Usar `client:visible` para lazy load
5. Probar en local
6. Push a `main` (deploy automático)

### Modificar Estilos

1. Variables CSS en `src/styles/globals.css`
2. Clases Tailwind en componentes
3. Evitar inline styles

### Optimizar Imágenes

1. Agregar `loading="lazy"` (excepto hero)
2. Agregar `width` y `height`
3. Usar formato JPG (< 200KB)
4. Considerar WebP para futuro

---

## Troubleshooting

### Imágenes no cargan (404)

**Causa**: Rutas no usan base path
**Solución**: Usar `getAssetUrl()` en componentes React

```tsx
// ❌ INCORRECTO
<img src="/imagen.jpg" />

// ✅ CORRECTO
import { getAssetUrl } from '@/src/config';
<img src={getAssetUrl('imagen.jpg')} />
```

### TypeScript Errors

**Causa común**: Imports incorrectos
**Solución**: Usar `@/src/` en lugar de `@/`

```tsx
// ❌ INCORRECTO
import { Button } from '@/components/ui/button'

// ✅ CORRECTO
import { Button } from '@/src/components/ui/button'
```

### Build Fails

1. Verificar errores TypeScript: `npm run astro check`
2. Limpiar cache: `rm -rf .astro dist node_modules && npm install`
3. Verificar sintaxis en archivos `.astro`

---

## Historial de Sesiones

Ver `.sessions/` para historial detallado de cada sesión de trabajo.

**Última sesión**: 2026-01-13 - Migración a Astro + Optimizaciones SEO

---

## Próximas Mejoras Sugeridas

### Performance
- [ ] Comprimir imágenes (WebP/AVIF)
- [ ] Service Worker (PWA)
- [ ] Preload de fuentes críticas

### SEO
- [ ] Más páginas (Servicios, Contacto)
- [ ] Blog para contenido
- [ ] FAQ con Schema

### Funcionalidad
- [ ] Formulario de contacto funcional
- [ ] Google Analytics
- [ ] Galería de fotos

---

## Referencias Útiles

- [Astro Docs](https://docs.astro.build/)
- [Schema.org ChildCare](https://schema.org/ChildCare)
- [GitHub Pages](https://docs.github.com/pages)
- [Web Vitals](https://web.dev/vitals/)

---

**Última actualización**: 2026-01-13
