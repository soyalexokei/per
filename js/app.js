const places = {
  usa: ['Estados Unidos', 'HORIZONTE SIN FIN', '../media/paises/usa/usa.html', '01'],
  uk: ['Reino Unido', 'LLUVIA, MÚSICA Y CALLES', '../media/paises/uk/uk.html', '02'],
  spain: ['España', 'MI PUNTO DE PARTIDA', '../paginas/spain.html', '03'],
  italy: ['Italia', 'PIAZZAS Y SOBREMESAS', '../media/paises/italy/italy.html', '04'],
  balkans: ['Balcanes', 'UN CAMINO DIFERENTE', '../media/paises/montenegro/montenegro.html', '05']
};
const card = document.querySelector('.place-card');
document.querySelectorAll('.pin').forEach((pin) => pin.addEventListener('click', () => {
  const [name, note, link, number] = places[pin.dataset.place];
  document.querySelectorAll('.pin').forEach((item) => item.classList.toggle('active', item === pin));
  card.innerHTML = `<p>COORDENADAS <span>${number}</span></p><h2>${name}</h2><small>${note}</small><a href="${link}">ABRIR HISTORIAS <b>→</b></a>`;
}));
const menuButton = document.querySelector('.menu');
const menu = document.querySelector('nav');
menuButton.addEventListener('click', () => { const open = menu.classList.toggle('open'); menuButton.setAttribute('aria-expanded', open); });
document.querySelectorAll('nav a').forEach((item) => item.addEventListener('click', () => { menu.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); }));
