# Hazlo Real (HR) — Sitio web de servicios

Sitio estático (HTML + CSS + JS). **No guarda datos ni pide login.** El contacto es por WhatsApp y correo.

## Estructura
| Archivo | Para qué sirve |
|---|---|
| `content.js` | **Todo el texto, servicios, precios y contacto. Aquí se edita.** |
| `assets/logo.png` | Logo circular pequeño (encabezado y pestaña del navegador) |
| `assets/logo-completo.png` | Sello completo del logo (portada) |
| `styles.css` | Colores y diseño (los colores están al inicio) |
| `index.html`, `script.js` | Estructura; normalmente no se tocan |

## Cómo hacer cambios (sin saber programar)
1. Entra a tu repositorio en github.com.
2. Abre `content.js` y pulsa el ícono del lápiz ✏️.
3. Cambia solo el texto entre comillas `" "`.
   - **Agregar servicio:** copia una línea `{ activo: true, ... },` y pégala debajo.
   - **Ocultar servicio:** cambia `activo: true` por `activo: false`.
   - **Quitar servicio:** borra su línea completa.
4. Pulsa **Commit changes** (botón verde). En ~30 segundos Vercel publica el cambio.
5. ¿Te equivocaste? En GitHub → **History** puedes volver a una versión anterior.

## Cambiar el logo
En GitHub: carpeta `assets` → **Add file → Upload files** → sube el archivo con el mismo nombre (reemplaza el anterior). Los colores del sitio salen del logo y están al inicio de `styles.css`.

## Testimonios
En `content.js`, sección `testimonios`: escribe la opinión real de un cliente (con su permiso) y cambia `activo: false` por `activo: true`. Mientras no haya ninguno activo, la sección no aparece.

## Publicar por primera vez
**GitHub**
```bash
git remote add origin https://github.com/TU-USUARIO/hazlo-real.git
git push -u origin main
```
(o crea un repo vacío en github.com y usa “uploading an existing file”).

**Vercel**
1. vercel.com → **Add New → Project** → importa el repo `hazlo-real`.
2. *Framework Preset:* **Other**. Sin comando de build. Pulsa **Deploy**.
3. Cada commit a `main` se publica solo.

## Ver en tu computadora
Abre `index.html` con doble clic.
