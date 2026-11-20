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

# Lab 3 – Routes, Layouts and Milestone 1

## 1. How can NavLink use `usePathname()` and still have the correct `aria-current` attribute in the initial server HTML?

`usePathname()` is a Client Component hook because it reads the current URL path in the browser.

However, Next.js can also pre-render Client Components on the server when generating the initial HTML. Therefore, the server can render the navigation links with the appropriate `aria-current` attribute for the initial route.

After hydration, the component can respond to client-side navigation and update the active link.

## 2. Why does `generateStaticParams()` use `String(movie.id)`, and why does `/movies/42` return a 404?

`movie.id` is a number in the movie data, but dynamic route parameters are strings.

Therefore, `String(movie.id)` converts the numeric ID into a string. For example, `2` becomes `"2"`.

The `generateStaticParams()` function generates static pages for all available movie IDs during the build process.

By setting `dynamicParams = false`, Next.js only accepts the parameters returned by `generateStaticParams()`. Since movie ID 42 does not exist in the generated list, `/movies/42` automatically returns a 404.

## 3. Why do notes persist between `/movies` and `/movies/2`, but disappear when navigating to `/about`?

The nested layout in `app/movies/layout.tsx` wraps both the Movies list page and the individual movie detail pages.

When navigating between `/movies` and `/movies/2`, Next.js preserves the shared nested layout. Therefore, the notes input remains visible and its current value is retained.

When navigating to `/about`, the Movies layout is no longer part of the active route hierarchy. Therefore, the notes input is removed.

## 4. In a production error test, where is the real error message, and why is it not sent to the browser?

The real error details are available in the server logs.

In production, Next.js does not expose the original error message to the browser because doing so could reveal sensitive application information, internal implementation details, or server-side data.

Instead, the browser receives a generic error message and an error digest.

The `error.tsx` file displays a user-friendly error interface, and its `reset()` function allows the user to retry rendering the failed route.

## 5. Why does loading appear under `npm run dev` on `/movies/2`, but not under `npm start`, while it appears on `/movies`?

The `loading.tsx` file provides a loading interface while a route is waiting for data.

In development mode, navigating to `/movies/2` can display the loading UI because the page fetches movie data using `getMovie()`, which calls `getMovies()` and waits for one second.

In production, `/movies/2` is statically generated during the build using `generateStaticParams()`. Its HTML is already generated, so it does not need to wait for the data request when opened.

At the end of Lab 3, `/movies` used `export const dynamic = "force-dynamic"`, so it was rendered on demand. That remains the setup at the end of Session 5.

---

## Lab 3 – Implementation Checklist

- [x] Created shared navigation using `NavLink`.
- [x] Updated the root layout with shared navigation.
- [x] Added active navigation indicators using `aria-current`.
- [x] Created individual movie detail pages using `/movies/[id]`.
- [x] Added `getMovie()` to retrieve a movie by ID.
- [x] Added dynamic metadata using `generateMetadata()`.
- [x] Added `generateStaticParams()` for all movie IDs.
- [x] Added a nested Movies layout that preserves its notes field across movie routes.
- [x] Added loading, not-found, and error UI.

## Lab 4, part 1

### 1. Which calls happen during the build, and why are movie details fetched once?

With an empty fetch cache, the build calls `GET /api/movies` once for `generateStaticParams()`, then `GET /api/movies/1` through `/api/movies/6`. `generateMetadata()` and the page request the same movie URL with the same options, so Next.js memoizes the matching fetch during that render.

### 2. Where did the test API key go, and where should it be used?

The intentional break rendered the server environment variable into the prerendered HTML, where any visitor could read it. A real API key belongs only in server-side code, such as a module protected with `server-only`; it must not be rendered or sent to a Client Component. The demonstration output has been removed.

### 3. Why are function props and `server-only` imports rejected at the Client Component boundary?

Props crossing from a Server Component to a Client Component must be serializable data, so a callback function cannot be sent in the RSC payload. A `server-only` module can contain server credentials and code, so importing and using it in a Client Component would cross that boundary and expose server-only behavior to the browser bundle.

