# 🚀 Deployment Guide - Step by Step

This guide will walk you through deploying your portfolio to various hosting platforms.

## 📋 Pre-Deployment Checklist

Before deploying, ensure you've:

- [ ] Added all your images to `public/images/`
- [ ] Updated all data files in `src/data/`
- [ ] Added your resume PDF to `public/resume/`
- [ ] Tested the site locally (`npm run dev`)
- [ ] Built successfully (`npm run build`)
- [ ] Updated social media links
- [ ] Checked all external links work

## 🌐 Deployment Methods

### Method 1: Netlify (Easiest & Recommended)

**Why Netlify?**
- Free hosting for static sites
- Automatic deployments from GitHub
- Custom domain support
- SSL certificates (HTTPS)
- Form handling
- Serverless functions support

**Steps:**

1. **Push your code to GitHub:**
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

2. **Deploy on Netlify:**
   - Go to https://netlify.com and sign up
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Authorize Netlify to access your GitHub
   - Select your portfolio repository
   
3. **Configure build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

4. **Done!** Your site will be live at `random-name.netlify.app`

**Optional: Custom Domain:**
   - Click "Domain settings"
   - Click "Add custom domain"
   - Follow DNS configuration instructions

**Future Updates:**
   - Just push to GitHub: `git push`
   - Netlify automatically rebuilds and redeploys!

---

### Method 2: Vercel (Great Alternative)

**Why Vercel?**
- Optimized for React/Vite projects
- Lightning-fast global CDN
- Automatic HTTPS
- Preview deployments for every commit

**Steps:**

1. **Push code to GitHub** (same as above)

2. **Deploy on Vercel:**
   - Go to https://vercel.com and sign up
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite configuration
   - Click "Deploy"

3. **Done!** Your site will be live at `portfolio.vercel.app`

**Future Updates:**
   - Push to GitHub
   - Automatic redeployment

---

### Method 3: GitHub Pages (Free GitHub Hosting)

**Why GitHub Pages?**
- Completely free
- Easy for GitHub users
- Simple setup

**Steps:**

1. **Install gh-pages:**
```bash
npm install --save-dev gh-pages
```

2. **Update package.json:**

Add these lines to `package.json`:

```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

Replace `yourusername` with your GitHub username and `portfolio` with your repo name.

3. **Create repository on GitHub:**
   - Name it `portfolio` (or any name)
   - Make it public

4. **Push code:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

5. **Deploy:**
```bash
npm run deploy
```

6. **Enable GitHub Pages:**
   - Go to repository settings
   - Scroll to "Pages"
   - Source should be set to `gh-pages` branch
   - Your site will be live at `https://yourusername.github.io/portfolio`

**Future Updates:**
```bash
npm run deploy
```

---

### Method 4: Traditional Web Hosting (cPanel, etc.)

**For shared hosting or VPS:**

1. **Build the project:**
```bash
npm run build
```

2. **Upload files:**
   - Open your FTP client (FileZilla, etc.)
   - Connect to your hosting
   - Upload entire `dist/` folder contents to `public_html/` or `www/`

3. **Configure domain:**
   - Point your domain to the uploaded folder
   - Ensure `.htaccess` is configured for SPAs:

Create `.htaccess` in your upload folder:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**Future Updates:**
   - Run `npm run build` locally
   - Upload new `dist/` contents via FTP

---

### Method 5: Render (Free Tier Available)

**Steps:**

1. **Push code to GitHub**

2. **Deploy on Render:**
   - Go to https://render.com
   - Click "New" → "Static Site"
   - Connect your GitHub repository
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Create Static Site"

---

### Method 6: Cloudflare Pages

**Steps:**

1. **Push code to GitHub**

2. **Deploy on Cloudflare Pages:**
   - Go to https://pages.cloudflare.com
   - Click "Create a project"
   - Connect GitHub
   - Select repository
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Click "Save and Deploy"

---

## 🔧 Troubleshooting Deployment Issues

### Issue: Build fails on hosting platform

**Solution:**
```bash
# Locally test the build
npm run build

# If it fails, check:
# 1. All imports are correct
# 2. No missing dependencies
# 3. Node version compatibility (use Node 16+)
```

### Issue: Images not loading after deployment

**Causes & Solutions:**

1. **Wrong path**: Use `/images/file.png` (with leading `/`)
2. **Case sensitivity**: Ensure exact file name match
3. **Missing files**: Verify images are in `public/images/`

### Issue: Routing not working (404 on refresh)

**Solution for GitHub Pages:**

Add `_redirects` file in `public/` folder:
```
/*    /index.html   200
```

**Solution for Netlify:**

Create `netlify.toml` in root:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Issue: Environment variables needed

**For Netlify/Vercel:**
- Go to site settings → Environment variables
- Add your variables (e.g., API keys)

---

## 📊 Post-Deployment Checklist

After deployment:

- [ ] Test all navigation links
- [ ] Check mobile responsiveness
- [ ] Verify all images load
- [ ] Test contact form
- [ ] Check social media links
- [ ] Test resume download
- [ ] Verify all project links
- [ ] Check loading speed (use PageSpeed Insights)
- [ ] Test on different browsers
- [ ] Add site to Google Search Console

---

## 🔄 Updating Your Deployed Site

### For Netlify/Vercel (Continuous Deployment):

1. Make changes locally
2. Commit and push to GitHub:
```bash
git add .
git commit -m "Update projects"
git push
```
3. Hosting automatically rebuilds and redeploys!

### For GitHub Pages:

```bash
npm run deploy
```

### For Traditional Hosting:

1. `npm run build`
2. Upload new `dist/` contents via FTP

---

## 🌟 Optional Enhancements

### Add Custom Domain

**Netlify:**
1. Domain settings → Add custom domain
2. Update DNS records at your domain registrar
3. Netlify provides automatic HTTPS

**Vercel:**
1. Project settings → Domains
2. Add your domain
3. Update DNS records

### Add Google Analytics

1. Get tracking ID from Google Analytics
2. Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Setup Contact Form Backend

**Option 1: Netlify Forms** (easiest)
```jsx
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  {/* rest of form */}
</form>
```

**Option 2: Formspree**
- Sign up at formspree.io
- Get form endpoint
- Update form action

**Option 3: EmailJS**
- Install: `npm install @emailjs/browser`
- Configure EmailJS service
- Update Contact component

---

## 📈 Monitoring & Analytics

### Recommended Tools:

1. **Google Analytics** - User behavior tracking
2. **Google Search Console** - SEO monitoring
3. **Uptime Robot** - Site uptime monitoring
4. **Cloudflare Analytics** - Privacy-focused analytics
5. **PageSpeed Insights** - Performance monitoring

---

## 🎯 SEO Optimization

After deployment:

1. **Submit Sitemap:**
   - Generate sitemap at `/sitemap.xml`
   - Submit to Google Search Console

2. **Add Meta Tags** (already included in template)

3. **Optimize Images:**
   - Use WebP format
   - Compress images
   - Add alt text

4. **Test Performance:**
   - https://pagespeed.web.dev
   - https://gtmetrix.com

---

## 💡 Best Practices

1. **Always test locally before deploying**
2. **Use semantic commit messages**
3. **Keep dependencies updated** (`npm update`)
4. **Monitor site performance regularly**
5. **Backup your code** (GitHub is your backup!)
6. **Use environment variables for sensitive data**
7. **Enable HTTPS** (automatic on Netlify/Vercel)

---

## 🆘 Need Help?

If you encounter issues:

1. Check hosting platform documentation
2. Search error messages on Stack Overflow
3. Check GitHub Issues for similar problems
4. Contact hosting support (Netlify/Vercel have great support)

---

**Congratulations on deploying your portfolio! 🎉**

Your professional presence is now live on the internet!
