// ===== Año dinámico en footer
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Carrusel manual (sin autoplay)
document.querySelectorAll('.slider').forEach(slider => {
  const track = slider.querySelector('.slider__track');
  const prev  = slider.querySelector('.prev');
  const next  = slider.querySelector('.next');
  const step  = 360; // px por clic

  prev.addEventListener('click', () => track.scrollBy({left: -step, behavior: 'smooth'}));
  next.addEventListener('click', () => track.scrollBy({left:  step, behavior: 'smooth'}));
});

// ===== Formulario -> WhatsApp
const form = document.getElementById('form-reserva');
if (form){
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const d = new FormData(this);
    const txt = [
      "*Nueva reserva*",
      "Nombre: " + (d.get('nombre')||''),
      "Email: " + (d.get('email')||''),
      "Teléfono: " + (d.get('telefono')||''),
      "Servicio: " + (d.get('servicio')||''),
      "Llegada: " + (d.get('fecha_llegada')||''),
      "Salida: " + (d.get('fecha_salida')||''),
      "Mensaje: " + (d.get('mensaje')||'')
    ].join("%0A");
    window.open("https://wa.me/18092515727?text="+txt,"_blank");
  });
}

// ===== Multilenguaje ES/EN (en un solo index)
const dict = {
  es: {
    slogan: "Vive con pasión, Vive Rojo Cana…",
    sub: "Piénsalo y nosotros te llevamos.",
    reservar: "Reservar",
    pagar: "Pagar",
    quienes: "Quiénes somos",
    quienes_txt: "Somos tu aliado en traslados, tours y excursiones por toda la República Dominicana. Puntualidad, seguridad y hospitalidad dominicana en cada servicio.",
    vision: "Visión",
    vision_txt: "Ser la empresa de referencia en transporte y tours en RD, reconocidos por calidad y confianza.",
    mision: "Misión",
    mision_txt: "Ofrecer servicios seguros, puntuales y personalizados que conecten con la belleza de nuestro país.",
    destinos: "Destinos destacados",
    transfer_desc: "Traslados privados aeropuerto–hotel–aeropuerto con conductores profesionales.",
    buggy_desc: "Aventura off-road por senderos, playa y cuevas. Diversión asegurada.",
    saona: "Isla Saona",
    saona_desc: "Aguas turquesa, piscinas naturales y arena blanca. ¡Postales vivas!",
    boca_desc: "Playa tranquila y familiar cerca de Santo Domingo. Ideal para pasar el día.",
    bahia_desc: "Paraíso virgen en el sur de RD. Naturaleza pura y mar cristalino.",
    reserva_titulo: "Reserva ahora",
    llegada: "Fecha de llegada",
    salida: "Fecha de salida",
    enviar_wa: "Enviar por WhatsApp",
    derechos: "Todos los derechos reservados",
    ph_nombre: "Nombre completo",
    ph_email: "Correo electrónico",
    ph_tel: "Teléfono",
    ph_servicio: "Servicio solicitado",
    ph_mensaje: "Detalles (vuelo, hotel, personas)"
  },
  en: {
    slogan: "Explore with Passion, Live Rojo Cana…",
    sub: "Just think about it… and we’ll take you there.",
    reservar: "Book Now",
    pagar: "Pay",
    quienes: "About Us",
    quienes_txt: "Your trusted partner for transfers, tours and excursions throughout the Dominican Republic. Punctual, safe and friendly service.",
    vision: "Vision",
    vision_txt: "Become the benchmark for transport and tours in the DR, known for quality and trust.",
    mision: "Mission",
    mision_txt: "Provide safe, on-time, personalized services that connect travelers with our country’s beauty.",
    destinos: "Featured Destinations",
    transfer_desc: "Private airport–hotel–airport transfers with professional drivers.",
    buggy_desc: "Off-road adventure across trails, beaches and caves. Guaranteed fun.",
    saona: "Saona Island",
    saona_desc: "Turquoise waters, natural pools and white sand. A living postcard!",
    boca_desc: "Calm, family-friendly beach near Santo Domingo. Perfect for a day trip.",
    bahia_desc: "Untouched paradise in the south of DR. Pure nature and crystal-clear sea.",
    reserva_titulo: "Book now",
    llegada: "Arrival date",
    salida: "Departure date",
    enviar_wa: "Send via WhatsApp",
    derechos: "All rights reserved",
    ph_nombre: "Full name",
    ph_email: "Email",
    ph_tel: "Phone",
    ph_servicio: "Requested service",
    ph_mensaje: "Details (flight, hotel, people)"
  }
};

// Cambia textos según idioma
function setLang(lang){
  document.body.setAttribute('data-lang', lang);
  const t = dict[lang];

  // Textos comunes
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k = el.getAttribute('data-i18n');
    if (t[k]) el.textContent = t[k];
  });
  // Placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
    const k = el.getAttribute('data-i18n-ph');
    if (t[k]) el.setAttribute('placeholder', t[k]);
  });
}
setLang(document.body.getAttribute('data-lang') || 'es');

// Botones de idioma
document.querySelectorAll('[data-lang-btn]').forEach(btn=>{
  btn.addEventListener('click', ()=> setLang(btn.getAttribute('data-lang-btn')));
});
