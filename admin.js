// Al pulsar un rango, se resalta su fila en la tabla
const filas = document.querySelectorAll('tbody tr');
document.querySelectorAll('.ranks .btn').forEach(btn => {
  btn.addEventListener('click', () => {
    filas.forEach(f => f.classList.toggle('selected', f.dataset.rango === btn.dataset.rango));
  });
});
