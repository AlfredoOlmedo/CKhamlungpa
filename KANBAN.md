# KANBAN — Tablero Visual de Tareas

**Proyecto**: Centro Khamlungpa Digital  
**Última actualización**: 25 de abril de 2026  
**Sistema**: GitHub Issues + Milestones  

---

## 🔴 BACKLOG — No Iniciadas

Tareas que aún no han comenzado. Ordenadas por prioridad (arriba = más urgente).

### CRÍTICAS (Bloquean otras)
- [ ] **Setup repo git** — Crear rama `main`, `develop`, estructura de branches
- [ ] **Validar estructura de Template/** — Revisar Home.html contra sitemap
- [ ] **Recolectar contenido** — Fotos del centro, bios de maestros, testimonios
- [ ] **Asignar roles** — Quién es Frontend Dev, Content Lead, QA

### FASE 1 (Correcciones Inmediatas + SEO)
- [ ] Crear Empieza-aqui.html (3h)
- [ ] Crear Donar.html (3h)
- [ ] Crear Maestros.html (3h)
- [ ] Setup Google Workspace para newsletter (1.5h)
- [ ] Crear whatsapp-helper.js con mensajes prellenados (2h)
- [ ] Crear /robots.txt (permitir IA) (0.5h)
- [ ] Crear /sitemap.xml (1h)
- [ ] Agregar JSON-LD LocalBusiness en Home.html (1h)
- [ ] Agregar meta tags SEO en todas las páginas (1.5h)
- [ ] Crear /ai-instructions.txt para Claude, ChatGPT, Gemini (1h)
- [ ] Validar JSON-LD + HTML (1h)
- [ ] Setup CI/CD básico con GitHub Actions (2h)

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

### Esta Semana (25-29 abr)
```
[Empieza-aqui.html]
├── [ ] Crear estructura HTML base
├── [ ] Accordion con 8 preguntas + respuestas
├── [ ] CTA WhatsApp prellenado
├── [ ] Estilos: padding, tipografía, hover states
└── [ ] Test responsive mobile/tablet

[Donar.html]
├── [ ] Crear estructura HTML
├── [ ] Sección: "Tu generosidad sostiene el Dharma"
├── [ ] Historia breve: cómo se sostiene el centro
├── [ ] 3 opciones: único/mensual/benefactor
├── [ ] Botones: Transferencia, MercadoPago, PayPal
└── [ ] Test responsive

[Maestros.html]
├── [ ] Crear grid de maestros (2 columnas)
├── [ ] Card Ven. Norbu (foto + bio + años + maestros)
├── [ ] Card Gueshe Lobsang Dawa (idem)
├── [ ] Sección "Linaje FPMT"
└── [ ] Test responsive

[whatsapp-helper.js]
├── [ ] Crear archivo con constantes
├── [ ] Función sendWhatsAppMessage()
├── [ ] 6 mensajes prellenados por página
├── [ ] Botón flotante con styles
└── [ ] Test: abrir wa.me desde cada página
```

### Próxima Semana (3-5 may)
```
[Setup Técnico]
├── [ ] Crear repo + branches (main/develop/feature/*)
├── [ ] Setup GitHub Actions para CI
├── [ ] Crear archivo .env para variables (placeholder)
└── [ ] Documentar en README.md

[Google Workspace Setup]
├── [ ] Crear Google Form ("Newsletter Khamlungpa")
├── [ ] Conectar Google Form a Google Sheet (respuestas automáticas)
├── [ ] Obtener embed code + configurar en sitio
├── [ ] Agregar form a Home.html footer
├── [ ] Validar signup funciona
└── [ ] Configurar envío automático (Gmail + Google Apps Script)

[SEO & Indexación IA]
├── [ ] Crear /robots.txt (permitir Claude, ChatGPT, Gemini)
├── [ ] Crear /sitemap.xml con todas las URLs
├── [ ] Agregar JSON-LD LocalBusiness en Home.html
├── [ ] Agregar meta tags (title, description, og:*) en cada página
├── [ ] Crear /ai-instructions.txt
├── [ ] Validar JSON-LD con schema.org validator
└── [ ] Test: verificar robots.txt permite IA

[Validación Home.html]
├── [ ] Correr html-validate
├── [ ] Correr Lighthouse (target >85)
├── [ ] Test navegación interna (todos los href)
└── [ ] Test responsive (360px, 768px, 1920px)
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
