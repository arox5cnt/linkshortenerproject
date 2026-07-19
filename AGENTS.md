# Agent Instructions - Link Shortener Project

This file is the entrypoint for coding agents working in this repository.

## Mandatory Read Order

Read these files in order before making code changes:

1. `docs/01-auth.md` — Authentication conventions (Clerk)
2. `docs/02-ui-components.md` — UI component conventions (shadcn/ui)

This requirement is non-optional: always read the relevant individual instruction files in `/docs` before generating any code, deciding on an implementation, or editing files. If a task touches a new area, read the matching `/docs` file(s) first.

If any instruction conflicts, precedence is:

1. User request in current session
2. This file (`AGENTS.md`)
3. Numbered docs in `/docs` (lower number wins)

## Critical Constraint

This repository uses Next.js 16.x and React 19.x.
Do not assume behavior from older Next.js versions.
Before implementing or changing framework-level behavior, read the relevant docs in `node_modules/next/dist/docs/` and follow current guidance and deprecation notices.

## NPX Commands

Every `npx` command that installs or runs a package must include the following parameter:

```
--registry=https://registry.npmjs.org
```

Example: `npx --registry=https://registry.npmjs.org shadcn@latest add button`

## Expected Agent Behavior

- Make small, targeted changes that match existing architecture.
- Prefer server-first patterns unless interactivity requires client components.
- Keep TypeScript strict and avoid `any` unless justified.
- Validate changes with lint/tests/build steps from `docs/06-validation-checklist.md`.
- Document any new conventions by updating the appropriate file in `/docs`.
