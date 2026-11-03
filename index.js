// Selección de rol + redirección según el perfil
const roles = document.querySelectorAll('.role');
let rolActual = 'estudiante';

roles.forEach(btn => {
  btn.addEventListener('click', () => {
    roles.forEach(b => b.classList.remove('role--active'));
    btn.classList.add('role--active');
    rolActual = btn.dataset.rol;
  });
});

document.getElementById('loginForm').addEventListener('submit', e => {
  e.preventDefault();
  const usuario = document.getElementById('usuario');
  const clave = document.getElementById('clave');
  let ok = true;

  [usuario, clave].forEach(campo => {
    const vacio = campo.value.trim() === '';
    campo.classList.toggle('error', vacio);
    if (vacio) ok = false;
  });
  if (!ok) return;

  // Administrativo -> perfil administrativo | otros roles -> inicio
  window.location.href = rolActual === 'administrativo' ? 'admin.html' : 'index.html';
});
