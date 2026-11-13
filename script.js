/* Lee content.js y arma la página. No hace falta editar este archivo. */
(function(){
  const $ = id => document.getElementById(id);
  const set = (id, txt) => { const el = $(id); if (el) el.textContent = txt; };
  const make = (tag, cls, txt) => { const e = document.createElement(tag); if (cls) e.className = cls; if (txt) e.textContent = txt; return e; };
  const S = SITE, C = S.contacto;

  document.title = S.nombre + " — " + S.lema;
  set("brand-name", S.nombre); set("brand-lema", S.lema);
  set("hero-tag", S.portada.etiqueta); set("hero-title", S.portada.titulo);
  set("hero-text", S.portada.texto); set("hero-cta", S.portada.boton); set("hero-cta2", S.portada.botonSecundario);
  set("pq-title", S.paraQuienTitulo); set("pq-text", S.paraQuienTexto);
  set("serv-title", S.serviciosTitulo); set("serv-text", S.serviciosTexto);
  set("pasos-title", S.pasosTitulo); set("test-title", S.testimoniosTitulo); set("faq-title", S.faqTitulo);
  set("c-title", C.titulo); set("c-text", C.texto); set("c-hours", C.horario); set("c-mail", C.correo);
  set("foot", "© " + new Date().getFullYear() + " " + S.nombre + ". " + S.lema + ".");

  const wa = "https://wa.me/" + C.whatsapp + "?text=" + encodeURIComponent(C.mensajeWhatsapp);
  ["c-wa", "hero-cta", "wa-float"].forEach(id => $(id).href = wa);
  $("c-mail").href = "mailto:" + C.correo;

  S.promesas.forEach(p => {
    const d = make("div", "promesa"), t = make("div");
    t.append(make("h3", "", p.titulo), make("p", "", p.texto));
    d.append(make("span", "ico", p.icono), t); $("promesas").append(d);
  });

  S.paraQuien.forEach(t => $("pq-list").append(make("li", "", t)));

  S.servicios.filter(s => s.activo !== false).forEach(s => {
    const c = make("article", "card");
    c.append(make("span", "ico", s.icono), make("h3", "", s.nombre), make("p", "", s.descripcion));
    if (s.precio) c.append(make("p", "price", s.precio));
    $("serv-grid").append(c);
  });

  S.pasos.forEach(p => {
    const li = make("li"); li.append(make("h3", "", p.titulo), make("p", "", p.texto)); $("pasos").append(li);
  });

  const tests = S.testimonios.filter(t => t.activo === true);
  if (tests.length) {
    $("testimonios").hidden = false;
    tests.forEach(t => {
      const q = make("blockquote", "quote"), f = make("footer"), b = make("b", "", t.nombre);
      f.append(b, document.createTextNode(t.negocio));
      q.append(make("p", "", t.texto), f); $("test-grid").append(q);
    });
  }

  S.faq.forEach(f => {
    const d = make("details"); d.append(make("summary", "", f.pregunta), make("p", "", f.respuesta)); $("faq").append(d);
  });
})();
