// kw-sitemap.jsx — Information architecture diagram

const SITEMAP_NODES = [
  { id:'home', label:'Inicio', url:'/', notes:'hero · esta semana · tres caminos' },
  { id:'start', label:'Empieza aquí', url:'/empieza-aqui', notes:'FAQ 8 preguntas · CTA WhatsApp', perfil:'curioso' },
  { id:'med', label:'Meditación', url:'/meditacion', notes:'SEO local', perfil:'curioso' },
  { id:'bt', label:'Budismo Tibetano', url:'/budismo-tibetano', notes:'SEO + linaje', perfil:'practicante' },
  { id:'progs', label:'Programas', url:'/programas', notes:'listado · nivel · modalidad' },
  { id:'prog1', label:'Pocas Palabras', url:'/programa/pocas-palabras', parent:'progs', notes:'Principiante · talleres' },
  { id:'prog2', label:'Descubre el Budismo', url:'/programa/descubre', parent:'progs', notes:'Principiante · 14 módulos · 2 años' },
  { id:'prog3', label:'Explorando', url:'/programa/explorando', parent:'progs', notes:'Intermedio · 10 módulos · 3 años' },
  { id:'prog4', label:'70 Temas', url:'/programa/70-temas', parent:'progs', notes:'Intermedio · continuado' },
  { id:'prog5', label:'Programa Básico', url:'/programa/basico', parent:'progs', notes:'Avanzado · 9 módulos · 5 años' },
  { id:'maest', label:'Maestros', url:'/maestros', notes:'Ven. Norbu · Gueshe L. Dawa', perfil:'practicante' },
  { id:'cal', label:'Calendario', url:'/calendario', notes:'mes · filtros · iCal', perfil:'comunidad' },
  { id:'com', label:'Comunidad', url:'/comunidad', notes:'fotos · testimonios' },
  { id:'donar', label:'Donar', url:'/donar', notes:'SPEI · MercadoPago · PayPal', perfil:'comunidad' },
  { id:'recs', label:'Recursos', url:'/recursos', notes:'oraciones · calendario tibetano', perfil:'comunidad' },
  { id:'etica', label:'Ética FPMT', url:'/etica', notes:'7 principios · formularios' },
  { id:'contacto', label:'Contacto', url:'/contacto', notes:'WhatsApp · mapa · horario' },
];

function SitemapBoard() {
  const colFor = (p) => p === 'curioso' ? 'var(--terracotta)' : p === 'practicante' ? 'var(--clay)' : p === 'comunidad' ? 'var(--moss)' : 'var(--ink-3)';

  const primary = SITEMAP_NODES.filter(n => !n.parent && n.id !== 'home');
  const progChildren = SITEMAP_NODES.filter(n => n.parent === 'progs');

  return (
    <div style={{
      width: 1320, background:'var(--paper)', padding: 48,
      display:'flex', flexDirection:'column', gap: 28
    }}>
      <div>
        <KwEyebrow>Arquitectura de información</KwEyebrow>
        <div className="kw-display" style={{ fontSize: 44, marginTop: 8 }}>
          17 páginas, <em style={{ fontStyle:'italic', color:'var(--clay)' }}>tres caminos de lectura.</em>
        </div>
        <p style={{ fontSize: 14, color:'var(--ink-2)', maxWidth: 680, marginTop: 12, lineHeight: 1.55 }}>
          Menú principal simplificado (7 items). Cada página tiene un perfil predominante de lectura, pero todas son accesibles desde cualquier camino.
        </p>
      </div>

      {/* Legend */}
      <div style={{ display:'flex', gap: 16, fontSize: 12, alignItems:'center' }}>
        <span className="kw-overline">Perfil primario</span>
        {[['Curioso','curioso'],['Practicante','practicante'],['Comunidad','comunidad'],['Transversal','']].map(([l,p]) => (
          <div key={l} style={{ display:'flex', alignItems:'center', gap: 6 }}>
            <div style={{ width: 10, height: 10, borderRadius: 10, background: colFor(p) }} />
            <span style={{ color:'var(--ink)' }}>{l}</span>
          </div>
        ))}
      </div>

      {/* Tree */}
      <div style={{ background:'var(--cream)', borderRadius: 16, padding: 32, border:'1px solid var(--line)' }}>
        {/* Root */}
        <div style={{ display:'flex', justifyContent:'center', marginBottom: 24 }}>
          <div style={{
            background:'var(--ink)', color:'var(--cream)', padding:'16px 28px',
            borderRadius: 12, textAlign:'center', minWidth: 200
          }}>
            <div className="kw-eyebrow" style={{ color:'var(--ochre)' }}>Hub</div>
            <div style={{ fontFamily:'var(--serif)', fontSize: 24, marginTop: 4 }}>Inicio</div>
            <div style={{ fontFamily:'var(--mono)', fontSize: 10, color: 'rgba(255,255,255,0.6)', letterSpacing:'0.08em', marginTop: 4 }}>khamlungpa.com/</div>
          </div>
        </div>

        {/* Primary pages grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap: 12 }}>
          {primary.map(n => (
            <div key={n.id} style={{
              background:'var(--paper)', borderRadius: 10, padding: 14,
              borderTop: `3px solid ${colFor(n.perfil)}`, minHeight: 110,
              display:'flex', flexDirection:'column', justifyContent:'space-between'
            }}>
              <div>
                <div style={{ fontFamily:'var(--serif)', fontSize: 16, color:'var(--ink)' }}>{n.label}</div>
                <div style={{ fontSize: 11.5, color:'var(--ink-2)', marginTop: 6, lineHeight: 1.4 }}>{n.notes}</div>
              </div>
              <div style={{ fontFamily:'var(--mono)', fontSize: 10, color:'var(--ink-3)', letterSpacing:'0.04em', marginTop: 8 }}>{n.url}</div>
            </div>
          ))}
        </div>

        {/* Programas expanded */}
        <div style={{ marginTop: 20, background:'var(--paper-2)', borderRadius: 12, padding: 18 }}>
          <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom: 12 }}>
            <span className="kw-overline">Programas · ruta de estudios</span>
            <div style={{ flex: 1, height: 1, background:'var(--line)' }} />
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap: 10 }}>
            {progChildren.map((n, i) => {
              const levels = ['Principiante','Principiante','Intermedio','Intermedio','Avanzado'];
              return (
                <div key={n.id} style={{
                  background:'var(--cream)', borderRadius: 10, padding: 12,
                  border:'1px solid var(--line)'
                }}>
                  <div style={{ fontFamily:'var(--mono)', fontSize: 10, color:'var(--clay)', letterSpacing:'0.08em' }}>
                    {String(i+1).padStart(2,'0')} · {levels[i]}
                  </div>
                  <div style={{ fontFamily:'var(--serif)', fontSize: 15, color:'var(--ink)', marginTop: 4 }}>{n.label}</div>
                  <div style={{ fontSize: 11, color:'var(--ink-2)', marginTop: 4, lineHeight: 1.4 }}>{n.notes}</div>
                </div>
              );
            })}
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:6, marginTop: 16, fontSize: 12, color:'var(--ink-2)' }}>
            <span style={{ padding:'3px 8px', background:'var(--paper)', borderRadius: 20, border:'1px solid var(--line)' }}>Principiante</span>
            <span style={{ color:'var(--ink-3)' }}>→</span>
            <span style={{ padding:'3px 8px', background:'var(--paper)', borderRadius: 20, border:'1px solid var(--line)' }}>Intermedio</span>
            <span style={{ color:'var(--ink-3)' }}>→</span>
            <span style={{ padding:'3px 8px', background:'var(--clay)', color:'var(--cream)', borderRadius: 20 }}>Avanzado · Diploma FPMT</span>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { SitemapBoard });
