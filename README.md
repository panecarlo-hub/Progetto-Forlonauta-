# Sito Web Gian Luca Forloni

Sito web statico professionale per la promozione dei servizi di consulenza marketing, project management digitale e creazione siti web.

## 📁 Struttura del Progetto

```
Progetto-Forlonauta-/
│
├── index.html                 # Pagina principale (single page)
├── favicon.svg                # Favicon in formato SVG
├── robots.txt                 # File per i motori di ricerca
├── sitemap.xml                # Mappa del sito per SEO
├── .htaccess                  # Configurazione server Apache
├── .gitignore                 # File da ignorare in Git
│
├── assets/
│   ├── css/
│   │   └── style.css         # Tutti gli stili (mobile-first)
│   │
│   ├── js/
│   │   └── main.js           # JavaScript per interazioni
│   │
│   └── img/                  # Cartella per immagini
│       └── (immagini qui)
│
└── README.md                 # Questo file
```

## 🚀 Caratteristiche

- **Responsive mobile-first**: Ottimizzato per tutti i dispositivi
- **Performance**: Caricamento veloce, compressione GZIP, caching browser ottimizzato
- **SEO avanzato**: Meta tag completi, Open Graph, Twitter Card, Structured Data (JSON-LD)
- **Accessibile**: Contrasto colori adeguato, navigazione da tastiera, skip-to-content
- **Form contatti**: Con validazione client-side e invio via mailto
- **Animazioni**: Micro-animazioni leggere con rispetto per prefers-reduced-motion
- **Sicurezza**: Header di sicurezza configurati (.htaccess)
- **Favicon moderno**: SVG scalabile con iniziali personalizzate

## 📄 File di Configurazione

### `.htaccess`
Configurazione Apache che include:
- **HTTPS redirect**: Forza tutte le connessioni su HTTPS
- **Compressione GZIP**: Riduce dimensioni file trasferiti (CSS, JS, HTML)
- **Browser caching**: Cache ottimizzata per immagini, CSS, JS
- **Security headers**: XSS protection, clickjacking protection, MIME sniffing prevention
- **UTF-8 encoding**: Corretta codifica caratteri

### `robots.txt`
- Indica ai motori di ricerca cosa indicizzare
- Include riferimento alla sitemap
- **Nota**: Aggiorna l'URL con il tuo dominio reale

### `sitemap.xml`
- Mappa XML di tutte le sezioni del sito
- Aiuta Google e altri motori a indicizzare correttamente
- **Nota**: Aggiorna gli URL e le date quando modifichi contenuti

### `.gitignore`
- Esclude file temporanei, cache, backup dal repository Git
- Include pattern per OS diversi (macOS, Windows, Linux)

### `favicon.svg`
- Favicon moderno in formato SVG con iniziali "GF"
- Colore primario del brand (#4A90E2)
- Supporto automatico dark mode nei browser moderni

## 🎨 Palette Colori

```css
Primario (CTA):           #4A90E2
Secondario (titoli):      #1F2A44
Testo principale:         #1F2937
Testo secondario:         #6B7280
Sfondo principale:        #FFFFFF
Sfondo alternato:         #F5F7FA
CTA hover:                #357ABD
Border light:             #E5E7EB
```

## ✏️ Come Modificare i Contenuti

### Modificare i Testi

1. Apri `index.html` con un editor di testo
2. Cerca la sezione che vuoi modificare usando i commenti HTML (es. `<!-- Hero Section -->`)
3. Modifica il testo tra i tag HTML
4. Salva il file

**Esempio - Modificare il titolo principale:**

```html
<!-- Cerca questa riga in index.html -->
<h1 class="hero-title">Gian Luca Forloni</h1>

<!-- Modificala come preferisci -->
<h1 class="hero-title">Il Tuo Nome</h1>
```

### Modificare i Colori

1. Apri `assets/css/style.css`
2. Cerca la sezione "PALETTE COLORI" all'inizio del file
3. Sostituisci i codici colore esistenti con i tuoi
4. Usa la funzione "Cerca e Sostituisci" del tuo editor per cambiare tutti i riferimenti

**Esempio - Cambiare il colore primario:**

```css
/* Nel file style.css, usa Cerca e Sostituisci */
Cerca:      #4A90E2
Sostituisci: #FF5733  (il tuo nuovo colore primario)
```

### Modificare il Font

1. Apri `index.html`
2. Cerca la sezione `<!-- Google Fonts -->`
3. Sostituisci il link con il font che preferisci da [Google Fonts](https://fonts.google.com)
4. Apri `assets/css/style.css`
5. Cerca `font-family: 'Inter'` e sostituiscilo con il nuovo font

### Modificare le Informazioni di Contatto

Nel file `index.html`, cerca la sezione `<!-- Contatti Section -->` e modifica:

```html
<!-- Email -->
<a href="mailto:info@gianlucaforloni.com">info@gianlucaforloni.com</a>

<!-- LinkedIn -->
<a href="https://www.linkedin.com/in/gianlucaforloni">linkedin.com/in/gianlucaforloni</a>
```

**IMPORTANTE**: Ricordati di modificare anche l'indirizzo email nel file `assets/js/main.js` alla riga dove si trova `mailto:info@gianlucaforloni.com` (circa linea 150).

## 🖼️ Come Aggiungere Immagini

### 1. Preparare le Immagini

- Formato consigliato: **JPG** per foto, **PNG** per loghi/icone, **WebP** per performance ottimali
- Dimensioni consigliate:
  - Hero image: 800x800px
  - Card icons: 400x400px
  - Timeline/Case study images: 600x400px
- Ottimizza le immagini prima del caricamento usando strumenti come [TinyPNG](https://tinypng.com)

### 2. Caricare le Immagini

1. Copia i file immagine nella cartella `assets/img/`
2. Rinominali in modo descrittivo (es. `hero-profilo.jpg`, `icon-marketing.png`)

### 3. Inserire nel Codice HTML

**Esempio - Sostituire il placeholder nella Hero:**

Nel file `index.html`, cerca:

```html
<div class="hero-image">
    <div class="image-placeholder">
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- SVG placeholder -->
        </svg>
    </div>
</div>
```

Sostituisci con:

```html
<div class="hero-image">
    <img src="assets/img/hero-profilo.jpg"
         alt="Gian Luca Forloni - Consulente Marketing"
         loading="eager">
</div>
```

**Esempio - Aggiungere icone alle card:**

```html
<div class="card">
    <img src="assets/img/icon-marketing.png"
         alt="Marketing Automation"
         class="card-icon-img"
         loading="lazy">
    <h3>Marketing Automation, CRM e CDP</h3>
    <p>Progettazione e implementazione...</p>
</div>
```

Poi aggiungi questo CSS in `style.css`:

```css
.card-icon-img {
    width: 80px;
    height: 80px;
    object-fit: contain;
    margin-bottom: 16px;
}
```

## 📱 Testare il Sito in Locale

### Metodo 1: Aprire direttamente il file

1. Fai doppio clic su `index.html`
2. Si aprirà nel browser predefinito

### Metodo 2: Usare un server locale (consigliato)

**Con Python 3:**

```bash
cd Progetto-Forlonauta-
python -m http.server 8000
```

Poi apri il browser e vai su `http://localhost:8000`

**Con Node.js (se hai installato live-server):**

```bash
npx live-server
```

**Con Visual Studio Code:**

Installa l'estensione "Live Server" e clicca su "Go Live" in basso a destra.

## 🌐 Deploy su Hostinger

### Preparazione

1. **Crea un account Hostinger** (se non ce l'hai già)
2. **Acquista un hosting** (anche il piano base va bene per un sito statico)
3. **Registra un dominio** o usa un sottodominio fornito da Hostinger

### Step 1: Accedi al Pannello di Controllo

1. Fai login su [Hostinger](https://www.hostinger.it)
2. Vai su "Hosting" nella dashboard
3. Clicca su "Gestisci" accanto al tuo piano hosting

### Step 2: Carica i File via File Manager

1. Nel pannello di controllo, clicca su "File Manager" (o "Gestore File")
2. Naviga nella cartella `public_html` (questa è la root del tuo sito)
3. Elimina i file di default se presenti (es. `index.html` di default, `default.php`)
4. Carica tutti i file del progetto:
   - `index.html` (direttamente in `public_html`)
   - Cartella `assets/` con tutto il contenuto
   - File `README.md` (facoltativo)

### Step 3: Verifica Permessi File

1. Assicurati che i permessi dei file siano:
   - File: `644`
   - Cartelle: `755`
2. Per modificare i permessi, clicca destro sul file/cartella → "Permessi" o "Permissions"

### Step 4: Configurazione Dominio

1. Vai su "Domini" nel pannello Hostinger
2. Assicurati che il tuo dominio punti alla cartella `public_html`
3. Se usi un dominio esterno, configura i DNS seguendo le istruzioni Hostinger

### Step 5: Personalizza File di Configurazione

**IMPORTANTE**: Prima di pubblicare, aggiorna questi file con il tuo dominio reale:

1. **robots.txt** - Sostituisci `www.gianlucaforloni.com` con il tuo dominio
2. **sitemap.xml** - Sostituisci tutti gli URL e aggiorna la data in `<lastmod>`
3. **index.html** - Cerca e sostituisci `www.gianlucaforloni.com` con il tuo dominio nei meta tag

### Step 6: Testa il Sito

1. Apri il browser e visita il tuo dominio
2. Verifica che tutte le pagine funzionino
3. Testa il menu mobile, il form contatti, le FAQ
4. Controlla su diversi dispositivi (mobile, tablet, desktop)
5. Verifica che HTTPS sia attivo (lucchetto verde nel browser)

### Metodo Alternativo: FTP

Se preferisci usare un client FTP come FileZilla:

1. Scarica [FileZilla Client](https://filezilla-project.org/)
2. Prendi le credenziali FTP dal pannello Hostinger:
   - Host: `ftp.tuosito.com`
   - Username: `tuousername`
   - Password: `tuapassword`
   - Porta: `21`
3. Connettiti e carica i file nella cartella `public_html`

### Configurazione HTTPS (SSL)

1. Nel pannello Hostinger, vai su "SSL"
2. Clicca su "Installa SSL" per il tuo dominio
3. Hostinger fornisce un certificato SSL gratuito (Let's Encrypt)
4. Attendi 10-15 minuti per l'attivazione
5. **Il redirect HTTPS è già configurato** nel file `.htaccess` incluso nel progetto

**Nota**: Il file `.htaccess` incluso nel progetto già contiene:
- ✅ Redirect automatico da HTTP a HTTPS
- ✅ Compressione GZIP per performance
- ✅ Cache del browser ottimizzata
- ✅ Header di sicurezza
- ✅ Protezione file sensibili

Non serve modificare nulla, basta caricarlo su Hostinger!

## 🔧 Personalizzazioni Avanzate

### Aggiungere Google Analytics

1. Crea un account [Google Analytics](https://analytics.google.com)
2. Ottieni il tuo ID di monitoraggio (es. `G-XXXXXXXXXX`)
3. Aggiungi questo codice prima del tag `</head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Aggiungere Facebook Pixel

```html
<!-- Facebook Pixel -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'IL_TUO_PIXEL_ID');
  fbq('track', 'PageView');
</script>
<noscript>
  <img height="1" width="1" style="display:none"
       src="https://www.facebook.com/tr?id=IL_TUO_PIXEL_ID&ev=PageView&noscript=1"/>
</noscript>
```

### Migliorare la SEO

**Il sito include già tutto il necessario per la SEO!**

✅ **Sitemap.xml** - Già creato, aggiorna solo gli URL con il tuo dominio
✅ **Robots.txt** - Già creato, aggiorna solo l'URL della sitemap
✅ **Meta Tags** - Open Graph, Twitter Card e meta description già configurati
✅ **Structured Data** - JSON-LD per Person, ProfessionalService e WebSite
✅ **Canonical URL** - Già configurato nei meta tag

**Cosa fare dopo il deploy:**

1. **Google Search Console**:
   - Vai su [search.google.com/search-console](https://search.google.com/search-console)
   - Aggiungi il tuo sito
   - Invia la sitemap (https://tuosito.com/sitemap.xml)

2. **Verifica Structured Data**:
   - Testa con [Google Rich Results Test](https://search.google.com/test/rich-results)
   - Inserisci l'URL del tuo sito
   - Verifica che Person e ProfessionalService siano riconosciuti

3. **Personalizza Meta Description** (opzionale):
   - Nel file `index.html`, modifica il tag:
   ```html
   <meta name="description" content="La tua descrizione (max 155 caratteri)">
   ```

### Ottimizzare le Performance

**Il sito è già ottimizzato!**

✅ **Compressione GZIP** - Configurata in `.htaccess`
✅ **Browser Caching** - Cache ottimizzata per immagini (1 anno), CSS/JS (1 mese)
✅ **Security Headers** - XSS protection, clickjacking prevention
✅ **No dipendenze pesanti** - Solo Google Fonts (preconnect configurato)

**Per migliorare ulteriormente:**

1. **Comprimi Immagini** prima di caricarle:
   - Usa [TinyPNG](https://tinypng.com) o [Squoosh](https://squoosh.app)
   - Formato consigliato: WebP (supporto moderno) o JPG ottimizzato
   - Dimensioni max: 1200px larghezza per hero, 800px per altre sezioni

2. **Minimizza CSS e JS** (opzionale per produzione):
   - Usa [CSS Minifier](https://cssminifier.com/)
   - Usa [JS Compress](https://jscompress.com/)
   - Rinomina i file minificati: `style.min.css`, `main.min.js`

3. **Test Performance**:
   - [Google PageSpeed Insights](https://pagespeed.web.dev/)
   - [GTmetrix](https://gtmetrix.com/)
   - Target: 90+ su mobile e desktop

## 📋 Checklist Pre-Pubblicazione

Prima di pubblicare il sito, verifica:

**Contenuti:**
- [ ] Tutti i testi sono corretti e senza errori di ortografia
- [ ] Le informazioni di contatto sono aggiornate (email, LinkedIn)
- [ ] Le immagini sono ottimizzate e caricate nella cartella `assets/img/`
- [ ] I placeholder sono stati sostituiti (hero image, og-image.jpg)

**Configurazione:**
- [ ] **robots.txt**: URL sitemap aggiornato con il tuo dominio
- [ ] **sitemap.xml**: Tutti gli URL aggiornati con il tuo dominio
- [ ] **index.html**: Meta tag Open Graph con URL corretto
- [ ] **index.html**: Structured Data con email e informazioni corrette
- [ ] **.htaccess**: Caricato su Hostinger (gestisce HTTPS, cache, sicurezza)
- [ ] **favicon.svg**: Caricato nella root del sito

**Test Funzionali:**
- [ ] Il sito è responsive su mobile, tablet e desktop
- [ ] Il form contatti funziona correttamente
- [ ] Tutti i link interni ed esterni funzionano
- [ ] Menu mobile si apre/chiude correttamente
- [ ] FAQ accordion funziona
- [ ] Animazioni scroll visibili

**SEO e Performance:**
- [ ] Meta title e description sono personalizzati
- [ ] HTTPS/SSL è attivo (lucchetto verde)
- [ ] Sitemap inviata a Google Search Console
- [ ] Structured Data testata con Google Rich Results Test
- [ ] Performance testata con PageSpeed Insights (target: 90+)
- [ ] Google Analytics configurato (se necessario)

**Compatibilità Browser:**
- [ ] Chrome/Edge (versione recente)
- [ ] Firefox (versione recente)
- [ ] Safari (macOS/iOS)

## 🐛 Risoluzione Problemi Comuni

### Il menu mobile non si apre

1. Verifica che il file `main.js` sia caricato correttamente
2. Apri la Console del browser (F12) e controlla se ci sono errori JavaScript
3. Verifica che l'ID degli elementi HTML corrisponda al JavaScript

### Le immagini non vengono visualizzate

1. Controlla che il percorso sia corretto (es. `assets/img/nomefile.jpg`)
2. Verifica che le maiuscole/minuscole siano corrette (Linux è case-sensitive)
3. Assicurati che i file siano stati caricati nella cartella corretta

### Il form non invia email

1. Il form usa `mailto:` che apre il client email del dispositivo
2. Se vuoi un sistema più avanzato, dovrai integrare un backend (PHP, servizi come Formspree, ecc.)

### Il sito non appare su Google

1. Attendi 1-2 settimane (Google impiega tempo per indicizzare)
2. Invia la sitemap a [Google Search Console](https://search.google.com/search-console)
3. Crea contenuti di qualità e ottimizza la SEO

## 📞 Supporto

Per domande o problemi tecnici:

- **Email**: info@gianlucaforloni.com
- **LinkedIn**: [linkedin.com/in/gianlucaforloni](https://linkedin.com/in/gianlucaforloni)

## 📄 Licenza

© 2025 Gian Luca Forloni. Tutti i diritti riservati.

---

**Ultimo aggiornamento**: Gennaio 2025
**Versione**: 1.0.0