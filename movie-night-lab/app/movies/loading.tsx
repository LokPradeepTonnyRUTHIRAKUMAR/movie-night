export default function MoviesLoading() {
  return (
    <main className="mx-auto w-full max-w-2xl p-8">
      <h1 className="text-3xl font-bold">Loading movies...</h1>
      <p className="mt-2 text-zinc-500">
        Please wait while we fetch the movie data.
      </p>
      <div className="mt-6 space-y-3">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="h-20 animate-pulse rounded border bg-zinc-100 dark:bg-zinc-900"
          />
        ))}
      </div>
    </main>
  );
}
