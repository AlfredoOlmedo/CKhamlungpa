# Guía de Despliegue — Centro Khamlungpa

**Status**: FASE 1 ready for deployment
**Target**: GitHub + Cloudflare
**Timeline**: Before May 2, 2026

---

## ✅ Pre-Deployment Checklist

### 1. Content Completeness

- [ ] **Address** — Centro's full physical address
- [ ] **Phone** — WhatsApp Business number
- [ ] **Email** — Contact email address
- [ ] **Photos** — 
  - [ ] Hero/meditation session (1200x800 min)
  - [ ] Teachers (2 photos, 500x500 min)
  - [ ] Space/entrance (1200x800 min)
- [ ] **Teacher bios** — Ven. Norbu + Gueshe Lobsang Dawa
- [ ] **Schedule** — Weekly meditation times + program dates
- [ ] **Testimonials** — 2-3 real practitioner quotes

### 2. Third-Party Integrations

- [ ] **Meta Business Account** — WhatsApp Business API setup
  - [ ] Obtain: Shared token, WhatsApp Business Phone ID
  - [ ] Update: whatsapp-helper.js with real phone number
  - [ ] Test: Send message from website

- [ ] **Google Workspace**
  - [ ] Create: Google Workspace account (Gmail, Forms, Drive)
  - [ ] Setup: Google Form for newsletter
  - [ ] Configure: Auto-response to submissions
  - [ ] Create: Apps Script to send welcome email

- [ ] **Google Search Console**
  - [ ] Register: khamlungpa.com property
  - [ ] Verify: DNS or HTML file method
  - [ ] Submit: sitemap.xml
  - [ ] Test: robots.txt

- [ ] **Google Business Profile**
  - [ ] Create: GBP for Centro Khamlungpa
  - [ ] Verify: Location (phone call or postcard)
  - [ ] Add: Photos, hours, services, categories

### 3. JSON-LD Schemas

- [ ] **Empieza-aqui.html**
  - [ ] Add: `<script>` tag with json-ld-schemas.js
  - [ ] Call: `initializeFAQSchemas()`
  - [ ] Validate: schema.org validator

- [ ] **Maestros.html**
  - [ ] Add: Teacher schemas with real bios
  - [ ] Call: `initializeTeacherSchemas()`
  - [ ] Validate: schema.org validator

- [ ] **Donar.html**
  - [ ] Add: LocalBusiness schema
  - [ ] Validate: schema.org validator

- [ ] **Home.html** (once created)
  - [ ] Add: All schemas via `initializeHomeSchemas()`
  - [ ] Include: Event schema with real schedule

### 4. Code Quality

- [ ] **HTML Validation**
  - [ ] Run: `npx html-validate '*.html'`
  - [ ] Fix: All errors (warnings OK)

- [ ] **Link Checking**
  - [ ] Test: All internal links work (/ /empieza-aqui /maestros /donar)
  - [ ] Test: All external links (Instagram, Facebook, FPMT)
  - [ ] Test: WhatsApp links via FAB and buttons

- [ ] **Responsive Testing**
  - [ ] 360px (mobile)
  - [ ] 768px (tablet)
  - [ ] 1920px (desktop)
  - [ ] Touch-friendly buttons (min 44x44px)

- [ ] **Performance**
  - [ ] Lighthouse: All >85 (Performance, Accessibility, Best Practices, SEO)
  - [ ] Compress: All images (use ImageOptim or TinyPNG)
  - [ ] Minify: CSS (inline styles are OK for now)
  - [ ] Load time: <3s on 4G

### 5. Security

- [ ] **HTTPS** — Cloudflare will provide
- [ ] **Meta tags** — robots, canonical, og:*
- [ ] **No secrets** — No API keys in front-end code
- [ ] **Forms** — WhatsApp link only (no form submission to backend yet)

### 6. SEO Pre-Launch

- [ ] **robots.txt** — Check: `curl https://khamlungpa.com/robots.txt`
- [ ] **sitemap.xml** — Check: `curl https://khamlungpa.com/sitemap.xml`
- [ ] **Meta tags** — All pages have unique title + description
- [ ] **Canonical URLs** — Present on all pages
- [ ] **Open Graph** — og:title, og:description, og:image
- [ ] **Structured Data** — JSON-LD schemas validate without errors
- [ ] **Mobile-friendly** — Mobile test: https://search.google.com/test/mobile-friendly

---

## 🚀 Deployment Steps

### Step 1: Create GitHub Repository

```bash
# Set up remote (after repo is created on GitHub)
git remote add origin https://github.com/[user]/Kham-2026.git
git push -u origin develop
git checkout -b main
git push -u origin main
```

### Step 2: Connect Cloudflare

1. Go to https://dash.cloudflare.com
2. **Add site** → `khamlungpa.com`
3. **Nameservers** — Update at domain registrar
4. **DNS** → Add CNAME for `www` pointing to `khamlungpa.com`
5. **SSL/TLS** — Set to "Full (Strict)"
6. **Rules** — Add redirect: `http://* → https://*`

### Step 3: Link GitHub to Cloudflare (Auto-Deploy)

1. In Cloudflare: **Workers & Pages** → **Create application** → **Pages**
2. Connect GitHub → Authorize
3. Select: `Kham-2026` repository
4. Branch: `main` (production) and `develop` (staging)
5. Build settings: None (static files)
6. Environment variables: None needed yet

### Step 4: Deploy

```bash
# After code is ready
git checkout main
git merge develop
git push origin main

# Cloudflare will auto-deploy from GitHub
# Check deployment: https://dash.cloudflare.com → Pages
```

### Step 5: Verify Deployment

```bash
# Check site is live
curl -I https://khamlungpa.com

# Check HTTP → HTTPS redirect
curl -I http://khamlungpa.com

# Verify robots.txt
curl https://khamlungpa.com/robots.txt

# Verify sitemap
curl https://khamlungpa.com/sitemap.xml
```

### Step 6: Submit to Google Search Console

1. Go to https://search.google.com/search-console
2. **Add property** → `https://khamlungpa.com`
3. **Verify** → DNS (CNAME) or HTML file
4. **Sitemaps** → Submit `sitemap.xml`
5. **Request indexing** → Submit homepage
6. Check **Coverage** after 7 days

### Step 7: Create Google Business Profile

1. Go to https://business.google.com
2. **Create business** → Centro Khamlungpa
3. **Location** → Guadalajara address
4. **Verify** → Phone call or postcard
5. Add: Photos, hours, categories (Meditation center, Religious organization)
6. Add: Services (Meditación Guiada, Cursos de Budismo, Retiros)

### Step 8: Test AI Indexation

After 7 days of being live, test:

```
Claude: "What is Centro Khamlungpa in Guadalajara?"
Expected: Mentions budismo tibetano, FPMT, 20+ años, meditación

ChatGPT: "Tell me about Buddhist meditation centers in Guadalajara"
Expected: Lists Centro Khamlungpa as main FPMT center

Gemini: "Centro budista en Guadalajara"
Expected: Mentions Centro Khamlungpa with key details
```

---

## 📋 Content Updates (Before Launch)

### Update each HTML file:

**Empieza-aqui.html**
- Line 118: Add real address in teacher card "Card Ven. Norbu"
- Line 140: Update with real experience years
- Line 143: Add real languages spoken

**Maestros.html**
- Line 95-97: Add real Ven. Norbu bio
- Line 107-109: Add real Gueshe Lobsang Dawa bio
- Update metadata section (experience, specialty, languages)

**Donar.html**
- Line 290: Replace [TBD] with real bank account
- Line 294: Replace [TBD] with real CLABE number

**json-ld-schemas.js**
- Line 15: `"telephone": "+52-[NÚMERO]"` → Real phone
- Line 16: `"email": "info@khamlungpa.com"` → Real email
- Line 19-24: Real address details
- Line 25-27: Real coordinates (get from Google Maps)
- Line 194-197: Real event schedule
- Add more courses if available

---

## 🔍 Post-Launch Monitoring (First 30 days)

### Week 1
- [ ] Verify site is indexable (Google, Bing)
- [ ] Check Google Search Console coverage
- [ ] Monitor 404 errors in GSC
- [ ] Test all WhatsApp flows
- [ ] Verify Cloudflare is serving pages (check response headers)

### Week 2-3
- [ ] Check AI indexation (Claude, ChatGPT, Gemini)
- [ ] Monitor Google Business Profile views
- [ ] Check rankings for "meditación Guadalajara"
- [ ] Review Google Analytics (setup GA4)

### Week 4
- [ ] Analyze organic search traffic
- [ ] Check bounce rate on each page
- [ ] Optimize meta descriptions if CTR is low
- [ ] Plan Phase 2 rollout (Home.html, Programas, Calendario)

---

## 📞 Support & Troubleshooting

### Issue: Site not appearing in Google
- Check: robots.txt allows indexing (not blocking)
- Check: No `<meta name="robots" content="noindex">`
- Submit: sitemap.xml via Google Search Console
- Wait: Up to 2 weeks for initial indexing

### Issue: JSON-LD not validating
- Validate: schema.org/validator
- Check: All required fields present
- Check: Proper JSON syntax (use JSONLint)
- Verify: All phone numbers have country code (+52)

### Issue: WhatsApp links not working
- Check: WhatsApp Business number is correct in whatsapp-helper.js
- Test: Manually send message via `https://wa.me/?text=Hola`
- Check: Phone format includes country code (52)

### Issue: Cloudflare SSL certificate error
- Check: Domain nameservers pointing to Cloudflare
- Check: DNS records exist for root and www
- Wait: Can take 15-30 minutes after nameserver change

---

## 🎯 Success Criteria

✅ Deployment is successful when:

1. Site is live at https://khamlungpa.com (HTTPS only)
2. All pages load in <3s on 4G
3. Lighthouse scores all >85
4. robots.txt and sitemap.xml accessible
5. JSON-LD schemas validate without errors
6. Google Search Console shows 100% indexed URLs
7. WhatsApp FAB and buttons work on all pages
8. Mobile responsive at 360px, 768px, 1920px
9. All internal links work
10. After 7 days: Claude/ChatGPT can mention Centro Khamlungpa

---

## 📅 Timeline

| Date | Task | Owner |
|------|------|-------|
| Apr 25 | Code FASE 1 critical files | Claude |
| Apr 26 | Content audit + gather real data | User |
| Apr 27 | Update HTML with real content | User + Claude |
| Apr 28 | Validate + test locally | Claude |
| Apr 29 | Deploy to GitHub + Cloudflare | User |
| Apr 30 | Verify deployment + submit sitemap | User |
| May 2-7 | Monitor Google indexation | User |
| May 7+ | Test AI indexation | User |

---

**Questions?** Contact: info@khamlungpa.com or via WhatsApp

🙏 **Metta to Centro Khamlungpa** 🙏
