
"use client";

export default function ProjectsError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="mx-auto max-w-3xl p-8 text-center">
      <h1 className="text-3xl font-bold">
        Something went wrong!
      </h1>

      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        We couldn&apos;t load the projects. Please try again.
      </p>

      <button
        onClick={() => reset()}
        className="mt-6 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
      >
        Try Again
      </button>
    </main>
  );
}

