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

# Lab 2 – First Server-Rendered Page

## 1. In the page source, are the movie titles present for `/movies`? For `/movies-client`? Why?

For `/movies`, the movie titles are present in the HTML source because the data is fetched and rendered on the server before the HTML is sent to the browser.

For `/movies-client`, the movie titles are not present in the initial HTML source. Only the "Loading movies..." message appears because `useEffect()` fetches the movie data in the browser after the page loads.

## 2. Without the `force-dynamic` line, you run `npm run build` again tomorrow, then `npm start`, without changing anything else. What does the "Rendered at" timestamp of `/movies` show, and why?

The timestamp shows the time when the application was built tomorrow. This is because the page is statically generated during the build process. It does not generate a new timestamp for every visitor or refresh.

## 3. Part E made every request to `/movies` about one second slower. Give one situation where `force-dynamic` is still the right choice, and explain why.

`force-dynamic` is useful for pages that need fresh data on every request, such as a live stock price or real-time dashboard. It ensures users receive the latest information instead of seeing previously generated static content.

## 4. A classmate sees `[movies] rendered 6 movies` in the browser console and says: "So this code runs in the browser." What do you answer, and how can you prove it?

I would explain that the code runs on the server, not in the browser. The message comes from the `console.log()` statement in the Server Component.

We can prove this by checking the terminal running Next.js, viewing the page source, and disabling JavaScript. The movie titles remain visible even when JavaScript is disabled.

## 5. Which version would you choose for a public movie catalogue that changes once a week, and why?

I would choose the server-rendered static version (`/movies`) because the catalogue changes only once a week. Static generation provides fast loading, good SEO, and reduces unnecessary server processing. The page can be rebuilt when the catalogue changes.