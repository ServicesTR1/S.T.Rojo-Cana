// script.js

// Carruseles manuales
document.querySelectorAll('.slider').forEach(slider => {
  const track = slider.querySelector('.slider__track');
  const prev = slider.querySelector('.prev');
  const next = slider.querySelector('.next');
  const step = 360; // píxeles por paso

  prev.addEventListener('click', () => track.scrollBy({ left: -step, behavior: 'smooth' }));
  next.addEventListener('click', () => track.scrollBy({ left:  step, behavior: 'smooth' }));
});

// Scroll suave para anclas
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href.length > 1) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Envío de formulario a WhatsApp + Email
const form = document.getElementById('form-reserva');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const d = new FormData(form);
    const msg = [
      'Nueva reserva',
      'Nombre: ' + d.get('nombre'),
      'Email: ' + d.get('email'),
      'Teléfono: ' + d.get('telefono'),
      'Servicio: ' + d.get('servicio'),
      'Llegada: ' + d.get('fecha_llegada'),
      'Salida: ' + d.get('fecha_salida'),
      'Mensaje: ' + (d.get('mensaje') || '')
    ].join('\n');

    // WhatsApp
    window.open('https://wa.me/18092515727?text=' + encodeURIComponent(msg), '_blank');

    // Email
    window.location.href = 'mailto:servicestravelrojo@gmail.com'
      + '?subject=' + encodeURIComponent('Reserva - ' + d.get('nombre'))
      + '&body=' + encodeURIComponent(msg);
  });
}
