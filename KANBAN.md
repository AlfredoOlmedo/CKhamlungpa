# KANBAN — Tablero Visual de Tareas

**Proyecto**: Centro Khamlungpa Digital  
**Última actualización**: 25 de abril de 2026  
**Sistema**: GitHub Issues + Milestones  

---

## ✅ DONE — Completadas

### CRÍTICAS (Bloqueaban otras) — RESUELTAS
- [x] **Setup repo git** — Rama main + develop + estructura branches ✅ 25 abr
- [x] **Validar estructura de Template/** — Home.html validado contra sitemap ✅ 25 abr
- [x] **Asignar roles** — Usuario + Claude (2 personas, roles claros) ✅ 25 abr

### FASE 1 (Correcciones Inmediatas + SEO) — COMPLETADO
- [x] Crear Empieza-aqui.html (3h) ✅ 25 abr
- [x] Crear Donar.html (3h) ✅ 25 abr
- [x] Crear Maestros.html (3h) ✅ 25 abr
- [x] Crear whatsapp-helper.js con 20+ mensajes prellenados (2h) ✅ 25 abr
- [x] Crear /robots.txt (permitir IA: Claude, ChatGPT, Gemini) (0.5h) ✅ 25 abr
- [x] Crear /sitemap.xml con 24 URLs (1h) ✅ 25 abr
- [x] Crear json-ld-schemas.js (7 schema types) (2h) ✅ 25 abr
- [x] Crear /ai-instructions.txt para LLMs (1h) ✅ 25 abr
- [x] Setup CI/CD con GitHub Actions (2h) ✅ 25 abr
- [x] Crear guides: DEPLOY.md, QUICKSTART.md, FASE-1-SUMMARY.md (3h) ✅ 25 abr
- [x] Validar JSON-LD + HTML estructura (1h) ✅ 25 abr

**Subtotal FASE 1 Completado**: 6 commits, 17 archivos, ~16 horas

## 🔴 BACKLOG — No Iniciadas

Tareas que aún no han comenzado. Ordenadas por prioridad (arriba = más urgente).

### CRÍTICAS (Bloquean FASE 2)
- [ ] **Recolectar contenido** — Fotos, bios, dirección, teléfono, horarios (USER ACTION)
- [ ] **Setup servicios terceros** — Google Workspace, Meta Business, GitHub, Cloudflare (USER ACTION)
- [ ] **Inyectar datos en HTML** — Usar json-ld-schemas.js para agregar datos reales (1-2h)
- [ ] **Validar código final** — HTML validator + Lighthouse >85 (1h)

### FASE 2 (Conversión)
- [ ] Integración WhatsApp Business API (3h)
- [ ] Botón flotante WhatsApp (todas las páginas) (1.5h)
- [ ] Modal WhatsApp (6 opciones mensaje) (2h)
- [ ] Agregar Open Graph a todas las páginas (1.5h)
- [ ] Optimizar Google Business Profile (2h)
- [ ] Crear template welcome email (1.5h)

### FASE 3 (Rediseño UX/UI)
- [ ] Crear Programas.html con filtros (5h)
- [ ] Crear ficha Programa-budismo-pocas-palabras.html (2.5h)
- [ ] Crear ficha Programa-descubre-el-budismo.html (3h)
- [ ] Crear ficha Programa-explorando-el-budismo.html (3h)
- [ ] Crear ficha Programa-basico.html (3h)
- [ ] Crear Calendario.html (Google Calendar) (4h)
- [ ] Crear Comunidad.html (galería + testimonios) (3h)
- [ ] Crear Contacto.html (2h)
- [ ] Implementar JSON-LD LocalBusiness (1.5h)
- [ ] Implementar JSON-LD Event (2h)

### FASE 4 (Contenido & Comunidad)
- [ ] Crear estructura /recursos (blog) (2h)
- [ ] Escribir 8 artículos prioritarios (16h)
- [ ] Grabar + editar video YouTube (6h)
- [ ] Crear 2 audios de meditación guiada (6h)
- [ ] Crear template newsletter mensual (2h)
- [ ] Crear grupo WhatsApp de comunidad (1h)
- [ ] Crear calendario de posts Instagram (3h)

---

## 🟡 TO DO — Listos para Empezar

Tareas que están validadas, con dependencias resueltas, listas para asignar.

### FASE 1 COMPLETO (25 abr)
```
[Empieza-aqui.html] ✅
├── [x] Crear estructura HTML base
├── [x] Accordion con 8 preguntas + respuestas
├── [x] CTA WhatsApp prellenado
├── [x] Estilos: padding, tipografía, hover states
└── [x] Responsive mobile/tablet (360px-1920px)

[Donar.html] ✅
├── [x] Crear estructura HTML
├── [x] Sección: "Tu generosidad sostiene el Dharma"
├── [x] Historia breve: cómo se sostiene el centro
├── [x] 3 opciones: único/mensual/benefactor
├── [x] Botones: Transferencia, MercadoPago, PayPal
└── [x] Responsive mobile/tablet

[Maestros.html] ✅
├── [x] Crear grid de maestros (2 columnas)
├── [x] Card Ven. Norbu (foto + bio + años + maestros)
├── [x] Card Gueshe Lobsang Dawa (idem)
├── [x] Sección "Linaje FPMT"
└── [x] Responsive mobile/tablet

[json-ld-schemas.js] ✅
├── [x] Crear 7 schema types
├── [x] LocalBusiness schema
├── [x] Course (4 programas)
├── [x] Event (meditación semanal)
├── [x] FAQPage + Organization + Person schemas

[whatsapp-helper.js] ✅
├── [x] Crear con constantes
├── [x] 20+ mensajes prellenados
├── [x] Modal + FAB integration
├── [x] Analytics tracking ready
└── [x] Funciones exportadas (ready para inyectar en HTML)

[Infraestructura SEO] ✅
├── [x] robots.txt — permite Claude, ChatGPT, Gemini
├── [x] sitemap.xml — 24 URLs con prioridades
├── [x] ai-instructions.txt — instrucciones para LLMs
├── [x] .github/workflows/validate.yml — CI/CD

[Documentación] ✅
├── [x] DEPLOY.md — 8 secciones, step-by-step
├── [x] QUICKSTART.md — plan de 24 horas
├── [x] FASE-1-SUMMARY.md — recap completo
├── [x] STATUS.txt — visual overview
├── [x] INDEX.md — navigation guide
└── [x] PROGRESS.md + KANBAN.md — actualizados
```

### Esta Semana (26-29 abr) — USER ACTION
```
[Recolectar Contenido] 🔴 BLOQUEADOR
├── [ ] Dirección completa (calle, código postal)
├── [ ] WhatsApp Business número (formato: 52XXXXXXXXXX)
├── [ ] Email del centro
├── [ ] 5 fotos (hero, maestros x2, espacio, OG)
├── [ ] Bios de maestros (Ven. Norbu, Gueshe)
├── [ ] Horarios: sesiones meditación
├── [ ] Fechas: programas próximos
└── [ ] 2-3 testimonios reales

[Setup Servicios] 🔴 BLOQUEADOR
├── [ ] Google Workspace (Gmail + Forms)
├── [ ] Meta Business Account (WhatsApp API)
├── [ ] GitHub repository creado
├── [ ] Cloudflare cuenta
└── [ ] Nameservers cambiados en registrador

[Inyectar Datos en HTML] (1-2h)
├── [ ] Actualizar json-ld-schemas.js con datos reales
├── [ ] Inyectar schemas en páginas HTML
├── [ ] Actualizar whatsapp-helper.js con número real
└── [ ] Actualizar meta tags con datos reales

[Validación Final] (1h)
├── [ ] Ejecutar: npx html-validate '*.html'
├── [ ] Lighthouse check: todos >85
├── [ ] Test responsive (360px, 768px, 1920px)
├── [ ] Test WhatsApp links en real device
└── [ ] Validar JSON-LD con schema.org/validator
```

### Próxima Semana (29 abr - 5 may) — DEPLOYMENT
```
[Deployment a GitHub + Cloudflare] (30m-1h)
├── [ ] User: Push código a GitHub main branch
├── [ ] Cloudflare: Auto-deploy desde GitHub
├── [ ] User: Verificar en https://khamlungpa.com
├── [ ] User: Confirmar HTTPS funciona
└── [ ] Both: Test todas las páginas son accesibles

[Google Search Console Setup] (30m)
├── [ ] User: Registrar propiedad khamlungpa.com
├── [ ] User: Verificar por DNS
├── [ ] User: Enviar sitemap.xml
└── [ ] Both: Monitorear "Coverage" en 7 días

[Google Business Profile Setup] (1-2h)
├── [ ] User: Crear perfil GBP
├── [ ] User: Agregar fotos + horarios + categoría
├── [ ] User: Verificar (SMS o postal)
└── [ ] Both: Monitorear views

[Validación Post-Deploy] (1h)
├── [ ] Verificar curl https://khamlungpa.com/robots.txt
├── [ ] Verificar curl https://khamlungpa.com/sitemap.xml
├── [ ] Verificar JSON-LD en browser DevTools
├── [ ] Test WhatsApp link en móvil real
└── [ ] Test all pages Lighthouse >85
```

---

## 🔵 IN PROGRESS — Trabajo Activo

Tareas que están siendo trabajadas AHORA.

```
Estado: VACÍO
(Inicia cuando alguien asigna la primera tarea)
```

---

## 🟢 REVIEW — Esperando Revisión

Tareas completadas, pero pendientes de code review / QA / aprobación.

```
Estado: VACÍO
```

---

## ✅ DONE — Completadas

Tareas finalizadas y lanzadas a producción.

| # | Tarea | Completado | Por | Fecha |
|---|-------|-----------|-----|-------|
| — | — | — | — | — |

---

## 📋 Plantillas de Tareas (Copiar & Pegar)

### Template: Crear Página HTML
```markdown
**Crear [NombrePágina].html**

**Descripción**: 
[Breve descripción de la página, a qué perfil sirve]

**Tareas**:
- [ ] Crear estructura HTML base (doctype, meta, head, body)
- [ ] Copiar header/nav de Home.html
- [ ] Crear main content
- [ ] Copiar footer de Home.html
- [ ] Validar título único + meta description
- [ ] Validar lang="es-MX"
- [ ] Agregar id en sections para navegación interna
- [ ] Test responsive (mobile/tablet/desktop)
- [ ] Test links internos + navegación
- [ ] Lighthouse score >85

**Tiempo estimado**: [XYZ horas]
**Responsable**: [Frontend Developer]
**Dependencias**: Ninguna
**Bloqueadores**: Ninguno

**Aceptación**:
- ✅ HTML válido (sin errores w3c)
- ✅ Responsive en 3 breakpoints
- ✅ Lighthouse >85 en todas categorías
- ✅ Links internos funcionan
- ✅ SEO: title + description únicos
```

### Template: Integración Externa
```markdown
**[Nombre Integración] — [Servicio]**

**Descripción**: 
[Qué es, cómo se usa, por qué importa]

**Setup**:
- [ ] Crear cuenta / obtener credenciales
- [ ] Instalar SDK / librería
- [ ] Configurar variables de entorno
- [ ] Implementar en código
- [ ] Testear funcionamiento
- [ ] Documentar en DEVELOPMENT.md

**Tiempo estimado**: [XYZ horas]
**Responsable**: [Backend Dev / Frontend Dev]
**Dependencias**: [Si hay]
**Bloqueadores**: [Si hay]

**Aceptación**:
- ✅ Setup completado sin errores
- ✅ Test de integración pasa
- ✅ Documentado
```

### Template: Contenido
```markdown
**[Tipo Contenido] — [Título]**

**Descripción**: 
[Qué es, para quién, por qué importa]

**Contenido a incluir**:
- [ ] Elemento 1
- [ ] Elemento 2
- [ ] Elemento 3

**Tiempo estimado**: [XYZ horas]
**Responsable**: [Content Lead]
**Dependencias**: [Si hay]
**Bloqueadores**: [Si hay]

**Aceptación**:
- ✅ Contenido escrito
- ✅ Revisado por [Persona]
- ✅ SEO optimizado (keywords, estructura)
- ✅ Sin typos / gramaticalmente correcto
```

---

## 🎯 Cómo Usar Este Kanban

### Para Asignar una Tarea
1. **Copiar tarea de BACKLOG o TO DO**
2. **Mover a IN PROGRESS** (cambiar encabezado)
3. **Agregar nombre de quien la asigna**
4. **Actualizar en PROGRESS.md** con estado 🔵 En progreso

### Para Completar una Tarea
1. **Hacer commit en git** con descripción de cambios
2. **Pasar a REVIEW** (si necesita revisión)
3. **O pasar directo a DONE** (si es simple)
4. **Actualizar PROGRESS.md** con estado ✅ Completado
5. **Mover a DONE** en este archivo

### Para Bloquear una Tarea
1. **Documentar el bloqueador** en sección "Bloqueadores & Dependencias"
2. **No marcar como 🔴 Pendiente** en PROGRESS.md, marcar como ⏳ Bloqueado
3. **Asigar a quien pueda resolver el bloqueador**
4. **Revisar bloqueador cada 2 días** en reunión de stand-up

---

## 📞 Reuniones Sincronizadas

### Daily Standup (15 min)
**Cuándo**: 10am cada día  
**Quién**: Product Owner + Tech Lead + Frontend + Content  
**Qué**: Estado de IN PROGRESS, bloqueadores, planes para hoy

### Sprint Planning (30 min)
**Cuándo**: Lunes al inicio de semana  
**Quién**: Todo el equipo  
**Qué**: Revisar BACKLOG, mover a TO DO, asignar puntos

### Sprint Review (30 min)
**Cuándo**: Viernes al final de semana  
**Quién**: Todo el equipo  
**Qué**: Revisar DONE, actualizar PROGRESS.md, identificar bloqueadores

---

## 🔗 Links Útiles

- **GitHub Repo**: [TBD — enlace al repo privado]
- **PROGRESS.md**: [Estado detallado por fase]
- **PLAN.md**: [Plan estratégico completo]
- **DEVELOPMENT.md**: [Guía técnica para developers]
- **CUSTOMER-JOURNEY-STRATEGY.md**: [Estrategia de usuarios]

---

## 📊 Burndown Chart (Manual)

Actualizar cada viernes:

```
FASE 1 Burndown:
Semana 1 (25 abr): 35 horas total → 30 completadas → 5 en progreso
Semana 2 (3 may): 35 horas total → 28 completadas → 7 en progreso
```

---

**Creado**: 25 de abril de 2026  
**Próxima actualización**: 26 de abril de 2026 (daily)  
**Mantenedor**: Tech Lead
