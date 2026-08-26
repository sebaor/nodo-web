# NODO — sitio web

Sitio estático de NODO (análisis de datos para pymes de Uruguay), hecho con
Astro + TypeScript + Tailwind CSS + GSAP.

## Desarrollo

Requiere Node 22. En esta máquina hay un Node portable en
`C:\Users\sebas\.local\node\node-v22.23.2-win-x64` (no está en el PATH del
sistema); el script `dev.cmd` lo agrega solo.

```bash
./dev.cmd        # servidor de desarrollo en http://localhost:4321
npm run build    # compilación de producción en dist/
```

Todo el contenido de texto vive en `src/data/`, no en los componentes.
Las reglas de marca y comunicación están en `CLAUDE.md` (archivo local,
fuera del repositorio): leerlo antes de tocar contenido.

## Variable de entorno obligatoria

Los formularios (formulario de inicio en `/formulario` y el de contacto)
envían por **Web3Forms**, que reenvía cada envío por correo a
`info.nodo.uy@gmail.com`. La clave del servicio no está en el código:

| Variable | Qué es |
|---|---|
| `PUBLIC_WEB3FORMS_KEY` | Access key de Web3Forms asociada a info.nodo.uy@gmail.com |

- **Local:** copiar `.env.example` como `.env` y pegar la clave.
- **GitHub Actions:** la clave vive como *secret* del repositorio
  (`Settings → Secrets and variables → Actions → PUBLIC_WEB3FORMS_KEY`);
  el workflow de despliegue la inyecta en la compilación.

La clave se obtiene gratis en <https://web3forms.com> ingresando la casilla
de destino. Si la variable no está configurada, el sitio compila igual pero
los formularios muestran el estado de error con las vías alternativas
(WhatsApp y correo).

## Despliegue

**GitHub Pages**, automático con cada push a `main` mediante
`.github/workflows/deploy.yml`:

- El sitio se publica en `https://nodouy.github.io/nodo-web/`.
- El workflow compila con `BASE_PATH=/nodo-web` (el sitio vive bajo esa
  sub-ruta). Los enlaces internos pasan todos por `src/lib/rutas.ts`, que
  antepone la base; en desarrollo local la base es `/` y no cambia nada.
- Requiere el secret `PUBLIC_WEB3FORMS_KEY` (ver arriba) y GitHub Pages
  configurado con origen "GitHub Actions".

Cuando exista dominio propio: apuntarlo desde la configuración de Pages,
quitar `BASE_PATH` del workflow (la base vuelve a `/`) y actualizar `site`
en `astro.config.mjs`. Cloudflare Pages sigue siendo una alternativa
válida si algún día se prefiere (build `npm run build`, salida `dist`,
misma variable de entorno).
