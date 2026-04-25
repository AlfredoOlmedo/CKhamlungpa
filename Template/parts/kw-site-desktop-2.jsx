// kw-site-desktop-2.jsx — Programs, Program detail, Teachers, Calendar, Donate, Contact

function ScreenPrograms() {
  const programs = [
    { n:'01', name:'Budismo en Pocas Palabras', level:'Principiante', dur:'Talleres puntuales', mod:'Presencial + Online', cert:'—', c:'var(--terracotta)' },
    { n:'02', name:'Descubre el Budismo', level:'Principiante', dur:'~2 años · 14 módulos', mod:'Presencial + Online', cert:'Certificado FPMT', c:'var(--terracotta)' },
    { n:'03', name:'Explorando el Budismo', level:'Intermedio', dur:'3 años · 10 módulos', mod:'Presencial + Online', cert:'Certificado FPMT', c:'var(--clay)' },
    { n:'04', name:'70 Temas', level:'Intermedio', dur:'Continuado', mod:'Presencial + Online', cert:'—', c:'var(--clay)' },
    { n:'05', name:'Programa Básico', level:'Avanzado', dur:'5 años · 9 módulos', mod:'Presencial', cert:'Diploma FPMT', c:'var(--ink)' },
  ];
  return (
    <div style={{ background:'var(--paper)', position:'relative' }}>
      <SiteNav active="Budismo" />
      <div style={{ padding:'64px 40px 32px', maxWidth: 1080, margin:'0 auto' }}>
        <KwEyebrow>Programas · Ruta de estudios FPMT</KwEyebrow>
        <div className="kw-display" style={{ fontSize: 60, marginTop: 12 }}>
          De la primera curiosidad al<br/>
          <em style={{ fontStyle:'italic', color:'var(--clay)' }}>Diploma Básico FPMT.</em>
        </div>
        <p style={{ fontSize: 16, color:'var(--ink-2)', marginTop: 18, maxWidth: 640, lineHeight: 1.6 }}>
          Cinco programas escalonados que llevan del interés inicial hasta la formación profunda en budismo tibetano
          tradicional. Cada nivel construye sobre el anterior — pero cada curso puede tomarse por separado.
        </p>
      </div>

      {/* Ruta visual */}
      <div style={{ padding:'24px 40px', maxWidth: 1080, margin:'0 auto' }}>
        <div style={{ display:'flex', alignItems:'center', gap: 6, marginBottom: 24 }}>
          {['Principiante','Intermedio','Avanzado'].map((l,i) => (
            <React.Fragment key={l}>
              <div style={{
                flex: i === 1 ? 0.8 : 1, padding:'10px 16px',
                background: i===0?'var(--paper-2)':(i===1?'var(--paper-3)':'var(--clay)'),
                color: i===2?'var(--cream)':'var(--ink)',
                borderRadius: 8, fontSize: 12, fontFamily:'var(--mono)', letterSpacing:'0.08em', textAlign:'center'
              }}>{l.toUpperCase()}</div>
            </React.Fragment>
          ))}
        </div>

        {programs.map((p, i) => (
          <a key={i} href="#" style={{ textDecoration:'none', color:'inherit' }}>
            <div style={{
              padding:'28px 0', borderTop:'1px solid var(--line)',
              display:'grid', gridTemplateColumns:'60px 1fr 150px 220px 180px 40px', alignItems:'center', gap: 20
            }}>
              <div style={{ fontFamily:'var(--mono)', fontSize: 12, color: p.c, letterSpacing:'0.1em' }}>{p.n}</div>
              <div>
                <div style={{ fontFamily:'var(--serif)', fontSize: 26, color:'var(--ink)' }}>{p.name}</div>
                <div style={{ fontSize: 12, color:'var(--ink-3)', marginTop: 4, fontFamily:'var(--mono)', letterSpacing:'0.06em' }}>{p.level.toUpperCase()}</div>
              </div>
              <div style={{ fontSize: 13, color:'var(--ink-2)' }}>{p.dur}</div>
              <div style={{ fontSize: 13, color:'var(--ink-2)' }}>{p.mod}</div>
              <div style={{ fontSize: 12, padding:'5px 12px', background: p.cert==='—'?'transparent':'var(--paper-2)', borderRadius: 20, width:'fit-content', color:'var(--ink)' }}>{p.cert}</div>
              <IconArrow size={16} color="var(--ink-3)" />
            </div>
          </a>
        ))}
      </div>

      <div style={{ height: 80 }} />
      <SiteFooter />
      <WAFab />
    </div>
  );
}

function ScreenProgramDetail() {
  const modules = [
    'La mente y sus potenciales','Karma','Renacimiento y samsara','Existencia cíclica',
    'La preciada vida humana','La impermanencia y la muerte','Refugio en las Tres Joyas',
    'Establecer una práctica diaria','La introducción al tantra','Los retiros y la vida en el Dharma',
    'Las Cuatro Nobles Verdades','La compasión y la bodichita','La visión de la vacuidad','Integrando las enseñanzas'
  ];
  return (
    <div style={{ background:'var(--paper)', position:'relative' }}>
      <SiteNav active="Budismo" />
      <div style={{ padding:'56px 40px 40px', maxWidth: 1080, margin:'0 auto' }}>
        <div style={{ fontFamily:'var(--mono)', fontSize: 11, color:'var(--ink-3)', letterSpacing:'0.08em' }}>
          Programas / <span style={{ color:'var(--clay)' }}>Descubre el Budismo</span>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'1.3fr 1fr', gap: 48, marginTop: 24 }}>
          <div>
            <KwEyebrow>02 · Principiante · Certificado FPMT</KwEyebrow>
            <div className="kw-display" style={{ fontSize: 56, marginTop: 10 }}>
              Descubre<br/>
              <em style={{ fontStyle:'italic', color:'var(--clay)' }}>el Budismo.</em>
            </div>
            <p style={{ fontSize: 16, color:'var(--ink-2)', marginTop: 18, lineHeight: 1.6 }}>
              Un programa de introducción sistemática al budismo tibetano, creado por Lama Zopa Rinpoche.
              14 módulos que cubren desde las cuatro nobles verdades hasta la práctica del refugio y la bodichita.
            </p>

            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 18, marginTop: 28 }}>
              {[
                ['Duración','~2 años · 14 módulos'],
                ['Modalidad','Presencial + Online'],
                ['Frecuencia','Jueves 20:00h'],
                ['Facilitador','Ven. Thubten Norbu'],
                ['Próxima edición','12 febrero 2026'],
                ['Donativo sugerido','$850 MXN por módulo'],
              ].map(([k,v], i) => (
                <div key={i} style={{ paddingBlock: 10, borderTop:'1px solid var(--line)' }}>
                  <div className="kw-overline">{k}</div>
                  <div style={{ fontSize: 15, color:'var(--ink)', marginTop: 4 }}>{v}</div>
                </div>
              ))}
            </div>

            <div style={{ display:'flex', gap: 12, marginTop: 32 }}>
              <button className="kw-btn primary">Inscribirme · WhatsApp <IconArrow size={12} color="var(--cream)" /></button>
              <button className="kw-btn ghost">Avisarme cuando haya lugar</button>
            </div>
          </div>

          <div>
            <KwPh label="foto · ven. thubten norbu" h={280} tone="ink" />
            <div style={{ background:'var(--cream)', borderRadius: 12, padding: 20, border:'1px solid var(--line)', marginTop: 16 }}>
              <div className="kw-overline">Prerrequisito</div>
              <div style={{ fontSize: 14, color:'var(--ink)', marginTop: 8, lineHeight: 1.55 }}>
                Ninguno. Este es el programa recomendado para quienes quieren un estudio estructurado desde el inicio.
              </div>
              <div className="kw-overline" style={{ marginTop: 18 }}>Siguiente nivel</div>
              <div style={{ fontSize: 14, color:'var(--ink)', marginTop: 8, lineHeight: 1.55 }}>
                Al completar los 14 módulos → <span className="kw-link">Explorando el Budismo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Módulos */}
        <div style={{ marginTop: 56 }}>
          <KwEyebrow>Los 14 módulos</KwEyebrow>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap: 0, marginTop: 18 }}>
            {modules.map((m, i) => (
              <div key={i} style={{ padding:'16px 20px 16px 0', borderTop:'1px solid var(--line)', display:'flex', gap: 16 }}>
                <span style={{ fontFamily:'var(--mono)', fontSize: 11, color:'var(--clay)', letterSpacing:'0.08em', width: 24 }}>{String(i+1).padStart(2,'0')}</span>
                <span style={{ fontFamily:'var(--serif)', fontSize: 17, color:'var(--ink)' }}>{m}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ height: 80 }} />
      <SiteFooter />
      <WAFab />
    </div>
  );
}

function ScreenTeachers() {
  return (
    <div style={{ background:'var(--paper)', position:'relative' }}>
      <SiteNav active="Maestros" />
      <div style={{ padding:'64px 40px 32px', maxWidth: 1080, margin:'0 auto' }}>
        <KwEyebrow>Maestros · Linaje Gelugpa</KwEyebrow>
        <div className="kw-display" style={{ fontSize: 60, marginTop: 12 }}>
          Formación real, <em style={{ fontStyle:'italic', color:'var(--clay)' }}>linaje ininterrumpido.</em>
        </div>
        <p style={{ fontSize: 16, color:'var(--ink-2)', marginTop: 18, maxWidth: 680, lineHeight: 1.6 }}>
          El Centro Khamlungpa pertenece al linaje Gelugpa fundado por Lama Tsongkhapa (s. XIV) y continuado
          hoy por los maestros de la FPMT. Cada maestro que enseña aquí ha recibido autorización formal.
        </p>
      </div>

      {/* Teacher cards */}
      <div style={{ padding:'24px 40px 80px', maxWidth: 1080, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap: 24 }}>
        {[
          { name:'Ven. Thubten Norbu', role:'Maestro residente · desde 2005', bio:'Ordenado monje budista en 1998. Estudió en Nalanda Monastery (Francia) y Sera Je (India). Autorizado por Lama Zopa Rinpoche para enseñar Descubre el Budismo y Explorando el Budismo. 20+ años de práctica.', c:'var(--clay)' },
          { name:'Gueshe Lobsang Dawa', role:'Maestro del Programa Básico', bio:'Gueshe Lharampa formado en Sera Je Monastic University tras 20+ años de estudio del currículo monástico tradicional. Facilitador autorizado del Programa Básico FPMT. Visita el centro anualmente.', c:'var(--terracotta)' },
        ].map((t, i) => (
          <div key={i} style={{ background:'var(--cream)', borderRadius: 14, padding: 28, border:'1px solid var(--line)' }}>
            <KwPh label={`foto · retrato · ${t.name.toLowerCase()}`} h={280} tone={i===0?'ink':'clay'} />
            <div style={{ fontFamily:'var(--mono)', fontSize: 10, color: t.c, letterSpacing:'0.1em', marginTop: 20, textTransform:'uppercase' }}>{t.role}</div>
            <div className="kw-display" style={{ fontSize: 30, marginTop: 6 }}>{t.name}</div>
            <p style={{ fontSize: 14, color:'var(--ink-2)', marginTop: 12, lineHeight: 1.6 }}>{t.bio}</p>
            <a className="kw-link" href="#" style={{ fontSize: 13, marginTop: 16, display:'inline-block' }}>Biografía completa →</a>
          </div>
        ))}
      </div>

      <SiteFooter />
      <WAFab />
    </div>
  );
}

function ScreenCalendar() {
  const daysHeader = ['Lun','Mar','Mié','Jue','Vie','Sáb','Dom'];
  // Month view — April 2026 starts on Wed (actual cal)
  const days = Array.from({length: 35}, (_, i) => i - 1);
  const events = { 6:['M'], 7:['M','O'], 9:['E'], 11:['P'], 13:['M'], 14:['M'], 16:['E'], 18:['P'], 20:['M'], 21:['M'], 23:['E','V'], 25:['P'], 27:['M'], 28:['M'], 30:['E','R'] };
  const colors = { M:'var(--clay)', O:'var(--ink-3)', E:'var(--terracotta)', P:'var(--moss)', V:'var(--ochre)', R:'var(--clay-2)' };

  return (
    <div style={{ background:'var(--paper)', position:'relative' }}>
      <SiteNav active="Calendario" />
      <div style={{ padding:'56px 40px', maxWidth: 1180, margin:'0 auto' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom: 32 }}>
          <div>
            <KwEyebrow>Calendario · Abril 2026</KwEyebrow>
            <div className="kw-display" style={{ fontSize: 52, marginTop: 10 }}>Este mes en Khamlungpa.</div>
          </div>
          <div style={{ display:'flex', gap: 10 }}>
            <button className="kw-btn ghost" style={{ fontSize: 12, padding:'10px 16px' }}>← Marzo</button>
            <button className="kw-btn ghost" style={{ fontSize: 12, padding:'10px 16px' }}>Mayo →</button>
            <button className="kw-btn dark" style={{ fontSize: 12, padding:'10px 16px' }}>+ Suscribir (iCal)</button>
          </div>
        </div>

        {/* Filter chips */}
        <div style={{ display:'flex', gap: 8, flexWrap:'wrap', marginBottom: 20 }}>
          {[['Todo',true],['Meditación'],['Curso'],['Puja · Comunidad'],['Retiro'],['Visita · Maestro']].map(([l,a], i) => (
            <span key={i} style={{
              padding:'6px 14px', borderRadius: 20, fontSize: 12,
              background: a?'var(--ink)':'transparent', color: a?'var(--cream)':'var(--ink)',
              border: a?'none':'1px solid var(--line)'
            }}>{l}</span>
          ))}
        </div>

        {/* Grid */}
        <div style={{ background:'var(--cream)', borderRadius: 14, border:'1px solid var(--line)', overflow:'hidden' }}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(7, 1fr)', background:'var(--paper-2)' }}>
            {daysHeader.map(d => (
              <div key={d} style={{ padding:'12px 14px', fontFamily:'var(--mono)', fontSize: 10, letterSpacing:'0.12em', color:'var(--ink-3)' }}>{d.toUpperCase()}</div>
            ))}
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(7, 1fr)' }}>
            {days.map(d => {
              const valid = d >= 1 && d <= 30;
              const ev = events[d] || [];
              return (
                <div key={d} style={{
                  minHeight: 94, borderTop:'1px solid var(--line)', borderLeft:'1px solid var(--line)',
                  padding: 10, background:'var(--cream)'
                }}>
                  <div style={{ fontFamily:'var(--serif)', fontSize: 16, color: valid ? 'var(--ink)' : 'var(--ink-3)', opacity: valid?1:0.3 }}>
                    {valid ? d : ''}
                  </div>
                  <div style={{ display:'flex', flexDirection:'column', gap: 3, marginTop: 6 }}>
                    {ev.map((e,i) => (
                      <div key={i} style={{
                        fontSize: 10, fontFamily:'var(--mono)', padding:'2px 6px',
                        background: colors[e], color:'var(--cream)', borderRadius: 3, letterSpacing:'0.05em'
                      }}>
                        {e === 'M' ? 'MEDITACIÓN' : e==='E'?'EXPLORANDO':e==='P'?'PUJA':e==='V'?'VISITA':e==='R'?'RETIRO':'ONLINE'}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Legend */}
        <div style={{ display:'flex', gap: 24, marginTop: 20, flexWrap:'wrap' }}>
          {Object.entries({ 'Meditación':'M', 'Curso':'E', 'Puja · Comunidad':'P', 'Retiro':'R', 'Visita Maestro':'V' }).map(([l, k]) => (
            <div key={l} style={{ display:'flex', gap:8, alignItems:'center', fontSize: 12 }}>
              <div style={{ width: 10, height: 10, background: colors[k] }} />
              <span style={{ color:'var(--ink-2)' }}>{l}</span>
            </div>
          ))}
        </div>
      </div>

      <SiteFooter />
      <WAFab />
    </div>
  );
}

function ScreenDonate() {
  return (
    <div style={{ background:'var(--paper)', position:'relative' }}>
      <SiteNav active="Donar" />
      <div style={{ padding:'72px 40px 48px', maxWidth: 980, margin:'0 auto' }}>
        <KwEyebrow>Contribuir al centro</KwEyebrow>
        <div className="kw-display" style={{ fontSize: 64, marginTop: 14 }}>
          Tu generosidad sostiene<br/>
          <em style={{ fontStyle:'italic', color:'var(--clay)' }}>el Dharma en Guadalajara.</em>
        </div>
        <p style={{ fontSize: 17, color:'var(--ink-2)', marginTop: 22, lineHeight: 1.65, maxWidth: 720 }}>
          Khamlungpa opera gracias a los donativos voluntarios de estudiantes y visitantes.
          No hay cuota obligatoria — queremos que las enseñanzas sean accesibles para todos, sin importar
          su situación. Cada donativo, grande o pequeño, permite que las puertas del centro sigan abiertas.
        </p>
      </div>

      {/* Three tiers */}
      <div style={{ padding:'20px 40px 40px', maxWidth: 1180, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 18 }}>
        {[
          { t:'Donativo puntual', a:'$ libre', d:'Un aporte único para sostener la operación del centro.', c:'var(--terracotta)' },
          { t:'Apoyo mensual', a:'desde $250 MXN', d:'Contribución recurrente que permite planificar actividades con estabilidad.', c:'var(--clay)', main:true },
          { t:'Benefactor', a:'desde $1,500 MXN', d:'Contribución mayor que sostiene retiros, visitas de maestros y becas.', c:'var(--ink)' },
        ].map((x, i) => (
          <div key={i} style={{
            background: x.main ? 'var(--ink)' : 'var(--cream)',
            color: x.main ? 'var(--cream)' : 'var(--ink)',
            borderRadius: 16, padding: 28, border: x.main?'none':'1px solid var(--line)',
            minHeight: 280, display:'flex', flexDirection:'column'
          }}>
            <KwMark size={26} color={x.c} />
            <div style={{ fontFamily:'var(--mono)', fontSize: 10, letterSpacing:'0.1em', color: x.main?'var(--ochre)':x.c, marginTop: 14 }}>
              NIVEL {String(i+1).padStart(2,'0')}
            </div>
            <div className="kw-display" style={{ fontSize: 28, marginTop: 4, color:'inherit' }}>{x.t}</div>
            <div style={{ fontFamily:'var(--serif)', fontSize: 22, color: x.main?'var(--ochre)':'var(--clay)', marginTop: 14, fontStyle:'italic' }}>{x.a}</div>
            <p style={{ fontSize: 13, opacity: 0.75, marginTop: 12, lineHeight: 1.55 }}>{x.d}</p>
            <button className="kw-btn" style={{
              marginTop:'auto', background: x.main?'var(--ochre)':'var(--ink)', color: x.main?'var(--ink)':'var(--cream)',
              fontSize: 13
            }}>Contribuir <IconHeart size={13} /></button>
          </div>
        ))}
      </div>

      {/* Methods */}
      <div style={{ padding:'48px 40px', maxWidth: 980, margin:'0 auto' }}>
        <KwOverline>Métodos disponibles</KwOverline>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 20, marginTop: 16 }}>
          {[
            ['SPEI', 'Transferencia bancaria · Sin comisión · Ideal para donativos recurrentes'],
            ['MercadoPago', 'Tarjeta de crédito o débito · Confirmación inmediata'],
            ['PayPal', 'Para donantes internacionales · USD o MXN'],
          ].map(([n,d], i) => (
            <div key={i} style={{ padding: 18, background:'var(--cream)', borderRadius: 10, border:'1px solid var(--line)' }}>
              <div style={{ fontFamily:'var(--serif)', fontSize: 20, color:'var(--ink)' }}>{n}</div>
              <div style={{ fontSize: 12.5, color:'var(--ink-2)', marginTop: 6, lineHeight: 1.5 }}>{d}</div>
            </div>
          ))}
        </div>
      </div>

      <SiteFooter />
      <WAFab />
    </div>
  );
}

function ScreenContact() {
  return (
    <div style={{ background:'var(--paper)', position:'relative' }}>
      <SiteNav active="Contacto" />
      <div style={{ padding:'64px 40px', maxWidth: 1080, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap: 48 }}>
        <div>
          <KwEyebrow>Contacto · Escríbenos</KwEyebrow>
          <div className="kw-display" style={{ fontSize: 60, marginTop: 12 }}>
            Una conversación<br/>
            <em style={{ fontStyle:'italic', color:'var(--clay)' }}>es el primer paso.</em>
          </div>
          <div style={{ marginTop: 36 }}>
            {[
              ['WhatsApp', '+52 33 0000 0000', 'Respuesta en < 2h en horario hábil'],
              ['Email', 'info@khamlungpa.com', 'Para preguntas largas o institucionales'],
              ['Dirección', 'Col. Americana · Guadalajara', 'Referencia exacta al confirmar asistencia'],
              ['Horario', 'Lun – Sáb · 10:00 – 20:00', 'Domingos cerrado excepto eventos'],
            ].map(([k,v,n], i) => (
              <div key={i} style={{ padding:'18px 0', borderTop:'1px solid var(--line)' }}>
                <div className="kw-overline">{k}</div>
                <div style={{ fontFamily:'var(--serif)', fontSize: 22, marginTop: 6 }}>{v}</div>
                <div style={{ fontSize: 12, color:'var(--ink-3)', marginTop: 4 }}>{n}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <KwPh label="mapa · google maps · col. americana · gdl" h={420} />
          <button className="kw-btn primary" style={{ marginTop: 16, background:'#25D366', width:'100%', justifyContent:'center' }}>
            <IconWA size={16} color="var(--cream)" /> Abrir conversación en WhatsApp
          </button>
        </div>
      </div>
      <SiteFooter />
      <WAFab />
    </div>
  );
}

Object.assign(window, { ScreenPrograms, ScreenProgramDetail, ScreenTeachers, ScreenCalendar, ScreenDonate, ScreenContact });
