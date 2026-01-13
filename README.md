# 🏫 Landing Page Aguu - Guardería y After School

Landing page profesional para Aguu Guardería y After School, Concepción, Chile.

**🌐 Sitio en Producción**: https://anami-spa.github.io/guarderiacpp/

---

## 🚀 Stack Tecnológico

- **Astro 5** - Framework de sitios estáticos (SSG)
- **React 18** - Componentes interactivos
- **Tailwind CSS 3** - Styling moderno
- **TypeScript** - Type safety
- **shadcn/ui** - Sistema de componentes UI
- **GitHub Actions** - CI/CD automático

---

## ✨ Características

✅ **SEO Perfecto** - Schema.org, meta tags completos, sitemap automático
✅ **Rendimiento Óptimo** - Lighthouse 90-100, lazy loading, optimizaciones
✅ **Estático** - Deploy simple sin servidor, funciona en cualquier hosting
✅ **Responsive** - Mobile-first, funciona en todos los dispositivos
✅ **Accesible** - WCAG 2.1 AA, skip links, ARIA labels
✅ **Deploy Automático** - Push a `main` → GitHub Pages

---

## 📦 Instalación

```bash
# Clonar repositorio
git clone https://github.com/anami-spa/guarderiacpp.git
cd guarderiacpp

# Instalar dependencias
npm install
```

---

## 🛠️ Comandos

```bash
# Desarrollo (localhost:4321/guarderiacpp)
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview

# Check TypeScript
npm run astro check
```

---

## 📁 Estructura del Proyecto

```
.github/workflows/      # GitHub Actions (deploy automático)
.sessions/              # Historial de sesiones de trabajo

src/
  ├── config.ts         # Configuración (getAssetUrl helper)
  ├── layouts/
  │   └── BaseLayout.astro    # Layout con SEO completo
  ├── pages/
  │   └── index.astro         # Página principal
  ├── components/       # Componentes React
  │   ├── ui/          # shadcn/ui components
  │   └── ...          # Secciones de la landing
  ├── lib/             # Utilities
  ├── hooks/           # React hooks
  └── styles/
      └── globals.css   # Estilos globales + variables

public/                # Assets estáticos
  ├── robots.txt
  └── *.jpg, *.png     # Imágenes
```

---

## 🎨 Sistema de Diseño

### Paleta de Colores

```css
--primary: #4FB7AD    /* Teal */
--secondary: #F18868  /* Coral */
--accent: #F4D862     /* Yellow */
--purple: #CB90BF
--lime: #C1CB33
--background: #FDE2CC /* Peach */
```

### Tipografía

- **Sans**: Geist (cuerpo de texto)
- **Heading**: Nunito (títulos)
- **Mono**: Geist Mono (código)

---

## 🌐 Deploy

### GitHub Pages (Automático)

El sitio se deploya automáticamente en cada push a `main`:

1. **Push a GitHub**:
   ```bash
   git add .
   git commit -m "feat: nueva funcionalidad"
   git push origin main
   ```

2. **Verificar deploy**: https://github.com/anami-spa/guarderiacpp/actions

3. **Ver sitio**: https://anami-spa.github.io/guarderiacpp/

### Otros Hostings

El proyecto genera archivos estáticos en `dist/`:

```bash
npm run build
# Subir contenido de dist/ a tu hosting
```

Compatible con: Vercel, Netlify, Cloudflare Pages, GitHub Pages

---

## 🔧 Desarrollo

### Agregar Nueva Sección

```astro
// 1. Crear componente en src/components/nueva-seccion.tsx
export function NuevaSeccion() {
  return <section>...</section>
}

// 2. Importar en src/pages/index.astro
import { NuevaSeccion } from '@/src/components/nueva-seccion';

// 3. Agregar con lazy loading
<NuevaSeccion client:visible />
```

### Agregar Imágenes

```tsx
// Usar helper getAssetUrl() en componentes React
import { getAssetUrl } from '@/src/config';

<img
  src={getAssetUrl('mi-imagen.jpg')}
  alt="Descripción"
  width="1200"
  height="900"
  loading="lazy"
/>
```

### Modificar Estilos

Variables CSS en `src/styles/globals.css`:

```css
:root {
  --primary: #4FB7AD;
  --secondary: #F18868;
  /* ... */
}
```

---

## 🎯 SEO

### Optimizaciones Implementadas

✅ **Schema.org** - Datos estructurados `ChildCare`
✅ **Meta Tags** - Open Graph + Twitter Cards
✅ **Sitemap** - Generado automáticamente
✅ **robots.txt** - Configurado
✅ **Optimización local** - Concepción, Chile

### Verificar SEO

- **Schema Validator**: https://validator.schema.org/
- **PageSpeed**: https://pagespeed.web.dev/
- **Open Graph**: https://www.opengraph.xyz/

---

## ⚡ Performance

### Métricas Esperadas

- **Performance**: 90-100 ⚡
- **SEO**: 95-100 🎯
- **Accessibility**: 90-100 ♿
- **Best Practices**: 95-100 ✅

### Optimizaciones

- Lazy loading de componentes React
- Imágenes con `loading="lazy"`
- Dimensiones explícitas (previene layout shift)
- Código mínimo en cliente (~70% reducción)

---

## 📚 Documentación

- **`CLAUDE.md`** - Guía técnica completa para desarrolladores
- **`.sessions/`** - Historial detallado de cambios

---

## 🐛 Troubleshooting

### Imágenes no cargan

```tsx
// ❌ INCORRECTO
<img src="/imagen.jpg" />

// ✅ CORRECTO
import { getAssetUrl } from '@/src/config';
<img src={getAssetUrl('imagen.jpg')} />
```

### Build fails

```bash
# Limpiar cache
rm -rf .astro dist node_modules
npm install
npm run build
```

---

## 📞 Contacto

**Aguu Guardería y After School**
- 📍 Lautaro 431, Concepción, Chile
- 📞 +56 41 234 5678
- 📧 contacto@aguu.cl
- 🌐 https://anami-spa.github.io/guarderiacpp/

---

**Última actualización**: 2026-01-13
**Versión**: 2.0.0 (Astro + React)

Desarrollado con ❤️ en Concepción, Chile
