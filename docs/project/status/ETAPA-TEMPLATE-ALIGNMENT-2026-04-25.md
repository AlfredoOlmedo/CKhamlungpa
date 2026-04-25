# ETAPA: Template Alignment + Refactor Estructural

**Fecha de cierre**: 25 de abril de 2026  
**Estado**: ✅ COMPLETADA  
**Alcance**: Páginas raíz del sitio estático (`*.html`)

## Objetivo
Alinear el sitio funcional en raíz con el look & feel de `Template/`, consolidar estructura de proyecto, normalizar navegación/footer/modales y reducir ruido técnico (CSS/JS inline).

## Cambios implementados

### 1) Alineación visual con Template
- Se creó una capa visual global: `assets/css/template-alignment.css`.
- Se unificó comportamiento visual de:
  - Header sticky con blur
  - Navbar responsive
  - Footer multi-columna con mapa
  - Modal eBook global

### 2) Branding (logo real)
- Se reemplazó el isotipo SVG temporal por el logo real:
  - `./assets/images/CKLogo.png`
- Se removió el texto "Khamlungpa" en marca superior.
- Se dejó únicamente la línea institucional debajo del logo:
  - `FPMT · GUADALAJARA · DESDE 2003`
- Se ajustó alineación para centrar texto respecto al logo.

### 3) eBook en modal (navbar)
- El CTA `Descarga tu eBook` abre modal embebido con Google Form.
- Se eliminó código legado de modales duplicados.
- Se estandarizó en todas las páginas raíz.

### 4) Footer unificado
- Se mantuvieron secciones solicitadas:
  - Centro
  - Nuestro Entorno
  - Síguenos en
  - Afiliados a
  - Ubicación en Maps
- Ajustes solicitados aplicados:
  - `mailto:info@khamlungpa.com`
  - Instagram: `https://www.instagram.com/khamlungpa/`
  - Calendario FPMT: `https://fpmt.org/media/resources/dharma-dates/`

### 5) Refactor de estructura
- Se creó alias funcional `home.html` que redirige a `index.html`.
- Se modularizó CSS por página:
  - `assets/css/pages/*.css`
- Se modularizó JS por página:
  - `assets/js/pages/*.js`
- Se dejó script compartido para lógica transversal:
  - `assets/js/site-shared.js`

### 6) Contenido
- Se actualizó copy del bloque newsletter:
  - De: "Calendario del mes, una enseñanza breve..."
  - A: "Una enseñanza y un recurso gratuito para tu práctica..."

## Archivos clave agregados
- `assets/css/template-alignment.css`
- `assets/css/pages/*.css`
- `assets/js/site-shared.js`
- `assets/js/pages/*.js`
- `home.html`

## Resultado
- Sitio raíz funcional + visualmente alineado a Template.
- Menor duplicación de código.
- Base más mantenible para próximas etapas (contenido, SEO, despliegue, QA visual completo).

## Pendientes sugeridos (siguiente etapa)
1. QA visual manual por breakpoint (`360 / 768 / 1366 / 1920`).
2. Consolidar tokens repetidos en una capa CSS base adicional.
3. Ejecutar validación HTML con `html-validate` en entorno donde esté instalado.
