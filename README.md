# cv-app

3D portfolio site for Ilija Košanin: Next.js 14 (App Router), react-three-fiber, Tailwind CSS, Framer Motion.

Pages: `/` (home with the animated Warrior model and radial navigation), `/about`, `/projects`, `/contact`, and `/resume.pdf`.

## Where it lives

The app is mounted at **https://ilijakosanin.dev/cv-app-v1**, the same way Mr. Planet is mounted at `/mr-planet`:

- This repo is its own Vercel project, built with `basePath: "/cv-app-v1"` (see `next.config.mjs`), so every route and asset already carries the prefix. Locally it answers at `http://localhost:3000/cv-app-v1`.
- [cv-app-v2](../cv-app-v2) (the site at `ilijakosanin.dev`) rewrites `/cv-app-v1/*` to this deployment's `*.vercel.app` URL in its `next.config.js`, and lists the app in its projects section.

If the Vercel project gets a different name, update the rewrite destination in cv-app-v2.

All personal content (bio, experience, community, education, projects, navigation links) lives in one place: [`src/app/data.js`](src/app/data.js). Update it there and every page follows.

## Development

```bash
pnpm install
pnpm dev
```

## Production build

```bash
pnpm build
pnpm start
```

`robots.txt` and the sitemap belong to the root site (cv-app-v2), not to this app.

## Environment variables

Copy `.env.example` to `.env.local` and fill in the values:

| Variable                  | Purpose                                                 |
| ------------------------- | ------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`    | Root site URL, used for canonical / Open Graph URLs.    |
| `NEXT_PUBLIC_SERVICE_ID`  | EmailJS service id for the contact form.                |
| `NEXT_PUBLIC_TEMPLATE_ID` | EmailJS template id for the contact form.               |
| `NEXT_PUBLIC_PUBLIC_KEY`  | EmailJS public key for the contact form.                |

Set the same variables in the Vercel project settings for production.

## Resume

`public/resume.pdf` is printed from the `/cv` page of [cv-app-v2](../cv-app-v2) (the source of truth for the CV). Regenerate it there whenever the CV changes and copy it over.

## Credits

Based on the [Personal Portfolio Website with Next.js, Three.js & Tailwind CSS](https://youtu.be/T5t46vuW8fo) tutorial. 3D models are Metin2 assets from Sketchfab (CC Attribution).
