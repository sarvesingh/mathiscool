# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start local dev server (Next.js)
npm run build    # Production build
npm start        # Start production server
npm run lint     # ESLint (next/core-web-vitals + next/typescript)
```

No test framework is configured.

## Architecture

**Math Is Cool** is a math competition practice app built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4. All question data is static — there is no backend, database, or API.

### Routes

- `/` — Home page with accordion competition list and question search
- `/practice?grade=<grade>&mode=<mode>&competition=<comp>` — Practice session driven by query params
- `/question/[id]` — Deep link to a single question

### Key Directories

- `app/` — Next.js App Router pages and root layout
- `components/` — All React components (mostly client components via `"use client"`)
- `lib/` — Types, utilities, and static data
- `lib/questions/` — Hardcoded question arrays per competition/grade; `index.ts` re-exports all as a single `questions` array

### Data Flow

1. Questions are static TypeScript arrays in `lib/questions/`. Each has an `id`, `sectionId`, `gradeLevel`, `answerType`, `explanation` steps, and optionally `detailedExplanation` and `choices`.
2. `PracticeShell` filters questions by `gradeLevel` and `sectionId`. In `random` mode, 20 questions are selected via Fisher-Yates shuffle.
3. Answer checking is client-side in `lib/answerChecker.ts`. Fractions are normalized by GCD; decimals use 0.001 tolerance.
4. Session history lives in React Context (`SessionHistoryContext`) — in-memory only, not persisted across reloads.

### Scoring

- 1 point: correct on first attempt
- 0.5 points: correct on attempt 2 or 3
- 0 points: 3 failed attempts or explanation revealed before answering
- Max 3 attempts per question

### Patterns

- **Server/client boundary:** Server components (pages) are thin wrappers that resolve params and pass props to `"use client"` shell components where interactive logic lives.
- **Design tokens:** Theme colors are CSS custom properties in `globals.css` (light/dark via `prefers-color-scheme`), consumed by Tailwind via `@theme inline`.
- **Answer types:** The `AnswerType` union (`"integer" | "decimal" | "fraction" | "text" | "multiple-choice"`) drives both input rendering and answer normalization.
- **Path alias:** `@/` maps to project root (e.g., `@/lib/types`, `@/components/QuestionCard`).
- **No external state library:** All state is `useState` or React Context.
