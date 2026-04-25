const waMessages = {
  general: {
    title: "Información general",
    msg: "Hola, me gustaría conocer más sobre Centro Khamlungpa y sus maestros."
  },
  maestros: {
    title: "Consultar con maestros",
    msg: "Me gustaría hablar con uno de los maestros del centro sobre mis preguntas espirituales."
  },
  meditacion: {
    title: "Primera sesión",
    msg: "Quisiera asistir a mi primera sesión de meditación. ¿Cuándo es disponible?"
  },
  programas: {
    title: "Programas de estudio",
    msg: "Me interesaría conocer sobre los programas de estudio del budismo tibetano."
  },
  contacto: {
    title: "Horarios y ubicación",
    msg: "¿Cuál es la dirección del centro y los horarios de las sesiones?"
  }
};

function openWA(type='general'){
  document.getElementById('waModal').classList.add('open');
  const presetList = document.getElementById('presetList');
  presetList.innerHTML = '';

  Object.entries(waMessages).forEach(([key, data]) => {
    const preset = document.createElement('div');
    preset.className = 'preset';
    preset.innerHTML = `
      <div class="preset-num">${Object.keys(waMessages).indexOf(key)+1}</div>
      <div class="preset-body">
        <div class="preset-title">${data.title}</div>
        <div class="preset-msg">"${data.msg}"</div>
      </div>
    `;
    preset.onclick = () => sendWhatsApp(data.msg);
    presetList.appendChild(preset);
  });
}

function closeWA(){
  document.getElementById('waModal').classList.remove('open');
}

function sendWhatsApp(msg){
  const encoded = encodeURIComponent(msg);
  window.open(`https://wa.me/523331837484?text=${encoded}`, '_blank');
  closeWA();
}


window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  header.classList.toggle('scrolled', window.scrollY > 0);
});
