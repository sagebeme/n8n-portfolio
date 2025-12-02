# n8n Portfolio Website

A modern, responsive portfolio website showcasing workflow automation and API integration projects. Built with React, featuring light/dark mode toggle and a clean, minimalist design.

## Features

- **Homepage** with About Me, What I Do, and Contact sections
- **Projects Gallery** showcasing 4-6 automation projects
- **Project Detail Pages** with full descriptions, tech stacks, and outcomes
- **Contact Form** with email integration
- **Light/Dark Mode** toggle with smooth transitions
- **Fully Responsive** design for mobile, tablet, and desktop
- **SEO Optimized** with meta tags and semantic HTML
- **Accessibility** features including proper contrast and focus states

## Tech Stack

- React 19
- React Router DOM
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
│   └── ContactSection.jsx
├── pages/              # Page components
│   ├── Home.jsx
│   ├── Projects.jsx
│   ├── ProjectDetail.jsx
│   └── Contact.jsx
├── contexts/           # React contexts
│   └── ThemeContext.jsx
├── data/              # Data files
│   └── projects.js
├── App.jsx            # Main app component
└── main.jsx           # Entry point

public/
└── images/
    └── projects/      # Project images (add your workflow screenshots here)
```

## Adding Project Images

1. Place your n8n workflow screenshots in `public/images/projects/`
2. Name them according to the project IDs in `src/data/projects.js`:
   - `lead-gen.jpg`
   - `onboarding.jpg`
   - `support.jpg`
   - `airtable.jpg`
   - `ai-workflow.jpg`
   - `linkedin-hubspot.jpg`

3. Update the `image` property in `src/data/projects.js` to match your filenames

## Customization

### Contact Information

Update contact details in:
- `src/components/ContactSection.jsx` - Email and social links
- `src/data/projects.js` - Update any project links

### Profile Photo

Add your profile photo as `public/images/profile.jpg` (recommended: 300x300px, square)

### Projects

Edit `src/data/projects.js` to add, remove, or modify projects. Each project should have:
- `id` - URL-friendly identifier
- `title` - Project name
- `category` - Project category
- `description` - Full description
- `shortDescription` - Brief description for cards
- `techStack` - Array of technologies
- `outcomes` - Array of key results
- `image` - Path to project image
- `demoLink` - Optional demo URL
- `githubLink` - Optional GitHub URL

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

## License

Private project - All rights reserved
