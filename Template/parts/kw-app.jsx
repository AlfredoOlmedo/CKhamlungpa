// kw-app.jsx — top-level canvas composition

const KW_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "clay",
  "serifFamily": "Fraunces",
  "tone": "calido"
}/*EDITMODE-END*/;

function App() {
  const [tw, setTw] = useTweaks(KW_TWEAK_DEFAULTS);

  // Apply palette tweak live
  React.useEffect(() => {
    const root = document.documentElement;
    const palettes = {
      clay:    { clay:'#8B2E1F', clay2:'#A94430', terracotta:'#C97B4A', ochre:'#D4A35A', paper:'#F4ECE0', cream:'#FBF7EF', ink:'#2A2622' },
      stone:   { clay:'#1F2B36', clay2:'#2E3D4A', terracotta:'#B8733A', ochre:'#9E9685', paper:'#FAF7F2', cream:'#FFFCF7', ink:'#1A1A1A' },
      amber:   { clay:'#6B2D1C', clay2:'#874030', terracotta:'#D4A559', ochre:'#E6C17C', paper:'#FFFBF4', cream:'#FFFEF9', ink:'#3E3A32' },
      forest:  { clay:'#2F4A3A', clay2:'#3E5A4A', terracotta:'#B84A2C', ochre:'#C9A05A', paper:'#F2EDE4', cream:'#FBF8F1', ink:'#252922' },
    };
    const p = palettes[tw.palette] || palettes.clay;
    root.style.setProperty('--clay', p.clay);
    root.style.setProperty('--clay-2', p.clay2);
    root.style.setProperty('--terracotta', p.terracotta);
    root.style.setProperty('--ochre', p.ochre);
    root.style.setProperty('--paper', p.paper);
    root.style.setProperty('--cream', p.cream);
    root.style.setProperty('--ink', p.ink);

    const serif = { Fraunces: 'Fraunces, serif', Cormorant: '"Cormorant Garamond", Georgia, serif', Source: '"Source Serif 4", Georgia, serif' };
    root.style.setProperty('--serif', serif[tw.serifFamily] || serif.Fraunces);
  }, [tw.palette, tw.serifFamily]);

  // Load Cormorant / Source Serif lazily when selected
  React.useEffect(() => {
    if (tw.serifFamily !== 'Fraunces' && !document.getElementById('kw-extra-fonts')) {
      const l = document.createElement('link');
      l.id = 'kw-extra-fonts';
      l.rel = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=Source+Serif+4:ital,wght@0,400;0,500;1,400&display=swap';
      document.head.appendChild(l);
    }
  }, [tw.serifFamily]);

  return (
    <>
      <DesignCanvas>
        {/* INTRO */}
        <DCSection id="intro" title="Khamlungpa · Sistema Digital" subtitle="Canvas completo — tokens, journeys, ecosistema, sitemap, prototipo web, social, roadmap. Navega con scroll del canvas; clic en cualquier artboard para enfocarlo.">
          <DCArtboard id="cover" label="00 · Portada" width={1320} height={620}>
            <div style={{ background:'var(--paper)', width:'100%', height:'100%', padding: 64, display:'flex', flexDirection:'column', justifyContent:'space-between', position:'relative', overflow:'hidden' }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
                <div style={{ display:'flex', alignItems:'center', gap: 16 }}>
                  <KwMark size={38} color="var(--clay)" />
                  <div>
                    <div style={{ fontFamily:'var(--serif)', fontSize: 30 }}>Centro Khamlungpa</div>
                    <div className="kw-eyebrow" style={{ marginTop: 4 }}>FPMT · Guadalajara · Desde 2003</div>
                  </div>
                </div>
                <div className="kw-overline" style={{ textAlign:'right' }}>Sistema Digital v1.0<br/>Abril 2026</div>
              </div>
              <div>
                <div className="kw-display" style={{ fontSize: 120, letterSpacing:'-0.035em', lineHeight: 0.95 }}>
                  Calmar la mente,<br/>
                  estudiar el Dharma,<br/>
                  <em style={{ fontStyle:'italic', color:'var(--clay)' }}>cultivar compasión.</em>
                </div>
                <p style={{ fontSize: 17, color:'var(--ink-2)', marginTop: 28, maxWidth: 720, lineHeight: 1.55 }}>
                  Un sistema de diseño, tres user journeys, un ecosistema digital coherente, y un plan estratégico
                  para transformar khamlungpa.com en una puerta de entrada viva al Dharma en Guadalajara.
                </p>
              </div>
              <div style={{ display:'flex', gap: 18, fontFamily:'var(--mono)', fontSize: 10, color:'var(--ink-3)', letterSpacing:'0.08em' }}>
                <span>01 SISTEMA</span>
                <span>02 JOURNEYS</span>
                <span>03 ECOSISTEMA</span>
                <span>04 SITEMAP</span>
                <span>05 PROTOTIPO</span>
                <span>06 MOBILE</span>
                <span>07 SOCIAL</span>
                <span>08 ROADMAP</span>
              </div>
            </div>
          </DCArtboard>
        </DCSection>

        {/* 01 SYSTEM */}
        <DCSection id="system" title="01 · Design System" subtitle="Tokens, paleta, tipografía, superficies y motivo gráfico. Warm paper & clay — editorial, cálido, contemplativo.">
          <DCArtboard id="ds" label="Design System v1" width={1240} height={980}>
            <DesignSystemCard />
          </DCArtboard>
        </DCSection>

        {/* 02 JOURNEYS */}
        <DCSection id="journeys" title="02 · Tres User Journeys" subtitle="El Curioso, El Practicante, La Comunidad — cada perfil con su pregunta, sus miedos, y el camino que el sistema debe acompañar.">
          <DCArtboard id="jb" label="Journeys · paralelos" width={1320} height={1640}>
            <JourneysBoard />
          </DCArtboard>
        </DCSection>

        {/* 03 ECOSYSTEM */}
        <DCSection id="eco" title="03 · Ecosistema Digital" subtitle="Sitio como hub · Instagram atrae · WhatsApp cierra · Newsletter retiene.">
          <DCArtboard id="ecomap" label="Mapa radial + flujos" width={1320} height={800}>
            <EcosystemMap />
          </DCArtboard>
        </DCSection>

        {/* 04 SITEMAP */}
        <DCSection id="sitemap" title="04 · Arquitectura del sitio" subtitle="17 páginas, tres caminos de lectura, una ruta de estudios visible.">
          <DCArtboard id="map" label="Sitemap" width={1320} height={820}>
            <SitemapBoard />
          </DCArtboard>
        </DCSection>

        {/* 05 PROTOTIPO DESKTOP */}
        <DCSection id="desktop" title="05 · Prototipo del sitio · Desktop" subtitle="Ocho pantallas clave en navegador. Abre cualquiera en pantalla completa para revisarla con detalle.">
          <DCArtboard id="home" label="Home" width={1320} height={2540}>
            <ChromeWindow url="khamlungpa.com" title="Centro Khamlungpa">
              <ScreenHome />
            </ChromeWindow>
          </DCArtboard>
          <DCArtboard id="start" label="Empieza aquí" width={1320} height={1560}>
            <ChromeWindow url="khamlungpa.com/empieza-aqui" title="Empieza aquí · Khamlungpa">
              <ScreenStart />
            </ChromeWindow>
          </DCArtboard>
          <DCArtboard id="progs" label="Programas" width={1320} height={1180}>
            <ChromeWindow url="khamlungpa.com/programas" title="Programas · Khamlungpa">
              <ScreenPrograms />
            </ChromeWindow>
          </DCArtboard>
          <DCArtboard id="progdet" label="Ficha · Descubre el Budismo" width={1320} height={1560}>
            <ChromeWindow url="khamlungpa.com/programa/descubre" title="Descubre el Budismo · Khamlungpa">
              <ScreenProgramDetail />
            </ChromeWindow>
          </DCArtboard>
          <DCArtboard id="teach" label="Maestros" width={1320} height={1220}>
            <ChromeWindow url="khamlungpa.com/maestros" title="Maestros · Khamlungpa">
              <ScreenTeachers />
            </ChromeWindow>
          </DCArtboard>
          <DCArtboard id="cal" label="Calendario" width={1320} height={1220}>
            <ChromeWindow url="khamlungpa.com/calendario" title="Calendario · Khamlungpa">
              <ScreenCalendar />
            </ChromeWindow>
          </DCArtboard>
          <DCArtboard id="don" label="Donar" width={1320} height={1240}>
            <ChromeWindow url="khamlungpa.com/donar" title="Donar · Khamlungpa">
              <ScreenDonate />
            </ChromeWindow>
          </DCArtboard>
          <DCArtboard id="con" label="Contacto" width={1320} height={1060}>
            <ChromeWindow url="khamlungpa.com/contacto" title="Contacto · Khamlungpa">
              <ScreenContact />
            </ChromeWindow>
          </DCArtboard>
        </DCSection>

        {/* 06 MOBILE */}
        <DCSection id="mobile" title="06 · Prototipo · Mobile" subtitle="+70% del tráfico llega por celular. Cada pantalla diseñada con pulgar-primero.">
          <DCArtboard id="mh" label="Mobile · Home" width={400} height={840}>
            <IOSDevice><MobileHome /></IOSDevice>
          </DCArtboard>
          <DCArtboard id="ms" label="Mobile · Empieza aquí" width={400} height={840}>
            <IOSDevice><MobileStart /></IOSDevice>
          </DCArtboard>
          <DCArtboard id="mp" label="Mobile · Programa" width={400} height={840}>
            <IOSDevice><MobileProgram /></IOSDevice>
          </DCArtboard>
        </DCSection>

        {/* 07 SOCIAL */}
        <DCSection id="social" title="07 · WhatsApp, Instagram, Newsletter" subtitle="Piezas digitales que refuerzan al sitio — con protocolo de respuesta y pilares de contenido.">
          <DCArtboard id="sb" label="Activaciones digitales" width={1320} height={1180}>
            <SocialBoard />
          </DCArtboard>
        </DCSection>

        {/* 08 ROADMAP */}
        <DCSection id="roadmap" title="08 · Plan estratégico · 6 meses" subtitle="Cuatro fases ordenadas por impacto. Quick wins primero — no requieren rediseño.">
          <DCArtboard id="rm" label="Roadmap + KPIs" width={1320} height={1040}>
            <RoadmapBoard />
          </DCArtboard>
        </DCSection>

        {/* Post-its */}
        <DCPostIt x={60} y={260} w={200}>
          Hola 👋 Este es el canvas completo. Scroll para navegar · clic en el ícono ⤢ sobre cualquier artboard para enfocarlo a pantalla completa.
        </DCPostIt>
        <DCPostIt x={60} y={460} w={210}>
          Activa Tweaks (barra superior) para probar paletas de color alternativas y familias tipográficas serif.
        </DCPostIt>
      </DesignCanvas>

      {/* Tweaks panel */}
      <TweaksPanel title="Tweaks">
        <TweakSection title="Paleta">
          <TweakRadio
            keyName="palette"
            value={tw.palette}
            onChange={v => setTw({ palette: v })}
            options={[
              { value:'clay',   label:'Clay · por defecto' },
              { value:'stone',  label:'Stone · frío' },
              { value:'amber',  label:'Amber · cálido dorado' },
              { value:'forest', label:'Forest · verde mineral' },
            ]}
          />
        </TweakSection>
        <TweakSection title="Tipografía serif">
          <TweakRadio
            keyName="serifFamily"
            value={tw.serifFamily}
            onChange={v => setTw({ serifFamily: v })}
            options={[
              { value:'Fraunces',  label:'Fraunces · característica' },
              { value:'Cormorant', label:'Cormorant · clásica' },
              { value:'Source',    label:'Source Serif · neutra' },
            ]}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
