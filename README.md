# Luar Jaén · Portfolio

Personal bilingual (EN/ES) portfolio built with React, TypeScript, Vite and Tailwind CSS, deployed on Vercel.

## Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the dev server                 |
| `npm run build`   | Type-check and build for production  |
| `npm run preview` | Preview the production build         |
| `npm run lint`    | Lint with ESLint                     |
| `npm run knip`    | Find unused files, exports and deps  |

## Project structure

```
src/
├── components/   Page sections; shared pieces live in components/ui
├── data/         Content as JSON (typed in content.ts) and the skills list
├── hooks/        useRevealOnScroll
├── i18n/         Language config, provider and UI strings (translations.ts)
├── types/        Content types
└── assets/css/   Animations and global styles
public/
├── documents/    CV PDFs
└── img/          Profile and project images
```

## Editing content

- **Experience, education, projects, social links:** edit the JSON files in `src/data`. Texts are `{ "en": "…", "es": "…" }` objects.
- **UI strings:** `src/i18n/translations.ts`.
- **Skills:** `src/data/skills.ts`.
- **CV:** drop the PDFs in `public/documents`, then update the links in `src/i18n/translations.ts` (`cv.href`, one per language) and the `/cv` rewrite in `vercel.json`.
