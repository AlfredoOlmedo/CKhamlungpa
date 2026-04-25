function openWA(){
  window.open('https://wa.me/5233318374?text=' + encodeURIComponent('Hola, quisiera hacer una consulta sobre Centro Khamlungpa.'), '_blank');
}
window.addEventListener('scroll', () => {
  document.getElementById('header').classList.toggle('scrolled', window.scrollY > 0);
});
