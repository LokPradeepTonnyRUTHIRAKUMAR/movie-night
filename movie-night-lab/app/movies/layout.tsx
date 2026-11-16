import type { ReactNode } from "react";

export default function MoviesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-2xl p-8">
      <aside className="mb-8 rounded-lg border border-zinc-300 p-4 dark:border-zinc-700">
        <label htmlFor="movie-notes" className="mb-2 block font-semibold">
          My Movie Night Notes
        </label>
        <input
          id="movie-notes"
          type="text"
          placeholder="Write your movie night notes..."
          className="w-full rounded border border-zinc-300 bg-transparent p-2 dark:border-zinc-700"
        />
      </aside>

      {children}
    </div>
  );
}
