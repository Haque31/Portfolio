# Haque's Studio

A performance-first personal portfolio for **Mridul Haque**, a full-stack developer and data science enthusiast based in Dhaka, Bangladesh.

The site is built with Astro as a static, component-based portfolio. Project information lives in an Astro Content Collection, so new work can be added without editing the card component or duplicating markup.

## Live URL

After GitHub Pages is enabled, the site will be available at:

```text
https://haque31.github.io/mridul-haque-portfolio/
```

## Stack

- Astro 7
- TypeScript configuration and content schemas
- Custom responsive CSS
- Small vanilla JavaScript enhancements
- Astro image optimization
- Astro Content Collections
- GitHub Actions and GitHub Pages

No client-side framework runtime is shipped. JavaScript is limited to the mobile menu, scroll state, reveal effects, active navigation, and the static contact form's email handoff.

## Project structure

```text
mridul-haque-portfolio/
├── .github/workflows/deploy.yml
├── public/
│   ├── assets/
│   │   ├── documents/
│   │   └── images/og-card.jpg
│   ├── favicon.svg
│   ├── robots.txt
│   └── site.webmanifest
├── src/
│   ├── assets/mridul-haque-portrait.png
│   ├── components/
│   ├── content/projects/
│   ├── layouts/BaseLayout.astro
│   ├── pages/index.astro
│   ├── styles/global.css
│   └── content.config.ts
├── astro.config.mjs
├── package.json
├── package-lock.json
├── tsconfig.json
├── LICENSE
└── README.md
```

## Run locally

Requirements:

- Node.js 22.12 or newer. Node 24 is recommended to match the deployment workflow.
- npm

```bash
git clone https://github.com/Haque31/mridul-haque-portfolio.git
cd mridul-haque-portfolio
npm install
npm run dev
```

Astro will print the local development URL, normally `http://localhost:4321`.

Useful commands:

```bash
npm run dev       # Start the development server
npm run check     # Validate Astro and TypeScript
npm run build     # Create the production build in dist/
npm run preview   # Preview the production build locally
```

## Add or edit a project

Each project is a Markdown file in `src/content/projects/`.

Example:

```md
---
title: Example Project
subtitle: One-line project category
description: A clear explanation of the problem, solution, and contribution.
role: Full-stack developer
year: Personal project
tags:
  - Astro
  - TypeScript
github: https://github.com/Haque31/example-project
live: https://example.com
featured: true
order: 5
---
```

The schema in `src/content.config.ts` validates the data during development and builds.

## Contact form

The current contact form prepares a message and opens the visitor's default email application. This keeps the static site free of external form processors and does not store submitted data.

A hosted service such as Formspree can be added later by changing the form action and removing the mailto handler from `SiteScripts.astro`.

## Content still to add later

- Resume or CV file in `public/assets/documents/`
- Public link for the EPL Match Prediction repository, if it is made public
- Public or live link for the Asian Power website, if appropriate
- Verified dates for debating, club volunteering, competitive programming, and the Asian Power role
- Optional project screenshots or dedicated case-study pages

## Create the GitHub repository

### Option A: GitHub CLI

Run these commands from the folder that contains this project:

```bash
cd mridul-haque-portfolio

git init
git branch -M main
git add .
git commit -m "feat: launch Astro portfolio foundation"

gh auth login
gh repo create Haque31/mridul-haque-portfolio \
  --public \
  --source=. \
  --remote=origin \
  --push
```

### Option B: GitHub website

1. Sign in to GitHub.
2. Create a new public repository named `mridul-haque-portfolio`.
3. Do not initialize it with a README, license, or `.gitignore`, because those files already exist here.
4. Run:

```bash
cd mridul-haque-portfolio

git init
git branch -M main
git add .
git commit -m "feat: launch Astro portfolio foundation"
git remote add origin https://github.com/Haque31/mridul-haque-portfolio.git
git push -u origin main
```

## Enable GitHub Pages

The repository includes the official Astro GitHub Pages workflow.

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions** as the source.
4. Open the **Actions** tab and confirm that `Deploy to GitHub Pages` completes successfully.

Every successful push to `main` will rebuild and deploy the site.

## Ongoing branch and pull-request workflow

Use a branch for each focused change:

```bash
git switch main
git pull --ff-only
git switch -c feature/add-project-case-study

# Make and test changes
npm run check
npm run build

git add .
git commit -m "feat: add project case study"
git push -u origin feature/add-project-case-study
```

Create the pull request:

```bash
gh pr create \
  --base main \
  --head feature/add-project-case-study \
  --title "feat: add project case study" \
  --body "Adds the new project content and validates the production build."
```

After review and merge:

```bash
git switch main
git pull --ff-only
git branch -d feature/add-project-case-study
```

## Quality checks before publishing

- Test at 360 px, tablet, laptop, and wide desktop widths.
- Navigate the entire site using only the keyboard.
- Confirm visible focus states and mobile menu behavior.
- Test reduced-motion mode.
- Verify every public project and social link.
- Run `npm run check` and `npm run build`.
- Run Lighthouse for performance, accessibility, best practices, and SEO.
- Confirm the Open Graph preview after deployment.

## License

MIT © 2026 Mridul Haque
