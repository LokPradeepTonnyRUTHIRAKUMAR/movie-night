
"use client";

export default function MoviesError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="text-3xl font-bold">Something went wrong!</h1>
      <p className="mt-4 text-zinc-500">
        We couldn&apos;t load the movies. Please try again.
      </p>
      <button
        onClick={() => reset()}
        className="mt-6 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Try again
      </button>
    </main>
  );
}
