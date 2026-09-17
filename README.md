# HOLIRISE Personal Development Center

Learn • Grow • Flourish

A modern, responsive website for HOLIRISE Personal Development Center — a purpose-driven organization based in Dessie, Ethiopia, dedicated to holistic personal and community growth.

## Tech Stack

- **React 18** with Vite
- **Bootstrap 5** + **Bootstrap Icons**
- Vanilla CSS (custom styles)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

This creates a `dist/` folder with optimized, static files.

### Preview Production Build

```bash
npm run preview
```

---

## How to Deploy Manually

### Option 1: Deploy to a Web Server (Apache / Nginx)

1. **Build the app**
   ```bash
   npm run build
   ```

2. **Upload the `dist/` folder** to your web server using FTP, SFTP, or SSH.
   - For Apache: copy contents into `/var/www/html/` or your site's document root.
   - For Nginx: copy contents into your configured `root` directory.

3. **Configure the server** to handle client-side routing (SPA fallback):
   - **Apache** — create a `.htaccess` file inside `dist/`:
     ```apache
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
     ```
   - **Nginx** — add to your server block:
     ```nginx
     location / {
       try_files $uri $uri/ /index.html;
     }
     ```

4. **Restart the server**
   ```bash
   sudo systemctl restart apache2    # Apache
   sudo systemctl restart nginx      # Nginx
   ```

5. Visit your domain to see the live site.

---

### Option 2: Deploy to GitHub Pages

1. **Create a GitHub repository** and push your code.

2. **Install the GitHub Pages deploy tool**
   ```bash
   npm install -D gh-pages
   ```

3. **Add deploy scripts** to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. Go to **Settings > Pages** in your GitHub repo — the site will be live at `https://<username>.github.io/<repo-name>/`.

---

### Option 3: Deploy to Netlify

1. Push your code to GitHub.

2. Log in to [Netlify](https://www.netlify.com) and click **"Add new site" > "Import an existing project"**.

3. Select your GitHub repository.

4. Set the build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

5. Click **Deploy**. Netlify provides a live URL automatically.

---

### Option 4: Deploy to Vercel

1. Push your code to GitHub.

2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.

3. Import your GitHub repository.

4. Vercel auto-detects Vite — confirm the settings:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`

5. Click **Deploy**. Your site goes live instantly.

---

### Option 5: Manual File Upload (cPanel / Shared Hosting)

1. Run `npm run build` locally.

2. Log in to your hosting control panel (e.g., cPanel).

3. Open **File Manager** and navigate to `public_html/` (or your domain's root).

4. Upload **all contents** of the `dist/` folder (not the folder itself).

5. Create a `.htaccess` file in `public_html/` with the SPA fallback rules from Option 1.

6. Visit your domain.

---

## Improvements & Recommendations

### Performance
- **Image optimization** — compress team photos and other images using tools like [Squoosh](https://squoosh.app) or [TinyPNG](https://tinypng.com). Use WebP format for smaller file sizes.
- **Lazy loading** — add `loading="lazy"` to `<img>` tags below the fold.
- **Code splitting** — use `React.lazy()` and `Suspense` to split components into separate bundles.
- **Vite config** — configure `build.rollupOptions.output.manualChunks` to separate vendor libraries (React, Bootstrap) into their own cacheable chunks.

### SEO
- Add a `<title>` and `<meta name="description">` in `index.html`.
- Add Open Graph (`og:title`, `og:description`, `og:image`) meta tags for social sharing.
- Add a `robots.txt` and `sitemap.xml` in the `public/` folder.
- Use semantic HTML elements (already mostly done with `<footer>`, `<section>`, etc.).

### Accessibility
- Ensure all images have meaningful `alt` attributes.
- Test keyboard navigation through all interactive elements.
- Verify color contrast ratios meet WCAG AA standards.
- Add `aria-label` attributes to icon-only buttons/links.

### Security
- Set proper security headers on your web server (`X-Content-Type-Options`, `X-Frame-Options`, `Content-Security-Policy`).
- Enable HTTPS with a free SSL certificate from [Let's Encrypt](https://letsencrypt.org).

### Additional Features
- Add a **contact form** backend using a service like [Formspree](https://formspree.io), [EmailJS](https://www.emailjs.com), or a custom API.
- Implement **Google Analytics** or **Plausible** for visitor tracking.
- Add a **blog section** for news, articles, and program updates.
- Implement **multilingual support** (Amharic/English) for wider reach.

---

## Project Structure

```
holirise-personal-development-center/
├── public/
│   └── images/          # Team photos and assets
├── src/
│   ├── components/      # React components (Header, Footer, etc.)
│   ├── data/
│   │   └── siteData.js  # All site content and configuration
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── styles.css       # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## License

© 2026 HOLIRISE Personal Development Center. All Rights Reserved.
Developed by Birhanu Asmerom.
