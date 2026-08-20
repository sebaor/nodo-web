/**
 * Formulario de inicio — contenido según el copy final corregido
 * (versión 15/08/2026). 17 preguntas en 4 secciones.
 *
 * El envío va por Web3Forms a info.nodo.uy@gmail.com. La clave vive en
 * la variable de entorno PUBLIC_WEB3FORMS_KEY (ver README).
 */

export interface Pregunta {
  /** número visible, "01" a "17" */
  numero: string;
  etiqueta: string;
  tipo: "texto" | "correo" | "telefono" | "parrafo" | "unica" | "multiple";
  obligatoria: boolean;
  ayuda?: string;
  opciones?: string[];
  /** si la lista incluye "Otro", muestra un campo de detalle opcional */
  detalleOtro?: boolean;
}

export interface Seccion {
  numero: string;
  titulo: string;
  preguntas: Pregunta[];
}

export const encabezado = {
  etiqueta: "Formulario de inicio",
  titulo: "Te damos la bienvenida a NODO",
  eslogan: "Donde tus datos toman forma.",
  bajada:
    "Completá este formulario para que podamos conocer tu negocio y entender cómo ayudarte. Nos lleva menos de 5 minutos.",
  puntos: [
    {
      titulo: "Sin costo ni compromiso",
      texto:
        "Completarlo es gratuito y no te obliga a nada. Cuando lo recibamos te vamos a proponer una reunión informativa de 30 minutos para conversarlo.",
    },
    {
      titulo: "Para preparar la reunión",
      texto:
        "No es una contratación: nos sirve para llegar a la charla conociendo tu negocio y qué querés entender primero.",
    },
    {
      titulo: "Confidencial",
      texto:
        "Usamos lo que compartas únicamente para preparar una propuesta a tu medida. No lo compartimos con terceros ni le damos otro uso. Si querés, antes de avanzar firmamos un acuerdo de confidencialidad mutuo, que compromete a las dos partes por igual.",
    },
  ],
  principio:
    "Y como siempre: analizamos y presentamos tu información en reportes claros. Las decisiones sobre tu negocio las tomás vos.",
  notaObligatorias: "Las preguntas marcadas con * son obligatorias.",
};

export const secciones: Seccion[] = [
  {
    numero: "01",
    titulo: "Datos de contacto",
    preguntas: [
      {
        numero: "01",
        etiqueta: "Nombre completo",
        tipo: "texto",
        obligatoria: true,
      },
      {
        numero: "02",
        etiqueta: "Correo electrónico",
        tipo: "correo",
        obligatoria: true,
      },
      {
        numero: "03",
        etiqueta: "Teléfono o WhatsApp",
        tipo: "telefono",
        obligatoria: true,
        ayuda: "Es nuestro canal principal de contacto.",
      },
      {
        numero: "04",
        etiqueta: "Nombre de tu negocio o emprendimiento",
        tipo: "texto",
        obligatoria: true,
      },
      {
        numero: "05",
        etiqueta: "¿A qué se dedica tu negocio? Contanos brevemente",
        tipo: "parrafo",
        obligatoria: true,
      },
      {
        numero: "06",
        etiqueta: "¿Hace cuánto tiempo está funcionando?",
        tipo: "unica",
        obligatoria: true,
        opciones: [
          "Menos de 1 año",
          "Entre 1 y 2 años",
          "Entre 2 y 5 años",
          "Más de 5 años",
        ],
      },
    ],
  },
  {
    numero: "02",
    titulo: "Tu operación actual",
    preguntas: [
      {
        numero: "07",
        etiqueta: "¿Dónde llevás el registro de tus ventas o actividad comercial?",
        tipo: "multiple",
        obligatoria: true,
        ayuda: "Marcá todas las que uses. Es normal usar más de una.",
        opciones: [
          "Excel o Google Sheets",
          "Sistema de facturación (Nodum, Soft Restaurant, SAP, etc.)",
          "Plataforma web (Mercado Libre, TiendaNube, Shopify, Wix, etc.)",
          "Sitio web propio",
          "Papel y lápiz",
          "Otro",
        ],
        detalleOtro: true,
      },
      {
        numero: "08",
        etiqueta: "¿Cómo gestionás tu stock, productos o servicios?",
        tipo: "multiple",
        obligatoria: true,
        ayuda: "Marcá todas las que correspondan.",
        opciones: [
          "Excel o Google Sheets",
          "Sistema de facturación",
          "Papel y lápiz",
          "No lo gestiono",
          "Otro",
        ],
        detalleOtro: true,
      },
      {
        numero: "09",
        etiqueta:
          "¿Cuántas ventas u operaciones registrás por mes, aproximadamente?",
        tipo: "unica",
        obligatoria: true,
        ayuda: "Un número aproximado alcanza. Nos sirve para estimar el tiempo de entrega.",
        opciones: [
          "Menos de 100",
          "Entre 100 y 500",
          "Entre 500 y 2.000",
          "Más de 2.000",
          "No lo sé con precisión",
        ],
      },
      {
        numero: "10",
        etiqueta: "¿Desde qué fecha tenés registros guardados?",
        tipo: "unica",
        obligatoria: true,
        ayuda: "Cuanto más historial haya, más podemos compararte con vos mismo.",
        opciones: [
          "Menos de 3 meses",
          "Entre 3 meses y 1 año",
          "Más de 1 año",
          "No estoy seguro",
        ],
      },
    ],
  },
  {
    numero: "03",
    titulo: "¿Qué querés lograr?",
    preguntas: [
      {
        numero: "11",
        etiqueta: "Seleccioná todo lo que te gustaría visualizar",
        tipo: "multiple",
        obligatoria: true,
        opciones: [
          "Ventas por día, semana o mes",
          "Productos más vendidos",
          "Ranking de clientes",
          "Formas de pago más utilizadas",
          "Comparación entre meses o temporadas",
          "Balance de ingresos y egresos",
          "Resultado de campañas publicitarias",
          "Comparación por canales de venta",
          "Otro",
        ],
        detalleOtro: true,
      },
      {
        numero: "12",
        etiqueta: "¿Qué te gustaría poder mejorar en tu negocio?",
        tipo: "parrafo",
        obligatoria: true,
        ayuda:
          "Contanos qué decisión te cuesta tomar hoy por no tener la información clara.",
      },
      {
        numero: "13",
        etiqueta:
          "¿Preferís reportes cerrados o una versión para filtrar y explorar?",
        tipo: "unica",
        obligatoria: true,
        opciones: [
          "Prefiero ver resultados simples, ya resumidos",
          "Me gustaría explorar, comparar y filtrar por mi cuenta",
          "No estoy seguro, prefiero que nos lo recomienden",
        ],
      },
      {
        numero: "14",
        etiqueta: "¿Cuántas personas van a mirar el reporte, además de vos?",
        tipo: "unica",
        obligatoria: true,
        ayuda: "Nos sirve para definir cómo compartirlo.",
        opciones: [
          "Solo yo",
          "Entre 2 y 5 personas",
          "Más de 5",
          "Todavía no lo sé",
        ],
      },
    ],
  },
  {
    numero: "04",
    titulo: "Para cerrar",
    preguntas: [
      {
        numero: "15",
        etiqueta: "¿Viste nuestros planes? ¿Alguno te interesa en particular?",
        tipo: "unica",
        obligatoria: false,
        opciones: [
          "Standard",
          "Pro",
          "Full",
          "Todavía no los vi, prefiero que nos lo recomienden",
        ],
      },
      {
        numero: "16",
        etiqueta: "¿Cómo nos conociste?",
        tipo: "unica",
        obligatoria: true,
        opciones: [
          "Instagram",
          "LinkedIn",
          "Nos recomendó alguien",
          "Búsqueda en Google",
          "Otro",
        ],
        detalleOtro: true,
      },
      {
        numero: "17",
        etiqueta: "¿Hay algo más que quieras contarnos?",
        tipo: "parrafo",
        obligatoria: false,
      },
    ],
  },
];

export const totalPreguntas = secciones.reduce(
  (suma, s) => suma + s.preguntas.length,
  0,
);

export const estados = {
  enviando: "Enviando…",
  enviar: "Enviar el formulario",
  exitoTitulo: "Recibimos tu formulario",
  exitoTexto:
    "Vamos a revisarlo y te escribimos para coordinar una reunión informativa, sin costo ni compromiso.",
  errorTexto:
    "No pudimos enviar el formulario: puede ser un problema de conexión o del servicio de envío. Lo que escribiste sigue acá, no se perdió. Probá de nuevo en un momento, o si preferís escribinos directo:",
  faltanRespuestas: "Falta responder alguna pregunta obligatoria.",
  respuestaObligatoria: "Esta respuesta es obligatoria.",
  correoInvalido: "Revisá que el correo esté bien escrito.",
};

export const notaPrivacidad = {
  texto:
    "Usamos estos datos únicamente para preparar tu propuesta y coordinar la reunión. No se comparten con terceros ni se les da otro uso.",
  enlaceTexto: "Leé cómo cuidamos tus datos",
  enlaceHref: "/seguridad",
};
