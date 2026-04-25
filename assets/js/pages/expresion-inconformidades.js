function openWA(){window.open('https://wa.me/523331837484?text=' + encodeURIComponent('Hola, quiero reportar una inconformidad de forma confidencial.'), '_blank');}
function openInconformidadModal(){const m=document.getElementById('inconf-modal');m.classList.add('open');m.setAttribute('aria-hidden','false');}
function closeInconformidadModal(){const m=document.getElementById('inconf-modal');m.classList.remove('open');m.setAttribute('aria-hidden','true');}
document.getElementById('inconf-modal')?.addEventListener('click', closeInconformidadModal);
document.addEventListener('keydown',e=>{if(e.key==='Escape') closeInconformidadModal();});
window.addEventListener('scroll',()=>{document.getElementById('header').classList.toggle('scrolled', window.scrollY > 0);});
