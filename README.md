# 🚀 Rishi Mourya - Professional Developer Portfolio

A modern, responsive, and feature-rich portfolio website built with React, Vite, and Tailwind CSS. This portfolio showcases projects, skills, experience, education, and provides an easy way for potential clients and employers to get in touch.

![Portfolio Preview](https://via.placeholder.com/1200x600/0a0a0a/ef4444?text=Rishi+Mourya+Portfolio)

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, professional design with smooth animations
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 🎯 **SEO Optimized** - Meta tags and semantic HTML
- 📊 **Skills Visualization** - Animated skill bars showing proficiency levels
- 💼 **Project Showcase** - Filterable project gallery with live links
- 📅 **Timeline Experience** - Visual timeline for work experience
- 📧 **Contact Form** - Easy-to-use contact form with mailto integration
- 🔗 **Social Links** - Integrated social media profiles
- 📄 **Resume Download** - One-click resume download

## 🛠️ Tech Stack

### **Core Technologies**

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.3.1 | UI library for building component-based interfaces |
| **Vite** | 5.2.0 | Next-generation frontend build tool (10x faster than CRA) |
| **Tailwind CSS** | 3.4.3 | Utility-first CSS framework for rapid styling |
| **Framer Motion** | 11.0.0 | Production-ready animation library |
| **React Icons** | 5.0.0 | Popular icon library with 1000+ icons |
| **React Intersection Observer** | 9.8.0 | React wrapper for Intersection Observer API |

### **Why This Stack?**

1. **React + Vite**: Industry-standard combination offering incredible developer experience and production performance
2. **Tailwind CSS**: Enables rapid development with consistent design system, smaller bundle sizes
3. **No Backend Required**: Static site = free hosting, CDN-fast delivery, zero maintenance
4. **Easy Updates**: All content in JSON files - update data without touching code
5. **Future-Proof**: Established technologies with strong community support

## 📁 Project Structure

```
portfolio-project/
├── public/                      # Static assets
│   ├── images/                  # Project images, avatar
│   │   ├── avatar.png
│   │   ├── physio-app.png
│   │   ├── upbot.png
│   │   ├── banking-system.png
│   │   ├── job-search.png
│   │   ├── astrology-web.png
│   │   └── indian-shop.png
│   └── resume/                  # Resume PDF
│       └── Rishi_Mourya_Resume.pdf
│
├── src/
│   ├── components/              # React components
│   │   ├── Hero/
│   │   │   └── Hero.jsx         # Landing section with intro
│   │   ├── About/
│   │   │   └── About.jsx        # About section with stats
│   │   ├── Skills/
│   │   │   └── Skills.jsx       # Skills with progress bars
│   │   ├── Experience/
│   │   │   └── Experience.jsx   # Timeline of work experience
│   │   ├── Education/
│   │   │   └── Education.jsx    # Educational background
│   │   ├── Projects/
│   │   │   └── Projects.jsx     # Filterable project gallery
│   │   ├── Contact/
│   │   │   └── Contact.jsx      # Contact form
│   │   └── Layout/
│   │       ├── Navbar.jsx       # Navigation with smooth scroll
│   │       └── Footer.jsx       # Footer with social links
│   │
│   ├── data/                    # ⭐ DATA FILES - EDIT THESE TO UPDATE CONTENT
│   │   ├── personal.json        # Personal info, contact, social links
│   │   ├── projects.json        # Project details, links, technologies
│   │   ├── skills.json          # Skills organized by category
│   │   ├── experience.json      # Work experience details
│   │   └── education.json       # Educational qualifications
│   │
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles + Tailwind directives
│
├── index.html                   # HTML template with SEO meta tags
├── package.json                 # Dependencies and scripts
├── vite.config.js               # Vite configuration
├── tailwind.config.js           # Tailwind theme customization
├── postcss.config.js            # PostCSS configuration
└── README.md                    # This file

```

## 🎯 File Explanation

### **Essential Files (Don't Delete)**

| File | Purpose | Can Delete? |
|------|---------|-------------|
| `src/App.jsx` | Main app component, renders all sections | ❌ No |
| `src/main.jsx` | Entry point, mounts React app | ❌ No |
| `src/index.css` | Global styles, Tailwind directives | ❌ No |
| `index.html` | HTML template with meta tags | ❌ No |
| `package.json` | Dependencies and scripts | ❌ No |
| `vite.config.js` | Build configuration | ❌ No |
| `tailwind.config.js` | Theme colors, fonts, animations | ❌ No |

### **Data Files (Easy to Update)**

| File | Purpose | Update Frequency |
|------|---------|------------------|
| `src/data/personal.json` | Name, bio, contact, social links | Rarely |
| `src/data/projects.json` | Project details, add new projects here | Often |
| `src/data/skills.json` | Skills and proficiency levels | Sometimes |
| `src/data/experience.json` | Work history, achievements | When changing jobs |
| `src/data/education.json` | Degrees, certifications | Rarely |

### **Component Files**

| Component | Purpose | Optional? |
|-----------|---------|-----------|
| `Hero.jsx` | Landing section | ❌ Core |
| `About.jsx` | About me section | ❌ Core |
| `Skills.jsx` | Skills showcase | ✅ Yes (remove from App.jsx) |
| `Experience.jsx` | Work timeline | ✅ Yes (remove from App.jsx) |
| `Education.jsx` | Education history | ✅ Yes (remove from App.jsx) |
| `Projects.jsx` | Project gallery | ❌ Core |
| `Contact.jsx` | Contact form | ❌ Core |
| `Navbar.jsx` | Navigation | ❌ Core |
| `Footer.jsx` | Footer | ✅ Yes (but recommended) |

## 🚀 Getting Started

### **Prerequisites**

- Node.js (v16 or higher) - [Download here](https://nodejs.org/)
- npm (comes with Node.js)

### **Installation**

1. **Clone or download this project**
```bash
cd portfolio-project
```

2. **Install dependencies**
```bash
npm install
```

3. **Add your images**
   - Place your avatar in `public/images/avatar.png`
   - Add project images to `public/images/`
   - Add resume PDF to `public/resume/Rishi_Mourya_Resume.pdf`

4. **Update data files**
   - Edit `src/data/personal.json` with your info
   - Edit `src/data/projects.json` with your projects
   - Edit other data files as needed

5. **Run development server**
```bash
npm run dev
```

6. **Open browser**
   - Visit `http://localhost:3000`

## 📝 How to Update Content (After 1-2 Years)

### **Method 1: Update Data Files (No Coding Required)**

1. **Navigate to `src/data/` folder**
2. **Edit the JSON files:**

**Example: Adding a New Project**
```json
// src/data/projects.json
{
  "id": 7,
  "title": "New Amazing Project",
  "description": "Description of your new project",
  "technologies": ["React", "Node.js", "MongoDB"],
  "image": "/images/new-project.png",
  "category": "Web Application",
  "github": "https://github.com/yourusername/project",
  "live": "https://project-demo.com",
  "featured": true
}
```

**Example: Updating Experience**
```json
// src/data/experience.json
{
  "id": 4,
  "position": "Senior Full Stack Developer",
  "company": "New Company Name",
  "startDate": "Jan 2026",
  "endDate": "Present",
  "current": true,
  // ... rest of the details
}
```

3. **Rebuild the site:**
```bash
npm run build
```

4. **Deploy the `dist` folder** to your hosting

### **Method 2: Color Scheme Update**

To change colors, edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#your-color',  // Change this
    600: '#your-color',  // And this
    // ...
  }
}
```

## 🏗️ Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

The production files will be in the `dist/` folder.

## 🌐 Deployment Options

### **Option 1: Netlify (Recommended)**

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect GitHub and select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy"

**Continuous Deployment**: Every time you push to GitHub, Netlify automatically rebuilds and deploys!

### **Option 2: Vercel**

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New" → "Project"
4. Import your GitHub repository
5. Vercel auto-detects Vite settings
6. Click "Deploy"

### **Option 3: GitHub Pages**

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
},
"homepage": "https://yourusername.github.io/portfolio"
```

3. Deploy:
```bash
npm run deploy
```

### **Option 4: Traditional Hosting (cPanel, etc.)**

1. Run `npm run build`
2. Upload contents of `dist/` folder via FTP
3. Point domain to uploaded folder

## 🎨 Customization Guide

### **Change Color Scheme**

Edit `tailwind.config.js` → `theme.extend.colors.primary`

### **Change Fonts**

1. Update Google Fonts link in `index.html`
2. Update `tailwind.config.js` → `theme.extend.fontFamily`

### **Add/Remove Sections**

Edit `src/App.jsx` and comment out or remove sections:

```jsx
// Before
<Experience />
<Education />

// After (if you want to hide education)
<Experience />
{/* <Education /> */}
```

### **Modify Animations**

Edit `tailwind.config.js` → `theme.extend.animation` and `keyframes`

## 📱 Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| `sm` | 640px | Small tablets |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large screens |

## 🔧 Troubleshooting

### **Issue: Images not loading**
- Ensure images are in `public/images/`
- Use path `/images/filename.png` (with leading slash)
- Check file names match exactly (case-sensitive)

### **Issue: Build fails**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### **Issue: Slow performance**
- Optimize images (use WebP format, compress)
- Reduce animation complexity
- Remove unused Tailwind classes

## 📊 Performance Tips

1. **Optimize Images**: Use WebP format, compress before upload
2. **Lazy Loading**: Images automatically lazy-load
3. **Code Splitting**: Vite handles this automatically
4. **CDN Hosting**: Use Netlify/Vercel for global CDN

## 🔮 Future Enhancements

Suggested features you can add later:

1. **Blog Section**: Add a blog using markdown files
2. **Dark/Light Mode Toggle**: Add theme switcher
3. **Backend Integration**: Connect contact form to backend/email service
4. **CMS Integration**: Use Contentful/Strapi for content management
5. **Analytics**: Add Google Analytics or Plausible
6. **i18n**: Multi-language support
7. **Search Functionality**: Search through projects and blog posts
8. **Testimonials Section**: Add client testimonials

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## 🤝 Contributing

If you want to improve this portfolio:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 💬 Support

For questions or issues:
- Email: rishi.kr.mbd@gmail.com
- LinkedIn: [Rishi Mourya](https://linkedin.com/in/rishimourya)
- GitHub Issues: Create an issue on this repository

## 🎉 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

**Made with ❤️ by Rishi Mourya**

*Last Updated: January 2026*


run this project  --> react and tailwind and vite

npm install
npm run dev


deployment procedure
1. npm install gh-pages --save-dev
2. need to add vite.config

  base: '/rishi-portfolio/',

3. add these line in 'scripts"
 "predeploy": "npm run build",
     "deploy": "gh-pages -d dist",
4. 
git add .
git commit -m "Update portfolio"
git push
npm run deploy

