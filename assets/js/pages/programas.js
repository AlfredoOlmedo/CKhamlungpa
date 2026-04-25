function openWA(){
  const msg = encodeURIComponent("Hola, me gustaría obtener más información sobre los programas.");
  window.open(`https://wa.me/5233318374?text=${msg}`, '_blank');
}


window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  header.classList.toggle('scrolled', window.scrollY > 0);
});
