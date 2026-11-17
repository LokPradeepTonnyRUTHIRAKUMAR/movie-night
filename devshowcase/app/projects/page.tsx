
import type { Metadata } from "next";
import Link from "next/link";
import { getProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore developer projects built by the community.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="mx-auto max-w-5xl p-8">
      <h1 className="text-3xl font-bold">Explore Projects</h1>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400">
        Discover projects created by developers and explore the technologies
        behind them.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="rounded-xl border border-zinc-300 p-6 dark:border-zinc-700"
          >
            <h2 className="text-xl font-semibold">
              <Link
                href={`/projects/${project.slug}`}
                className="hover:underline"
              >
                {project.title}
              </Link>
            </h2>

            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full bg-zinc-200 px-3 py-1 text-xs text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
                >
                  {technology}
                </span>
              ))}
            </div>

            <Link
              href={`/projects/${project.slug}`}
              className="mt-5 inline-block font-semibold underline"
            >
              View Project →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
