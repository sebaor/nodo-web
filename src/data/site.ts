/**
 * Datos generales del sitio. Integraciones y banderas en un solo lugar:
 * el número de WhatsApp, el correo y el enlace del calendario no se
 * escriben en ningún otro archivo.
 */
export const site = {
  nombre: "NODO",
  descripcion:
    "Tomamos los datos que ya tenés y los convertimos en reportes claros de tus números clave. Análisis de datos para pymes y emprendimientos de Uruguay.",
  ubicacion: "Uruguay",

  whatsapp: {
    numero: "59899364971",
    mensaje:
      "Hola, vengo de la web de NODO. Quiero saber más sobre los reportes.",
  },

  correo: {
    // PENDIENTE: cambiar cuando exista el correo con dominio propio.
    direccion: "info.nodo.uy@gmail.com",
    asunto: "Consulta desde la web de NODO",
    cuerpo:
      "Hola, quiero saber más sobre los reportes de NODO.\n\nMi negocio: \nMi consulta: ",
  },

  // Página de reservas de Google Calendar, en su URL de embebido
  // (gv=true). El enlace corto equivalente para compartir es
  // https://calendar.app.google/VBVarnvb1PSMFekZ9
  calendarioUrl:
    "https://calendar.google.com/appointments/schedules/AcZssZ0uUrcUDR4_qvKaOrniXEkeO3arthGDd0efe6ZeTfvfmUutTwHGUHSdtqyh4sXqzwliulLSUuoX?gv=true",

  redes: {
    instagram: "https://www.instagram.com/nodo_uy_/",
    linkedin: "https://www.linkedin.com/company/nod0/",
  },

  flags: {
    // La sección de muestra queda maquetada pero oculta hasta que
    // exista el reporte demo de Power BI.
    mostrarMuestra: false,
  },
} as const;

export const waLink = `https://wa.me/${site.whatsapp.numero}?text=${encodeURIComponent(site.whatsapp.mensaje)}`;

export const mailtoLink = `mailto:${site.correo.direccion}?subject=${encodeURIComponent(site.correo.asunto)}&body=${encodeURIComponent(site.correo.cuerpo)}`;

export const leyendaFicticia = "Ejemplo con datos ficticios";

export const plazoEntrega = "5 a 7 días hábiles, según el volumen de datos.";
