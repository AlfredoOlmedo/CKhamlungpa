# Centro Khamlungpa Digital — Sistema Web Completo

**Proyecto**: Rediseño digital integral del sitio web y ecosistema digital  
**Organización**: Centro Khamlungpa (FPMT Guadalajara)  
**Versión**: 1.0  
**Estatus**: 🟡 FASE 1 — Iniciando  
**Fecha**: 25 de abril de 2026

---

## 📍 Quick Navigation

**¿Dónde está qué?**

| Necesito... | Ir a... | Propósito |
|------------|---------|-----------|
| Entender el proyecto | [README.md](README.md) (este archivo) | Visión general + navegación |
| Ver el plan de trabajo | [PROGRESS.md](PROGRESS.md) | Kanban detallado por fase |
| Ver tareas específicas | [KANBAN.md](KANBAN.md) | Backlog + TO DO + IN PROGRESS |
| Entender la estrategia | [docs/PLAN.md](docs/PLAN.md) | 4 fases con tareas y tiempos |
| Entender los usuarios | [docs/CUSTOMER-JOURNEY-STRATEGY.md](docs/CUSTOMER-JOURNEY-STRATEGY.md) | Los 3 perfiles + journeys |
| Setup técnico | [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md) | Cómo empezar a desarrollar |
| SEO & Indexación IA | [SEO.md](SEO.md) | Robots.txt, sitemap, JSON-LD, ai-instructions |
| Auditoría & benchmarking | [plan_estrategico.txt](plan_estrategico.txt) | Análisis completo (Fuente de Verdad) |
| Diseño de experiencia | [user_journey.txt](user_journey.txt) | Journeys + tácticas (Fuente de Verdad) |
| Ver el sitio | [Template/](Template/) | Prototipos HTML funcionales |

---

## 🎯 Qué Es Este Proyecto

**Centro Khamlungpa** es el único centro FPMT activo en Guadalajara (20+ años, maestros certificados, programas profundos de budismo tibetano).

**Problema**: Su sitio web actual funciona como un folleto estático. No clarifica para quién es, no guía a visitantes nuevos, no convierte contactos, no retiene comunidad.

**Solución**: Rediseño completo de la experiencia digital con:
- ✅ Nuevo sitio web en [Template/Khamlungpa Home.html](Template/Khamlungpa%20Home.html) (System Design)
- ✅ 3 perfiles de visitante claramente servidos (El Curioso, El Practicante, La Comunidad)
- ✅ Integración WhatsApp como canal de conversión
- ✅ Newsletter como mecanismo de retención
- ✅ Blog de SEO local ("meditación Guadalajara", "budismo tibetano Guadalajara")
- ✅ YouTube + comunidad privada para retención

**Resultado esperado (6 meses)**:
- 1,200 usuarios únicos/mes
- 400+ newsletter subscribers
- 80+ program sign-ups/mes
- 65%+ retención de comunidad
- $500+ donativos/mes

---

## 🎨 El Sistema de Diseño

El nuevo sitio está basado en un **System Design** coherente:

**Paleta**:
- Paper (fondo cálido): `#F4ECE0`
- Ink (texto): `#2A2622`
- Clay (acento principal): `#8B2E1F` (resonante con Gelugpa, sin copiar marca)
- Terracotta (secundario): `#C97B4A`

**Tipografía**:
- Display: Fraunces (serif)
- Body: Inter (sans)
- Code/Labels: JetBrains Mono

**Componentes**:
- Botones (primary, ghost, dark, WhatsApp)
- Cards (path, program, testimonial)
- Tabla (Esta semana)
- Carrusel (testimonios)
- Modal (WhatsApp + newsletter)

**Archivo de referencia**: [Template/Khamlungpa Sistema Digital.html](Template/Khamlungpa%20Sistema%20Digital.html)

---

## 🗂️ Estructura de Carpetas

```
Khamlungpa-2026/
│
├── README.md                           # Este archivo (visión general)
├── PROGRESS.md                         # Kanban detallado por fase ⭐ LEER PRIMERO
├── KANBAN.md                           # Tablero visual de tareas
│
├── plan_estrategico.txt                # ⭐ FUENTE DE VERDAD #1
│                                       # Auditoría técnica, benchmarking, 12 errores críticos
│
├── user_journey.txt                    # ⭐ FUENTE DE VERDAD #2
│                                       # 3 perfiles, journeys, tácticas por canal
│
├── docs/                               # Documentación derivada
│   ├── README.md                       # Índice de documentos por rol
│   ├── PLAN.md                         # Plan de 4 fases (derivado de plan_estrategico.txt)
│   ├── DEVELOPMENT.md                  # Guía técnica para developers
│   ├── CUSTOMER-JOURNEY-STRATEGY.md    # Deep dive en perfiles (derivado de user_journey.txt)
│   └── Nota.md                         # Archivo archivado
│
├── Template/                           # 🎨 SISTEMA DE DISEÑO (la web nueva)
│   ├── Khamlungpa Home.html            # Landing page interactivo ⭐ PROTOTIPO BASE
│   ├── Khamlungpa Sistema Digital.html # Canvas explorable (8 secciones)
│   ├── Khamlungpa Documentación.html   # Guía del design system
│   ├── parts/                          # Componentes JSX (especificaciones)
│   │   ├── kw-shared.jsx               # Tokens, colores, fuentes
│   │   ├── kw-designsystem.jsx
│   │   ├── kw-journeys.jsx
│   │   ├── kw-ecosystem.jsx
│   │   ├── kw-sitemap.jsx
│   │   ├── kw-site-desktop.jsx
│   │   ├── kw-site-mobile.jsx
│   │   ├── kw-social.jsx
│   │   ├── kw-roadmap.jsx
│   │   └── kw-app.jsx
│   ├── design-canvas.jsx               # Starters
│   ├── browser-window.jsx
│   ├── ios-frame.jsx
│   └── tweaks-panel.jsx
│
└── .gitignore                          # Ignorar node_modules, .env, etc.
```

---

## 📊 Estado del Proyecto

### FASE 1: Correcciones Inmediatas (1-2 semanas)
**Estado**: 🔴 No iniciado  
**Duración**: 25 abr - 2 may 2026  
**Objetivo**: 3 páginas core + setup técnico  

**Tareas principales**:
- [ ] Crear `Empieza-aqui.html` (3h) — FAQ para El Curioso
- [ ] Crear `Donar.html` (3h) — Página de donación
- [ ] Crear `Maestros.html` (3h) — Perfiles de Ven. Norbu y Gueshe
- [ ] Setup Google Workspace (Gmail + Google Forms) (1.5h) — Newsletter
- [ ] Setup WhatsApp helper (2h) — Botón flotante + mensajes
- [ ] Validaciones + tests (4h)

**Hito**: 3 páginas funcionales en staging

**Ver detalle**: [PROGRESS.md](PROGRESS.md) sección FASE 1

---

### FASE 2: Mejoras de Conversión (2-4 semanas)
**Estado**: ⏳ En espera  
**Duración**: 5-16 may 2026  
**Objetivo**: Sistema de conversión completo  

**Tareas principales**:
- [ ] Integración WhatsApp Business API
- [ ] Botón flotante + mensajes prellenados
- [ ] Newsletter signup en producción
- [ ] Google Business Profile optimizado
- [ ] Sitemap.xml + Search Console

**Hito**: MVP en producción con conversión

**Ver detalle**: [PROGRESS.md](PROGRESS.md) sección FASE 2

---

### FASE 3: Rediseño UX/UI (1-2 meses)
**Estado**: ⏳ En espera  
**Duración**: 19-30 may 2026  
**Objetivo**: Sitio completo con todas las páginas  

**Páginas a crear**:
- `Programas.html` — Grid de 5 programas
- `Programa-budismo-pocas-palabras.html`
- `Programa-descubre-el-budismo.html` (14 módulos)
- `Programa-explorando-el-budismo.html` (10 módulos)
- `Programa-basico.html` (9 módulos, Programa Básico FPMT)
- `Calendario.html` — Eventos 2026
- `Comunidad.html` — Galería + testimonios
- `Contacto.html` — Info + mapa

**Hito**: Sitio V1 completo

**Ver detalle**: [PROGRESS.md](PROGRESS.md) sección FASE 3

---

### FASE 4: Contenido & Comunidad (3-6 meses)
**Estado**: ⏳ En espera  
**Duración**: 1-30 jun 2026 (continuado)  
**Objetivo**: Presencia orgánica sin publicidad paga  

**Iniciativas**:
- Blog `/recursos` con 8+ artículos SEO
- 1 video YouTube (meditación 15 min)
- 2 audios de meditación (lead magnets)
- Newsletter mensual
- Grupo WhatsApp de comunidad
- 4 posts Instagram/semana

**Hito**: Centro digital autónomo

**Ver detalle**: [PROGRESS.md](PROGRESS.md) sección FASE 4

---

## 👥 Los 3 Perfiles de Visitante

El sitio está diseñado para servir a **3 tipos de persona**:

### 1️⃣ **El Curioso** (25-35 años)
- Nunca meditó, descubrió por Instagram o Google
- **Pregunta**: "¿Puedo ir aunque no sé nada?"
- **Lo que necesita**: Claridad en homepage, página `/empieza-aqui`, botón WhatsApp
- **Journey**: Instagram → Homepage → /empieza-aqui → WhatsApp → Primera clase → Newsletter

### 2️⃣ **El Practicante** (35-50 años)
- Ya meditó, busca profundidad y linaje real
- **Pregunta**: "¿Tiene seriedad? ¿Maestros calificados?"
- **Lo que necesita**: Linaje FPMT claro, bios de maestros, programas detallados
- **Journey**: Google "FPMT México" → Sitio maestros → Programa Básico

### 3️⃣ **La Comunidad** (50+ años)
- Practicante comprometido, quiere apoyar
- **Pregunta**: "¿Cómo me mantengo conectado? ¿Cómo dono?"
- **Lo que necesita**: Calendario actualizado, página `/donar`, newsletter
- **Journey**: WhatsApp → Calendario → Asistencia → Donación → Newsletter

**Más detalles**: [docs/CUSTOMER-JOURNEY-STRATEGY.md](docs/CUSTOMER-JOURNEY-STRATEGY.md)

---

## 🚀 Cómo Empezar a Trabajar

### Para Desarrolladores
1. Lee [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md) — setup local
2. Revisa [PROGRESS.md](PROGRESS.md) — tasks asignadas a ti
3. Mira [Template/Khamlungpa Home.html](Template/Khamlungpa%20Home.html) — referencia de diseño
4. Copia la estructura HTML de Home al crear nuevas páginas

### Para Content Lead
1. Lee [docs/CUSTOMER-JOURNEY-STRATEGY.md](docs/CUSTOMER-JOURNEY-STRATEGY.md) — entiende los perfiles
2. Revisa [PROGRESS.md](PROGRESS.md) — tasks de contenido asignadas
3. Recolecta: fotos del centro, bios de maestros, testimonios reales
4. Escribe títulos + meta descriptions para cada página

### Para Product Owner
1. Lee [plan_estrategico.txt](plan_estrategico.txt) + [user_journey.txt](user_journey.txt) — contexto completo
2. Revisa [PROGRESS.md](PROGRESS.md) — estado por fase
3. Ejecuta daily standup (10am) + sprint reviews (viernes)
4. Resuelve bloqueadores

### Para Diseñador
1. Referencia: [Template/Khamlungpa Sistema Digital.html](Template/Khamlungpa%20Sistema%20Digital.html)
2. Paleta, tipografía y componentes ya definidos (no redefinir)
3. Assets nuevos: fotos reales, testimonios, galería
4. Review de Home.html + nuevas páginas antes de lanzar

---

## 📋 Checklist para Ir a Producción

### Antes de FASE 1
- [ ] Asignar roles (Frontend Dev, Content Lead, QA, etc.)
- [ ] Setup repo git + branches
- [ ] Recolectar contenido (fotos, bios, testimonios)
- [ ] Abrir issue tracker en GitHub

### Antes de Lanzar FASE 1
- [ ] 3 páginas core completadas
- [ ] HTML validado (sin errores)
- [ ] Lighthouse score >85
- [ ] Tests responsive (360px, 768px, 1920px)
- [ ] Code review pasado

### Antes de FASE 2
- [ ] FASE 1 100% completada
- [ ] Bloqueadores de WhatsApp resueltos
- [ ] Google Workspace configurado (Gmail + Google Forms + Google Sheets)
- [ ] Google Business verificado

### Antes de FASE 3
- [ ] FASE 2 100% completada
- [ ] 50+ WhatsApp messages/mes
- [ ] Newsletter >50 subscribers
- [ ] Fotos reales del centro
- [ ] Bios de maestros finalizadas

---

## 📈 KPIs de Éxito (6 meses)

| Métrica | Target | Herramienta |
|---------|--------|------------|
| Usuarios únicos/mes | 1,200 | GA4 |
| Newsletter subscribers | 400+ | Google Forms + Google Sheets |
| Program sign-ups/mes | 80+ | GA4 events |
| Retención comunidad | 65%+ | GA4 cohort |
| Donativos online/mes | $500+ | Stripe/MercadoPago |
| Posición "meditación Guadalajara" | Top 5 | Search Console |
| Posición "budismo tibetano Guadalajara" | Top 3 | Search Console |
| Lighthouse score | >85 | PageSpeed Insights |

---

## 🔗 Links Importantes

- **GitHub Repo**: [TBD]
- **Google Search Console**: [TBD]
- **Google Workspace**: [TBD]
- **Google Analytics GA4**: [TBD]
- **Google Business Profile**: [TBD]
- **Figma Design System**: [TBD]

---

## 📞 Comunicación & Reuniones

### Daily Standup (15 min)
**Cuándo**: 10am  
**Dónde**: [Zoom link TBD]  
**Quién**: Product Owner + Tech Lead + Devs + Content

### Sprint Planning (30 min)
**Cuándo**: Lunes 10am  
**Qué**: Mover BACKLOG → TO DO, asignar tareas

### Sprint Review (30 min)
**Cuándo**: Viernes 4pm  
**Qué**: Review de DONE, actualizar PROGRESS.md

---

## 📄 Documentos Fuente de Verdad

**Antes de cambiar cualquier cosa, revisa estos dos**:

1. **[plan_estrategico.txt](plan_estrategico.txt)** (549 líneas)
   - Auditoría técnica completa
   - 12 errores críticos
   - Benchmarking (Lion's Roar, FPMT, Tushita, Kadampa, Casa Tibet, etc.)
   - Stack tecnológico recomendado
   - KPIs a 6 meses

2. **[user_journey.txt](user_journey.txt)** (692 líneas)
   - Los 3 perfiles detallados
   - 5-7 etapas por journey
   - Fricción crítica + soluciones
   - Tácticas por canal (Instagram, WhatsApp, email, YouTube)
   - Ecosistema digital integrado

**Todos los documentos en `/docs` derivan de estos dos.**

---

## 🆘 Bloqueadores Conocidos

| Bloqueador | Impacto | Solución | Responsable |
|-----------|--------|----------|------------|
| Fotos reales del centro | ALTA | Sesión fotográfica | Content Lead |
| Bios de maestros | ALTA | Recolectar de Centro | Content Lead |
| Testimonios reales | MEDIA | Encuesta a practicantes | Community Mgr |
| WhatsApp Business API | ALTA | Solicitar a Meta | Tech Lead |
| Google Business acceso | MEDIA | Verificación de propiedad | Content Lead |
| YouTube channel | MEDIA | Crear cuenta | Content Lead |

---

## 📅 Timeline a Vuelo de Pájaro

```
┌─────────────────────────────────────────────────────────┐
│ ABRIL 2026                                              │
│ Sem 1 (25-29): FASE 1 inicia                           │
│   → 3 páginas core (Empieza-aqui, Donar, Maestros)    │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ MAYO 2026                                               │
│ Sem 2-3 (3-16): FASE 2 — Conversión                    │
│   → WhatsApp + Newsletter en vivo                       │
│ Sem 4-5 (19-30): FASE 3 — Rediseño completo           │
│   → 10 páginas funcionales, sitio V1                    │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ JUNIO 2026                                              │
│ Sem 1-4 (1-30): FASE 4 — Contenido & Comunidad        │
│   → Blog, YouTube, newsletter, grupo WhatsApp          │
└─────────────────────────────────────────────────────────┘
```

---

## ✨ Principios de Este Proyecto

1. **Centrado en el usuario** — Cada decisión responde: "¿Qué necesita esta persona AHORA?"
2. **Fases iterativas** — Lanzar Fase 1 en 1 semana, no esperar a perfección
3. **Contenido real** — Placeholder solo durante desarrollo, contenido real antes de launch
4. **Sin redefinir** — Diseño ya está hecho, solo traducirlo a páginas
5. **Medible** — KPIs claros, GA4 mide todo
6. **Escalable** — Base HTML simple, escalable a Next.js después si es necesario

---

## 🎯 Próximos Pasos Inmediatos (Hoy)

1. **Asignar roles** — ¿Quién es Frontend Dev? ¿Content Lead?
2. **Setup repo** — Crear git repo, branches iniciales
3. **Recolectar contenido** — Enviar checklist a Centro Khamlungpa
4. **Leer documentos** — Todos leen plan_estrategico.txt + user_journey.txt
5. **Primera reunión** — Kickoff con equipo, alineación

---

## 📞 Contacto

- **Sitio actual** (temporal): khamlungpa.com
- **WhatsApp Centro**: +52 [TBD]
- **Email Centro**: info@khamlungpa.com

---

## 📝 Historial de Versiones

| Versión | Fecha | Cambios |
|---------|-------|---------|
| 1.0 | 25 abr 2026 | Versión inicial: README + PROGRESS + KANBAN |

---

**Proyecto actualizado**: 25 de abril de 2026  
**Mantenedor**: Product Owner  
**Próxima revisión**: 29 de abril de 2026 (fin Fase 1)

---

## 🚀 ¡Vamos a Empezar!

> *"Khamlungpa ya informa. El objetivo es que empiece a guiar."*

El sitio nuevo va a hacer que cada visitante —sin importar si es curioso por primera vez, practicante serio, o miembro comprometido— encuentre exactamente lo que necesita en el momento que lo necesita.

**¿Listo?** Lee [PROGRESS.md](PROGRESS.md) y asigna las primeras tareas.
