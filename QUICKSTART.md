# ⚡ QUICKSTART — Próximas 24 Horas

**Objetivo**: Tener Centro Khamlungpa listo para desplegar en línea

---

## 📋 TODO — ORDEN IMPORTANCIA

### **HOY (0-4 horas)**

Reúne esta información en un documento de texto o Markdown:

```
# Información del Centro Khamlungpa

## Ubicación
- Dirección completa: [X]
- Código postal: [X]
- Municipio: Guadalajara ✓
- Estado: Jalisco ✓
- País: México ✓

## Contacto
- WhatsApp (formato: 5212XXXXXXXX): [X]
- Email: [X]
- Teléfono fijo (opcional): [X]

## Horarios (semana típica)
- Meditación lunes: [X:XXpm - X:XXpm] (presencial + online)
- Meditación martes: [X:XXpm - X:XXpm] (o día alternativo)
- [Otros horarios si aplica]

## Maestros Residentes
### Ven. Norbu
- Años en el centro: [X]
- Idiomas: Español, [X]
- Especialidades: Meditación, [X]
- Bio corta (2-3 líneas): [X]

### Gueshe Lobsang Dawa
- Certificación Gueshe: [Sí/No + detalles]
- Idiomas: Español, Tibetano, [X]
- Especialidades: Filosofía Budista, [X]
- Bio corta (2-3 líneas): [X]

## Programas (fechas próximas)
- Budismo en Pocas Palabras: Inicia [fecha]
- Descubre el Budismo: Inicia [fecha]
- Explorando el Budismo: Inicia [fecha]
- Programa Básico: Inicia [fecha]
- Retiros próximos: [fechas/temas]

## Testimonios (busca 3 frases de practicantes reales)
1. "[Frase de persona 1]" — [Nombre], practicante desde [año]
2. "[Frase de persona 2]" — [Nombre], practicante desde [año]
3. "[Frase de persona 3]" — [Nombre], practicante desde [año]

## Fotos (obtén mínimo 3)
1. Foto sesión meditación: centro con grupo meditando (1200x800px mín)
2. Foto Ven. Norbu: retrato profesional (500x500px mín)
3. Foto Gueshe: retrato profesional (500x500px mín)
4. Foto espacio: entrada o aula principal (1200x800px mín)
5. Foto OG: mejor foto del centro (1200x630px para redes)
```

**Envía esto a: olmedoalfredo3d@gmail.com**

---

### **MAÑANA (2-3 horas)**

#### 1. Crear Cuentas de Servicio

**Google Workspace**
- [ ] Ir a https://workspace.google.com
- [ ] Crear cuenta: Email para newsletter (info@khamlungpa.com o similar)
- [ ] Crear Google Form para suscripciones
- [ ] Compartir enlace de Form con Claude

**Meta Business Manager** (para WhatsApp Business)
- [ ] Ir a https://business.facebook.com
- [ ] Crear negocio: Centro Khamlungpa
- [ ] Setup: WhatsApp Business
- [ ] Obtener: WhatsApp Business Phone ID + Auth Token
- [ ] Compartir con Claude

**GitHub**
- [ ] Crear cuenta personal (si no tienes)
- [ ] Crear repositorio: `Kham-2026` (privado o público)
- [ ] Ir a Settings → Deploy keys → Agregar key de Cloudflare

**Cloudflare**
- [ ] Ir a https://dash.cloudflare.com
- [ ] Crear cuenta
- [ ] Agregar sitio: `khamlungpa.com` (o tu dominio)
- [ ] Anotar: Nameservers que te da Cloudflare

#### 2. Actualizar Registrador de Dominio

Si ya tienes `khamlungpa.com`:
- [ ] Ir al registrador (GoDaddy, NameCheap, etc.)
- [ ] Cambiar Nameservers → Usa los de Cloudflare
- [ ] Esperar 15-30 minutos para que se propague

#### 3. Crear Google Search Console

- [ ] Ir a https://search.google.com/search-console
- [ ] Agregar propiedad: `https://khamlungpa.com`
- [ ] Verificar por DNS (más fácil si usas Cloudflare)
- [ ] Listo para enviar sitemap después del deploy

#### 4. Crear Google Business Profile

- [ ] Ir a https://business.google.com
- [ ] Crear negocio: Centro Khamlungpa
- [ ] Ubicación: [Tu dirección completa]
- [ ] Categoría: Meditation center / Buddhist organization
- [ ] Verificación: Recibirá SMS o postal

---

## 📸 Fotos — Requisitos Técnicos

| Foto | Uso | Tamaño Mín | Formato |
|------|-----|-----------|---------|
| Hero/sesión | Empieza-aqui, Maestros | 1200x800px | JPG/PNG |
| Ven. Norbu | Maestros.html | 500x500px | JPG/PNG |
| Gueshe | Maestros.html | 500x500px | JPG/PNG |
| Espacio | Homepage futuro | 1200x800px | JPG/PNG |
| OG image | Redes sociales | 1200x630px | JPG/PNG |

**📌 TIP**: Comprime en https://tinypng.com para web

---

## ✅ Checklist — Antes de Desplegar

Cuando tengas todo listo, marca estos:

- [ ] Información del centro completa (documento)
- [ ] 5 fotos en formato correcto + tamaño
- [ ] Maestros tienen bios confirmadas
- [ ] Horarios finales confirmados
- [ ] Testimonios reales de 3 practicantes
- [ ] Google Workspace setup (Form + email)
- [ ] Meta Business (WhatsApp token)
- [ ] GitHub repo creado
- [ ] Cloudflare cuenta activa
- [ ] Nameservers cambiados en registrador
- [ ] Google Search Console listo
- [ ] Google Business Profile en verificación

**Cuando todo ✓**: Avísale a Claude → Listo para desplegar

---

## 🚀 Despliegue (día final)

1. Claude actualiza HTML con tu contenido
2. Claude valida código (HTML, esquemas, responsive)
3. Claude da el OK
4. **Tú**: Pushea a GitHub
5. Cloudflare auto-despliega
6. **Tú**: Verifica en https://khamlungpa.com
7. **Tú**: Envía sitemap a Google Search Console
8. **Esperamos**: 7 días para indexación Google + IA

---

## 💬 Contactar

Cualquier pregunta sobre este proceso:
- **Email**: olmedoalfredo3d@gmail.com
- **WhatsApp**: [Tu número]
- **Reunión**: Si necesitas ayuda en vivo

---

## ⏱️ Timeline Esperado

| Tarea | Duración | Target |
|-------|----------|--------|
| Recopilar contenido | 2-4h | Hoy/Mañana |
| Crear cuentas de servicio | 1-2h | Mañana |
| Cambiar nameservers | 15-30m | Mañana |
| Claude: actualizar HTML | 1-2h | Mañana tarde |
| Claude: validar código | 30m | Mañana tarde |
| Tú: Deploy a GitHub | 15m | Mañana tarde |
| Cloudflare despliega | 5m | Auto |
| **SITE LIVE** | **TOTAL: 6-9 horas** | **Mañana por la tarde** |

---

## 🎯 Success

Sabremos que funcionó cuando:

✅ Accedes a https://khamlungpa.com y ves Empieza-aqui, Maestros, Donar  
✅ Botón WhatsApp flota en esquina + funciona  
✅ Se ve bien en móvil (360px)  
✅ Google Search Console muestra "Indexed"  
✅ Después de 7 días: ChatGPT menciona Centro Khamlungpa

---

## 📞 Soporte Rápido

**Problema**: No puedo cambiar nameservers  
**Solución**: Contacta con tu registrador (GoDaddy, etc.). Pídeles que cambien a los de Cloudflare.

**Problema**: No sé qué fotos usar  
**Solución**: Cualquier foto genuina del centro vale. Evita stock photos (Getty, Unsplash).

**Problema**: ¿Necesito código?  
**Solución**: No. Solo datos. Claude se encarga del código.

---

**¡Vamos!** 🚀

Ahora que tengas este checklist, reúne la información y avísale a Claude cuando esté lista.

🙏
