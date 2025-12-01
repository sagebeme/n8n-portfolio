# Image Upload Guide

This guide explains how to add images to your portfolio website.

## Profile Photo

1. Add your profile photo to: `public/images/profile.jpg`
2. Recommended size: **300x300px** (square)
3. Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`
4. The image will automatically display in the About Me section

## Project Images

### Location
Place all project workflow screenshots in: `public/images/projects/`

### Naming Convention
Name your images according to the project IDs in `src/data/projects.js`:

- `lead-gen.jpg` - Lead Generation Automation
- `onboarding.jpg` - Customer Onboarding System
- `support.jpg` - Support Ticket Automation
- `airtable.jpg` - Airtable Integration Suite
- `ai-workflow.jpg` - AI-Driven Workflow Automation
- `linkedin-hubspot.jpg` - LinkedIn-HubSpot Sync

### Image Specifications
- **Recommended size**: 1200x675px (16:9 aspect ratio)
- **Supported formats**: `.jpg`, `.jpeg`, `.png`, `.webp`
- **File size**: Keep under 500KB for optimal loading

### Adding New Projects

If you add a new project:

1. Add the project data to `src/data/projects.js`
2. Add the corresponding image to `public/images/projects/`
3. Use the project `id` as the filename (e.g., `my-new-project.jpg`)
4. Update the `image` property in the project data: `/images/projects/my-new-project.jpg`

## Image Optimization Tips

- Use tools like [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/) to compress images
- Convert to WebP format for better compression (modern browsers)
- Ensure images are clear and showcase your n8n workflows effectively

## Fallback Behavior

If an image is missing, the site will display a placeholder icon automatically. This ensures the site always looks good even if images aren't uploaded yet.



