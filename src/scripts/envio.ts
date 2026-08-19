/**
 * Envío de formularios del sitio. El sitio es estático, así que el
 * envío va por Web3Forms, que recibe los datos y los reenvía por
 * correo a la casilla de NODO.
 *
 * La clave del servicio NO se escribe en el código: vive en la
 * variable de entorno PUBLIC_WEB3FORMS_KEY (ver README). Vite la
 * reemplaza en tiempo de compilación.
 */

const CLAVE = import.meta.env.PUBLIC_WEB3FORMS_KEY as string | undefined;

export function servicioConfigurado(): boolean {
  return Boolean(CLAVE);
}

export async function enviarFormulario(
  campos: Record<string, string>,
): Promise<{ ok: boolean }> {
  if (!CLAVE) return { ok: false };

  try {
    const respuesta = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ access_key: CLAVE, ...campos }),
    });
    const datos = await respuesta.json();
    return { ok: Boolean(datos.success) };
  } catch {
    return { ok: false };
  }
}
