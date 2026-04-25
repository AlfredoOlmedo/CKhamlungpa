// kw-site-mobile.jsx — Mobile screens inside iOS frame

function MobileHome() {
  return (
    <div style={{ background:'var(--paper)', minHeight:'100%', paddingBottom: 80 }}>
      {/* Top bar */}
      <div style={{ padding:'12px 18px', display:'flex', justifyContent:'space-between', alignItems:'center', background:'var(--paper)' }}>
        <div style={{ display:'flex', alignItems:'center', gap: 8 }}>
          <KwMark size={16} color="var(--clay)" />
          <span style={{ fontFamily:'var(--serif)', fontSize: 17 }}>Khamlungpa</span>
        </div>
        <IconMenu size={20} />
      </div>

      {/* Hero */}
      <div style={{ padding:'24px 20px 28px' }}>
        <KwEyebrow style={{ fontSize: 9 }}>Desde 2003 · FPMT</KwEyebrow>
        <div className="kw-display" style={{ fontSize: 38, marginTop: 10, lineHeight: 1.02 }}>
          Meditación y<br/>budismo tibetano<br/>
          <em style={{ fontStyle:'italic', color:'var(--clay)' }}>en Guadalajara.</em>
        </div>
        <p style={{ fontSize: 13.5, color:'var(--ink-2)', marginTop: 14, lineHeight: 1.55 }}>
          Abierto a todos — no necesitas experiencia previa.
        </p>
        <button className="kw-btn primary" style={{ marginTop: 18, width:'100%', justifyContent:'center', fontSize: 13 }}>
          Primera vez aquí <IconArrow size={12} color="var(--cream)" />
        </button>
      </div>

      <KwPh label="foto · espacio del centro" h={200} style={{ margin:'0 20px', borderRadius: 10 }} />

      {/* Esta semana */}
      <div style={{ padding:'32px 20px 8px' }}>
        <KwEyebrow style={{ fontSize: 9 }}>Esta semana</KwEyebrow>
        <div className="kw-display" style={{ fontSize: 24, marginTop: 6 }}>Abierto al público.</div>
      </div>
      <div style={{ padding:'0 20px' }}>
        {[
          ['Lun 23','20:00','Meditación guiada'],
          ['Jue 26','20:00','Explorando el Budismo'],
          ['Sáb 28','10:00','Puja de Tara Blanca'],
        ].map((r, i) => (
          <div key={i} style={{ padding:'14px 0', borderTop:'1px solid var(--line)', display:'flex', gap: 14, alignItems:'center' }}>
            <div style={{ width: 48 }}>
              <div style={{ fontFamily:'var(--mono)', fontSize: 9, color:'var(--ink-3)', letterSpacing:'0.08em' }}>{r[0]}</div>
              <div style={{ fontFamily:'var(--serif)', fontSize: 16, color:'var(--ink)' }}>{r[1]}</div>
            </div>
            <div style={{ flex: 1, fontSize: 13 }}>{r[2]}</div>
            <IconArrow size={12} color="var(--ink-3)" />
          </div>
        ))}
      </div>

      {/* Tres caminos */}
      <div style={{ padding:'32px 20px 8px' }}>
        <KwEyebrow style={{ fontSize: 9 }}>Tres caminos</KwEyebrow>
        <div className="kw-display" style={{ fontSize: 24, marginTop: 6 }}>¿Por dónde entras?</div>
      </div>
      <div style={{ padding:'8px 20px', display:'flex', flexDirection:'column', gap: 10 }}>
        {[
          ['Primera vez','Para quien no meditó nunca','var(--terracotta)'],
          ['Quiero profundizar','Programas FPMT estructurados','var(--clay)'],
          ['Soy parte del centro','Calendario, donar, recursos','var(--moss)'],
        ].map(([t,s,c], i) => (
          <div key={i} style={{ background:'var(--cream)', borderRadius: 10, padding: 14, border:'1px solid var(--line)', borderLeft:`3px solid ${c}`, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
            <div>
              <div style={{ fontFamily:'var(--serif)', fontSize: 17, color:'var(--ink)' }}>{t}</div>
              <div style={{ fontSize: 11, color:'var(--ink-3)', marginTop: 3 }}>{s}</div>
            </div>
            <IconArrow size={14} color={c} />
          </div>
        ))}
      </div>

      {/* WA fab */}
      <div style={{ position:'absolute', right: 16, bottom: 30, width: 48, height: 48, borderRadius: 48, background:'#25D366', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 6px 14px rgba(37,211,102,0.4)' }}>
        <IconWA size={22} color="#fff" />
      </div>
    </div>
  );
}

function MobileStart() {
  return (
    <div style={{ background:'var(--paper)', minHeight:'100%', paddingBottom: 80 }}>
      <div style={{ padding:'12px 18px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <span style={{ fontFamily:'var(--mono)', fontSize: 10, letterSpacing:'0.08em', color:'var(--ink-3)' }}>← VOLVER</span>
        <IconMenu size={20} />
      </div>
      <div style={{ padding:'24px 20px 20px' }}>
        <KwEyebrow style={{ fontSize: 9 }}>Empieza aquí</KwEyebrow>
        <div className="kw-display" style={{ fontSize: 40, marginTop: 10, lineHeight: 1.02 }}>
          ¿Primera vez?<br/>
          <em style={{ fontStyle:'italic', color:'var(--clay)' }}>Las ocho preguntas.</em>
        </div>
      </div>
      <div style={{ padding:'12px 20px' }}>
        {[
          '¿Tengo que ser budista?',
          '¿Necesito experiencia previa?',
          '¿Qué pasa en una sesión?',
          '¿Tiene costo?',
          '¿Cómo me visto?',
          '¿Puedo ir una sola vez?',
          '¿Hay clases online?',
          '¿Por dónde empiezo?',
        ].map((q, i) => (
          <div key={i} style={{ padding:'16px 0', borderTop:'1px solid var(--line)', display:'flex', justifyContent:'space-between', alignItems:'center', gap: 14 }}>
            <span style={{ fontFamily:'var(--mono)', fontSize: 10, color:'var(--clay)', letterSpacing:'0.1em' }}>0{i+1}</span>
            <span style={{ fontFamily:'var(--serif)', fontSize: 17, flex: 1 }}>{q}</span>
            <span style={{ fontSize: 16, color:'var(--ink-3)' }}>+</span>
          </div>
        ))}
      </div>
      <div style={{ margin:'24px 20px', padding: 20, background:'var(--ink)', color:'var(--cream)', borderRadius: 12 }}>
        <div className="kw-eyebrow" style={{ color:'var(--ochre)', fontSize: 9 }}>Siguiente paso</div>
        <div style={{ fontFamily:'var(--serif)', fontSize: 22, marginTop: 6 }}>
          Próxima meditación: lunes 20:00h
        </div>
        <button className="kw-btn" style={{ background:'#25D366', color:'var(--cream)', width:'100%', justifyContent:'center', marginTop: 14, fontSize: 13 }}>
          <IconWA size={14} color="var(--cream)" /> Asistir a mi primera sesión
        </button>
      </div>
    </div>
  );
}

function MobileProgram() {
  return (
    <div style={{ background:'var(--paper)', minHeight:'100%', paddingBottom: 80 }}>
      <div style={{ padding:'12px 18px', display:'flex', justifyContent:'space-between' }}>
        <span style={{ fontFamily:'var(--mono)', fontSize: 10, letterSpacing:'0.08em', color:'var(--ink-3)' }}>← PROGRAMAS</span>
        <IconMenu size={20} />
      </div>
      <div style={{ padding:'20px' }}>
        <KwEyebrow style={{ fontSize: 9 }}>02 · Principiante · FPMT</KwEyebrow>
        <div className="kw-display" style={{ fontSize: 38, marginTop: 10, lineHeight: 1.02 }}>
          Descubre<br/>
          <em style={{ fontStyle:'italic', color:'var(--clay)' }}>el Budismo.</em>
        </div>
        <p style={{ fontSize: 13.5, color:'var(--ink-2)', marginTop: 12, lineHeight: 1.55 }}>
          Introducción sistemática al budismo tibetano creada por Lama Zopa Rinpoche. 14 módulos.
        </p>
      </div>
      <KwPh label="foto · ven. thubten norbu" h={180} style={{ margin:'0 20px', borderRadius: 10 }} tone="ink" />
      <div style={{ padding:'20px' }}>
        {[
          ['Duración','~2 años · 14 módulos'],
          ['Jueves','20:00h · híbrido'],
          ['Facilitador','Ven. Thubten Norbu'],
          ['Próxima edición','12 febrero 2026'],
          ['Donativo','$850 MXN / módulo'],
        ].map(([k,v], i) => (
          <div key={i} style={{ padding:'12px 0', borderTop:'1px solid var(--line)', display:'flex', justifyContent:'space-between' }}>
            <span style={{ fontSize: 11, color:'var(--ink-3)', fontFamily:'var(--mono)', letterSpacing:'0.08em' }}>{k.toUpperCase()}</span>
            <span style={{ fontSize: 13, color:'var(--ink)' }}>{v}</span>
          </div>
        ))}
      </div>
      <div style={{ padding:'8px 20px 20px' }}>
        <button className="kw-btn primary" style={{ width:'100%', justifyContent:'center', fontSize: 13 }}>
          Inscribirme por WhatsApp <IconArrow size={12} color="var(--cream)" />
        </button>
      </div>
    </div>
  );
}

Object.assign(window, { MobileHome, MobileStart, MobileProgram });
