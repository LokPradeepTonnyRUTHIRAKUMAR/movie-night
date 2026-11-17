
export default function ProjectsLoading() {
  return (
    <main className="mx-auto max-w-5xl p-8">
      <h1 className="text-3xl font-bold">Loading Projects...</h1>
      <p className="mt-3 text-zinc-500">
        Please wait while we fetch the developer projects.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="h-48 animate-pulse rounded-xl border bg-zinc-100 dark:bg-zinc-900"
          />
        ))}
      </div>
    </main>
  );
}
