
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl p-8 text-center">
      <h1 className="text-5xl font-bold">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">
        Project or Page Not Found
      </h2>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
      >
        Back to Home
      </Link>
    </main>
  );
}
