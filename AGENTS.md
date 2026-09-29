# Repository Guidelines

## Project Structure & Module Organization

This repository powers the AI Made Simple blog with Astro, MDX, and Tailwind CSS.
- `src/pages/` defines routes, including blog pages, the home page, RSS, and admin access.
- `src/components/` contains reusable Astro components; `src/layouts/BlogPost.astro` provides the post layout.
- `src/content/blog/` holds published Markdown/MDX posts. `src/content/old/` contains archived examples outside the active collection.
- `src/content.config.ts` defines the blog schema; `src/styles/global.css` and `tailwind.config.ts` control styling.
- `public/` holds static images, fonts, and Decap CMS configuration in `public/admin/`.
- `dist/` and `.astro/` are generated output; do not edit or commit them.

## Build, Test, and Development Commands

Run commands from the repository root:
- `npm ci`: install dependencies from `package-lock.json`.
- `npm run dev`: start the local Astro server at `localhost:4321`.
- `npm run build`: generate the production site in `dist/`.
- `npm run preview`: serve the production build for local review.
- `npm run astro -- --help`: inspect available Astro CLI commands.

## Coding Style & Naming Conventions

Follow the surrounding file's formatting: indentation currently varies between two and four spaces, and quote styles are mixed. Keep changes focused rather than reformatting unrelated code. TypeScript uses Astro's strict configuration. Use PascalCase for components and layouts, such as `FormattedDate.astro`, and descriptive kebab-case post filenames, such as `how-to-run-local-model-on-mobile.mdx`. Prefer existing Tailwind utilities and shared components. No formatter or lint script is configured.

## Content & Testing Guidelines

Posts require `title`, `description`, and `pubDate` frontmatter. Optional fields include `updatedDate`, `heroImage`, `featured`, and `tags`. Keep schema changes aligned with `public/admin/config.yml`.

There is no automated test framework, test naming convention, or coverage threshold. Run `npm run build` before submitting changes, then use the preview server to check affected routes, links, images, code blocks, and responsive layouts. The archived `test.md` is content, not an automated test.

## Commit & Pull Request Guidelines

Recent commits use short, descriptive subjects such as “Added X button to header”; no enforced Conventional Commits pattern is evident. Describe the concrete change and keep commits focused. Pull requests should explain the purpose, list validation performed, link relevant issues when available, and include screenshots for visible layout changes.
