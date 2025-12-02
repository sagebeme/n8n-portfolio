# AI Agent Portfolio Website

A modern, responsive portfolio website showcasing AI Agent expertise and workflow automation projects. Built with React, featuring light/dark mode toggle and a clean, minimalist design focused on intelligent automation solutions.

## Features

- **Homepage** with About Me, What I Do, and Contact sections
- **Projects Gallery** showcasing 8 AI Agent and workflow automation projects
- **Project Detail Pages** with full descriptions, tech stacks, and outcomes
- **Contact Form** with email integration
- **Light/Dark Mode** toggle with smooth transitions
- **Fully Responsive** design for mobile, tablet, and desktop
- **SEO Optimized** with structured data, meta tags, sitemap, and robots.txt
- **Accessibility** features including proper contrast and focus states
- **Link to Software Engineering CV** for fullstack development work

## Tech Stack

- React 19
- React Router DOM
- React Helmet Async (for SEO)
- Vite
- CSS Variables for theming
- Google Fonts (Inter)

## Getting Started

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm run preview
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navigation.jsx
│   ├── AboutMe.jsx
│   ├── WhatIDo.jsx
│   ├── ContactSection.jsx
│   ├── SEO.jsx          # SEO meta tags component
│   └── StructuredData.jsx # Schema.org structured data
├── pages/              # Page components
│   ├── Home.jsx
│   ├── Projects.jsx
│   ├── ProjectDetail.jsx
│   └── Contact.jsx
├── contexts/           # React contexts
│   └── ThemeContext.jsx
├── data/              # Data files
│   └── projects.js    # Project data (8 AI Agent workflows)
├── App.jsx            # Main app component
└── main.jsx           # Entry point

public/
├── images/
│   └── projects/      # Workflow screenshots (8 PNG images)
├── robots.txt         # SEO robots file
└── sitemap.xml        # SEO sitemap

workflows/             # n8n workflow JSON files
├── Email Agent.json
├── AI Lead Generation Agent.json
├── AI Personal Assistant for Web Research.json
├── RAG Voice Chatbot Agent.json
├── N8n Lead Generation.json
├── LinkedIn Profile Scraper.json
├── Google Maps Business Scraper.json
└── Social Media Automation.json
```

## Current Projects

The portfolio showcases 8 AI Agent and workflow automation projects:

1. **AI Email Agent** - Autonomous email classification, drafting, and response
2. **AI Lead Generation Agent** - Scrapes unlimited leads from Google Search
3. **AI Personal Assistant for Web Research** - Autonomous web research and synthesis
4. **RAG Voice Chatbot Agent** - RAG-powered chatbot with voice interaction
5. **N8n Lead Generation Workflow** - Automated LinkedIn lead generation
6. **LinkedIn Profile Scraper** - Automated profile data extraction
7. **Google Maps Business Scraper** - Business data extraction from Google Maps
8. **Social Media Automation** - Automated social media management

## Workflow Files

The `workflows/` directory contains n8n workflow JSON files. **Important Security Note:**

- All API keys, secrets, and sensitive information have been removed
- Placeholders like `YOUR_API_KEY`, `YOUR_EMAIL@example.com` are used instead
- Before using these workflows, replace placeholders with your own credentials
- Never commit actual API keys or secrets to version control

## Customization

### Contact Information

Update contact details in:
- `src/components/ContactSection.jsx` - Email, phone, and social links
- `src/data/projects.js` - Update any project links

### Profile Photo

The profile photo is automatically loaded from GitHub: `https://github.com/sagebeme.png`

### Projects

Edit `src/data/projects.js` to add, remove, or modify projects. Each project should have:
- `id` - URL-friendly identifier
- `title` - Project name
- `category` - Project category (e.g., "AI Agent", "Workflow Automation")
- `description` - Full description
- `shortDescription` - Brief description for cards
- `techStack` - Array of technologies
- `outcomes` - Array of key results
- `image` - Path to project image (PNG format)
- `demoLink` - Optional demo URL
- `githubLink` - Optional GitHub URL
- `featured` - Boolean to mark featured projects

### Software Engineering Portfolio

This portfolio focuses on AI Agent and workflow automation expertise. For fullstack software engineering work, see: [sagebeme.github.io/CV](https://sagebeme.github.io/CV)

## SEO Features

- Structured data (Schema.org) for Person, Website, and Projects
- Breadcrumb navigation schema
- Open Graph and Twitter Card meta tags
- Dynamic meta tags per page using React Helmet
- Sitemap.xml for search engines
- Robots.txt configuration
- Canonical URLs
- Semantic HTML

## Color Scheme

The site uses a soft, professional color palette:
- **Light Mode**: Clean whites and grays with indigo/purple accents
- **Dark Mode**: Deep navy backgrounds with soft purple accents

Colors are defined in CSS variables in `src/index.css` for easy customization.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

The site can be deployed to:
- **Vercel** - Recommended for React apps
- **Netlify** - Great for static sites
- **GitHub Pages** - Free hosting option
- **Any static hosting service**

After deployment, update the `sitemap.xml` and `robots.txt` with your actual domain URL.

## License

Private project - All rights reserved

## Author

**sagebeme** - AI Agent Expert & Workflow Automation Specialist

- Portfolio: [This site]
- Software Engineering CV: [sagebeme.github.io/CV](https://sagebeme.github.io/CV)
- GitHub: [github.com/sagebeme](https://github.com/sagebeme)
- Email: eudicus5k@gmail.com
- Location: East Africa
