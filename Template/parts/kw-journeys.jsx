// kw-journeys.jsx — Three user journeys: El Curioso, El Practicante, La Comunidad

const JOURNEYS = [
  {
    id: 'curioso',
    name: 'El Curioso',
    age: '25 – 35',
    color: 'var(--terracotta)',
    bg: '#FBF3E8',
    q: '"¿Puedo ir aunque no sé nada y no soy budista?"',
    channel: 'Instagram · Google · WhatsApp',
    goal: 'De primer contacto a primera sesión en 72h',
    stages: [
      { t: 'Descubrimiento', sub: 'Instagram / Google', do: 'Ve un post o busca "meditación Guadalajara"', feel: 'Curiosidad + incertidumbre', kw: 'Post IG con CTA claro · top 3 Google Maps' },
      { t: 'Primera visita', sub: 'Homepage', do: 'Evalúa si es para él/ella', feel: '10s para entender o se va', kw: 'Hero: "No necesitas experiencia" · botón Empieza aquí' },
      { t: 'Exploración', sub: '/empieza-aqui', do: 'Lee FAQ · mira horarios', feel: 'Alivio al ver sin requisitos', kw: 'FAQ 8 preguntas · CTA WhatsApp prellenado' },
      { t: 'Primer contacto', sub: 'WhatsApp', do: 'Envía mensaje', feel: 'Nervioso pero comprometido', kw: 'Respuesta < 2h · tono cálido, sin jargón' },
      { t: 'Primera visita física', sub: 'Centro', do: 'Asiste a meditación abierta', feel: 'Vulnerable · observa bienvenida', kw: 'Nadie pregunta si es budista · invitación al próximo' },
      { t: 'Regreso', sub: 'IG + newsletter', do: 'Vuelve al centro', feel: '"Esto me hace bien"', kw: 'Newsletter con reflexión · comunidad visible' },
      { t: 'Conversión', sub: 'Inscripción', do: 'Se inscribe a un curso', feel: 'Ya es parte de la comunidad', kw: 'Formulario simple · donativo transparente' },
    ],
  },
  {
    id: 'practicante',
    name: 'El Practicante',
    age: '35 – 50',
    color: 'var(--clay)',
    bg: '#F4E7DE',
    q: '"¿Tiene la profundidad que busco? ¿Los maestros son calificados?"',
    channel: 'Google · Directorio FPMT · Referencia',
    goal: 'Reconocer seriedad y linaje → programa estructurado',
    stages: [
      { t: 'Búsqueda activa', sub: 'Google · FPMT.org', do: 'Busca "FPMT México", "budismo tibetano GDL"', feel: 'Evaluador · busca linaje', kw: 'Aparecer en directorio FPMT · SEO local' },
      { t: 'Evaluación', sub: 'Maestros + Programas', do: 'Lee bios · revisa programas', feel: 'Crítico · busca credenciales', kw: 'Bio completa de Ven. Norbu · 14 módulos visibles' },
      { t: 'Validación', sub: 'FPMT.org externo', do: 'Verifica afiliación', feel: 'Si cuadra, decisión tomada', kw: 'Badge FPMT · 20+ años de trayectoria' },
      { t: 'Primer contacto', sub: 'WhatsApp · email', do: 'Pregunta por próximo curso', feel: 'Interesado · preguntas específicas', kw: 'Respuesta detallada, de par a par' },
      { t: 'Primera asistencia', sub: 'Clase / retiro', do: 'Asiste a Explorando o Programa Básico', feel: 'Evalúa calidad del maestro', kw: 'La enseñanza retiene — el sitio solo preparó' },
      { t: 'Inscripción formal', sub: 'Programa FPMT', do: 'Se inscribe al programa de nivel', feel: 'Parte del Sangha', kw: 'Certificación FPMT visible como meta' },
    ],
  },
  {
    id: 'comunidad',
    name: 'La Comunidad',
    age: '50 +',
    color: 'var(--moss)',
    bg: '#EBE9DC',
    q: '"¿Cómo me mantengo conectado y cómo apoyo al centro?"',
    channel: 'Directo · Newsletter · Grupo WhatsApp',
    goal: 'Retención, donación y evangelización',
    stages: [
      { t: 'Consulta habitual', sub: 'Sitio · WhatsApp', do: 'Revisa calendario del mes', feel: 'Fidelizado · solo necesita info', kw: '"Este mes en el centro" siempre actualizado' },
      { t: 'Participación', sub: 'Presencial · Zoom', do: 'Asiste a clases, pujas, retiros', feel: 'Pertenencia · sostén', kw: 'Horarios correctos · modalidad clara' },
      { t: 'Contribución', sub: '/donar', do: 'Hace donativo o apoyo mensual', feel: 'Quiere apoyar · mecanismo fácil', kw: 'Relato de la misión · SPEI + MercadoPago' },
      { t: 'Evangelización', sub: 'Redes personales', do: 'Comparte contenido con su red', feel: 'Embajador natural', kw: 'Contenido compartible · botón "Comparte"' },
      { t: 'Recursos', sub: 'Sitio · newsletter', do: 'Accede a oraciones, calendario tibetano', feel: 'Profundiza en casa', kw: 'Biblioteca · calendario budista · guías' },
    ],
  },
];

function JourneyCard({ j, width = 390 }) {
  return (
    <div style={{
      width, background: j.bg, borderRadius: 16, padding: 24,
      display:'flex', flexDirection:'column', gap: 18,
      border:'1px solid rgba(42,38,34,0.08)'
    }}>
      <div style={{ display:'flex', alignItems:'center', gap: 10 }}>
        <div style={{ width: 10, height: 10, borderRadius: 10, background: j.color }} />
        <span className="kw-overline">Perfil · {j.age}</span>
      </div>
      <div>
        <div className="kw-display" style={{ fontSize: 34, color: j.color }}>{j.name}</div>
        <div style={{ fontFamily:'var(--serif)', fontStyle:'italic', fontSize: 15, color:'var(--ink-2)', marginTop: 8, lineHeight: 1.4 }}>
          {j.q}
        </div>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'auto 1fr', rowGap: 6, columnGap: 12, fontSize: 12 }}>
        <span style={{ color:'var(--ink-3)' }}>Canal</span>
        <span style={{ color:'var(--ink)' }}>{j.channel}</span>
        <span style={{ color:'var(--ink-3)' }}>Objetivo</span>
        <span style={{ color:'var(--ink)' }}>{j.goal}</span>
      </div>

      <hr className="kw-rule" />

      {/* Stages — vertical */}
      <div style={{ display:'flex', flexDirection:'column', gap: 0 }}>
        {j.stages.map((s, i) => (
          <div key={i} style={{ display:'grid', gridTemplateColumns:'auto 1fr', columnGap: 14, paddingBlock: 14, borderTop: i === 0 ? 'none' : '1px dashed rgba(42,38,34,0.12)' }}>
            {/* Timeline rail */}
            <div style={{ display:'flex', flexDirection:'column', alignItems:'center', position:'relative' }}>
              <div style={{ fontFamily:'var(--mono)', fontSize: 10, color: j.color, letterSpacing:'0.08em' }}>
                {String(i+1).padStart(2,'0')}
              </div>
              <div style={{ width: 8, height: 8, borderRadius: 8, background: j.color, marginTop: 6 }} />
              {i < j.stages.length - 1 && (
                <div style={{ width: 1, background: j.color, opacity: 0.35, flex: 1, marginTop: 6 }} />
              )}
            </div>
            <div>
              <div style={{ display:'flex', alignItems:'baseline', gap: 10, flexWrap:'wrap' }}>
                <span style={{ fontFamily:'var(--serif)', fontSize: 18, color:'var(--ink)' }}>{s.t}</span>
                <span style={{ fontFamily:'var(--mono)', fontSize: 10, color:'var(--ink-3)', letterSpacing:'0.06em' }}>{s.sub}</span>
              </div>
              <div style={{ fontSize: 12.5, color:'var(--ink-2)', marginTop: 4, lineHeight: 1.5 }}>{s.do}</div>
              <div style={{ fontSize: 11.5, fontStyle:'italic', color:'var(--ink-3)', marginTop: 3 }}>
                Siente · {s.feel}
              </div>
              <div style={{
                marginTop: 8, padding: '8px 10px',
                background: 'rgba(255,255,255,0.55)',
                borderLeft: `2px solid ${j.color}`,
                fontSize: 11.5, color:'var(--ink)', lineHeight: 1.5
              }}>
                {s.kw}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function JourneysBoard() {
  return (
    <div style={{
      width: 1320, background: 'var(--paper)', padding: 48,
      display:'flex', flexDirection:'column', gap: 28
    }}>
      <div>
        <KwEyebrow>User Journeys · Tres perfiles</KwEyebrow>
        <div className="kw-display" style={{ fontSize: 48, marginTop: 8 }}>
          Diseñar para los tres caminos<br/>
          <em style={{ fontStyle:'italic', color:'var(--clay)' }}>— no para nadie en particular.</em>
        </div>
        <p style={{ fontSize: 14, color:'var(--ink-2)', maxWidth: 680, marginTop: 12, lineHeight: 1.55 }}>
          Cada perfil llega con un miedo distinto y una pregunta distinta. El sitio, WhatsApp y redes
          deben responder <em>esa pregunta</em> primero — no la historia institucional del centro.
        </p>
      </div>

      <div style={{ display:'flex', gap: 20, alignItems:'flex-start' }}>
        {JOURNEYS.map(j => <JourneyCard key={j.id} j={j} />)}
      </div>

      {/* Friction table */}
      <div style={{ marginTop: 12, background:'var(--cream)', borderRadius: 14, padding: 28, border:'1px solid var(--line)' }}>
        <KwOverline>Puntos de fricción críticos · El Curioso</KwOverline>
        <div style={{ display:'grid', gridTemplateColumns:'40px 1fr 1.2fr', gap: 0, marginTop: 14 }}>
          {[
            ['01','Hero sin propuesta clara','"Meditación guiada en Guadalajara. Sin experiencia previa. Abierto a todos."'],
            ['02','No hay página "Empieza aquí"','Página /empieza-aqui con 8 preguntas frecuentes del principiante'],
            ['03','WhatsApp solo en el footer','Botón flotante + CTA al final de cada página con mensaje prellenado'],
            ['04','Fechas y horarios no visibles','"Esta semana en el centro" en la homepage, actualizada semanalmente'],
            ['05','Respuesta lenta por WhatsApp','Máximo 2h en horario hábil · auto-respuesta fuera de horario'],
          ].map(([n,p,s], i) => (
            <React.Fragment key={i}>
              <div style={{ fontFamily:'var(--mono)', fontSize:10, color:'var(--clay)', padding:'14px 0', letterSpacing:'0.08em', borderTop: i===0?'none':'1px solid var(--line)' }}>{n}</div>
              <div style={{ fontSize: 13, color:'var(--ink)', padding:'14px 18px 14px 0', borderTop: i===0?'none':'1px solid var(--line)' }}>{p}</div>
              <div style={{ fontSize: 13, color:'var(--ink-2)', padding:'14px 0', borderTop: i===0?'none':'1px solid var(--line)' }}>→ {s}</div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { JourneysBoard });
