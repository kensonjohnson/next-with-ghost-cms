import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PostDate from "@/components/post-date";
import Sidebar from "./help-sidebar";
import { PostOrPage, PostsOrPages } from "@tryghost/content-api";

export async function generateStaticParams() {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/api/pages/help",
    { next: { revalidate: 1 } }
  );
  if (!response.ok) throw new Error("Failed to fetch help");
  const allHelp = (await response.json()) as PostsOrPages;
  return allHelp.map((help) => ({
    slug: help.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const helpPageResponse = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + `/api/pages/help/${params.slug}`,
    { next: { revalidate: 1 } }
  );

  if (!helpPageResponse.ok) return;

  const helpPage = (await helpPageResponse.json()) as PostOrPage;

  const { title, excerpt: description } = helpPage;

  return {
    title,
    description,
  };
}

export default async function SingleHelp({
  params,
}: {
  params: { slug: string };
}) {
  const helpPageResponse = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + `/api/pages/help/${params.slug}`
  );

  if (!helpPageResponse.ok) notFound();

  const helpPage = (await helpPageResponse.json()) as PostOrPage;

  return (
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="flex flex-col md:flex-row">
          <main className="md:flex-auto md:pl-10 order-1" data-aos="fade-up">
            <div className="mb-8">
              <h2 className="h2 mb-4">{helpPage.title}</h2>
              <p className="text-gray-400">
                Last updated -{" "}
                <span className="text-purple-600">
                  <PostDate
                    dateString={helpPage.updated_at ?? Date.now().toString()}
                  />
                </span>
              </p>
            </div>
            {/* Inject html from Ghost Content API */}
            <div
              className="prose prose-h3:text-white prose-p:text-white"
              dangerouslySetInnerHTML={{ __html: helpPage.html! }}
            ></div>
          </main>

          {/* Nav sidebar */}
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
