// ============ Menú móvil ============
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const abierto = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', abierto);
  });

  // Cerrar el menú al tocar un enlace (útil en celular)
  siteNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ============ Filtro de obras ============
const filtros = document.querySelectorAll('.filtro-btn');
const obras = document.querySelectorAll('.obra-card');

filtros.forEach(btn => {
  btn.addEventListener('click', () => {
    filtros.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');

    const tipo = btn.dataset.filtro;

    obras.forEach(obra => {
      const coincide = tipo === 'todos' || obra.dataset.tipo === tipo || obra.dataset.tipo === 'todos';
      obra.style.display = coincide ? '' : 'none';
    });
  });
});

// ============ Año automático en el footer ============
const anioEl = document.getElementById('anio');
if (anioEl) anioEl.textContent = new Date().getFullYear();
