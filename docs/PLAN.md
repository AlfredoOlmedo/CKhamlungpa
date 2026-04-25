# PLAN — Fases de Implementación

**Documento derivado de**: `plan_estrategico.txt` (Secciones "Hoja de Ruta")  
**Última actualización**: 25 de abril de 2026

---

## 📋 Resumen de Fases

| Fase | Duración | Objetivo Principal | Entregables Clave |
|------|----------|-------------------|-------------------|
| **1. Corrección Inmediata** | 1-2 semanas | Arreglar 12 errores que dañan SEO/UX | 12 fixes + títulos + meta descriptions |
| **2. Mejoras de Conversión** | 2-4 semanas | Aumentar contactos por WhatsApp | /empieza-aqui, botón flotante, /donar |
| **3. Rediseño UX/UI** | 1-2 meses | Modernizar experiencia visual | Hero, fichas de programas, maestros |
| **4. Contenido y Comunidad** | 3-6 meses | Presencia orgánica y retención | Blog, newsletter, YouTube, comunidad |

---

## 🎯 FASE 1: Corrección Inmediata (Semanas 1-2)

**Objetivo**: Eliminar errores que dañan la confianza y el SEO hoy mismo.

### Tareas (en orden de impacto)

| # | Tarea | Esfuerzo | Impacto | Estado |
|---|-------|----------|--------|--------|
| 1 | Cambiar `lang="en"` a `lang="es-MX"` en 14 archivos | 30 min | Alto (SEO + Accesibilidad) | ⏳ Pendiente |
| 2 | Título único en cada página con keyword local | 2 horas | Alto (SEO crítico) | ⏳ Pendiente |
| 3 | Meta description única de 150-160 chars/página | 2 horas | Alto (SEO crítico) | ⏳ Pendiente |
| 4 | Corregir 4 links a 404.html (Tienda, English, Yoga) | 20 min | Alto (UX) | ⏳ Pendiente |
| 5 | Corregir typo en email de Etica.html | 5 min | Medio (contacto) | ⏳ Pendiente |
| 6 | Eliminar párrafos duplicados en DalaiLama.html | 15 min | Medio (SEO) | ⏳ Pendiente |
| 7 | Actualizar copyright a 2026 con JS dinámico | 10 min | Bajo (imagen) | ⏳ Pendiente |
| 8 | Actualizar festividades budistas a 2026 | 30 min | Medio (confianza) | ⏳ Pendiente |
| 9 | Reemplazar `async` por `loading="lazy"` en imágenes | 1 hora | Medio (HTML válido) | ⏳ Pendiente |
| 10 | Poner título visible en modal del Ebook | 15 min | Medio (conversión) | ⏳ Pendiente |
| 11 | Usar H1/H2/H3 semánticos (no &lt;strong&gt;) | 1 hora | Alto (SEO + accesibilidad) | ⏳ Pendiente |
| 12 | Unificar navegación en todos los archivos | 30 min | Medio (navegación) | ⏳ Pendiente |

**Total de tiempo**: 4-6 horas  
**Resultado**: Sitio limpio sin errores, mejor SEO, experiencia más confiable

---

## 🚀 FASE 2: Mejoras de Conversión (Semanas 3-6)

**Objetivo**: Aumentar el número de visitantes que contactan por WhatsApp o preguntan por un curso.

### Tareas (prioridad = impacto en journeys)

| Tarea | Impactado | Esfuerzo | Resultado |
|-------|-----------|----------|-----------|
| Crear página `/empieza-aqui` con 8 preguntas frecuentes | El Curioso | 3 horas | Reduce fricción del primer contacto |
| Agregar botón flotante de WhatsApp en todas las páginas | El Curioso + El Practicante | 2 horas | Conversión 3x mejor |
| Agregar CTA de WhatsApp al final de cada página de programa | El Practicante | 2 horas | Mejora enrollments |
| Crear página `/donar` con relato de la misión y mecanismos | La Comunidad | 2 horas | Genera ingresos recurrentes |
| Agregar sección de donación en homepage | Los tres | 1 hora | Integra donación al relato |
| Implementar Open Graph completo (`og:image`, `og:url`, etc.) | El Curioso (redes) | 1 hora | Mejor visualización en shares |
| Optimizar Google Business Profile | El Curioso + El Practicante | 1 hora | Presencia en Maps |
| Crear sitemap.xml y enviar a Search Console | El Curioso (SEO) | 30 min | Indexación más rápida |
| Unificar nav y footer en todos los archivos | Los tres | 1 hora | Mantenibilidad |
| Configurar WhatsApp Business con respuestas automáticas | El Curioso | 1 hora | Retención del momentum |
| Crear Google Form y conectar a Google Sheet | La Comunidad | 1 hora | Base de email marketing |

**Total de tiempo**: 15-18 horas  
**Resultado**: Sistema de conversión funcional, El Curioso tiene camino claro al primer contacto

---

## 🎨 FASE 3: Rediseño UX/UI (Meses 2-3)

**Objetivo**: Modernizar la experiencia y hacer al visitante nuevo el protagonista.

### Tareas (ordenadas por dependencia)

1. **Nuevo hero** — propuesta de valor clara + 3 botones de acción (Primera vez, Ver actividades, Donar)
2. **Tabla "Esta semana en el centro"** — dinámico con actividades actuales
3. **Fichas de programas mejoradas** — nivel, modalidad, facilitador, costo, CTA por programa
4. **Perfiles de maestros** — foto, bio completa, linaje, certificaciones, qué enseñan
5. **Sección de testimonios** — 2-3 citas reales con nombre y tiempo en el centro
6. **Galería de fotos** — vida real del centro, no stock images
7. **Calendario dinámico** — conectado a Google Calendar
8. **Migración a componentes** — nav/footer unificado (JavaScript includes o componentes)
9. **Implementar JSON-LD** — LocalBusiness en index, Event en páginas de cursos
10. **Diseño mobile-first** — revisado para +70% del tráfico que viene por celular

**Total de tiempo**: 40-60 horas  
**Resultado**: Sitio moderno que responde a los 3 perfiles de visitante

---

## 📚 FASE 4: Contenido y Comunidad Digital (Meses 3-6)

**Objetivo**: Construir presencia orgánica y comunidad que funcione sin publicidad paga.

### Tareas (contenido continuo)

| Tarea | Frecuencia | Resultado |
|-------|-----------|-----------|
| Crear blog `/recursos` con primeros 8 artículos SEO | Sprint inicial | 33 artículos listos (módulos convertidos) |
| Publicar 2 artículos por mes (mínimo) | Continuado | Posicionamiento en "meditación para principiantes", "budismo tibetano" |
| Lanzar newsletter mensual (Gmail + Google Apps Script) | Mes 1 | 400+ suscriptores target |
| Crear 2 audios de meditación guiada | Sprints 3-4 | Lead magnet para email capture |
| Publicar 1 video YouTube (meditación 15 min) | Mes 1 | Base para estrategia de video |
| Implementar feed de Instagram en homepage | Sprint 2 | Social proof (muestra comunidad activa) |
| Crear grupo de WhatsApp para comunidad | Mes 1 | 50+ miembros comprometidos |

**Total de tiempo**: 30-50 horas  
**Resultado**: Centro de aprendizaje con presencia orgánica fuerte

---

## 🔄 Dependencias & Bloqueadores

| Fase | Depende de | Bloqueador Potencial |
|------|-----------|---------------------|
| 1 | — | Acceso a 14 archivos HTML |
| 2 | Fase 1 completa | Claridad en mensajes de WhatsApp prellenados |
| 3 | Fase 2 + fotos reales | Fotos del centro, bios de maestros, testimonios reales |
| 4 | Fase 3 base | Budget para contenido profesional |

---

## 📊 Métricas de Éxito (6 meses)

Todos los KPIs medibles con GA4 (ya instalado) y Google Search Console (gratuito):

### Para El Curioso
- Tráfico: +200 visitantes/mes
- WhatsApp: +50 mensajes/mes
- Conversión a clase: 15% de quiénes escriben
- Página /empieza-aqui: >5 min tiempo promedio

### Para El Practicante
- Program sign-ups: 80+/mes
- Posición SEO "meditación Guadalajara": Top 5
- Posición SEO "budismo tibetano Guadalajara": Top 3

### Para La Comunidad
- Newsletter subscribers: >100
- Donativos recibidos online: +$500
- Grupo WhatsApp: 50+ miembros

---

## 💡 Recomendación de Stack Técnico

### Opción A — Mejora del sitio actual (Fase 1-2)
- Mantener HTML/CSS/JS + Bootstrap
- Agregar: Google Calendar embebido, WhatsApp Business API, Google Forms + Google Sheet
- **Tiempo**: 4-6 semanas
- **Costo**: Bajo (~$500/año en servicios)

### Opción B — Migración a plataforma moderna (Fase 3)
- Frontend: Next.js + Tailwind CSS
- Backend: Node.js + Prisma + PostgreSQL
- CMS: Sanity o Notion (para que equippo edite sin código)
- Hosting: Cloudflare Pages (gratis)
- **Tiempo**: 8-10 semanas
- **Costo**: Medio (~$2,000/año)

**Recomendación**: Iniciar Opción A (Fases 1-2), evaluar Opción B para Fase 3

---

## 👥 Roles Necesarios

| Rol | Responsabilidad | Horas/semana |
|-----|------------------|-------------|
| Product Owner | Priorización, validación con stakeholders | 5h |
| Frontend Developer | Implementar páginas y componentes | 30h |
| Backend Developer (Fase 3+) | APIs, integraciones, base de datos | 20h |
| Content Lead | Copywriting, SEO, testimonios, blog | 10h |
| QA / Testing | Tests, validación, bugs | 10h |

---

## 📅 Timeline Estimado

```
Semana 1-2:      FASE 1 (Correcciones inmediatas)
                 ↓ 12 fixes completados

Semana 3-6:      FASE 2 (Mejoras de conversión)
                 ↓ /empieza-aqui, WhatsApp, /donar en vivo

Mes 2-3:         FASE 3 (Rediseño UX/UI)
                 ↓ Sitio modernizado

Mes 3-6:         FASE 4 (Contenido y comunidad)
                 ↓ Blog activo, newsletter, YouTube, grupo WhatsApp
```

---

## 🚨 Riesgos & Mitigación

| Riesgo | Probabilidad | Mitigación |
|--------|------------|-----------|
| Falta de contenido real (fotos, bios) | Media | Tomar fotos en sprints, bios directamente de maestros |
| Performance issues | Baja | Monitorear Core Web Vitals desde Fase 2 |
| Cambios de scope | Media | Weekly refinement con stakeholders, MoSCoW prioritization |
| Respuesta lenta en WhatsApp | Media | Establecer protocolo: <2 horas durante horario hábil |

---

**Creado**: 25 de abril de 2026  
**Basado en**: `plan_estrategico.txt` sección "Hoja de Ruta"  
**Próxima revisión**: Fin de Fase 1 (una semana)
