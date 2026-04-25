function openWA(){
  const msg = encodeURIComponent("Hola, me gustaría saber más sobre las sesiones de meditación.");
  window.open(`https://wa.me/523331837484?text=${msg}`, '_blank');
}


window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  header.classList.toggle('scrolled', window.scrollY > 0);
});
