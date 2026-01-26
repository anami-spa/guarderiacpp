# Configuración de Formspree para Formulario de Contacto

## Paso 1: Crear cuenta en Formspree

1. Ve a [formspree.io](https://formspree.io/)
2. Crea una cuenta gratuita (permite 50 envíos/mes)

## Paso 2: Crear nuevo formulario

1. Click en "New Project" o "New Form"
2. Configura los emails receptores:
   - Email principal: `aguu.concepcion@gmail.com`
   - Email adicional (CC): `contacto@anami.cl`

## Paso 3: Obtener Form ID

Después de crear el formulario, te darán un **Form ID** único como:
```
https://formspree.io/f/xyzabc123
```

El ID es la parte final: `xyzabc123`

## Paso 4: Actualizar el código

Edita el archivo: `src/components/hero-section.tsx`

Busca esta línea (aproximadamente línea 40):
```javascript
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
```

Reemplaza `YOUR_FORM_ID` con tu ID real:
```javascript
const response = await fetch("https://formspree.io/f/xyzabc123", {
```

## Paso 5: Configuración en Dashboard de Formspree

En el dashboard de Formspree, configura:

### Notification Settings:
- ✅ Email notifications
- ✅ Send to: `aguu.concepcion@gmail.com`
- ✅ CC: `contacto@anami.cl`

### Form Settings:
- **Form Name**: "Solicitud Visita AGUU"
- **Reply-To**: Usar el email del campo del formulario

### Spam Protection:
- ✅ Enable reCAPTCHA (opcional pero recomendado)
- ✅ Enable honeypot

## Paso 6: Probar el formulario

1. Guarda los cambios en el código
2. El servidor Astro se recargará automáticamente
3. Completa el formulario en: http://localhost:4321/guarderiacpp
4. Verifica que llegue el email a ambas direcciones

## Estructura del email que se enviará

```
Asunto: Nueva solicitud de visita - AGUU Guardería

Nombre: [nombre del formulario]
Teléfono: [teléfono del formulario]
Edad del niño/a: [edad del formulario]
Servicio de interés: [servicio seleccionado]
```

## Campos que se envían

- `nombre`: Nombre completo del contacto
- `telefono`: Teléfono/WhatsApp
- `edadNino`: Edad del niño/a
- `servicio`: Guardería / After School / Convenios Empresas
- `_replyto`: Email para responder (configurado a aguu.concepcion@gmail.com)
- `_cc`: Copia a contacto@anami.cl

## Plan gratuito vs Plan de pago

**Plan Free** (actual):
- 50 envíos/mes
- 1 usuario
- Email notifications
- Perfecto para empezar

**Plan Paid** ($10/mes):
- 1000 envíos/mes
- Múltiples usuarios
- Integraciones avanzadas
- Sin marca Formspree

## Troubleshooting

### El formulario no envía
1. Verifica que el Form ID esté correcto
2. Revisa la consola del navegador (F12) por errores
3. Verifica que no haya bloqueadores de scripts

### No llegan los emails
1. Revisa spam/correo no deseado
2. Verifica configuración en dashboard de Formspree
3. Confirma que ambos emails estén bien escritos

### Error 403 Forbidden
- El Form ID es incorrecto o el formulario no existe

### Error 429 Too Many Requests
- Has excedido el límite mensual (50 en plan free)

## Funcionalidad adicional

El formulario también abre WhatsApp automáticamente después de enviar el email, con el mensaje pre-cargado. Esto da doble canal de contacto:
1. Email a través de Formspree
2. WhatsApp para respuesta inmediata

---

**Contacto técnico:** Si hay problemas con la configuración, revisar la documentación oficial: https://help.formspree.io/
