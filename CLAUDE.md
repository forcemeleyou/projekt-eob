# CLAUDE.md

## Commands
- Dev: `pnpm dev`
- Build: `pnpm build`
- Lint: `pnpm lint`
- Preview: `pnpm preview`

## Rules
- **Use pnpm only** — never npm or yarn (user explicitly requested)
- 4-space indentation in JS/JSX (enforced by linter — match it when writing new files)
- React 19 with Vite, JSX (not TSX) — project is plain JS, no TypeScript
- Functional components with default exports for components, named exports for hooks/utils
- Inline styles via `style={{}}` are the project convention; reusable CSS lives in `src/index.css`
- Section IDs in Polish (`hero`, `cel`, `ankieta`, `wyniki`, `kontekst`, `wnioski`, `zespol`) — keep stable, they're used by the navbar/scrollspy
- Component files split by responsibility: `src/components/` for shared, `src/components/sections/` for page sections
- Static data lives in `src/data/` (`constants.js` for raw data, `stats.js` for derived from `survey_data.json`)
- Custom hooks live in `src/hooks/`

## Stack
- Runtime: Browser (static SPA)
- Framework: React 19 + Vite 8
- Icons: lucide-react
- Language: JavaScript (JSX), no TypeScript
- Package manager: pnpm

## Project context
- School research project ("Edukacja Obywatelska", year 2025/2026) about AI's impact on society
- Survey data sourced from `src/survey_data.json` (n = number of respondents)
- Polish-language UI throughout
