# Quick Start Guide

## 🚀 Getting Started

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to `http://localhost:5173`

## 📝 Next Steps

### 1. Add Your Profile Photo
- Place your photo at: `public/images/profile.jpg`
- Recommended: 300x300px, square format

### 2. Add Project Images
- Add n8n workflow screenshots to: `public/images/projects/`
- See `IMAGE_GUIDE.md` for detailed instructions
- Name files according to project IDs in `src/data/projects.js`

### 3. Update Contact Information
Edit `src/components/ContactSection.jsx`:
- Update LinkedIn URL (line ~53)
- Update WhatsApp number (line ~69, format: country code + number, no + or spaces)
- Update phone number display text (line ~50)

### 4. Customize Projects
Edit `src/data/projects.js` to:
- Update project descriptions
- Add/remove projects
- Update tech stacks and outcomes
- Add demo or GitHub links

### 5. Build for Production
```bash
npm run build
```

The built files will be in the `dist/` directory, ready to deploy.

## 🎨 Features

✅ Light/Dark mode toggle (top right)
✅ Responsive design (mobile, tablet, desktop)
✅ SEO optimized
✅ Accessible (WCAG compliant)
✅ Smooth animations and transitions

## 📁 Project Structure

```
n8n-portfolio/
├── public/
│   └── images/
│       ├── profile.jpg          # Your profile photo
│       └── projects/            # Project screenshots
├── src/
│   ├── components/              # Reusable components
│   ├── pages/                   # Page components
│   ├── contexts/                # React contexts (theme)
│   ├── data/                    # Project data
│   └── App.jsx                  # Main app
└── README.md                    # Full documentation
```

## 🐛 Troubleshooting

**Images not showing?**
- Check file paths match exactly (case-sensitive)
- Ensure images are in `public/images/` directory
- Check browser console for 404 errors

**Theme not persisting?**
- Check browser localStorage is enabled
- Clear browser cache and try again

**Build errors?**
- Ensure all dependencies are installed: `npm install`
- Check Node.js version (recommended: 20.19+ or 22.12+)

## 📞 Support

For questions or issues, refer to:
- `README.md` - Full documentation
- `IMAGE_GUIDE.md` - Image upload guide



