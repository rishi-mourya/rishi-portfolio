# ⚡ Quick Start Guide

Get your portfolio running in 5 minutes!

## 🎯 Prerequisites

- Node.js installed (v16+) - [Download](https://nodejs.org/)
- Code editor (VS Code recommended)

## 🚀 Setup Steps

### 1️⃣ Install Dependencies (2 min)

```bash
cd portfolio-project
npm install
```

**Wait for installation to complete...**

### 2️⃣ Add Your Content (1 min)

**Add these files:**

```
public/
  images/
    ├── avatar.png              ← Your photo
    ├── physio-app.png          ← Project screenshots
    ├── upbot.png
    ├── banking-system.png
    ├── job-search.png
    ├── astrology-web.png
    └── indian-shop.png
  resume/
    └── Rishi_Mourya_Resume.pdf ← Your resume PDF
```

**Quick tip:** If you don't have images ready, the site will show placeholders. You can add them later!

### 3️⃣ Update Your Info (1 min)

**Edit these 5 files with your information:**

| File | What to Update |
|------|----------------|
| `src/data/personal.json` | Name, email, phone, bio, social links |
| `src/data/projects.json` | Your projects |
| `src/data/skills.json` | Your skills |
| `src/data/experience.json` | Work history |
| `src/data/education.json` | Education background |

**Example:**

```json
// src/data/personal.json
{
  "name": "Your Name",              ← Change this
  "email": "your.email@gmail.com",  ← Change this
  "phone": "+91 1234567890",        ← Change this
  // ... rest
}
```

### 4️⃣ Run Development Server (30 sec)

```bash
npm run dev
```

**Open browser:** http://localhost:3000

**✅ You should see your portfolio!**

---

## 📝 Daily Usage Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🎨 Common Customizations

### Change Colors

**File:** `tailwind.config.js`

```javascript
colors: {
  primary: {
    500: '#ef4444',  // ← Change to your color
    600: '#dc2626',  // ← Change to your color
  }
}
```

### Add New Project

**File:** `src/data/projects.json`

Add this object to the array:

```json
{
  "id": 7,
  "title": "Your New Project",
  "description": "Project description here",
  "technologies": ["React", "Node.js"],
  "image": "/images/new-project.png",
  "category": "Web Application",
  "github": "https://github.com/username/repo",
  "live": "https://project-demo.com",
  "featured": true
}
```

### Update Work Experience

**File:** `src/data/experience.json`

Add new experience or update existing:

```json
{
  "id": 4,
  "position": "New Position",
  "company": "New Company",
  "startDate": "Jan 2026",
  "endDate": "Present",
  "current": true,
  "description": "What you do",
  "achievements": [
    "Achievement 1",
    "Achievement 2"
  ],
  "technologies": ["React", "Node.js"]
}
```

---

## 🚀 Deploy in 3 Steps

### Option 1: Netlify (Recommended)

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com) → "Add new site"
3. Connect GitHub repo → Deploy!

**Full guide:** See `DEPLOYMENT.md`

---

## ❓ Troubleshooting

### Images not showing?

**Check:**
- Files are in `public/images/`
- File names match exactly (case-sensitive)
- Using path `/images/filename.png` (with leading `/`)

### Site won't start?

```bash
# Delete and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Build fails?

```bash
# Check for errors
npm run build

# Common fix: update Node.js to v16+
```

---

## 📚 Next Steps

1. ✅ Get site running locally
2. ✅ Add your content
3. ✅ Test everything works
4. ✅ Build and deploy
5. 🎉 Share your portfolio!

**For detailed info:** Read `README.md`

**For deployment:** Read `DEPLOYMENT.md`

---

## 💡 Pro Tips

1. **Test often**: Run `npm run dev` after changes
2. **Commit frequently**: Use git to save your work
3. **Optimize images**: Compress before adding to `public/images/`
4. **Mobile first**: Always check on mobile view
5. **Update regularly**: Keep your projects and experience current

---

## 🆘 Need Help?

**Check these resources:**
- `README.md` - Complete documentation
- `DEPLOYMENT.md` - Deployment guide
- Component files - Well-commented code

**Still stuck?**
- Email: rishi.kr.mbd@gmail.com
- Search error on Google/Stack Overflow

---

**Remember:** The hardest part is starting. You've got this! 💪

**Happy coding!** 🚀
