# 🎨 Customization Guide

Complete guide to personalizing your portfolio.

## 📊 Table of Contents

1. [Color Scheme](#color-scheme)
2. [Typography](#typography)
3. [Layout Changes](#layout-changes)
4. [Adding/Removing Sections](#sections)
5. [Animation Customization](#animations)
6. [Component Modifications](#components)

---

## 🎨 Color Scheme

### Changing Primary Colors

**File:** `tailwind.config.js`

```javascript
colors: {
  primary: {
    50: '#fef2f2',   // Lightest
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',  // ⭐ Main color
    600: '#dc2626',  // ⭐ Hover color
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',  // Darkest
  }
}
```

**Popular Color Schemes:**

**Blue (Professional):**
```javascript
primary: {
  500: '#3b82f6',
  600: '#2563eb',
}
```

**Purple (Creative):**
```javascript
primary: {
  500: '#8b5cf6',
  600: '#7c3aed',
}
```

**Green (Tech/Eco):**
```javascript
primary: {
  500: '#10b981',
  600: '#059669',
}
```

**Orange (Energetic):**
```javascript
primary: {
  500: '#f97316',
  600: '#ea580c',
}
```

### Changing Background Colors

**File:** `tailwind.config.js`

```javascript
dark: {
  800: '#1f2937',  // Component backgrounds
  900: '#111827',  // Section backgrounds
  950: '#030712',  // Main background
}
```

**For lighter backgrounds:**
```javascript
dark: {
  800: '#f3f4f6',
  900: '#e5e7eb',
  950: '#ffffff',
}

// Don't forget to update text colors in components!
```

---

## 📝 Typography

### Changing Fonts

**Step 1:** Update Google Fonts link in `index.html`

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet" />
```

**Step 2:** Update `tailwind.config.js`

```javascript
fontFamily: {
  display: ['Poppins', 'sans-serif'],  // Headings
  body: ['Roboto', 'sans-serif'],      // Body text
  mono: ['JetBrains Mono', 'monospace'], // Code
}
```

**Popular Font Combinations:**

| Display | Body | Vibe |
|---------|------|------|
| Playfair Display | Source Sans Pro | Elegant |
| Montserrat | Open Sans | Modern |
| Raleway | Lato | Clean |
| Oswald | Roboto | Bold |
| Ubuntu | Noto Sans | Tech |

### Font Sizes

**File:** `src/index.css` or inline in components

```css
/* Hero heading */
.text-5xl { font-size: 3rem; }    /* Default */
.text-6xl { font-size: 3.75rem; } /* Larger */
.text-7xl { font-size: 4.5rem; }  /* Even larger */

/* Body text */
.text-base { font-size: 1rem; }   /* Default */
.text-lg { font-size: 1.125rem; } /* Larger */
```

---

## 📐 Layout Changes

### Making Sections Full Width

**Before:**
```jsx
<div className="container-custom">
  {/* Content */}
</div>
```

**After:**
```jsx
<div className="w-full px-4">
  {/* Content */}
</div>
```

### Changing Section Spacing

**File:** `src/index.css`

```css
.section-padding {
  @apply py-20 px-6;  /* Default */
}

/* More spacing */
.section-padding {
  @apply py-32 px-6;
}

/* Less spacing */
.section-padding {
  @apply py-12 px-6;
}
```

### Grid Layout Changes

**2 columns → 3 columns:**

```jsx
// Before
<div className="grid md:grid-cols-2 gap-8">

// After
<div className="grid md:grid-cols-3 gap-8">
```

**Responsive columns:**
```jsx
<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
```

---

## 🔧 Adding/Removing Sections

### Remove a Section

**File:** `src/App.jsx`

```jsx
// Comment out the section
<main>
  <Hero />
  <About />
  <Skills />
  {/* <Experience /> */}  ← Commented out
  <Education />
  <Projects />
  <Contact />
</main>
```

**Also remove from Navbar:**

**File:** `src/components/Layout/Navbar.jsx`

```jsx
const menuItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  // { name: 'Experience', href: '#experience' },  ← Comment out
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]
```

### Add a New Section

**Step 1:** Create component file

```jsx
// src/components/Testimonials/Testimonials.jsx
import { motion } from 'framer-motion'

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-dark-900">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-gradient">Testimonials</span>
        </h2>
        {/* Your content */}
      </div>
    </section>
  )
}

export default Testimonials
```

**Step 2:** Import and add to App.jsx

```jsx
import Testimonials from './components/Testimonials/Testimonials'

function App() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Testimonials />  {/* ← Add here */}
      <Contact />
    </main>
  )
}
```

**Step 3:** Add to Navbar

```jsx
const menuItems = [
  // ... existing items
  { name: 'Testimonials', href: '#testimonials' },
  // ...
]
```

---

## ✨ Animation Customization

### Change Animation Speed

**File:** Component files

```jsx
// Before (fast)
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}  ← Change this
>

// After (slower, smoother)
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2 }}
>
```

### Disable Animations

**Find and remove:**
```jsx
// Remove these props
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}

// Just keep the div
<div className="...">
```

### Add New Animation

**Tailwind animation:**

**File:** `tailwind.config.js`

```javascript
animation: {
  'bounce-slow': 'bounce 3s infinite',
  'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
```

**Use in component:**
```jsx
<div className="animate-bounce-slow">
  Content
</div>
```

---

## 🎯 Component Modifications

### Hero Section

**Change background gradient colors:**

**File:** `src/components/Hero/Hero.jsx`

```jsx
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
// Change: bg-primary-600/10 to bg-blue-600/10
```

**Change avatar size:**
```jsx
// Before
<div className="w-80 h-80 rounded-full">

// After (larger)
<div className="w-96 h-96 rounded-full">

// After (smaller)
<div className="w-64 h-64 rounded-full">
```

### Projects Section

**Change cards per row:**

```jsx
// Before (3 columns on large screens)
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

// After (4 columns on large screens)
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
```

**Show all projects (remove filter):**

```jsx
// Remove this
const [filter, setFilter] = useState('All')

// Use this instead
const filteredProjects = projectsData  // Show all
```

### Skills Section

**Change progress bar colors:**

```jsx
// Before
<div className="h-full bg-gradient-to-r from-primary-600 to-primary-500">

// After (different gradient)
<div className="h-full bg-gradient-to-r from-blue-600 to-purple-500">

// After (solid color)
<div className="h-full bg-primary-600">
```

### Contact Section

**Change form layout (side by side):**

```jsx
// Before (stacked)
<div className="grid lg:grid-cols-2 gap-12">

// After (more space for form)
<div className="grid lg:grid-cols-3 gap-12">
  <div className="lg:col-span-1">
    {/* Contact info */}
  </div>
  <div className="lg:col-span-2">
    {/* Form */}
  </div>
</div>
```

### Navbar

**Make navbar always visible (not transparent):**

**File:** `src/components/Layout/Navbar.jsx`

```jsx
// Before
className={`... ${scrolled ? 'bg-dark-900/95' : 'bg-transparent'}`}

// After (always visible)
className="... bg-dark-900/95 backdrop-blur-md shadow-lg"
```

**Change logo:**

```jsx
// Text logo
<span className="text-gradient">RM</span>

// Image logo
<img src="/logo.png" alt="Logo" className="h-10" />
```

---

## 🎭 Theme Variations

### Light Mode

**Create a light theme by updating colors:**

**File:** `src/index.css`

```css
body {
  @apply bg-gray-50 text-gray-900;  /* Light background */
}

/* Update card backgrounds */
.bg-dark-800 → .bg-white
.bg-dark-900 → .bg-gray-50
.border-dark-700 → .border-gray-200
```

### Minimal Theme

**Remove:**
- Background gradients
- Excessive animations
- Border decorations

**Keep:**
- Clean typography
- Simple hover effects
- Subtle spacing

### Cyberpunk Theme

**Add:**
- Neon colors (cyan, magenta, yellow)
- Glitch effects
- Grid backgrounds
- Sharp geometric shapes

```javascript
// tailwind.config.js
colors: {
  neon: {
    cyan: '#00ffff',
    magenta: '#ff00ff',
    yellow: '#ffff00',
  }
}
```

---

## 💡 Quick Tips

### Performance

1. **Lazy load images:**
```jsx
<img loading="lazy" src="..." />
```

2. **Optimize images:**
   - Use WebP format
   - Compress with TinyPNG
   - Proper dimensions

3. **Remove unused Tailwind:**
   - Already configured in `tailwind.config.js`

### Accessibility

1. **Add ARIA labels:**
```jsx
<button aria-label="Open menu">
  <MenuIcon />
</button>
```

2. **Keyboard navigation:**
   - All interactive elements should be keyboard accessible

3. **Color contrast:**
   - Ensure text is readable (use contrast checker)

### Responsive Design

**Test breakpoints:**
- Mobile: 375px
- Tablet: 768px
- Desktop: 1440px

**Use responsive classes:**
```jsx
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
```

---

## 🔄 Common Workflows

### Updating Content Regularly

1. Edit data files in `src/data/`
2. Test locally: `npm run dev`
3. Build: `npm run build`
4. Deploy (automatic on Netlify/Vercel)

### Testing Changes

```bash
# Development mode (hot reload)
npm run dev

# Production preview
npm run build && npm run preview
```

### Git Workflow

```bash
# Save changes
git add .
git commit -m "Update: description"
git push

# Auto-deploys on Netlify/Vercel
```

---

## 🆘 Help & Resources

**Need inspiration?**
- [Dribbble](https://dribbble.com/search/portfolio)
- [Behance](https://www.behance.net/search/projects?search=portfolio)
- [Awwwards](https://www.awwwards.com/websites/portfolio/)

**Learn more:**
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Docs](https://react.dev)

---

**Happy customizing! 🎨**

Make it uniquely yours!
