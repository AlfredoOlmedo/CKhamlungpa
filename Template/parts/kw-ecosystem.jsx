// kw-ecosystem.jsx — Radial map + channel roles table

function EcosystemMap() {
  const channels = [
    { name: 'Instagram', role: 'Captación visual', color: 'var(--terracotta)', angle: 0 },
    { name: 'Google SEO', role: 'Captación orgánica', color: 'var(--clay)', angle: 51 },
    { name: 'Google Business', role: 'Presencia local', color: 'var(--ochre)', angle: 102 },
    { name: 'WhatsApp', role: 'Conversión 1:1', color: '#25D366', angle: 154 },
    { name: 'Newsletter', role: 'Retención', color: 'var(--moss)', angle: 205 },
    { name: 'Facebook', role: 'Comunidad 35+', color: 'var(--ink-2)', angle: 257 },
    { name: 'YouTube · futuro', role: 'Contenido + SEO', color: 'var(--ink-3)', angle: 308 },
  ];
  const R = 210;
  const cx = 340, cy = 300;

  return (
    <div style={{
      width: 1320, background:'var(--paper)', padding: 48,
      display:'flex', flexDirection:'column', gap: 28
    }}>
      <div>
        <KwEyebrow>Mapa del Ecosistema Digital</KwEyebrow>
        <div className="kw-display" style={{ fontSize: 44, marginTop: 8 }}>
          Las redes atraen. El sitio convierte.<br/>
          <em style={{ fontStyle:'italic', color:'var(--clay)' }}>WhatsApp cierra.</em>
        </div>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'680px 1fr', gap: 32 }}>
        {/* Radial diagram */}
        <div style={{ position:'relative', height: 600, background:'var(--cream)', borderRadius: 16, border:'1px solid var(--line)', overflow:'hidden' }}>
          <svg width="100%" height="100%" viewBox="0 0 680 600" style={{ position:'absolute', inset: 0 }}>
            {/* Orbits */}
            {[100, 160, 220].map(r => (
              <circle key={r} cx={cx} cy={cy} r={r} stroke="rgba(42,38,34,0.1)" strokeDasharray="3 5" fill="none" />
            ))}
            {/* Connection lines */}
            {channels.map((c,i) => {
              const rad = (c.angle * Math.PI) / 180;
              const x = cx + Math.cos(rad) * R;
              const y = cy + Math.sin(rad) * R;
              return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke={c.color} strokeOpacity="0.25" strokeWidth="1" />;
            })}
            {/* Center */}
            <circle cx={cx} cy={cy} r="72" fill="var(--ink)" />
            <text x={cx} y={cy-6} textAnchor="middle" fill="var(--cream)" fontFamily="Fraunces, serif" fontSize="22">Sitio</text>
            <text x={cx} y={cy+16} textAnchor="middle" fill="var(--ochre)" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="0.1em">khamlungpa.com</text>
          </svg>

          {/* Channel nodes as absolutely positioned divs so text is crisp */}
          {channels.map((c,i) => {
            const rad = (c.angle * Math.PI) / 180;
            const x = cx + Math.cos(rad) * R;
            const y = cy + Math.sin(rad) * R;
            return (
              <div key={i} style={{
                position:'absolute', left: x - 70, top: y - 32,
                width: 140, textAlign:'center',
                display:'flex', flexDirection:'column', alignItems:'center', gap: 6
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 48, background: c.color,
                  border:'3px solid var(--cream)',
                  boxShadow:'0 4px 12px rgba(42,38,34,0.15)'
                }} />
                <div style={{ fontFamily:'var(--serif)', fontSize: 15, color:'var(--ink)' }}>{c.name}</div>
                <div style={{ fontFamily:'var(--mono)', fontSize: 10, color:'var(--ink-3)', letterSpacing:'0.06em' }}>{c.role}</div>
              </div>
            );
          })}

          {/* Legend */}
          <div style={{ position:'absolute', left: 20, bottom: 20, fontFamily:'var(--mono)', fontSize: 10, color:'var(--ink-3)', letterSpacing:'0.08em', maxWidth: 280, lineHeight: 1.5 }}>
            El sitio es el hub. Cada canal tiene un rol específico en la cadena — no son intercambiables.
          </div>
        </div>

        {/* Flow by perfil */}
        <div style={{ display:'flex', flexDirection:'column', gap: 16 }}>
          <KwOverline>Flujo de conversión por perfil</KwOverline>
          {[
            { label:'El Curioso', color:'var(--terracotta)', flow:['Instagram / Google','Homepage','/empieza-aqui','WhatsApp','Primera sesión','Newsletter','Inscripción'] },
            { label:'El Practicante', color:'var(--clay)', flow:['Google · FPMT','Maestros + Programas','Validación','WhatsApp','Primera clase','Programa Básico'] },
            { label:'La Comunidad', color:'var(--moss)', flow:['WhatsApp · Newsletter','Calendario','Asistencia','/donar','Recursos'] },
          ].map((p, i) => (
            <div key={i} style={{ background:'var(--cream)', borderRadius: 12, padding: 16, border:'1px solid var(--line)' }}>
              <div style={{ display:'flex', alignItems:'center', gap: 8, marginBottom: 10 }}>
                <div style={{ width: 8, height: 8, borderRadius: 8, background: p.color }} />
                <span style={{ fontFamily:'var(--serif)', fontSize: 16, color:'var(--ink)' }}>{p.label}</span>
              </div>
              <div style={{ display:'flex', alignItems:'center', flexWrap:'wrap', gap: 4 }}>
                {p.flow.map((step, j) => (
                  <React.Fragment key={j}>
                    <span style={{
                      fontSize: 11, fontFamily:'var(--sans)',
                      padding:'5px 9px', borderRadius: 20,
                      background: j === p.flow.length-1 ? p.color : 'var(--paper)',
                      color: j === p.flow.length-1 ? 'var(--cream)' : 'var(--ink)',
                      border: j === p.flow.length-1 ? 'none' : '1px solid var(--line)'
                    }}>{step}</span>
                    {j < p.flow.length - 1 && <span style={{ color:'var(--ink-3)', fontSize: 11 }}>→</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { EcosystemMap });
