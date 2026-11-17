
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isPage = pathname === href;
  const isInSection = href !== "/" && pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      aria-current={isPage ? "page" : isInSection ? "true" : undefined}
      className="rounded-md px-3 py-2 text-sm hover:bg-zinc-200 aria-[current]:font-bold dark:hover:bg-zinc-800"
    >
      {children}
    </Link>
  );
}

