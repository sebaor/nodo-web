/**
 * Antepone la base del sitio a las rutas internas. En GitHub Pages el
 * sitio vive bajo una sub-ruta (/nodo-web), así que ningún enlace
 * interno se escribe directo en los componentes: siempre pasa por acá.
 * En desarrollo la base es "/" y no cambia nada.
 */
const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export function ruta(camino: string): string {
  return camino.startsWith("/") ? `${base}${camino}` : camino;
}

/** Reescribe los enlaces internos de un bloque de HTML redactado en datos. */
export function rutasEnHtml(html: string): string {
  return html.replaceAll('href="/', `href="${base}/`);
}
