# Khamlungpa Digital — Documentación Oficial

**Centro Khamlungpa**: Rediseño integral del sitio web y ecosistema digital  
**Última actualización**: 25 de abril de 2026  
**Fuentes de verdad**: `plan_estrategico.txt` | `user_journey.txt`

---

## 📍 Empieza aquí según tu rol

### 👨‍💼 Dueño del Proyecto / Producto
1. Lee `user_journey.txt` (sección "Los tres perfiles de visitante") — entiende a tus usuarios
2. Lee `plan_estrategico.txt` (sección "Hoja de Ruta: Fases y Prioridades") — priorización clara
3. Revisa `PLAN.md` en esta carpeta para adaptarlo a tu realidad

### 👨‍💻 Desarrollador / Tech Lead
1. Lee `plan_estrategico.txt` (sección "Errores Técnicos Críticos") — qué arreglar primero
2. Lee `plan_estrategico.txt` (sección "Stack Tecnológico Recomendado") — arquitectura
3. Ve a `DEVELOPMENT.md` para setup local

### 🎨 Diseñador / UX
1. Lee `user_journey.txt` completo — estructura la experiencia alrededor de estos journeys
2. Lee `plan_estrategico.txt` (sección "Nueva Arquitectura de Información") — sitemap y páginas
3. Sigue `user_journey.txt` (sección "Diseño del Sitio Web por Etapa del Journey") para cada página

### 📱 Content / SEO Lead
1. Lee `plan_estrategico.txt` (sección "Plan SEO Local") — palabras clave y estrategia
2. Lee `plan_estrategico.txt` (sección "Estrategia de Contenidos") — blog, recursos, lead magnets
3. Lee `user_journey.txt` (sección "Estrategia de Redes Sociales") — Instagram, WhatsApp, newsletter

### 🎯 Marketing / Community
1. Lee `user_journey.txt` (sección "User Journeys" — los 3 perfiles)
2. Lee `user_journey.txt` (sección "Ecosistema Digital") — rol de cada canal
3. Lee `user_journey.txt` (sección "Estrategia de Redes Sociales") — tácticas por plataforma

---

## 📚 Documentos en Esta Carpeta

| Documento | Propósito | Lee si... |
|-----------|-----------|----------|
| `README.md` | Índice y navegación (este) | Necesitas orientarte |
| `PLAN.md` | Plan estratégico de fases | Eres product owner o tech lead |
| `DEVELOPMENT.md` | Guía de setup local y desarrollo | Eres desarrollador |
| `CUSTOMER-JOURNEY-STRATEGY.md` | Deep dive en los 3 perfiles | Quieres entender la estrategia |

---

## 🎯 Quick Reference: Los 3 Perfiles

### El Curioso (25-35 años, sin experiencia)
- **Pregunta clave**: "¿Puedo ir aunque no sé nada?"
- **Miedos**: Sentirse fuera de lugar, que sea costoso, compromiso obligatorio
- **Lo que necesita**: Claridad, bienvenida amable, primer paso sin fricción
- **Canales**: Instagram/Google → Sitio web → WhatsApp → Primera sesión

### El Practicante (35-50 años, con experiencia)
- **Pregunta clave**: "¿Tiene la profundidad que busco?"
- **Miedos**: Que sea superficial, maestros sin formación real
- **Lo que necesita**: Linaje claro, programas detallados, credenciales
- **Canales**: Google/FPMT Directorio → Sitio web → Validación → Programa Básico

### La Comunidad (50+ años, comprometidos)
- **Pregunta clave**: "¿Cómo me mantengo conectado y apoyo?"
- **Miedos**: Perder información, que el centro cierre
- **Lo que necesita**: Calendario actualizado, donación simple, comunidad activa
- **Canales**: WhatsApp/Newsletter → Calendario → Asistencia regular → Donación

---

## 📊 Estado del Proyecto

**FASE 1: Correcciones Inmediatas (Semanas 1-2)** — En curso
- ✅ Auditoría completada
- ✅ 12 errores técnicos identificados
- ⏳ Fixes pendientes (4-6 horas de trabajo)

**FASE 2: Mejoras de Conversión (Semanas 3-6)** — Próximo
- Crear página /empieza-aqui
- Botón flotante WhatsApp con mensajes prellenados
- Página /donar
- Newsletter + Google Workspace (Gmail + Google Forms)

**FASE 3: Rediseño UX/UI (Meses 2-3)** — Planificado
- Nuevo hero con 3 opciones por perfil
- Fichas de programas mejoradas
- Perfiles de maestros
- Testimonios y galería

**FASE 4: Contenido y Comunidad (Meses 3-6)** — Planificado
- Blog /recursos (8+ artículos SEO)
- Newsletter mensual activo
- YouTube con meditaciones
- Grupo WhatsApp de comunidad

---

## 🎨 Decisiones de Diseño (No Redefinir)

Basadas en benchmarking contra Lion's Roar, FPMT, Tushita, Kadampa México, Casa Tibet, Vipassana, Spirit Rock:

| Elemento | Decisión | Por qué |
|----------|----------|--------|
| **Propuesta de valor** | "Meditación y budismo tibetano. Abierto a todos, sin experiencia previa" | El Curioso necesita seguridad |
| **Menú principal** | Inicio, Meditación, Budismo/Programas, Maestros, Calendario, Donar, Contacto + WhatsApp flotante | Orientado a los 3 perfiles |
| **Hero de homepage** | Foto real del espacio (no stock), headline claro, 2 CTAs: "Primera vez aquí" y "Ver actividades" | Reduce fricción |
| **Ubicación de WhatsApp** | Botón flotante + CTA en cada página relevante con mensaje prellenado | Conversión 3x mejor |
| **Donación** | Integrada al relato de la misión, no botón transaccional | Genera donaciones más generosas |
| **SEO local** | Focus: "meditación Guadalajara", "budismo tibetano Guadalajara" | Ventaja competitiva única |

---

## 🔍 KPIs a 6 Meses

Medibles con GA4 + Google Search Console (ya instalados):

- **Sesiones mensuales**: +50% vs baseline
- **Tasa de rebote homepage**: <60%
- **Clics en WhatsApp**: >30/mes
- **Posición SEO "meditación Guadalajara"**: Top 5
- **Suscriptores newsletter**: >100
- **Donativos recibidos online**: Baseline a establecer
- **Programas sign-ups**: 80+/mes

---

## 🚨 12 Errores Críticos a Arreglar (Fase 1)

Listado completo en `plan_estrategico.txt` (sección "Errores Técnicos Críticos"):

1. `lang="en"` → cambiar a `lang="es-MX"`
2. Títulos únicos en cada página (actualmente "Centro Khamlungpa" en todas)
3. Meta descriptions únicas por página
4. Quitar 4 links a 404.html (Tienda, English, Yoga)
5. Corregir typo en email (khmalungpa → khamlungpa)
6. Eliminar párrafos duplicados
7. Reemplazar `async` por `loading="lazy"` en imágenes
8. Usar H1/H2/H3 semánticos (no &lt;strong&gt;)
9. Copyright dinámico (año actual automático)
10. Actualizar festividades a 2026
11. Título visible en modal de ebook
12. Unificar navegación en los 14 archivos

**Tiempo estimado**: 4-6 horas

---

## 📞 Contacto & Siguientes Pasos

- **Fuentes de verdad**: `plan_estrategico.txt` | `user_journey.txt` (en raíz del proyecto)
- **Para detalles de implementación**: Ve a `PLAN.md` o `DEVELOPMENT.md`
- **Para mockups**: Revisa los archivos HTML en `Template/`

---

**Este README fue generado a partir de `plan_estrategico.txt` y `user_journey.txt` como documentos únicos de verdad.**
