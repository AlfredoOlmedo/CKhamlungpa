function openWA(){
  const msg = encodeURIComponent("Hola, quisiera hacer una donación al Centro Khamlungpa. ¿Cuáles son las opciones disponibles?");
  window.open(`https://wa.me/5233318374?text=${msg}`, '_blank');
}

function donateMethod(method){
  const messages = {
    unica: "Hola, me gustaría hacer una donación única al centro. ¿Cuál es el proceso?",
    mensual: "Estoy interesado en hacer una donación mensual. ¿Cómo me suscribo?",
    benefactor: "Me gustaría ser benefactor del centro. ¿Cuál es el proceso para compromisos sostenidos?"
  };
  const msg = encodeURIComponent(messages[method] || messages.unica);
  window.open(`https://wa.me/5233318374?text=${msg}`, '_blank');
}


window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  header.classList.toggle('scrolled', window.scrollY > 0);
});
