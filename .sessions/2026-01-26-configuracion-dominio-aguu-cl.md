# Sesión: Configuración de Dominio Personalizado aguu.cl
**Fecha**: 2026-01-26 (Tercera sesión del día)
**Duración**: ~20 minutos
**Estado**: ✅ Completado

## 🎯 Objetivo de la Sesión

Corregir errores 404 en recursos (CSS, JavaScript, imágenes, favicons) tras la configuración del dominio personalizado `aguu.cl`.

---

## 🐛 Problema Inicial

El sitio `aguu.cl` cargaba pero todos los recursos daban error 404:

```
GET https://aguu.cl/guarderiacpp/index.2qKr3Go4.css 404 (Not Found)
GET https://aguu.cl/guarderiacpp/happy-children-playing-in-modern-daycare-center.jpg 404 (Not Found)
GET https://aguu.cl/guarderiacpp/_astro/header.DTthPEW1.js 404 (Not Found)
GET https://aguu.cl/guarderiacpp/favicon.ico 404 (Not Found)
```

**Causa raíz**: El proyecto seguía configurado para GitHub Pages con subdirectorio `/guarderiacpp`, pero el dominio personalizado sirve archivos desde la raíz `/`.

---

## 📋 Soluciones Implementadas

### 1. Corrección de `astro.config.mjs` (✅ Completado)

**Archivo**: `astro.config.mjs`

**Antes:**
```javascript
export default defineConfig({
  site: 'https://anami-spa.github.io',
  base: '/guarderiacpp',
  // ...
});
```

**Después:**
```javascript
export default defineConfig({
  site: 'https://aguu.cl',
  base: '/',
  // ...
});
```

**Resultado**: CSS y JavaScript comenzaron a cargar correctamente.

---

### 2. Corrección de `src/config.ts` (✅ Completado)

**Archivo**: `src/config.ts`

**Antes:**
```typescript
// Base URL configuration for GitHub Pages deployment
export const BASE_URL = '/guarderiacpp';

export function getAssetUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${BASE_URL}/${cleanPath}`;
}
```

**Después:**
```typescript
// Base URL configuration for domain deployment
export const BASE_URL = '';

export function getAssetUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${BASE_URL}/${cleanPath}`;
}
```

**Resultado**: Imágenes en componentes React comenzaron a cargar correctamente.

---

### 3. Actualización de URLs en `BaseLayout.astro` (✅ Completado)

**Archivo**: `src/layouts/BaseLayout.astro`

**Cambios realizados:**

#### Meta Tags Open Graph
```diff
- <meta property="og:url" content="https://anami-spa.github.io/guarderiacpp/" />
+ <meta property="og:url" content="https://aguu.cl/" />

- <meta property="og:image" content="https://anami-spa.github.io/guarderiacpp/happy-children-playing-in-modern-daycare-center.jpg" />
+ <meta property="og:image" content="https://aguu.cl/happy-children-playing-in-modern-daycare-center.jpg" />
```

#### Meta Tags Twitter
```diff
- <meta name="twitter:image" content="https://anami-spa.github.io/guarderiacpp/happy-children-playing-in-modern-daycare-center.jpg" />
+ <meta name="twitter:image" content="https://aguu.cl/happy-children-playing-in-modern-daycare-center.jpg" />
```

#### Schema.org (JSON-LD)
```diff
- "url": "https://anami-spa.github.io/guarderiacpp/",
- "logo": "https://anami-spa.github.io/guarderiacpp/icon.svg",
- "image": "https://anami-spa.github.io/guarderiacpp/happy-children-playing-in-modern-daycare-center.jpg",
+ "url": "https://aguu.cl/",
+ "logo": "https://aguu.cl/icon.svg",
+ "image": "https://aguu.cl/happy-children-playing-in-modern-daycare-center.jpg",
```

**Resultado**: Meta tags SEO ahora apuntan al dominio correcto.

---

## 🔧 Proceso de Deploy

### Commits Realizados

**Commit 1**: `fix: Actualizar configuración para dominio personalizado aguu.cl`
```bash
git commit -m "fix: Actualizar configuración para dominio personalizado aguu.cl

Cambios:
- site: https://aguu.cl (antes: anami-spa.github.io)
- base: / (antes: /guarderiacpp)

Esto corrige los errores 404 en recursos (CSS, JS, imágenes)
causados por rutas incorrectas al usar dominio personalizado."
```

**Commit 2**: `fix: Corregir rutas de assets para dominio aguu.cl`
```bash
git commit -m "fix: Corregir rutas de assets para dominio aguu.cl

Cambios:
- src/config.ts: BASE_URL de '/guarderiacpp' a '' (raíz)
- BaseLayout.astro: URLs de meta tags (OG, Twitter, Schema) a aguu.cl

Esto soluciona los errores 404 en imágenes y favicons."
```

### Comandos Ejecutados
```bash
# Primer deploy
npm run build
git add astro.config.mjs
git commit -m "fix: Actualizar configuración para dominio personalizado aguu.cl"
git push

# Segundo deploy
npm run build
git add src/config.ts src/layouts/BaseLayout.astro
git commit -m "fix: Corregir rutas de assets para dominio aguu.cl"
git push
```

**Duración de cada deploy**: ~1-2 minutos (GitHub Actions)

---

## ✅ Verificación Final

### Recursos Cargando Correctamente
- ✅ CSS: `/index.2qKr3Go4.css`
- ✅ JavaScript: `/_astro/header.DTthPEW1.js`, `/_astro/hero-section.gR6F2_x0.js`, etc.
- ✅ Imágenes: `/happy-children-playing-in-modern-daycare-center.jpg`
- ✅ Favicons: `/favicon.ico`, `/favicon-32x32.png`, `/favicon-16x16.png`, etc.

### SEO
- ✅ Open Graph URLs: `https://aguu.cl`
- ✅ Twitter Cards URLs: `https://aguu.cl`
- ✅ Schema.org URLs: `https://aguu.cl`
- ✅ Sitemap: Generado en raíz

### Estado del Sitio
- **URL**: https://aguu.cl
- **Estado**: ✅ Funcionando correctamente
- **Performance**: Sin cambios (90-100)
- **SEO**: Mejorado (URLs canónicas correctas)

---

## 📝 Archivos Modificados

1. `astro.config.mjs` - Configuración de site y base path
2. `src/config.ts` - BASE_URL helper
3. `src/layouts/BaseLayout.astro` - Meta tags y URLs SEO

---

## 🎓 Lecciones Aprendidas

### Migración de GitHub Pages Subdirectorio → Dominio Personalizado

**Configuración requerida:**
1. **Astro Config**: `base: '/'` (en lugar de subdirectorio)
2. **Site URL**: Actualizar a dominio personalizado
3. **BASE_URL en config.ts**: String vacío `''` en lugar de subdirectorio
4. **Meta tags**: Actualizar todas las URLs absolutas
5. **Schema.org**: Actualizar URL canónica

### Helper `getAssetUrl()`

Cuando `BASE_URL = ''`:
```typescript
getAssetUrl('imagen.jpg') // → '/imagen.jpg'
```

Cuando `BASE_URL = '/guarderiacpp'`:
```typescript
getAssetUrl('imagen.jpg') // → '/guarderiacpp/imagen.jpg'
```

### Diferencia entre GitHub Pages y Dominio Personalizado

| Aspecto | GitHub Pages | Dominio Personalizado |
|---------|--------------|----------------------|
| URL base | `https://usuario.github.io/repo` | `https://dominio.com` |
| Base path | `/repo` | `/` |
| Assets | `/repo/imagen.jpg` | `/imagen.jpg` |
| Sitemap | `/repo/sitemap-index.xml` | `/sitemap-index.xml` |

---

## 🚀 Próximos Pasos Sugeridos

### SEO
- [ ] Configurar Google Search Console con `aguu.cl`
- [ ] Enviar sitemap a Google
- [ ] Verificar Open Graph con Facebook Debugger
- [ ] Verificar Twitter Cards con Twitter Card Validator

### Analytics
- [ ] Configurar Google Analytics 4
- [ ] Configurar eventos de conversión (formulario, WhatsApp)

### Performance
- [ ] Activar compresión Brotli en hosting
- [ ] Implementar service worker para PWA
- [ ] Optimizar imágenes a WebP/AVIF

---

## 📚 Referencias

- [Astro Docs - Site Configuration](https://docs.astro.build/en/reference/configuration-reference/#site)
- [GitHub Pages - Custom Domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Open Graph Protocol](https://ogp.me/)
- [Schema.org - ChildCare](https://schema.org/ChildCare)

---

**Estado Final**: ✅ Sitio funcionando correctamente en https://aguu.cl
