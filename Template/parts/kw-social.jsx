// kw-social.jsx — WhatsApp chat, Instagram mockups, Newsletter

function WhatsAppMock() {
  return (
    <div style={{ width: 320, height: 560, background:'#E5DDD5', borderRadius: 22, overflow:'hidden', display:'flex', flexDirection:'column', border:'1px solid rgba(0,0,0,0.08)' }}>
      {/* Chat header */}
      <div style={{ background:'#075E54', color:'#fff', padding:'12px 14px', display:'flex', alignItems:'center', gap: 10 }}>
        <div style={{ width: 32, height: 32, borderRadius: 32, background:'var(--clay)', display:'flex', alignItems:'center', justifyContent:'center' }}>
          <KwMark size={16} color="#fff" />
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 500 }}>Centro Khamlungpa</div>
          <div style={{ fontSize: 10, opacity: 0.7 }}>en línea · responde en &lt; 2h</div>
        </div>
      </div>
      {/* Messages */}
      <div style={{ flex: 1, padding: 14, display:'flex', flexDirection:'column', gap: 8, overflow:'hidden' }}>
        <div style={{ alignSelf:'flex-end', background:'#DCF8C6', padding:'8px 10px', borderRadius: 8, fontSize: 12, maxWidth:'80%', color:'#111' }}>
          Hola, me gustaría asistir por primera vez a una meditación guiada. ¿Qué necesito saber?
          <div style={{ fontSize: 9, color:'#666', textAlign:'right', marginTop: 2 }}>10:42 · ✓✓</div>
        </div>
        <div style={{ alignSelf:'flex-start', background:'#fff', padding:'8px 10px', borderRadius: 8, fontSize: 12, maxWidth:'82%', color:'#111' }}>
          ¡Hola! Bienvenido/a a Khamlungpa 🙏 Qué bueno que escribes.
          <div style={{ fontSize: 9, color:'#888', textAlign:'right', marginTop: 2 }}>10:44</div>
        </div>
        <div style={{ alignSelf:'flex-start', background:'#fff', padding:'8px 10px', borderRadius: 8, fontSize: 12, maxWidth:'82%', color:'#111' }}>
          Nuestra próxima meditación abierta es el <b>lunes a las 20:00h</b> en Col. Americana. No necesitas experiencia previa ni llevar nada especial.
          <div style={{ fontSize: 9, color:'#888', textAlign:'right', marginTop: 2 }}>10:44</div>
        </div>
        <div style={{ alignSelf:'flex-start', background:'#fff', padding:'8px 10px', borderRadius: 8, fontSize: 12, maxWidth:'82%', color:'#111' }}>
          ¿Vas presencial o te mando el link de Zoom?
          <div style={{ fontSize: 9, color:'#888', textAlign:'right', marginTop: 2 }}>10:44</div>
        </div>
      </div>
      {/* Input */}
      <div style={{ background:'#F0F0F0', padding:'8px 12px', display:'flex', gap: 8, alignItems:'center' }}>
        <div style={{ flex: 1, background:'#fff', borderRadius: 18, padding:'7px 12px', fontSize: 11, color:'#999' }}>Mensaje</div>
        <div style={{ width: 32, height: 32, borderRadius: 32, background:'#075E54', display:'flex', alignItems:'center', justifyContent:'center' }}>
          <IconWA size={16} color="#fff" />
        </div>
      </div>
    </div>
  );
}

function InstagramPost({ title, category, bg, textColor = 'var(--ink)' }) {
  return (
    <div style={{ width: 260, borderRadius: 10, overflow:'hidden', border:'1px solid var(--line)' }}>
      <div style={{ padding:'10px 12px', background:'#fff', display:'flex', alignItems:'center', gap: 8 }}>
        <div style={{ width: 28, height: 28, borderRadius: 28, background:'var(--clay)', display:'flex', alignItems:'center', justifyContent:'center' }}>
          <KwMark size={12} color="#fff" />
        </div>
        <span style={{ fontSize: 11, fontWeight: 600 }}>centro.khamlungpa</span>
        <span style={{ fontSize: 11, color:'#888', marginLeft:'auto' }}>···</span>
      </div>
      <div style={{ background: bg, padding: 26, height: 260, display:'flex', flexDirection:'column', justifyContent:'space-between', color: textColor }}>
        <div style={{ fontFamily:'var(--mono)', fontSize: 9, letterSpacing:'0.14em', opacity: 0.8 }}>{category}</div>
        <div style={{ fontFamily:'var(--serif)', fontSize: 26, lineHeight: 1.15 }}>{title}</div>
        <div style={{ fontFamily:'var(--mono)', fontSize: 9, letterSpacing:'0.14em', opacity: 0.7 }}>KHAMLUNGPA · GDL</div>
      </div>
      <div style={{ padding:'8px 12px', background:'#fff', fontSize: 11, color:'var(--ink-2)' }}>
        <span style={{ fontWeight: 600, color:'var(--ink)' }}>centro.khamlungpa</span> Únete a nuestra meditación del lunes — link en bio.
      </div>
    </div>
  );
}

function NewsletterMock() {
  return (
    <div style={{ width: 380, background:'var(--cream)', borderRadius: 8, padding: 28, border:'1px solid var(--line)' }}>
      <div style={{ fontFamily:'var(--mono)', fontSize: 9, color:'var(--ink-3)', letterSpacing:'0.1em' }}>NEWSLETTER · ABRIL 2026</div>
      <div className="kw-display" style={{ fontSize: 28, marginTop: 10, lineHeight: 1.1 }}>
        Qué aprendimos<br/>este mes en el centro.
      </div>
      <div style={{ fontSize: 12, color:'var(--ink-2)', marginTop: 14, fontStyle:'italic', lineHeight: 1.55, fontFamily:'var(--serif)' }}>
        "La práctica no consiste en alcanzar un estado especial, sino en volver, una y otra vez, al momento presente con amabilidad..."
      </div>
      <div style={{ fontFamily:'var(--mono)', fontSize: 9, color:'var(--ink-3)', letterSpacing:'0.08em', marginTop: 6 }}>— VEN. THUBTEN NORBU</div>

      <hr className="kw-rule" style={{ marginBlock: 18 }} />
      <div className="kw-overline">Calendario · Mayo</div>
      {['06 · Explorando el Budismo módulo 04','14 · Retiro fin de semana','20 · Visita Gueshe Dawa'].map((x, i) => (
        <div key={i} style={{ fontSize: 12, paddingBlock: 6, color:'var(--ink)' }}>{x}</div>
      ))}

      <hr className="kw-rule" style={{ marginBlock: 18 }} />
      <div className="kw-overline">Recurso gratuito</div>
      <div style={{ background:'var(--paper-2)', borderRadius: 8, padding: 14, marginTop: 8 }}>
        <div style={{ fontFamily:'var(--serif)', fontSize: 15 }}>Meditación de bodichita · 15 min</div>
        <div style={{ fontSize: 11, color:'var(--ink-3)', marginTop: 4 }}>Audio guiado · descarga MP3</div>
      </div>
      <button className="kw-btn primary" style={{ marginTop: 22, width:'100%', justifyContent:'center', fontSize: 12 }}>
        Apoyar al centro <IconHeart size={12} />
      </button>
    </div>
  );
}

function SocialBoard() {
  return (
    <div style={{ width: 1320, background:'var(--paper)', padding: 48, display:'flex', flexDirection:'column', gap: 28 }}>
      <div>
        <KwEyebrow>Activaciones digitales</KwEyebrow>
        <div className="kw-display" style={{ fontSize: 44, marginTop: 8 }}>
          WhatsApp, Instagram, Newsletter.<br/>
          <em style={{ fontStyle:'italic', color:'var(--clay)' }}>Las piezas que refuerzan al sitio.</em>
        </div>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'auto auto 1fr auto', gap: 28, alignItems:'flex-start' }}>
        {/* WhatsApp */}
        <div>
          <KwOverline>Chat · primera conversación</KwOverline>
          <div style={{ marginTop: 14 }}><WhatsAppMock /></div>
        </div>

        {/* Instagram */}
        <div>
          <KwOverline>Instagram · 4 pilares</KwOverline>
          <div style={{ marginTop: 14, display:'grid', gridTemplateColumns:'1fr', gap: 14 }}>
            <InstagramPost title={<><em style={{ fontStyle:'italic' }}>"Tres minutos</em><br/>para calmar la mente."</>} category="01 · MEDITACIÓN PRÁCTICA" bg="var(--paper-3)" />
            <InstagramPost title={<><em style={{ fontStyle:'italic' }}>La impermanencia</em><br/>no es pérdida:<br/>es espacio."</>} category="02 · FILOSOFÍA ACCESIBLE" bg="var(--clay)" textColor="var(--cream)" />
          </div>
        </div>

        <div style={{ display:'flex', flexDirection:'column', gap: 14, marginTop: 26 }}>
          <InstagramPost title={<>Esta semana:<br/><em style={{ fontStyle:'italic' }}>Meditación<br/>guiada.</em></>} category="04 · INVITACIÓN" bg="var(--ink)" textColor="var(--cream)" />
          <InstagramPost title={<><em style={{ fontStyle:'italic' }}>Puja de<br/>Tara Blanca.</em></>} category="03 · VIDA DEL CENTRO" bg="var(--ochre)" />
        </div>

        {/* Newsletter */}
        <div>
          <KwOverline>Newsletter mensual</KwOverline>
          <div style={{ marginTop: 14 }}><NewsletterMock /></div>
        </div>
      </div>

      {/* Protocol notes */}
      <div style={{ background:'var(--ink)', color:'var(--cream)', padding: 28, borderRadius: 14, display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap: 28 }}>
        {[
          ['Respuesta &lt; 2h','En horario hábil. Auto-mensaje fuera de horario indicando cuándo se responde.'],
          ['Mensaje prellenado por página','Cada CTA de WhatsApp abre con contexto específico — reduce fricción.'],
          ['Grupo de comunidad','Solo admins publican · máx 2-3 avisos por semana · retención del perfil 50+'],
        ].map(([t,d], i) => (
          <div key={i}>
            <div style={{ fontFamily:'var(--mono)', fontSize: 10, color:'var(--ochre)', letterSpacing:'0.12em' }}>PROTOCOLO · 0{i+1}</div>
            <div style={{ fontFamily:'var(--serif)', fontSize: 22, marginTop: 6 }} dangerouslySetInnerHTML={{__html: t}} />
            <div style={{ fontSize: 12, opacity: 0.75, marginTop: 8, lineHeight: 1.55 }}>{d}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { SocialBoard });
