# 📁 Complete Folder Structure

```
portfolio-project/
│
├── 📄 index.html                   # Entry HTML file with SEO meta tags
├── 📄 package.json                 # Dependencies and npm scripts
├── 📄 package-lock.json            # Locked dependency versions
├── 📄 vite.config.js               # Vite build configuration
├── 📄 tailwind.config.js           # Tailwind CSS theme & customization
├── 📄 postcss.config.js            # PostCSS configuration
├── 📄 .gitignore                   # Git ignore rules
│
├── 📚 README.md                    # Complete project documentation
├── 📚 QUICKSTART.md                # 5-minute setup guide
├── 📚 DEPLOYMENT.md                # Deployment instructions
├── 📚 CUSTOMIZATION.md             # Customization guide
├── 📚 PROJECT_OVERVIEW.md          # This overview
├── 📚 FOLDER_STRUCTURE.md          # This file
│
├── 📂 public/                      # Static assets (served as-is)
│   ├── 📂 images/                  # Project images & photos
│   │   ├── 🖼️ avatar.png          # Your profile photo
│   │   ├── 🖼️ physio-app.png      # Project screenshots
│   │   ├── 🖼️ upbot.png
│   │   ├── 🖼️ banking-system.png
│   │   ├── 🖼️ job-search.png
│   │   ├── 🖼️ astrology-web.png
│   │   └── 🖼️ indian-shop.png
│   │
│   └── 📂 resume/                  # Resume files
│       └── 📄 Rishi_Mourya_Resume.pdf
│
├── 📂 src/                         # Source code
│   ├── 📄 main.jsx                 # React entry point
│   ├── 📄 App.jsx                  # Main app component
│   ├── 📄 index.css                # Global styles + Tailwind directives
│   │
│   ├── 📂 components/              # React components
│   │   │
│   │   ├── 📂 Hero/                # Landing section
│   │   │   └── 📄 Hero.jsx         # Animated hero with intro
│   │   │
│   │   ├── 📂 About/               # About section
│   │   │   └── 📄 About.jsx        # About with statistics
│   │   │
│   │   ├── 📂 Skills/              # Skills section
│   │   │   └── 📄 Skills.jsx       # Animated skill bars
│   │   │
│   │   ├── 📂 Experience/          # Experience section
│   │   │   └── 📄 Experience.jsx   # Timeline of work history
│   │   │
│   │   ├── 📂 Education/           # Education section
│   │   │   └── 📄 Education.jsx    # Academic background cards
│   │   │
│   │   ├── 📂 Projects/            # Projects section
│   │   │   └── 📄 Projects.jsx     # Filterable project gallery
│   │   │
│   │   ├── 📂 Contact/             # Contact section
│   │   │   └── 📄 Contact.jsx      # Contact form
│   │   │
│   │   └── 📂 Layout/              # Layout components
│   │       ├── 📄 Navbar.jsx       # Navigation with smooth scroll
│   │       └── 📄 Footer.jsx       # Footer with social links
│   │
│   └── 📂 data/                    # ⭐ JSON data files (EDIT THESE!)
│       ├── 📊 personal.json        # Personal info, contact, social
│       ├── 📊 projects.json        # Project portfolio data
│       ├── 📊 skills.json          # Skills with proficiency levels
│       ├── 📊 experience.json      # Work experience details
│       └── 📊 education.json       # Educational qualifications
│
└── 📂 node_modules/                # Dependencies (auto-generated)
    └── ...                         # (Created by npm install)

```

---

## 📊 File Importance Matrix

### 🔴 CRITICAL - Never Delete

| File | Purpose | Why Critical |
|------|---------|--------------|
| `package.json` | Dependencies & scripts | Project won't run without it |
| `index.html` | HTML entry point | Browser loads this first |
| `src/main.jsx` | React entry | Mounts React app |
| `src/App.jsx` | Main component | Renders all sections |
| `vite.config.js` | Build config | Build process needs this |
| `tailwind.config.js` | CSS config | Styles won't work properly |

### 🟡 IMPORTANT - Don't Delete (Unless You Know Why)

| File | Purpose | Can Delete If... |
|------|---------|------------------|
| `src/index.css` | Global styles | You rewrite all styles |
| `postcss.config.js` | CSS processing | You don't use Tailwind |
| `.gitignore` | Git ignore rules | Not using Git |
| All components | UI sections | You replace them |

### 🟢 SAFE - Can Modify/Delete

| File | Purpose | Impact of Deletion |
|------|---------|-------------------|
| `README.md` | Documentation | No impact on functionality |
| `QUICKSTART.md` | Setup guide | No impact on functionality |
| `DEPLOYMENT.md` | Deploy guide | No impact on functionality |
| Data JSON files | Content | Remove data from sections |
| Images | Visual assets | Placeholders will show |

---

## 🎯 What Each File Does

### **Root Level Files**

```
index.html
├─ What: Entry HTML file
├─ Contains: Meta tags, title, font links
├─ Loads: React app from src/main.jsx
└─ Edit when: Changing meta tags, adding analytics

package.json
├─ What: Project configuration
├─ Contains: Dependencies, scripts, project info
├─ Edit when: Adding new packages
└─ Don't edit: Unless you know what you're doing

vite.config.js
├─ What: Vite build configuration
├─ Contains: Build settings, optimizations
├─ Edit when: Changing build behavior
└─ Rarely needs changes

tailwind.config.js
├─ What: Tailwind CSS theme
├─ Contains: Colors, fonts, animations
├─ Edit when: Customizing design
└─ Frequently edited: Colors, spacing

.gitignore
├─ What: Git ignore rules
├─ Contains: Files/folders to not track
├─ Edit when: Adding sensitive files
└─ Rarely needs changes
```

### **Source Files (src/)**

```
main.jsx
├─ What: React entry point
├─ Does: Mounts React to DOM
└─ Don't edit: Unless restructuring app

App.jsx
├─ What: Main app component
├─ Does: Renders all sections
├─ Edit when: Adding/removing sections
└─ Frequently edited: Section order

index.css
├─ What: Global CSS
├─ Contains: Tailwind imports, custom styles
├─ Edit when: Adding global styles
└─ Sometimes edited: Custom utilities
```

### **Components**

```
Hero.jsx
├─ What: Landing section
├─ Shows: Name, title, intro, social links
├─ Data: src/data/personal.json
└─ Edit when: Changing hero layout

About.jsx
├─ What: About section
├─ Shows: Bio, statistics
├─ Data: src/data/personal.json
└─ Edit when: Changing about content

Skills.jsx
├─ What: Skills showcase
├─ Shows: Animated skill bars
├─ Data: src/data/skills.json
└─ Edit when: Adding/removing skills

Experience.jsx
├─ What: Work history
├─ Shows: Timeline of jobs
├─ Data: src/data/experience.json
└─ Edit when: New job, achievements

Education.jsx
├─ What: Education history
├─ Shows: Degrees, certifications
├─ Data: src/data/education.json
└─ Edit when: New degree, course

Projects.jsx
├─ What: Project portfolio
├─ Shows: Filterable project cards
├─ Data: src/data/projects.json
└─ Edit when: New project added

Contact.jsx
├─ What: Contact form
├─ Shows: Form & contact info
├─ Data: src/data/personal.json
└─ Edit when: Changing contact method

Navbar.jsx
├─ What: Navigation bar
├─ Shows: Menu, resume button
├─ Data: Hardcoded menu items
└─ Edit when: Adding/removing sections

Footer.jsx
├─ What: Footer section
├─ Shows: Links, social, copyright
├─ Data: src/data/personal.json
└─ Edit when: Changing footer content
```

### **Data Files (src/data/)**

```
personal.json
├─ What: Your personal information
├─ Contains: Name, bio, contact, social links
├─ Used by: Hero, About, Contact, Footer
└─ Update: Rarely (personal info changes)

projects.json
├─ What: Your project portfolio
├─ Contains: Project details, links, tech stack
├─ Used by: Projects section
└─ Update: Often (new projects)

skills.json
├─ What: Your technical skills
├─ Contains: Skill categories, proficiency levels
├─ Used by: Skills section
└─ Update: Sometimes (new skills learned)

experience.json
├─ What: Work experience
├─ Contains: Jobs, achievements, technologies
├─ Used by: Experience section
└─ Update: Sometimes (job changes)

education.json
├─ What: Educational background
├─ Contains: Degrees, institutions, achievements
├─ Used by: Education section
└─ Update: Rarely (new certifications)
```

---

## 🔄 File Relationships Diagram

```
index.html
    ↓ loads
main.jsx
    ↓ renders
App.jsx
    ↓ imports & renders
    ├─ Navbar.jsx
    ├─ Hero.jsx ← reads personal.json
    ├─ About.jsx ← reads personal.json
    ├─ Skills.jsx ← reads skills.json
    ├─ Experience.jsx ← reads experience.json
    ├─ Education.jsx ← reads education.json
    ├─ Projects.jsx ← reads projects.json
    ├─ Contact.jsx ← reads personal.json
    └─ Footer.jsx ← reads personal.json

All components ← use → Tailwind classes (from tailwind.config.js)
All components ← animated by → Framer Motion
All components ← styled by → index.css
```

---

## 📦 Generated Folders (Don't Edit)

### **node_modules/**
- Created by: `npm install`
- Contains: All npm packages
- Size: ~200MB
- Git: Ignored
- Action: Never edit, delete if needed and reinstall

### **dist/** (after build)
- Created by: `npm run build`
- Contains: Production build
- Size: ~2MB
- Git: Ignored
- Action: Upload to hosting, regenerate anytime

---

## 🎯 Common Workflows & Files Involved

### **1. Update Personal Info**
```
Files to edit:
└─ src/data/personal.json

Files that auto-update:
├─ Hero section
├─ About section
├─ Contact section
└─ Footer
```

### **2. Add New Project**
```
Files to edit:
├─ src/data/projects.json (add entry)
└─ public/images/ (add image)

Files that auto-update:
└─ Projects section (shows new card)
```

### **3. Change Colors**
```
Files to edit:
└─ tailwind.config.js (change primary colors)

Files that auto-update:
└─ All components (use primary colors)
```

### **4. Add New Section**
```
Files to create:
├─ src/components/NewSection/NewSection.jsx
└─ src/data/newsection.json (if needed)

Files to edit:
├─ src/App.jsx (import & render)
└─ src/components/Layout/Navbar.jsx (add menu item)
```

### **5. Deploy Site**
```
Files that matter:
├─ All src/ files
├─ All public/ files
├─ package.json
└─ vite.config.js

Build generates:
└─ dist/ folder (upload this)
```

---

## 💡 Quick Reference

### **To Edit Content:**
→ Go to `src/data/` folder
→ Edit JSON files
→ Rebuild: `npm run build`

### **To Change Design:**
→ Go to `tailwind.config.js`
→ Change colors, fonts
→ Changes apply instantly

### **To Add Features:**
→ Create new component in `src/components/`
→ Import in `src/App.jsx`
→ Add to navigation

### **To Add Images:**
→ Put in `public/images/`
→ Reference as `/images/filename.png`
→ Update data files

---

## 🔍 Finding Files Fast

### **By Purpose**

| Want to... | Go to... |
|------------|----------|
| Change my name/bio | `src/data/personal.json` |
| Add a project | `src/data/projects.json` |
| Update skills | `src/data/skills.json` |
| Add work experience | `src/data/experience.json` |
| Change colors | `tailwind.config.js` |
| Edit navigation | `src/components/Layout/Navbar.jsx` |
| Modify hero section | `src/components/Hero/Hero.jsx` |
| Change animations | Component files (search "motion") |
| Update meta tags | `index.html` |

### **By File Type**

| Type | Location |
|------|----------|
| React Components | `src/components/` |
| Data Files | `src/data/` |
| Images | `public/images/` |
| Documentation | Root folder (*.md files) |
| Configuration | Root folder (*.config.js) |
| Styles | `src/index.css` |

---

## ✅ Checklist: What to Customize

**Before Launch:**
- [ ] Update `src/data/personal.json`
- [ ] Add images to `public/images/`
- [ ] Update `src/data/projects.json`
- [ ] Update `src/data/experience.json`
- [ ] Update `src/data/education.json`
- [ ] Update `src/data/skills.json`
- [ ] Add resume to `public/resume/`
- [ ] Test all sections load

**Optional:**
- [ ] Change colors in `tailwind.config.js`
- [ ] Update fonts in `tailwind.config.js`
- [ ] Modify section order in `App.jsx`
- [ ] Add/remove sections
- [ ] Customize animations

---

**This structure is designed for:**
- ✅ Easy navigation
- ✅ Clear separation of concerns
- ✅ Simple content updates
- ✅ Scalable architecture
- ✅ Maintainable codebase

**Remember:** 
- Data files = Content (edit often)
- Components = Structure (edit sometimes)
- Config files = Design system (edit rarely)
- Documentation = Reference (read when needed)

---

**Now you know exactly where everything is! 🎯**
