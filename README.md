# Publish Support Website

A dark, professional Next.js website for Publish Support — built for Netlify deployment.

## Pages
- **Home** — Hero, services snapshot, CTA
- **About** — Company story, values, stats
- **Services** — Software & publishing services, process
- **Contact** — Contact form, info

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Netlify

1. Push this project to a GitHub repository
2. Log in to [netlify.com](https://netlify.com)
3. Click **Add new site → Import from Git**
4. Connect your GitHub repo
5. Build settings are auto-detected via `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `out`
6. Click **Deploy site**
7. Go to **Domain settings** → Add `publishsupport.com`
8. Update your domain's DNS to point to Netlify's nameservers
9. Netlify will auto-provision your SSL certificate

## Add Your Logo
Drop your logo files into the `/public` folder:
- `favicon.ico`
- `logo_512x512.png`
- `logo_192x192.png`

## Contact Form
The contact form is ready for [Netlify Forms](https://docs.netlify.com/forms/setup/).
Add `data-netlify="true"` to the `<form>` tag and Netlify will handle submissions for free.

## Tech Stack
- Next.js 14 (App Router)
- Static export (no server required)
- Google Fonts (Inter + Playfair Display)
- Pure CSS (no external CSS library)
