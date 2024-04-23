"use client";

import { PostsOrPages } from "@tryghost/content-api";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type LinkObject = {
  name: string;
  href: string;
};

export default function HelpSidebar() {
  const [links, setLinks] = useState<LinkObject[]>([]);

  // Looks like "/help/frequently-asked-questions"
  const pathname = usePathname();

  useEffect(() => {
    console.log("Entering useEffect in help-sidebar.tsx");
    fetchLinks();
  }, []);

  async function fetchLinks() {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + "/api/pages/help"
      );
      if (!response.ok) throw new Error(response.statusText);
      const allHelp: PostsOrPages = await response.json();
      const links = allHelp.map((help) => ({
        name: help.title ?? "Title Not Found",
        href: "/help/" + help.slug,
      }));
      setLinks(links);
    } catch (error) {
      console.error("Failed to fetch help", error);
    }
  }

  return (
    <aside className="md:w-64 mb-16 md:mb-0 md:mr-10 md:shrink-0">
      <h4 className="text-lg font-medium px-3 pb-3 border-b border-gray-800">
        Choose a category
      </h4>
      <nav>
        <ul>
          {links.map((link, linkIndex) => (
            <li key={linkIndex} className="py-2 border-b border-gray-800">
              <Link
                className={`flex items-center px-3 group transition duration-150 ease-in-out ${
                  pathname === link.href
                    ? "text-purple-600"
                    : "text-gray-400 hover:text-purple-600"
                }`}
                href={link.href}
              >
                <span>{link.name}</span>
                <svg
                  className="w-3 h-3 fill-current shrink-0 ml-2 opacity-0 group-hover:opacity-100 group-hover:text-purple-600 group-hover:translate-x-1 transition duration-150 ease-in-out transform"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
