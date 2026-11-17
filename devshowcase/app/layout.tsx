
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { NavLink } from "@/components/nav-link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | DevShowcase",
    default: "DevShowcase – Developer Portfolio",
  },
  description:
    "Discover developer projects, explore technologies, and share ideas with the developer community.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <header className="border-b border-zinc-200 dark:border-zinc-800">
          <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
            <Link href="/" className="text-xl font-bold">
              DevShowcase
            </Link>

            <div className="flex items-center gap-2">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/projects">Projects</NavLink>
            </div>
          </nav>
        </header>

        <div className="flex-1">{children}</div>

        <footer className="border-t border-zinc-200 p-5 text-center text-sm text-zinc-500 dark:border-zinc-800">
          © 2026 DevShowcase. Built for developers.
        </footer>
      </body>
    </html>
  );
}
