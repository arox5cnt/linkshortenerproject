# UI Components

## Library

All UI elements in this app use **shadcn/ui** exclusively. Do not create custom components from scratch.

## Rules

- Always use shadcn/ui components for any UI element (buttons, inputs, dialogs, cards, etc.).
- If a required component is not yet installed, add it via the shadcn CLI: `npx shadcn@latest add <component>`.
- Do not install or use any other component library (e.g. MUI, Chakra, Radix directly).
- Styling should use the Tailwind utility classes consistent with the existing shadcn/ui setup.
