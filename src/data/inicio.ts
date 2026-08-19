/**
 * Contenido de la página de inicio. Todo el texto vive acá, no en los
 * componentes.
 *
 * BORRADOR A VALIDAR: "Quiénes somos" y "Dudas" están pendientes de
 * texto final según el documento del proyecto. Lo que hay acá es un
 * borrador que respeta las reglas de comunicación.
 */

export const portada = {
  etiqueta: "Análisis de datos para pymes en Uruguay",
  // El título se corta en dos para poder acentuar la palabra final
  // con el color de acento del modo activo.
  titulo: "Mirá lo que",
  tituloAcento: "importa.",
  bajada:
    "Tomamos las planillas y los datos que tu negocio ya genera y los convertimos en reportes claros de tus números clave. Nosotros te mostramos la información; las decisiones las tomás vos.",
  ctaAgendar: "Agendá una reunión",
  ctaWhatsapp: "Escribinos por WhatsApp",
};

export const teSuena = {
  titulo: "¿Te suena?",
  bajada: "Tres situaciones que se repiten en casi todos los negocios.",
  situaciones: [
    {
      titulo: "Tenés todo repartido en planillas",
      texto:
        "Las ventas en un Excel, los gastos en otro, la facturación en el sistema. Nada habla con nada y armar un resumen lleva una tarde entera.",
    },
    {
      titulo: "No sabés qué te deja plata",
      texto:
        "Vendés todos los días, pero no está claro qué producto rinde de verdad y cuál apenas empata.",
    },
    {
      titulo: "Decidís a ojo",
      texto:
        "La intuición te trajo hasta acá, y vale. Pero cada vez hay más números en juego, y mirarlos ordenados es otra cosa.",
    },
  ],
};

export const queHacemos = {
  titulo: "Qué hacemos",
  bajada:
    "Un recorrido en tres preguntas. Cada plan responde una más profunda que la anterior.",
  enlace: "Ver los planes en detalle",
  pasos: [
    {
      pregunta: "¿Qué pasó?",
      metafora: "La foto",
      texto:
        "Una imagen clara de tu negocio hasta hoy: qué se vendió, qué se gastó, qué quedó.",
    },
    {
      pregunta: "¿Cómo vengo?",
      metafora: "La película",
      texto:
        "La evolución mes a mes: si venís mejor o peor que antes, y en qué exactamente.",
    },
    {
      pregunta: "¿Qué me conviene hacer?",
      metafora: "El copiloto",
      texto:
        "La información ordenada para tu próxima decisión. La decisión, siempre, es tuya.",
    },
  ],
};

export const comoFunciona = {
  titulo: "Cómo funciona",
  bajada: "Un proceso con método, del primer mensaje a la entrega.",
  pasos: [
    {
      titulo: "Primer contacto",
      texto:
        "Nos escribís por WhatsApp o agendás una reunión. Sin compromiso y sin que tengas que preparar nada.",
    },
    {
      titulo: "Formulario de inicio",
      texto:
        "Lo completás desde el sitio cuando quieras, sin esperar respuesta nuestra. No te compromete a nada: nos sirve para conocer tu negocio antes de la reunión.",
      enlace: { texto: "Completar el formulario de inicio", href: "/formulario" },
    },
    {
      titulo: "Reunión informativa",
      texto:
        "Conversamos sobre lo que necesitás y vemos qué plan tiene sentido para tu caso. Si ninguno lo tiene, también te lo decimos.",
    },
    {
      titulo: "Acuerdo de confidencialidad",
      texto:
        "Antes de ver un solo dato tuyo firmamos un acuerdo mutuo que nos compromete a los dos.",
    },
    {
      titulo: "Entrega",
      texto:
        "Recibís tu reporte y lo recorremos con vos. La primera entrega del plan Standard lleva de 5 a 7 días hábiles, según el volumen de datos; en Pro y Full ese es el plazo de la entrega inicial, y después el reporte se actualiza todos los meses.",
    },
  ],
};

export const seguridadCorta = {
  titulo: "Tus datos, cuidados",
  bajada:
    "Sabemos que compartir los números del negocio no es un paso menor. Por eso lo tratamos con reglas claras.",
  enlace: "Leé cómo cuidamos tus datos",
  puntos: [
    {
      titulo: "Acuerdo de confidencialidad mutuo",
      texto: "Se firma antes de compartir cualquier dato. Nos compromete a los dos.",
    },
    {
      titulo: "Vos decidís, siempre",
      texto:
        "Analizamos y presentamos información. Las decisiones sobre tu negocio son tuyas.",
    },
    {
      titulo: "Accesos ordenados",
      texto:
        "Tus datos viven en herramientas conocidas, con accesos definidos y respaldos.",
    },
  ],
};

export const quienesSomos = {
  titulo: "Quiénes somos",
  parrafos: [
    "NODO existe por algo simple: la mayoría de los negocios ya genera los datos que necesita para entenderse a sí mismo — en planillas, en el sistema de facturación, en la plataforma de venta — pero casi nunca los mira, porque ordenarlos lleva un tiempo que el que está al frente no tiene.",
    "Nuestro trabajo es ese: tomar lo que ya tenés, ordenarlo y presentártelo claro. Sin humo. No prometemos resultados ni tomamos decisiones por vos: te mostramos tus números, porque el negocio lo conocés vos.",
  ],
};

export const dudas = {
  titulo: "Dudas",
  bajada: "Las preguntas que nos hacen antes de arrancar.",
  preguntas: [
    {
      pregunta: "¿Necesito tener un sistema o algo especial?",
      respuesta:
        "No. Con las planillas que ya usás alcanza para empezar. Parte de nuestro trabajo es ordenarlas.",
    },
    {
      pregunta: "¿Sirve para un negocio chico?",
      respuesta:
        "Sí. No hace falta un volumen mínimo de ventas ni un sistema especial. Si hay registros, hay algo para ordenar y entender.",
    },
    {
      pregunta: "¿Qué pasa si mis planillas son un lío?",
      respuesta:
        "Es lo más común, y está bien. Ordenar y limpiar tus datos es parte del servicio, no un extra.",
    },
    {
      pregunta: "¿Mis datos están seguros?",
      // respuestaHtml: se redacta acá mismo y solo puede llevar enlaces
      // internos del sitio.
      respuestaHtml:
        'Antes de ver un solo dato firmamos un acuerdo de confidencialidad mutuo, y trabajamos con accesos definidos y respaldos. Tenés una página entera dedicada a esto: <a href="/seguridad">Seguridad y confidencialidad</a>.',
    },
    {
      pregunta: "¿Cuánto demora la entrega?",
      respuesta:
        "La primera entrega del plan Standard lleva de 5 a 7 días hábiles, según el volumen de datos. En Pro y Full ese plazo corresponde a la entrega inicial: después el reporte se actualiza todos los meses.",
    },
    {
      pregunta: "¿Tengo que saber de tecnología para usar el reporte?",
      respuesta:
        "No. Es un reporte que podés filtrar y explorar por tu cuenta, y en la entrega lo recorremos con vos hasta que quede claro.",
    },
    {
      pregunta: "¿Necesito comprar Power BI o alguna licencia?",
      respuesta:
        "Para ver tu reporte no necesitás comprar nada. Si el reporte lo van a mirar varias personas de tu equipo, puede hacer falta alguna licencia: te lo aclaramos en la reunión, antes de que decidas, para que no te sorprenda ningún costo después.",
    },
    {
      pregunta: "¿Puedo cambiar de plan más adelante?",
      respuesta:
        "Sí. Se puede empezar por el Standard para tener la foto de tu negocio y pasar después a un plan mensual, o cambiar de plan cuando tu operación cambie. Lo conversamos y ajustamos.",
    },
    {
      pregunta: "¿Me tengo que comprometer por mucho tiempo?",
      respuesta:
        "El Standard es un pago único, sin permanencia. El Pro es mensual y lo podés dar de baja cuando quieras. El Full tiene un mínimo de tres meses, porque la automatización y las alertas necesitan ese tiempo para tener sentido.",
    },
    {
      pregunta: "¿Cómo se paga?",
      respuesta:
        "Por transferencia bancaria, Mercado Pago o a convenir. Si necesitás factura, avisanos y lo coordinamos.",
    },
    {
      pregunta: "¿La primera reunión tiene costo?",
      respuesta:
        "No. Es una reunión informativa, corta y sin compromiso, para conocer tu negocio y contarte cómo trabajamos.",
    },
  ],
};

export const agenda = {
  titulo: "Agendá una reunión",
  bajada:
    "Una charla corta y sin compromiso para conocer tu negocio y contarte cómo trabajamos.",
  fallback:
    "Estamos habilitando la agenda en línea. Mientras tanto, escribinos y coordinamos un horario.",
};

export const muestra = {
  titulo: "Mirá un reporte de verdad",
  bajada:
    "Un reporte de muestra, con datos ficticios, para que explores cómo se ve tu negocio ordenado.",
  // PENDIENTE: enlace o embebido del reporte demo de Power BI.
  enlace: "",
};
