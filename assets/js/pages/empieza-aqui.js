const waMessages = {
  empieza_aqui: {
    title: "Primera vez",
    msg: "Hola, es mi primera vez y me gustaría asistir a una sesión de meditación. ¿Cuál es la próxima disponible?"
  },
  general: {
    title: "Información general",
    msg: "Hola, me gustaría conocer más sobre Centro Khamlungpa y sus programas."
  },
  meditacion: {
    title: "Meditación guiada",
    msg: "¿Cuáles son los horarios de las sesiones de meditación guiada?"
  },
  programas: {
    title: "Cursos y estudios",
    msg: "Me interesaría aprender sobre los programas de estudio del budismo."
  },
  donar: {
    title: "Apoyar el centro",
    msg: "Me gustaría hacer una donación. ¿Cuáles son las opciones?"
  },
  retiro: {
    title: "Retiro espiritual",
    msg: "¿Hay retiros espirituales disponibles próximamente?"
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
  window.open(`https://wa.me/5233318374?text=${encoded}`, '_blank');
  closeWA();
}

function toggleAccordion(header){
  const item = header.parentElement;
  const isOpen = header.classList.contains('open');

  document.querySelectorAll('.accordion-item').forEach(el => {
    el.querySelector('.accordion-header').classList.remove('open');
    el.querySelector('.accordion-content').classList.remove('open');
  });

  if(!isOpen){
    header.classList.add('open');
    header.nextElementSibling.classList.add('open');
  }
}


window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  header.classList.toggle('scrolled', window.scrollY > 0);
});
