/* ============================================================
   CONTENIDO DEL SITIO — AQUÍ SE HACEN TODOS LOS CAMBIOS
   Solo cambia el texto que está entre comillas " ".
   No borres las comillas, comas ni llaves.
   ============================================================ */
const SITE = {
  nombre: "Hazlo Real",
  lema: "De la idea a la realidad",

  portada: {
    etiqueta: "Asesoría y acompañamiento",
    titulo: "Tu negocio merece crecer, y no tienes que hacerlo solo",
    texto: "Te acompañamos paso a paso para que tu idea se convierta en un negocio real: con imagen profesional, clientes que te encuentren y las cuentas claras. Hablamos sencillo y trabajamos contigo, de principio a fin.",
    boton: "Quiero mi asesoría sin costo",
    botonSecundario: "Ver servicios"
  },

  /* Tira de confianza justo debajo de la portada */
  promesas: [
    { icono: "💬", titulo: "Primera asesoría sin costo", texto: "Platicamos y te orientamos sin compromiso." },
    { icono: "🤝", titulo: "Trato cercano", texto: "Un solo equipo que te conoce y te acompaña." },
    { icono: "✅", titulo: "Precios claros", texto: "Sabes cuánto cuesta todo antes de empezar." }
  ],

  paraQuienTitulo: "¿Te identificas?",
  paraQuienTexto: "Trabajamos con personas como tú, que están sacando adelante su negocio:",
  paraQuien: [
    "Tengo una idea y no sé por dónde empezar",
    "Vendo por redes y quiero verme más profesional",
    "Mi negocio es pequeño y quiero crecer",
    "No llevo bien mis cuentas",
    "Quiero que mis clientes me encuentren"
  ],

  /* Para agregar un servicio: copia un bloque { ... }, pégalo debajo con su coma. */
  /* Para quitar uno: borra el bloque. Para ocultarlo: pon activo: false */
  serviciosTitulo: "Lo que hacemos por tu negocio",
  serviciosTexto: "Servicios pensados para quienes están empezando o creciendo, explicados sin tecnicismos.",
  servicios: [
    { activo: true, icono: "🎨", nombre: "Imagen de marca y logotipo", descripcion: "Un nombre, logotipo y colores que hacen que tu negocio se vea serio, confiable y se recuerde.", precio: "Desde $0 MXN" },
    { activo: true, icono: "📱", nombre: "Redes sociales", descripcion: "Perfiles ordenados, publicaciones atractivas y un calendario sencillo para que te encuentren.", precio: "Desde $0 MXN" },
    { activo: true, icono: "🌐", nombre: "Página web sencilla", descripcion: "Un sitio claro donde tus clientes ven lo que ofreces y te escriben directo por WhatsApp.", precio: "Desde $0 MXN" },
    { activo: true, icono: "🛍️", nombre: "Catálogo digital y WhatsApp", descripcion: "Muestra tus productos o servicios con precios y atiende pedidos de forma ordenada.", precio: "Desde $0 MXN" },
    { activo: true, icono: "📋", nombre: "Asesoría para formalizar", descripcion: "Te orientamos sobre registro, permisos y primeros pasos para operar con tranquilidad.", precio: "Desde $0 MXN" },
    { activo: true, icono: "📊", nombre: "Control de ventas y finanzas", descripcion: "Formatos simples para saber cuánto vendes, cuánto gastas y cuánto ganas realmente.", precio: "Desde $0 MXN" },
    { activo: true, icono: "🖨️", nombre: "Material impreso", descripcion: "Tarjetas, volantes, lonas y etiquetas con tu identidad, listos para repartir.", precio: "Desde $0 MXN" },
    { activo: true, icono: "🎓", nombre: "Capacitación y acompañamiento", descripcion: "Sesiones prácticas para aprender a vender, atender mejor y organizar tu negocio.", precio: "Desde $0 MXN" }
  ],

  pasosTitulo: "Así trabajamos contigo",
  pasos: [
    { titulo: "Platicamos", texto: "Nos cuentas de tu negocio y de lo que sueñas. Sin compromiso y sin palabras complicadas." },
    { titulo: "Te proponemos un plan", texto: "Armamos algo claro, con tiempos y costos que sí puedes pagar." },
    { titulo: "Lo hacemos real, juntos", texto: "Trabajamos a tu lado y te entregamos todo listo para usar. Seguimos contigo después." }
  ],

  /* Opiniones de clientes reales. Se muestran solo las que tengan activo: true.
     Pide permiso al cliente antes de publicar su nombre y comentario. */
  testimoniosTitulo: "Lo que dicen quienes ya trabajaron con nosotros",
  testimonios: [
    { activo: false, texto: "Escribe aquí lo que dijo tu cliente.", nombre: "Nombre del cliente", negocio: "Su negocio, ciudad" },
    { activo: false, texto: "Escribe aquí lo que dijo tu cliente.", nombre: "Nombre del cliente", negocio: "Su negocio, ciudad" }
  ],

  faqTitulo: "Dudas frecuentes",
  faq: [
    { pregunta: "¿Cuánto cuesta la primera asesoría?", respuesta: "Nada. La primera plática es sin costo y sin compromiso: nos cuentas tu idea y te decimos por dónde empezar." },
    { pregunta: "¿Necesito saber de tecnología?", respuesta: "No. Nosotros nos encargamos de lo técnico y te explicamos todo en palabras sencillas." },
    { pregunta: "¿Trabajan con negocios muy pequeños?", respuesta: "Sí, justo para ellos hacemos nuestros servicios: emprendedores y negocios que apenas empiezan o están creciendo." },
    { pregunta: "¿Puedo contratar solo un servicio?", respuesta: "Claro. Puedes elegir lo que necesitas ahora y sumar más cuando quieras." }
  ],

  contacto: {
    titulo: "Hagamos real tu idea",
    texto: "Escríbenos y cuéntanos de tu negocio. Con gusto te respondemos lo antes posible.",
    whatsapp: "5210000000000",   /* Solo números, con lada: 52 + tu número a 10 dígitos */
    mensajeWhatsapp: "Hola, me interesa una asesoría con Hazlo Real.",
    correo: "contacto@hazlo-real.com",
    horario: "Lunes a sábado, 9:00 a 18:00"
  }
};
