import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-2xl p-8 text-center">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4 text-zinc-500">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/" className="mt-6 inline-block underline">
        Return to Home
      </Link>
    </main>
  );
}
