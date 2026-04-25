// kw-site-desktop.jsx — Desktop site screens inside browser frames

function SiteNav({ active }) {
  const items = ['Inicio', 'Meditación', 'Budismo', 'Maestros', 'Calendario', 'Donar', 'Contacto'];
  return (
    <div style={{
      display:'flex', alignItems:'center', justifyContent:'space-between',
      padding:'22px 40px', background:'var(--paper)', borderBottom:'1px solid var(--line)'
    }}>
      <div style={{ display:'flex', alignItems:'center', gap: 14 }}>
        <KwMark size={22} color="var(--clay)" />
        <div>
          <div style={{ fontFamily:'var(--serif)', fontSize: 20, color:'var(--ink)', lineHeight: 1 }}>Khamlungpa</div>
          <div style={{ fontFamily:'var(--mono)', fontSize: 9, color:'var(--ink-3)', letterSpacing:'0.12em', marginTop: 3 }}>FPMT · GUADALAJARA · DESDE 2003</div>
        </div>
      </div>
      <nav style={{ display:'flex', gap: 28 }}>
        {items.map(i => (
          <a key={i} href="#" style={{
            fontSize: 13.5, color: i === active ? 'var(--clay)' : 'var(--ink)',
            textDecoration:'none', borderBottom: i === active ? '1px solid var(--clay)' : 'none',
            paddingBottom: 4, fontWeight: i === active ? 500 : 400
          }}>{i}</a>
        ))}
      </nav>
      <button className="kw-btn" style={{ background:'#25D366', color:'var(--cream)', padding:'10px 16px', fontSize: 13 }}>
        <IconWA size={14} color="var(--cream)" /> WhatsApp
      </button>
    </div>
  );
}

function SiteFooter() {
  return (
    <div style={{ background:'var(--ink)', color:'rgba(251,247,239,0.7)', padding:'40px', fontSize: 12 }}>
      <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr', gap: 32, marginBottom: 32 }}>
        <div>
          <KwMark size={24} color="var(--ochre)" />
          <div style={{ fontFamily:'var(--serif)', fontSize: 20, color:'var(--cream)', marginTop: 10 }}>Centro Khamlungpa</div>
          <p style={{ lineHeight: 1.6, marginTop: 8, maxWidth: 300 }}>
            Único centro FPMT activo en Guadalajara. Linaje Gelugpa de Lama Tsongkhapa. 20+ años sosteniendo el Dharma en la ciudad.
          </p>
        </div>
        <div>
          <div className="kw-eyebrow" style={{ color:'var(--ochre)' }}>Explorar</div>
          <div style={{ display:'flex', flexDirection:'column', gap: 6, marginTop: 10 }}>
            <span>Empieza aquí</span><span>Programas</span><span>Calendario</span><span>Maestros</span>
          </div>
        </div>
        <div>
          <div className="kw-eyebrow" style={{ color:'var(--ochre)' }}>Apoyar</div>
          <div style={{ display:'flex', flexDirection:'column', gap: 6, marginTop: 10 }}>
            <span>Donar</span><span>Recursos</span><span>Ética FPMT</span><span>Newsletter</span>
          </div>
        </div>
        <div>
          <div className="kw-eyebrow" style={{ color:'var(--ochre)' }}>Contacto</div>
          <div style={{ display:'flex', flexDirection:'column', gap: 6, marginTop: 10 }}>
            <span>info@khamlungpa.com</span><span>+52 33 · WhatsApp</span><span>Guadalajara, Jalisco</span>
          </div>
        </div>
      </div>
      <div style={{ display:'flex', justifyContent:'space-between', paddingTop: 20, borderTop:'1px solid rgba(255,255,255,0.1)' }}>
        <span style={{ fontFamily:'var(--mono)', letterSpacing:'0.08em', fontSize: 10 }}>© 2026 · CENTRO KHAMLUNGPA · FPMT AFFILIATE</span>
        <span style={{ fontFamily:'var(--mono)', letterSpacing:'0.08em', fontSize: 10 }}>ES · EN (PRÓXIMAMENTE)</span>
      </div>
    </div>
  );
}

function WAFab() {
  return (
    <div style={{
      position:'absolute', right: 24, bottom: 24,
      width: 56, height: 56, borderRadius: 56, background:'#25D366',
      display:'flex', alignItems:'center', justifyContent:'center',
      boxShadow:'0 8px 20px rgba(37,211,102,0.4)', zIndex: 10
    }}>
      <IconWA size={26} color="#fff" />
    </div>
  );
}

// ─── Screen: HOME ──────────────────────────────────────────────
function ScreenHome() {
  return (
    <div style={{ background:'var(--paper)', position:'relative' }}>
      <SiteNav active="Inicio" />
      {/* Hero */}
      <div style={{ padding:'72px 40px 56px', display:'grid', gridTemplateColumns:'1.2fr 1fr', gap: 48 }}>
        <div>
          <div className="kw-eyebrow">Desde 2003 · Afiliado FPMT desde 2005</div>
          <div className="kw-display" style={{ fontSize: 72, marginTop: 12, letterSpacing:'-0.025em' }}>
            Meditación y<br/>
            budismo tibetano<br/>
            <em style={{ fontStyle:'italic', color:'var(--clay)' }}>en Guadalajara.</em>
          </div>
          <p style={{ fontSize: 17, color:'var(--ink-2)', maxWidth: 480, lineHeight: 1.55, marginTop: 22 }}>
            Un espacio para calmar la mente, estudiar el Dharma y cultivar compasión. Abierto a todos — no necesitas experiencia previa.
          </p>
          <div style={{ display:'flex', gap: 12, marginTop: 28 }}>
            <button className="kw-btn primary">Primera vez aquí <IconArrow size={14} color="var(--cream)" /></button>
            <button className="kw-btn ghost">Ver actividades de esta semana</button>
          </div>
          <div style={{ display:'flex', gap: 36, marginTop: 44 }}>
            {[['20+','Años en GDL'],['FPMT','Linaje Gelugpa'],['Presencial','+ Online']].map(([a,b], i) => (
              <div key={i}>
                <div style={{ fontFamily:'var(--serif)', fontSize: 28, color:'var(--clay)' }}>{a}</div>
                <div style={{ fontFamily:'var(--mono)', fontSize: 10, color:'var(--ink-3)', letterSpacing:'0.1em', textTransform:'uppercase', marginTop: 4 }}>{b}</div>
              </div>
            ))}
          </div>
        </div>
        <KwPh label="foto real · sesión de meditación en el centro · luz cálida · grupo diverso" h={480} />
      </div>

      {/* Esta semana */}
      <div style={{ padding:'56px 40px', background:'var(--cream)', borderBlock:'1px solid var(--line)' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom: 28 }}>
          <div>
            <KwEyebrow>Esta semana · 23 – 29 abr</KwEyebrow>
            <div className="kw-display" style={{ fontSize: 36, marginTop: 6 }}>Actividades abiertas.</div>
          </div>
          <a className="kw-link" href="#">Ver calendario completo →</a>
        </div>
        <div style={{ borderTop:'1px solid var(--line)' }}>
          {[
            ['Lun · 23 abr','20:00','Meditación guiada','Presencial + Online','Abierta'],
            ['Mar · 24 abr','08:30','Meditación corta de la mañana','Solo online','Abierta'],
            ['Jue · 26 abr','20:00','Explorando el Budismo · módulo 03','Presencial + Online','Inscripción'],
            ['Sáb · 28 abr','10:00','Puja de Tara Blanca','Presencial','Comunidad'],
          ].map((r, i) => (
            <div key={i} style={{ display:'grid', gridTemplateColumns:'160px 80px 1fr 200px 120px 140px', padding:'18px 0', borderBottom:'1px solid var(--line)', alignItems:'center', fontSize: 14 }}>
              <span style={{ fontFamily:'var(--mono)', fontSize: 11, color:'var(--ink-3)', letterSpacing:'0.08em' }}>{r[0]}</span>
              <span style={{ fontFamily:'var(--serif)', fontSize: 18 }}>{r[1]}</span>
              <span style={{ color:'var(--ink)' }}>{r[2]}</span>
              <span style={{ color:'var(--ink-2)', fontSize: 12 }}>{r[3]}</span>
              <span style={{ fontSize: 11, padding:'4px 10px', background:'var(--paper)', borderRadius: 20, border:'1px solid var(--line)', width:'fit-content' }}>{r[4]}</span>
              <span style={{ fontSize: 12, color:'var(--clay)', textAlign:'right' }}>Confirmar por WhatsApp →</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tres caminos */}
      <div style={{ padding:'72px 40px' }}>
        <KwEyebrow>Tres caminos</KwEyebrow>
        <div className="kw-display" style={{ fontSize: 44, marginTop: 8, marginBottom: 36 }}>
          ¿Por dónde entras al Dharma?
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 20 }}>
          {[
            { t:'Primera vez', sub:'Curioso', c:'var(--terracotta)', d:'Para quien nunca meditó o no conoce el budismo. Empezá sin compromiso, sin requisitos, sin jargón.', links:['Meditaciones abiertas','Preguntas frecuentes','Escríbenos por WhatsApp'] },
            { t:'Quiero profundizar', sub:'Practicante', c:'var(--clay)', d:'Para quien ya tiene práctica y busca estudiar el budismo tibetano en profundidad, con linaje real.', links:['Programas FPMT','Conocer a los maestros','Ruta de aprendizaje'] },
            { t:'Soy parte del centro', sub:'Comunidad', c:'var(--moss)', d:'Para miembros y practicantes regulares que quieren mantenerse conectados y apoyar al centro.', links:['Calendario del mes','Cómo apoyar','Recursos de práctica'] },
          ].map((x, i) => (
            <div key={i} style={{ background:'var(--cream)', borderRadius: 14, padding: 28, border:'1px solid var(--line)', minHeight: 320, display:'flex', flexDirection:'column' }}>
              <div style={{ display:'flex', alignItems:'center', gap: 10, marginBottom: 16 }}>
                <div style={{ width: 10, height: 10, borderRadius: 10, background: x.c }} />
                <span style={{ fontFamily:'var(--mono)', fontSize: 10, letterSpacing:'0.12em', color: x.c, textTransform:'uppercase' }}>{x.sub}</span>
              </div>
              <div className="kw-display" style={{ fontSize: 28, color:'var(--ink)' }}>{x.t}</div>
              <p style={{ fontSize: 13.5, color:'var(--ink-2)', lineHeight: 1.55, marginTop: 12 }}>{x.d}</p>
              <div style={{ marginTop: 'auto', paddingTop: 20, display:'flex', flexDirection:'column', gap: 10, borderTop:'1px solid var(--line)' }}>
                {x.links.map(l => (
                  <a key={l} href="#" style={{ color:'var(--ink)', fontSize: 13, textDecoration:'none', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                    {l} <IconArrow size={12} color={x.c} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonio */}
      <div style={{ padding:'72px 40px', background:'var(--clay)', color:'var(--cream)' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 56, alignItems:'center' }}>
          <div>
            <KwEyebrow color="var(--ochre)">Testimonio · practicante · 3 años</KwEyebrow>
            <div className="kw-display" style={{ fontSize: 44, marginTop: 16 }}>
              <em style={{ fontStyle:'italic' }}>"Llegué buscando calmar la ansiedad. Tres años después, es parte esencial de mi vida."</em>
            </div>
            <div style={{ fontFamily:'var(--mono)', fontSize: 11, letterSpacing:'0.1em', marginTop: 24, color:'var(--ochre)' }}>— M. · ASISTE DESDE 2023</div>
          </div>
          <KwPh label="foto · retrato en el centro · natural · sin pose" h={360} tone="clay" style={{ background:
            'repeating-linear-gradient(135deg, rgba(255,255,255,0.12) 0 1px, transparent 1px 9px), #6F2215' }} />
        </div>
      </div>

      {/* Donación integrada */}
      <div style={{ padding:'72px 40px', background:'var(--paper)' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 56 }}>
          <div>
            <KwEyebrow>Cómo se sostiene el centro</KwEyebrow>
            <div className="kw-display" style={{ fontSize: 40, marginTop: 10 }}>
              Tu generosidad sostiene el Dharma <em style={{ fontStyle:'italic', color:'var(--clay)' }}>en Guadalajara.</em>
            </div>
          </div>
          <div>
            <p style={{ fontSize: 15, color:'var(--ink-2)', lineHeight: 1.6 }}>
              El centro opera gracias a los donativos voluntarios de estudiantes y visitantes. No hay cuota obligatoria
              — queremos que las enseñanzas sean accesibles para todos. Cada donativo, grande o pequeño, permite
              que las puertas sigan abiertas.
            </p>
            <div style={{ display:'flex', gap: 12, marginTop: 20 }}>
              <button className="kw-btn primary">Contribuir al centro <IconHeart size={14} /></button>
              <button className="kw-btn ghost">¿Cómo se usan los donativos?</button>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
      <WAFab />
    </div>
  );
}

// ─── Screen: EMPIEZA AQUÍ ──────────────────────────────────────
function ScreenStart() {
  const faqs = [
    ['¿Tengo que ser budista para venir?', 'No. El centro está abierto a cualquier persona curiosa, independientemente de su religión o creencias.'],
    ['¿Necesito experiencia previa en meditación?', 'No. Las sesiones abiertas son para cualquier nivel. El instructor guía todo el proceso.'],
    ['¿Qué pasa en una sesión?', 'Llegas, te sientas cómodamente (hay sillas). El instructor explica brevemente y guía la meditación. Dura 60 min.'],
    ['¿Tiene costo?', 'Las meditaciones abiertas son de donativo voluntario. Los cursos tienen un donativo sugerido transparente.'],
    ['¿Cómo me visto?', 'No hay código de vestimenta. Ropa cómoda está bien. No necesitas traer nada.'],
    ['¿Puedo ir una sola vez sin compromiso?', 'Sí. Podés asistir sin inscripción ni compromiso. Llegás, participás y te vas.'],
    ['¿Hay clases online?', 'Sí. Varias actividades tienen modalidad online por Zoom. Escribí por WhatsApp para el link.'],
    ['¿Por dónde empiezo?', 'Meditación guiada abierta, lunes 20:00. Presencial y online. Escribí por WhatsApp y te mandamos la info.'],
  ];
  return (
    <div style={{ background:'var(--paper)', position:'relative' }}>
      <SiteNav active="" />
      <div style={{ padding:'64px 40px 40px', maxWidth: 880, margin:'0 auto' }}>
        <KwEyebrow>Empieza aquí · Para curiosos</KwEyebrow>
        <div className="kw-display" style={{ fontSize: 64, marginTop: 12 }}>
          ¿Primera vez?<br/>
          <em style={{ fontStyle:'italic', color:'var(--clay)' }}>Respondemos tus ocho preguntas.</em>
        </div>
        <p style={{ fontSize: 16, color:'var(--ink-2)', marginTop: 20, lineHeight: 1.6, maxWidth: 620 }}>
          Si es tu primera vez explorando la meditación o el budismo, probablemente tienes algunas dudas. Estas son las preguntas que más nos hacen — y las respuestas honestas.
        </p>
      </div>

      {/* FAQs */}
      <div style={{ padding:'20px 40px 72px', maxWidth: 880, margin:'0 auto' }}>
        {faqs.map(([q,a], i) => (
          <div key={i} style={{ padding:'26px 0', borderTop:'1px solid var(--line)' }}>
            <div style={{ display:'flex', gap: 24, alignItems:'flex-start' }}>
              <span style={{ fontFamily:'var(--mono)', fontSize: 11, color:'var(--clay)', letterSpacing:'0.1em', paddingTop: 6, minWidth: 28 }}>0{i+1}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily:'var(--serif)', fontSize: 24, color:'var(--ink)', lineHeight: 1.25 }}>{q}</div>
                <div style={{ fontSize: 15, color:'var(--ink-2)', marginTop: 10, lineHeight: 1.6 }}>{a}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Big CTA */}
      <div style={{ padding:'56px 40px', background:'var(--ink)', color:'var(--cream)', textAlign:'center' }}>
        <KwEyebrow color="var(--ochre)">Siguiente paso</KwEyebrow>
        <div className="kw-display" style={{ fontSize: 44, marginTop: 12, maxWidth: 720, margin:'12px auto 0' }}>
          La próxima meditación abierta es<br/>
          <em style={{ fontStyle:'italic', color:'var(--ochre)' }}>el lunes, 20:00h.</em>
        </div>
        <button className="kw-btn" style={{ background:'#25D366', color:'var(--cream)', marginTop: 32, padding:'16px 26px', fontSize: 15 }}>
          <IconWA size={16} color="var(--cream)" /> Quiero asistir a mi primera sesión
        </button>
        <div style={{ fontFamily:'var(--mono)', fontSize: 10, color:'rgba(255,255,255,0.5)', marginTop: 14, letterSpacing:'0.1em' }}>
          MENSAJE PRELLENADO · RESPUESTA EN &lt; 2H EN HORARIO HÁBIL
        </div>
      </div>

      <SiteFooter />
      <WAFab />
    </div>
  );
}

Object.assign(window, { ScreenHome, ScreenStart, SiteNav, SiteFooter, WAFab });
