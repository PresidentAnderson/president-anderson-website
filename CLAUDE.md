# CLAUDE.md - President Anderson Website

This file provides guidance to Claude Code when working with the President Anderson website codebase.

## Project Overview

Premium brand website for President Anderson - a multi-talented Creative Authority specializing as Singer-Songwriter, Impresario, and Producer. The site showcases work across music, productions, and media with an elegant black and gold aesthetic.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom CSS variables
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**:
  - Playfair Display (headings, serif)
  - Inter (body text, sans-serif)
- **Deployment**: Vercel
- **Repository**: GitHub (`PresidentAnderson/president-anderson-website`)

## Project Location

**Path**: `/Volumes/DevOPS 2025/President Anderson  Websites/president-anderson-website/`

Note: Directory name has two spaces between "Anderson" and "Websites"

## Site Structure

### Main Pages

```
/                           - Home page with hero and featured sections
/about                      - Journey, values, and brand story
/productions                - Portfolio overview with clickable cards
/contact                    - Contact form with phone request modal
```

### Productions Micro-Pages

```
/productions/premium-events      - Signature event experiences
/productions/content-creation    - Multimedia content production
/productions/brand-partnerships  - Strategic brand collaborations
```

### Music Micro-Pages

```
/music/original-albums      - Songwriting and album production
/music/live-performances    - Concerts and shows
/music/collaborations       - Artist partnerships
```

### Media Micro-Pages

```
/media/podcast-series       - Conversations and interviews (Coming Soon)
/media/video-content        - Documentary and behind-the-scenes
/media/digital-presence     - Social media and online engagement
```

## Design System

### Color Palette

```css
--gold: #D4AF37          /* Primary brand color */
--gold-light: #F4E5A5    /* Lighter accent */
--gold-dark: #B8941E     /* Darker accent */
--background: #000000     /* Pure black */
--foreground: #FFFFFF     /* Pure white */
```

### Typography

- **Headings (h1-h6)**: Playfair Display (serif, elegant)
- **Body Text**: Inter (sans-serif, clean)
- **Accent Text**: Gold colors for highlights and CTAs

### Component Patterns

#### Hero Section
- Full-screen or min-h-screen
- Centered content with gradient backgrounds
- Animated with Framer Motion (fade in, slide up)
- Status tags (e.g., "Signature", "Active", "Coming Soon")

#### Value Pillars
- 3-column grid (responsive to 1 column on mobile)
- Icon + Title + Description
- Gold icons with hover scale animations

#### Offer Module
- Black background with gold border
- Feature list with checkmarks
- Right-aligned CTA button

#### CTA Sections
- Centered layout with large heading
- Gold button with hover effects
- Links to `/contact` with context parameter

## Key Features

### 1. Phone Request Modal (`/contact`)

- Displays "Available upon request" instead of phone number
- Clicking opens modal with form (name, email, reason)
- After submission, reveals phone number: `+1 (929) 310-8968`
- Smooth animations with AnimatePresence
- Backdrop blur effect

**Implementation**:
```tsx
const [showPhoneModal, setShowPhoneModal] = useState(false);
const [phoneRevealed, setPhoneRevealed] = useState(false);
```

### 2. Navigation Component

**Location**: `/app/components/Navigation.tsx`

- Fixed position at top (z-50)
- Logo on left (60x60px, rounded)
- Desktop nav links (hidden on mobile)
- Mobile hamburger menu
- Black background with gold accents

### 3. Contact Form Context

All micro-pages link to contact with context:
```tsx
href="/contact?context=premium-events"
```

This allows tracking which page the inquiry came from.

### 4. Clickable Production Cards

Main productions page has clickable cards that link to micro-pages:
- Hover effects (border color, background)
- "Learn More →" text appears on hover
- Full card is wrapped in Next.js Link component

## File Organization

```
/app
  /components
    Navigation.tsx          - Global navigation component

  /about
    page.tsx               - About page

  /contact
    page.tsx               - Contact page with phone modal

  /productions
    page.tsx               - Main productions overview
    /premium-events
      page.tsx             - Premium events micro-page
    /content-creation
      page.tsx             - Content creation micro-page
    /brand-partnerships
      page.tsx             - Brand partnerships micro-page

  /music
    /original-albums
      page.tsx             - Original albums micro-page
    /live-performances
      page.tsx             - Live performances micro-page
    /collaborations
      page.tsx             - Collaborations micro-page

  /media
    /podcast-series
      page.tsx             - Podcast series micro-page
    /video-content
      page.tsx             - Video content micro-page
    /digital-presence
      page.tsx             - Digital presence micro-page

  page.tsx                 - Home page
  layout.tsx               - Root layout with metadata
  globals.css              - Global styles and CSS variables

/public
  logo.jpg                 - President Anderson brand logo (37KB)
  [other static assets]
```

## Development Workflow

### Running Locally

```bash
cd "/Volumes/DevOPS 2025/President Anderson  Websites/president-anderson-website"
npm run dev
# Opens on http://localhost:3000
```

### Building

```bash
npm run build
# Generates optimized static pages
# Currently builds 16 routes
```

### Deployment Process

1. **Build locally** to verify no errors
2. **Commit changes** with descriptive message including:
   - What was changed
   - Why it was changed
   - Claude Code attribution
3. **Push to GitHub** - triggers automatic Vercel preview
4. **Deploy to production**:
   ```bash
   vercel --prod --force
   ```
   Use `--force` flag to clear Vercel cache

### Git Workflow

```bash
# Standard workflow
git add .
git commit -m "Description

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
git push
```

## Common Tasks

### Adding a New Micro-Page

1. Create directory: `/app/[section]/[page-name]/`
2. Create `page.tsx` following this structure:
   - Import Navigation and Framer Motion
   - Hero section with status tag
   - Value Pillars (3 items)
   - Showcase or offer module
   - Final CTA section
   - Footer
3. Update parent page to add link to new page
4. Build and test locally
5. Commit and deploy

### Updating Contact Information

- **Email**: Update in `/app/contact/page.tsx` (line ~95)
- **Phone**: Update in `/app/contact/page.tsx` (line ~388)
- **Location**: Update in `/app/contact/page.tsx` (line ~140)

### Changing Brand Colors

Edit `/app/globals.css`:
```css
:root {
  --gold: #D4AF37;
  --gold-light: #F4E5A5;
  --gold-dark: #B8941E;
}
```

### Adding New Navigation Link

Edit `/app/components/Navigation.tsx`:
```tsx
const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Productions', href: '/productions' },
  { name: 'Contact', href: '/contact' },
  // Add new item here
];
```

## Content Guidelines

### Voice & Tone

- **Sophisticated**: Premium language, no casual slang
- **Confident**: Authoritative but not arrogant
- **Artistic**: Creative, poetic phrasing
- **Professional**: Business-appropriate while maintaining personality

### Taglines

Each micro-page has a tagline following this pattern:
- **Format**: "[Action] with [quality]. [Result] with [quality]."
- **Example**: "Crafted with intention. Delivered with elegance."

### Status Tags

- **Signature**: Flagship offerings
- **Featured**: Highlighted work
- **Active**: Currently available
- **Ongoing**: Continuous projects
- **Coming Soon**: Future offerings
- **In Development**: Work in progress
- **Selective**: Limited availability

## SEO & Metadata

### Current Metadata

```tsx
title: "President Anderson | Creative Authority & Productions"
description: "President Anderson - Impresario, Producer, and Creative Visionary..."
keywords: ["President Anderson", "producer", "impresario", "entertainment", "creative authority"]
```

### Open Graph

- Title: "President Anderson | Creative Authority"
- Description: "Impresario, Producer, and Creative Visionary"
- Image: `/logo.jpg`

**Note**: Currently missing `metadataBase` - consider adding for production.

## Performance Considerations

- All pages are statically generated (○ Static)
- Images should be optimized before upload
- Use Next.js Image component for automatic optimization
- Framer Motion animations are performance-optimized
- Build time: ~17 seconds for 16 pages

## Known Issues & Warnings

1. **MetadataBase Warning**:
   - Not set for social open graph images
   - Uses `http://localhost:3000` as fallback
   - Consider adding to production config

2. **Build Cache**:
   - Vercel may serve cached content
   - Use `--force` flag when deploying critical updates
   - Clear `.next` folder locally if encountering issues

## Troubleshooting

### Build Fails

```bash
# Clear build cache
rm -rf .next
npm run build
```

### Vercel Serving Old Content

```bash
# Force deploy with cache clear
vercel --prod --force
```

### Navigation Not Working

- Check `href` paths match directory structure
- Ensure all pages have `page.tsx` file
- Verify no typos in route names

### Modal Not Opening

- Check state management in Contact page
- Verify AnimatePresence is properly imported
- Check for console errors in browser

## Contact Information

- **Email**: contact@presidentanderson.com
- **Phone**: +1 (929) 310-8968 (gated via modal)
- **GitHub**: github.com/PresidentAnderson/president-anderson-website
- **Live Site**: Deployed on Vercel

## Future Enhancements

### Potential Additions

1. **CMS Integration**: Sanity or Contentful for content management
2. **Email Backend**: Resend or SendGrid for form submissions
3. **Analytics**: Vercel Analytics or Google Analytics
4. **Internationalization**: Multi-language support
5. **Blog/News Section**: Updates and announcements
6. **Media Gallery**: Photos and videos from events
7. **Testimonials**: Client and collaborator reviews
8. **Newsletter Signup**: Mailing list integration
9. **Social Media Links**: Direct links to platforms
10. **Calendly Integration**: Direct booking system

### Backend Considerations

Currently all data is hardcoded. Consider:
- Database for form submissions
- API routes for contact form
- Authentication for admin dashboard
- Content management system

## Best Practices

### When Making Changes

1. Always read the file before editing
2. Test locally before committing
3. Use descriptive commit messages
4. Check mobile responsiveness
5. Verify animations work smoothly
6. Test all links and navigation
7. Clear cache before testing changes

### Code Style

- Use functional components with hooks
- Prefer `const` over `let`
- Use TypeScript types for props
- Keep components under 300 lines
- Extract repeated code into components
- Use Tailwind utility classes
- Follow existing naming conventions

### Accessibility

- Use semantic HTML elements
- Include alt text for images
- Ensure sufficient color contrast
- Support keyboard navigation
- Use ARIA labels where appropriate
- Test with screen readers

## Additional Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **Vercel Deployment**: https://vercel.com/docs

## Project History

- **Created**: November 2024
- **Last Updated**: November 2024
- **Current Version**: 1.0
- **Total Pages**: 16 static routes
- **Build Tool**: Next.js 16 with Turbopack

---

© 2025 President Anderson. All rights reserved.
