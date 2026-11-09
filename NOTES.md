# Lab 1 – Next.js Fundamentals: Movie Night

## 1. In which file are the `<html>` and `<body>` tags?

The `<html>` and `<body>` tags are defined in `app/layout.tsx`. This file contains the root layout of the application and wraps all pages.

## 2. Which file renders the page at `/`?

The file `app/page.tsx` renders the homepage at the `/` route. Next.js uses file-based routing, where `page.tsx` defines the content of a route.

## 3. Which folder is for images and other static files, and how do you reference them?

The `public/` folder stores static files such as images, icons, and other assets.

Files inside this folder can be referenced from the root URL. For example, an image stored at `public/logo.png` can be referenced as:

```tsx
<img src="/logo.png" alt="Logo" />
```

## 4. What is `tsconfig.json` doing in your project?

`tsconfig.json` is the configuration file for TypeScript. It defines compiler options, type-checking rules, module resolution, and other settings that control how TypeScript works in the project.

It also helps the editor provide type checking and code suggestions.

## 5. What does `@/*` mean in `tsconfig.json`? Write an import that uses it.

`@/*` is a path alias that allows us to import files using paths relative to the project root instead of writing long relative paths.

For example:

```tsx
import { MovieList } from "@/components/movie-list";
```

This is shorter and easier to maintain than using relative paths such as `../../components/movie-list`.

## 6. What does `app/layout.tsx` import from `next/font/google`, and what does Next.js do with it at build time?

The file imports:

```tsx
import { Geist, Geist_Mono } from "next/font/google";
```

These are the Geist and Geist Mono fonts.

Next.js downloads the required font files and self-hosts them as part of the application build. This improves performance and avoids requiring the browser to fetch fonts directly from Google.

## 7. What's the difference between `layout.tsx` and `page.tsx`?

- `layout.tsx` defines a shared layout that wraps pages within its route segment. The root layout contains the HTML and body elements.
- `page.tsx` defines the actual content displayed for a particular route.

For example, `app/layout.tsx` provides the root layout, while `app/page.tsx` displays the homepage.

## 8. Where would you put a navbar that appears on every page?

I would put the navbar inside `app/layout.tsx`, so it is shared across all pages of the application.

This avoids repeating the same navigation code in every page.

## 9. What is `globals.css` for, and where is it imported?

`globals.css` contains global CSS styles that apply throughout the application.

It is imported in `app/layout.tsx`:

```tsx
import "./globals.css";
```

It can contain global styling rules, CSS variables, and base styles.

## 10. What is `AGENTS.md`, and does your app need it to run?

`AGENTS.md` is an optional instruction file for AI coding agents. It can contain project-specific instructions, coding conventions, and guidelines for working with the codebase.

The Next.js application does not need `AGENTS.md` to run. It is not required for building or executing the application.