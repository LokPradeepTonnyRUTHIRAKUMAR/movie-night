
import type { Metadata } from "next";
import Link from "next/link";
import { getProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Home",
  description: "Discover and showcase developer projects.",
};

export default async function Home() {
  const featuredProjects = (await getProjects()).slice(0, 3);

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="py-12 text-center">
        <p className="font-semibold text-blue-600">
          Welcome to DevShowcase
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
          Build. Share. Inspire.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          A community where developers showcase their projects,
          share technologies, and inspire each other to build
          amazing things.
        </p>

        <Link
          href="/projects"
          className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Explore Projects
        </Link>
      </section>

      <section className="mt-16">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Featured Projects</h2>
          <Link href="/projects" className="text-sm underline">
            View all projects
          </Link>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="rounded-xl border border-zinc-300 p-5 dark:border-zinc-700"
            >
              <h3 className="text-lg font-semibold">
                {project.title}
              </h3>

              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>

              <Link
                href={`/projects/${project.slug}`}
                className="mt-5 inline-block text-sm font-semibold underline"
              >
                View Details →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
