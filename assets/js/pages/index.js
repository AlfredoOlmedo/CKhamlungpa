/* ───────────────────────── DATA ───────────────────────── */
const WEEK = [
  { date:'Lun', time:'19:30', title:'Meditacion',                               mode:'Presencial + online', tag:'Abierta',    tagClass:''          },
  { date:'Mar', time:'08:30', title:'Meditaciones cortas para una vida acelerada', mode:'Solo online',    tag:'Abierta',    tagClass:''          },
  { date:'Mie', time:'20:00', title:'70 Temas',                                 mode:'Presencial + online', tag:'Estudio',    tagClass:''          },
  { date:'Jue', time:'08:30', title:'Meditaciones cortas para una vida acelerada', mode:'Solo online',    tag:'Abierta',    tagClass:''          },
  { date:'Jue', time:'20:00', title:'Explorando el Budismo',                    mode:'Presencial + online', tag:'Inscripcion',tagClass:''          },
  { date:'Jue', time:'20:00', title:'Descubre el Budismo',                      mode:'Presencial + online', tag:'Inscripcion',tagClass:''          },
  { date:'Vie', time:'20:00', title:'Actividades varias',                       mode:'Presencial',          tag:'Comunidad',  tagClass:'comunidad' },
];

const PATHS = [
  { tag:'Curioso',     title:'Primera vez',          color:'var(--terracotta)', desc:'Para quien nunca medito o no conoce el budismo. Empeza sin compromiso, sin requisitos, sin jerga.',                       links:[['Meditaciones abiertas','#week'],['Preguntas frecuentes','./empieza-aqui.html'],['Escribime por WhatsApp', null]] },
  { tag:'Practicante', title:'Quiero profundizar',   color:'var(--clay)',       desc:'Para quien ya tiene practica y busca estudiar el budismo tibetano en profundidad, con linaje FPMT y maestros reales.',   links:[['Programas FPMT','./programas.html'],['Conocer a los maestros','./maestros.html'],['Ruta de aprendizaje','./programas.html']] },
  { tag:'Comunidad',   title:'Soy parte del centro', color:'var(--moss)',       desc:'Para practicantes regulares que quieren mantenerse conectados, asistir y apoyar al centro.',                             links:[['Calendario del mes','./calendario.html'],['Como apoyar','./donar.html'],['Politica Etica','./politica-etica.html']] },
];

const TESTIMONIALS = [
  { text:'"Llegué buscando calmar la ansiedad. Tres años después, la práctica es parte esencial de mi vida — y la comunidad, también."', attr:'— M. · ASISTE DESDE 2023',     eyebrow:'Testimonio · practicante · 3 años' },
  { text:'"Pensé que iba a ser algo solemne y lejano. Es todo lo contrario: cálido, humano y aterrizado en lo cotidiano."',                attr:'— R. · PRIMERA VEZ EN 2024',  eyebrow:'Testimonio · curioso · 1 año' },
  { text:'"Encontré un lugar donde estudiar con rigor, sin renunciar al calor de una comunidad real. Eso no lo había visto antes."',        attr:'— A. · PROGRAMA FPMT',         eyebrow:'Testimonio · practicante FPMT' },
];

const PRESETS = [
  { key:'primera_vez',    title:'Es mi primera vez',                 msg:'Hola, me gustaría asistir por primera vez a una meditación guiada. ¿Qué necesito saber?' },
  { key:'esta_semana',    title:'Me interesa una actividad de esta semana', msg:'Hola, vi las actividades de esta semana en el sitio y quisiera más info sobre una de ellas.' },
  { key:'programa',       title:'Quiero estudiar un programa',       msg:'Hola, me interesa un programa FPMT. ¿Pueden contarme cómo es la estructura y cuándo empieza el siguiente?' },
  { key:'donar',          title:'Quiero apoyar al centro',           msg:'Hola, me gustaría saber cómo contribuir al centro.' },
  { key:'otro',           title:'Otra consulta',                     msg:'Hola, tengo una consulta sobre el centro.' },
];

const WA_NUMBER = '5233318374';

/* ───────────────────────── RENDER ───────────────────────── */
function renderWeek(){
  const el = document.getElementById('week-list');
  el.innerHTML = WEEK.map((r,i) => `
    <div class="week-row" onclick="openWA('esta_semana')">
      <span class="w-date">${r.date}</span>
      <span class="w-time">${r.time}</span>
      <span class="w-title">${r.title}</span>
      <span class="w-mode">${r.mode}</span>
      <span class="w-tag ${r.tagClass}">${r.tag}</span>
      <span class="w-cta">Confirmar por WhatsApp →</span>
    </div>
  `).join('');
}

function renderPaths(){
  const el = document.getElementById('paths-grid');
  el.innerHTML = PATHS.map(p => `
    <div class="path-card" style="--card-color:${p.color};">
      <div class="path-tag"><span class="dot"></span><span class="lbl">${p.tag}</span></div>
      <div class="path-title">${p.title}</div>
      <div class="path-desc">${p.desc}</div>
      <div class="path-links">
        ${p.links.map(([l, href]) => `
          <a href="${href || '#'}" ${!href ? 'onclick="event.preventDefault();openWA()"' : ''}>
            <span>${l}</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="${p.color}" stroke-width="1.8" stroke-linecap="round"/></svg>
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* Testimonial carousel */
let tIndex = 0;
function renderTestimonial(){
  const t = TESTIMONIALS[tIndex];
  document.getElementById('t-quote').textContent = t.text;
  document.getElementById('t-attr').textContent = t.attr;
  document.getElementById('t-eyebrow').textContent = t.eyebrow;
  const dots = document.getElementById('t-dots');
  dots.innerHTML = TESTIMONIALS.map((_,i) => `
    <div class="quote-dot ${i === tIndex ? 'active' : ''}" onclick="setT(${i})"></div>
  `).join('');
}
function setT(i){ tIndex = i; renderTestimonial(); }
setInterval(() => { tIndex = (tIndex + 1) % TESTIMONIALS.length; renderTestimonial(); }, 8000);

/* ───────────────────────── HEADER BEHAVIOR ───────────────────────── */
const header = document.getElementById('header');
const navLinks = document.querySelectorAll('nav.links a');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);

  // Scroll spy
  const sections = ['home','week','paths','teachers','donate','newsletter'];
  let active = 'home';
  const y = window.scrollY + 120;
  for(const id of sections){
    const el = document.getElementById(id);
    if(el && el.offsetTop <= y) active = id;
  }
  navLinks.forEach(a => {
    a.classList.toggle('active', a.dataset.section === active);
  });
});

navLinks.forEach(a => a.addEventListener('click', () => {
  document.getElementById('nav-links').classList.remove('open');
}));

/* ───────────────────────── WA MODAL ───────────────────────── */
function openWA(presetKey){
  const preset = PRESETS.find(p => p.key === presetKey);
  if(preset){
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(preset.msg)}`;
    window.open(url, '_blank');
    return;
  }
  // Show preset chooser modal
  renderPresets();
  document.getElementById('wa-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeWA(e){
  if(e && e.target && e.target.closest('.modal')) return;
  document.getElementById('wa-modal').classList.remove('open');
  document.body.style.overflow = '';
}
function renderPresets(){
  document.getElementById('preset-list').innerHTML = PRESETS.map((p, i) => `
    <button class="preset" onclick="choosePreset('${p.key}')">
      <span class="preset-num">0${i+1}</span>
      <span class="preset-body">
        <span class="preset-title">${p.title}</span>
        <span class="preset-msg">"${p.msg}"</span>
      </span>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style="margin-top:4px;color:var(--clay);"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
    </button>
  `).join('');
}
function choosePreset(key){
  closeWA();
  const p = PRESETS.find(x => x.key === key);
  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(p.msg)}`;
  window.open(url, '_blank');
}
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeWA(); });

/* ───────────────────────── NEWSLETTER FORM ───────────────────────── */
document.getElementById('news-form').addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('news-email').value.trim();
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const successEl = document.getElementById('news-success');
  if(!ok){
    document.getElementById('news-email').style.borderColor = '#F08060';
    return;
  }
  document.getElementById('news-email').style.borderColor = '';
  document.getElementById('news-email').value = '';
  successEl.classList.add('visible');
  setTimeout(() => successEl.classList.remove('visible'), 6000);
});

/* ───────────────────────── INIT ───────────────────────── */
renderWeek();
renderPaths();
renderTestimonial();
