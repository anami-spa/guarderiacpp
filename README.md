# Landing Page Aguu - Guardería y After School

Landing page para Aguu Guardería y After School, Concepción, Chile.

## Stack Tecnológico

- **Astro 5** - Framework de sitios estáticos
- **React 18** - Para componentes interactivos
- **Tailwind CSS 3** - Framework de CSS
- **TypeScript** - Type safety
- **shadcn/ui** - Componentes UI

## Características

✅ **SEO Optimizado** - HTML pre-renderizado, perfecto para motores de búsqueda
✅ **Rendimiento Máximo** - Carga rápida con mínimo JavaScript
✅ **Totalmente Estático** - Deploy simple, sin servidor necesario
✅ **Responsive** - Funciona perfectamente en móviles, tablets y desktop

## Comandos

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo (localhost:4321)
npm run dev

# Generar build de producción
npm run build

# Preview del build
npm run preview
```

## Estructura del Proyecto

```
src/
├── layouts/          # Layouts de Astro
├── pages/            # Páginas (index.astro)
├── components/       # Componentes React
│   ├── ui/          # Componentes shadcn/ui
│   └── ...          # Secciones de la landing
├── lib/             # Utilidades
├── hooks/           # React hooks
└── styles/          # CSS global

public/              # Assets estáticos
```

## Deploy

Este proyecto genera archivos 100% estáticos. Puedes deployar en:

- **Vercel** (recomendado)
- Netlify
- GitHub Pages
- Cloudflare Pages
- Cualquier hosting de archivos estáticos

```bash
npm run build
# Los archivos listos están en: dist/
```

## Desarrollo

### Agregar una nueva sección

1. Crea el componente en `src/components/`
2. Importa y agrega en `src/pages/index.astro`
3. Usa directiva `client:load` para hacerlo interactivo

```astro
import { MiSeccion } from '@/src/components/mi-seccion';

<MiSeccion client:load />
```

### Estilos personalizados

Los estilos globales están en `src/styles/globals.css`

Variables CSS importantes:
- `--primary`: `#4FB7AD` (Teal)
- `--secondary`: `#F18868` (Coral)
- `--accent`: `#F4D862` (Yellow)

## Más Información

Ver `CLAUDE.md` para documentación técnica completa.

---

Desarrollado con ❤️ para Aguu Guardería y After School
