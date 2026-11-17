
import type { ReactNode } from "react";

export default function ProjectsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <div className="mb-8 rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
        <p className="font-semibold">Developer Community</p>
        <p className="mt-1 text-sm text-zinc-500">
          Explore projects, discover technologies, and get inspired.
        </p>
      </div>

      {children}
    </section>
  );
}
