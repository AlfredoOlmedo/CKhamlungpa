// kw-designsystem.jsx — tokens card (colors, type, components)

function DsSwatch({ name, hex, label, dark }) {
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
      <div style={{
        height: 72, borderRadius: 8, background: hex,
        border: '1px solid rgba(42,38,34,0.08)',
        display:'flex', alignItems:'flex-end', padding: 10,
        color: dark ? 'rgba(255,255,255,0.85)' : 'rgba(42,38,34,0.65)',
        fontFamily:'var(--mono)', fontSize: 10, letterSpacing:'0.08em'
      }}>{hex.toUpperCase()}</div>
      <div style={{ display:'flex', justifyContent:'space-between', gap:8 }}>
        <span style={{ fontFamily:'var(--sans)', fontSize: 12, fontWeight:500, color:'var(--ink)' }}>{name}</span>
        <span style={{ fontFamily:'var(--mono)', fontSize: 10, color:'var(--ink-3)', letterSpacing:'0.08em' }}>{label}</span>
      </div>
    </div>
  );
}

function DsTypeSpec({ family, sample, size, weight, use, lh }) {
  return (
    <div style={{ paddingBlock: 18, borderTop: '1px solid var(--line)' }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom: 10 }}>
        <span className="kw-overline">{use}</span>
        <span style={{ fontFamily:'var(--mono)', fontSize:10, color:'var(--ink-3)', letterSpacing:'0.08em' }}>
          {family} · {size} · {weight}{lh ? ` · ${lh}` : ''}
        </span>
      </div>
      <div style={{ fontFamily: family.includes('Fraunces') ? 'var(--serif)' : (family.includes('JetBrains') ? 'var(--mono)' : 'var(--sans)'),
        fontSize: parseInt(size,10), fontWeight: parseInt(weight,10) || 400, color:'var(--ink)', letterSpacing: family.includes('Fraunces') ? '-0.02em' : 0, lineHeight: 1.1 }}>
        {sample}
      </div>
    </div>
  );
}

function DesignSystemCard() {
  return (
    <div style={{
      width: 1240, minHeight: 900, background: 'var(--paper)',
      padding: 48, fontFamily:'var(--sans)', color:'var(--ink)',
      display:'grid', gridTemplateColumns:'1.1fr 1fr', gap: 40
    }}>
      {/* LEFT COLUMN */}
      <div style={{ display:'flex', flexDirection:'column', gap: 36 }}>
        <div>
          <KwEyebrow>Design System · v1.0</KwEyebrow>
          <div className="kw-display" style={{ fontSize: 54, marginTop: 8 }}>
            Un lenguaje visual<br/><em style={{ fontStyle:'italic', color:'var(--clay)' }}>cálido, sereno, editorial.</em>
          </div>
          <p style={{ color:'var(--ink-2)', fontSize: 15, maxWidth: 520, marginTop: 16, lineHeight: 1.55 }}>
            Fundado en papel cálido y tinta profunda. La tipografía serif aporta presencia contemplativa;
            el color arcilla ancla el centro sin caer en la iconografía genérica. Todo deja espacio para
            respirar — como una sesión de meditación.
          </p>
        </div>

        <div>
          <KwOverline>Paleta · Warm paper & clay</KwOverline>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap: 12, marginTop: 14 }}>
            <DsSwatch name="Paper"      hex="#F4ECE0" label="base" />
            <DsSwatch name="Cream"      hex="#FBF7EF" label="card" />
            <DsSwatch name="Paper·3"    hex="#E8DDC8" label="shade" />
            <DsSwatch name="Clay"       hex="#8B2E1F" label="primary" dark />
            <DsSwatch name="Terracotta" hex="#C97B4A" label="accent" dark />
            <DsSwatch name="Ochre"      hex="#D4A35A" label="warm" dark />
            <DsSwatch name="Moss"       hex="#5C6B4E" label="quiet" dark />
            <DsSwatch name="Ink"        hex="#2A2622" label="text" dark />
            <DsSwatch name="Ink·2"      hex="#4A423A" label="body" dark />
            <DsSwatch name="Ink·3"      hex="#6B6158" label="meta" dark />
          </div>
        </div>

        <div>
          <KwOverline>Componentes · Superficies</KwOverline>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 16, marginTop: 14 }}>
            <div className="kw-card" style={{ padding: 18 }}>
              <div className="kw-eyebrow">Programa</div>
              <div style={{ fontFamily:'var(--serif)', fontSize: 22, marginTop: 6 }}>Descubre el Budismo</div>
              <div style={{ fontSize: 12, color:'var(--ink-3)', marginTop: 6 }}>14 módulos · ~2 años · Certificado FPMT</div>
              <hr className="kw-rule" style={{ marginBlock: 14 }} />
              <div style={{ display:'flex', justifyContent:'space-between', fontSize:12 }}>
                <span style={{ color:'var(--ink-3)' }}>Próxima edición</span>
                <span>Febrero 2026</span>
              </div>
            </div>
            <div style={{ background:'var(--ink)', color:'var(--cream)', borderRadius: 14, padding: 18 }}>
              <div className="kw-eyebrow" style={{ color:'var(--ochre)' }}>Esta semana</div>
              <div style={{ fontFamily:'var(--serif)', fontSize: 22, marginTop: 6 }}>Meditación guiada</div>
              <div style={{ fontSize: 12, opacity: 0.7, marginTop: 6 }}>Lunes · 20:00 · Presencial + Online</div>
              <button className="kw-btn" style={{ background:'var(--terracotta)', color:'var(--ink)', marginTop: 14, padding:'10px 16px', fontSize:12 }}>
                Confirmar por WhatsApp <IconArrow size={12} />
              </button>
            </div>
          </div>
        </div>

        <div>
          <KwOverline>Botones · Pills</KwOverline>
          <div style={{ display:'flex', gap: 10, flexWrap:'wrap', marginTop: 14 }}>
            <button className="kw-btn primary">Primera vez aquí <IconArrow size={12} color="var(--cream)" /></button>
            <button className="kw-btn dark">Ver actividades</button>
            <button className="kw-btn ghost">Más información</button>
            <button className="kw-btn primary" style={{ background:'#25D366' }}><IconWA size={14} color="var(--cream)" /> WhatsApp</button>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div style={{ display:'flex', flexDirection:'column', gap: 24 }}>
        <div className="kw-card" style={{ padding: 28 }}>
          <KwOverline>Tipografía</KwOverline>
          <DsTypeSpec family="Fraunces · serif" sample="Calmar la mente" size="56" weight="400" use="H1 · Display" />
          <DsTypeSpec family="Fraunces · serif" sample="Estudio del Dharma en Guadalajara" size="34" weight="400" use="H2 · Título" />
          <DsTypeSpec family="Inter · sans" sample="Un espacio para meditar y estudiar el budismo tibetano — abierto a todos." size="16" weight="400" use="Body" />
          <DsTypeSpec family="Inter · sans" sample="Programa · Nivel intermedio · 10 módulos" size="13" weight="500" use="Meta" />
          <DsTypeSpec family="JetBrains Mono" sample="01 · EMPIEZA AQUÍ" size="11" weight="500" use="Eyebrow" />
        </div>

        {/* Imagery strategy */}
        <div className="kw-card" style={{ padding: 24 }}>
          <KwOverline>Imagen · fotografía real del centro</KwOverline>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 10, marginTop: 12 }}>
            <KwPh label="foto · sesión de meditación" h={100} />
            <KwPh label="foto · ven. norbu" h={100} tone="ink" />
            <KwPh label="foto · biblioteca · libros" h={100} tone="clay" />
            <KwPh label="foto · espacio exterior" h={100} />
          </div>
          <div style={{ fontSize: 12, color:'var(--ink-3)', marginTop: 12, lineHeight: 1.5 }}>
            Placeholders rayados con etiqueta monospace → en producción, fotos reales del centro.
            Nunca stock genérico (budas, flores de loto ilustradas, montañas nevadas).
          </div>
        </div>

        {/* Spacing & grid */}
        <div className="kw-card" style={{ padding: 24 }}>
          <KwOverline>Espaciado & radios</KwOverline>
          <div style={{ display:'flex', alignItems:'flex-end', gap: 8, marginTop: 14, height: 56 }}>
            {[4,8,12,16,24,32,48,64].map(n => (
              <div key={n} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:6 }}>
                <div style={{ width: n, background:'var(--clay)', height: n }} />
                <span style={{ fontFamily:'var(--mono)', fontSize:9, color:'var(--ink-3)' }}>{n}</span>
              </div>
            ))}
          </div>
          <div style={{ display:'flex', gap: 12, marginTop: 18 }}>
            {[4,8,14,22].map(r => (
              <div key={r} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:6 }}>
                <div style={{ width: 46, height: 46, background:'var(--paper-3)', borderRadius: r }} />
                <span style={{ fontFamily:'var(--mono)', fontSize:9, color:'var(--ink-3)' }}>r·{r}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Motif */}
        <div style={{
          background:'var(--ink)', color:'var(--cream)', borderRadius: 14, padding: 28,
          display:'flex', alignItems:'center', gap: 20
        }}>
          <KwMark size={48} color="var(--ochre)" />
          <div>
            <div className="kw-eyebrow" style={{ color:'var(--ochre)' }}>Motivo gráfico</div>
            <div style={{ fontFamily:'var(--serif)', fontSize: 20, marginTop: 4 }}>Rombo concéntrico</div>
            <div style={{ fontSize: 12, opacity: 0.7, marginTop: 4, maxWidth: 280 }}>
              Forma geométrica abstracta · separadores, bullets, marcadores de sección. No iconografía sagrada.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { DesignSystemCard });
