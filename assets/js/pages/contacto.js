function openWA(){
  const msg = encodeURIComponent("Hola, tengo una pregunta sobre Centro Khamlungpa.");
  window.open(`https://wa.me/523331837484?text=${msg}`, '_blank');
}


window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  header.classList.toggle('scrolled', window.scrollY > 0);
});
