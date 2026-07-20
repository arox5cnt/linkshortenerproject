# Authentication

## Provider

All authentication is handled exclusively by **Clerk**. Do not implement or introduce any other auth method, library, or custom session logic.

## Route Protection

- `/dashboard` is a protected route. Users must be signed in to access it. Enforce this via Clerk middleware or a server-side auth check at the page level.
- If an authenticated user visits the homepage (`/`), redirect them to `/dashboard`.

## Sign In / Sign Up

- Sign in and sign up flows must always launch as a **Clerk modal** (i.e. `<SignInButton mode="modal">` / `<SignUpButton mode="modal">`).
- Do not navigate to the `/sign-in` or `/sign-up` pages directly for these flows. The dedicated route pages under `app/sign-in` and `app/sign-up` may exist for Clerk's redirect fallback but should not be linked to directly.

## Theming

Clerk UI components must match the shadcn/ui theme using the `@clerk/ui` package:

- The `shadcn` and `dark` themes from `@clerk/ui/themes` are applied to `ClerkProvider` via `appearance={{ theme: [dark, shadcn] }}`.
- The CSS variables are inherited by importing `@clerk/ui/themes/shadcn.css` in `app/globals.css`.
- Do not override or change this theming setup without updating both `app/layout.tsx` and `app/globals.css`.
