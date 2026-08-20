/**
 * Contenido de la página de seguridad y confidencialidad.
 * Es la página que más se va a leer y la que decide.
 *
 * Reglas duras: no prometer confidencialidad absoluta ni cifrado de
 * conocimiento cero. Dropbox usa cifrado AES-256 y eso es lo único que
 * se afirma sobre cifrado.
 */

export const intro = {
  etiqueta: "Seguridad y confidencialidad",
  titulo: "¿Dónde quedan mis datos?",
  bajada:
    "Es la pregunta correcta, y merece una respuesta completa. Esta página explica qué firmamos, con qué herramientas trabajamos y qué reglas seguimos con tu información.",
};

export const acuerdo = {
  titulo: "Acuerdo de confidencialidad mutuo",
  parrafos: [
    "Antes de que compartas un solo dato, firmamos un acuerdo de confidencialidad. Es mutuo: nos compromete a los dos, no solo a vos.",
    "En criollo: nosotros nos obligamos a no divulgar, compartir ni usar tu información para nada que no sea el trabajo acordado. Vos te obligás a lo mismo con lo nuestro — cómo trabajamos, nuestras estructuras y materiales. El acuerdo ya está redactado y lo recibís para leer con calma antes de firmar.",
  ],
};

export const contrato = {
  titulo: "Contrato de servicios y alcance",
  parrafos: [
    "El trabajo se formaliza con un contrato de servicios, acompañado de un anexo de alcance específico para tu caso: qué datos entran, qué reportes salen, con qué frecuencia y qué queda afuera.",
    "Así los dos sabemos exactamente qué esperar, desde el primer día y por escrito.",
  ],
};

export const decision = {
  titulo: "Vos decidís, siempre",
  parrafos: [
    "Nuestro trabajo es analizar tu información y presentártela clara. Las decisiones sobre tu negocio las tomás vos: no te decimos qué hacer, te mostramos lo que tus números dicen para que decidas con más elementos.",
    "Esto también aplica a tus datos: son tuyos, y vos definís qué compartís y qué no. Si en algún momento querés terminar el trabajo, tu información no queda con nosotros.",
  ],
};

export const herramientas = {
  titulo: "¿Con qué herramientas trabajamos?",
  bajada:
    "Agrupadas por función, para que sepas qué hace cada una con tu información.",
  grupos: [
    {
      titulo: "¿Dónde viven tus datos?",
      herramientas: "Dropbox · Excel · Google Sheets",
      parrafos: [
        "Tus archivos se guardan en Dropbox, que cifra los datos con AES-256, y se trabajan en Excel o Google Sheets según cómo los tengas vos.",
        "Los accesos están definidos: entra únicamente quien trabaja en tu caso. Se mantienen respaldos para no depender de una sola copia. No prometemos secreto absoluto —ningún servicio en la nube puede prometerlo con honestidad—, pero sí reglas claras sobre quién entra y qué se guarda.",
      ],
    },
    {
      titulo: "¿Con qué los procesamos?",
      herramientas: "Power BI · Power Automate",
      parrafos: [
        "Power BI es la herramienta de Microsoft con la que armamos tus reportes: ahí tus datos se ordenan y se convierten en algo que podés filtrar y explorar por tu cuenta.",
        "Power Automate se usa en el plan Full para que tus datos se actualicen solos, sin que tengas que mandar planillas cada mes.",
      ],
    },
    {
      titulo: "Herramientas de trabajo interno",
      herramientas: "Excalidraw · asistentes de IA",
      parrafos: [
        "Usamos Excalidraw para diseñar la estructura de los reportes y asistentes de inteligencia artificial para tareas de desarrollo.",
      ],
      destacado:
        "A estas herramientas no entran datos identificables de clientes.",
    },
  ],
};

export const cierre = {
  titulo: "¿Te queda alguna duda?",
  bajada:
    "Preguntá lo que necesites antes de compartir nada. Preferimos una pregunta incómoda hoy que una duda mañana.",
};
