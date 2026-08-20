/**
 * Contenido de la página de servicios y planes.
 *
 * Único dato con fuente verificada disponible: el estudio del BID sobre
 * uso de sistemas de análisis de datos en pymes uruguayas. No agregar
 * otras cifras sin fuente.
 */

export const intro = {
  etiqueta: "Servicios y planes",
  titulo: "Tus datos ya cuentan la historia. Falta ordenarla.",
  parrafos: [
    "Casi todos los negocios generan datos todos los días: ventas, gastos, facturación, movimientos de la plataforma de venta. Pero según un estudio del BID, menos del 10% de las pymes uruguayas usa sistemas especializados de análisis de datos. El resto decide con planillas sueltas, o directamente de memoria.",
    "Nuestro trabajo es cerrar esa distancia sin que tengas que contratar un departamento propio: tomamos los datos que ya tenés, los ordenamos, los analizamos y te los presentamos en reportes claros que podés filtrar y explorar por tu cuenta.",
  ],
};

export const recorrido = {
  titulo: "Tres planes, tres preguntas",
  bajada:
    "Cada plan responde una pregunta más profunda que la anterior. Empezá por la que te quita el sueño.",
};

export const detallePlanes = {
  incluyeTitulo: "Qué incluye",
  noIncluyeTitulo: "Qué no incluye",
  exclusivosTitulo: "Solo en Full",
  exclusivosBajada:
    "Los tres diferenciales que justifican el salto: no están en ningún otro plan.",
};

export const queRecibis = {
  titulo: "Qué recibís",
  // El formato concreto de entrega: común a los tres planes, más lo
  // que agrega cada uno.
  comun: [
    "Tus planillas ordenadas y limpias",
    "El reporte en archivo de Power BI",
    "Una versión en PDF, para mirarla desde cualquier dispositivo",
    "Todo en una carpeta de Dropbox compartida con vos",
  ],
  porPlan: {
    standard: ["Reunión de entrega para recorrer el reporte juntos"],
    pro: [
      "Actualización mensual del reporte, avisada por los canales que acordemos, y reuniones de seguimiento para revisarlo con vos",
    ],
    full: [
      "Lo mismo que Pro, más la actualización automática de los datos, sin que tengas que mandar planillas cada mes",
    ],
  } as Record<string, string[]>,
};

export const sinPowerBi = {
  titulo: "¿Y si no tengo Power BI?",
  // Texto exacto aprobado por el cliente: distingue entre abrir un
  // archivo localmente y consultarlo en línea. No simplificar ni
  // resumir: cualquier resumen que mezcle esas dos cosas lo vuelve
  // inexacto.
  parrafos: [
    "No hace falta que compres nada. Con tu autorización te ayudamos a instalar Power BI Desktop, que es gratuito, para que puedas abrir el reporte en tu computadora.",
    "Power BI Desktop funciona en Windows. Si trabajás en Mac o querés mirar el reporte desde el celular, para eso está la versión en PDF, que se abre en cualquier dispositivo sin instalar nada.",
    "Y si más adelante querés que el reporte esté disponible en línea para varias personas de tu equipo, lo conversamos: ahí sí puede hacer falta alguna licencia, y te lo aclaramos antes de que decidas.",
  ],
};

export const plazoYPagos = {
  titulo: "Plazo y formas de pago",
  plazoTitulo: "Plazo de entrega",
  plazoTexto: "5 a 7 días hábiles, según el volumen de datos.",
  pagosTitulo: "Formas de pago",
};

export const arranque = {
  titulo: "¿Qué necesitamos para arrancar?",
  parrafos: [
    "El primer paso es el formulario de inicio: un cuestionario corto para conocer tu negocio antes de la reunión. Qué vendés, dónde viven tus datos hoy —planillas, sistema de facturación, plataforma de venta—, y qué querés entender primero. Está acá en el sitio y lo podés completar ahora mismo, sin costo y sin que te comprometa a nada.",
    "No hace falta que tus datos estén prolijos ni completos: ordenarlos es parte del trabajo. Y no te pedimos acceso a nada hasta que firmemos el acuerdo de confidencialidad.",
  ],
  boton: "Completar el formulario de inicio",
  botonHref: "/formulario",
};

export const cierre = {
  titulo: "¿Empezamos por la foto?",
  bajada:
    "Agendá una reunión informativa, corta y sin compromiso, o escribinos por WhatsApp.",
};
