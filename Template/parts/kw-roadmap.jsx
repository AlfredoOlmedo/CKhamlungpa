// kw-roadmap.jsx — Strategic roadmap, 4 phases + KPIs

function RoadmapBoard() {
  const phases = [
    { n:'01', label:'Correcciones y quick wins', dur:'Semanas 1–2', color:'var(--terracotta)', tasks:[
      ['lang="es-MX"','30m','Alto'],
      ['Title & meta unique por página','3h','Alto'],
      ['Corregir 4 links rotos a 404','30m','Alto'],
      ['Botón flotante WhatsApp + mensajes prellenados','1h','Alto'],
      ['Título visible en modal Ebook','15m','Medio'],
      ['Festividades 2026','30m','Medio'],
      ['Typo email info@khamlungpa.com','5m','Medio'],
      ['Copyright dinámico JS','10m','Bajo'],
    ]},
    { n:'02', label:'Conversión y contenido crítico', dur:'Semanas 3–6', color:'var(--clay)', tasks:[
      ['Página /empieza-aqui con FAQ 8','—','Alto'],
      ['Página /donar con relato de misión','—','Alto'],
      ['Fichas de programas mejoradas','—','Alto'],
      ['Unificar nav/footer con includes JS','—','Medio'],
      ['WhatsApp Business + auto-respuesta','—','Alto'],
      ['Mailchimp + form newsletter','—','Medio'],
      ['Google Business Profile optimizado','—','Alto'],
      ['sitemap.xml + Search Console','—','Medio'],
    ]},
    { n:'03', label:'Rediseño UX/UI', dur:'Mes 2–3', color:'var(--moss)', tasks:[
      ['Hero con tres caminos por perfil','—','Alto'],
      ['Calendario dinámico ← Google Calendar','—','Alto'],
      ['Fichas de programas con estructura completa','—','Alto'],
      ['Perfiles de maestros completos','—','Alto'],
      ['Sección de testimonios reales','—','Medio'],
      ['Galería de fotos reales del centro','—','Medio'],
      ['JSON-LD LocalBusiness + Event','—','Medio'],
      ['Mobile-first revisión completa','—','Alto'],
    ]},
    { n:'04', label:'Ecosistema y contenido orgánico', dur:'Mes 3–6', color:'var(--ink)', tasks:[
      ['/recursos con 4 artículos SEO','—','Medio'],
      ['Primer newsletter mensual','—','Alto'],
      ['Instagram · 4 posts semanales','—','Alto'],
      ['Grupo WhatsApp de comunidad','—','Medio'],
      ['2 audios de meditación descargables','—','Medio'],
      ['Primer video YouTube con Ven. Norbu','—','Medio'],
    ]},
  ];

  return (
    <div style={{ width: 1320, background:'var(--paper)', padding: 48, display:'flex', flexDirection:'column', gap: 28 }}>
      <div>
        <KwEyebrow>Hoja de ruta · 6 meses</KwEyebrow>
        <div className="kw-display" style={{ fontSize: 48, marginTop: 8 }}>
          De folleto estático a <em style={{ fontStyle:'italic', color:'var(--clay)' }}>puerta de entrada activa.</em>
        </div>
        <p style={{ fontSize: 14, color:'var(--ink-2)', maxWidth: 720, marginTop: 12, lineHeight: 1.6 }}>
          Las fases están ordenadas por impacto en los journeys de los tres perfiles. Las primeras dos
          no requieren rediseño visual completo — mejoran directamente la conversión del sitio actual.
        </p>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 16 }}>
        {phases.map((p, i) => (
          <div key={i} style={{ background:'var(--cream)', borderRadius: 14, padding: 22, border:'1px solid var(--line)', borderTop:`4px solid ${p.color}` }}>
            <div style={{ fontFamily:'var(--mono)', fontSize: 10, color: p.color, letterSpacing:'0.12em' }}>FASE {p.n}</div>
            <div style={{ fontFamily:'var(--serif)', fontSize: 22, marginTop: 4, color:'var(--ink)', lineHeight: 1.15 }}>{p.label}</div>
            <div style={{ fontFamily:'var(--mono)', fontSize: 10, color:'var(--ink-3)', letterSpacing:'0.08em', marginTop: 6 }}>{p.dur.toUpperCase()}</div>
            <hr className="kw-rule" style={{ marginBlock: 14 }} />
            <div style={{ display:'flex', flexDirection:'column', gap: 10 }}>
              {p.tasks.map((t, j) => (
                <div key={j} style={{ display:'grid', gridTemplateColumns:'1fr auto', gap: 8, alignItems:'start' }}>
                  <span style={{ fontSize: 12, color:'var(--ink)', lineHeight: 1.4 }}>{t[0]}</span>
                  <span style={{
                    fontSize: 9, fontFamily:'var(--mono)', letterSpacing:'0.08em',
                    padding:'2px 6px', borderRadius: 3,
                    background: t[2]==='Alto'?p.color:(t[2]==='Medio'?'var(--paper-3)':'transparent'),
                    color: t[2]==='Alto'?'var(--cream)':'var(--ink-3)',
                    border: t[2]==='Bajo'?'1px solid var(--line)':'none'
                  }}>{t[2].toUpperCase()}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* KPIs */}
      <div style={{ background:'var(--ink)', color:'var(--cream)', borderRadius: 16, padding: 36 }}>
        <KwOverline style={{ color:'var(--ochre)' }}>KPIs · Métricas de seguimiento</KwOverline>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 24, marginTop: 22 }}>
          {[
            ['Sesiones orgánicas', '+120%', 'mes 6 vs mes 0'],
            ['Conversaciones WA', '+300%', 'con mensajes prellenados'],
            ['Tasa de respuesta WA', '< 2h', 'en horario hábil'],
            ['Donantes recurrentes', '≥ 40', 'al cierre de mes 6'],
          ].map(([k,v,s], i) => (
            <div key={i}>
              <div style={{ fontFamily:'var(--mono)', fontSize: 10, color:'var(--ochre)', letterSpacing:'0.1em' }}>{k.toUpperCase()}</div>
              <div style={{ fontFamily:'var(--serif)', fontSize: 40, color:'var(--cream)', marginTop: 6, letterSpacing:'-0.02em' }}>{v}</div>
              <div style={{ fontSize: 11, color:'rgba(255,255,255,0.6)', marginTop: 4 }}>{s}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Closing */}
      <div style={{ padding:'40px 0', textAlign:'center' }}>
        <div className="kw-display" style={{ fontSize: 36, fontStyle:'italic', color:'var(--ink)', maxWidth: 820, margin:'0 auto', lineHeight: 1.2 }}>
          "¿Qué necesita escuchar esta persona en este momento<br/>para sentirse bienvenida y saber cuál es su siguiente paso?"
        </div>
        <div style={{ fontFamily:'var(--mono)', fontSize: 10, color:'var(--ink-3)', letterSpacing:'0.12em', marginTop: 20 }}>
          — PRINCIPIO RECTOR DEL SISTEMA —
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { RoadmapBoard });
