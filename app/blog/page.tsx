import Link from "next/link";
import Image from "next/image";
import PostItem from "@/components/post-item";
import { PostsOrPages } from "@tryghost/content-api";

export const metadata = {
  title: "Blog - Open PRO",
  description: "Page description",
};

import Newsletter from "@/components/newsletter";

export default async function Blog() {
  let ghostPosts: PostsOrPages | undefined = undefined;

  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/api/posts",
      {
        next: {
          revalidate: 1,
        },
      }
    );

    if (response.ok) {
      ghostPosts = await response.json();
    }
  } catch (error) {
    console.log("Ghost error", error);
  }

  if (!ghostPosts) {
    return <div>Loading...</div>;
  }

  const featuredPost = ghostPosts[0];
  const posts = ghostPosts.map((post) => {
    return post;
  });

  return (
    <>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/*  Page header */}
            <div className="max-w-3xl pb-12 md:pb-20 text-center md:text-left">
              <h1 className="h1" data-aos="fade-up">
                Refreshing news for developers and designers
              </h1>
            </div>

            {/*  Featured article */}
            <div className="pb-12 md:pb-20">
              <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="relative block group"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <div
                    className="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
                    aria-hidden="true"
                  ></div>
                  {featuredPost.feature_image && (
                    <figure className="relative h-0 pb-9/16 md:pb-3/4 lg:pb-9/16 overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                      <Image
                        className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                        src={featuredPost.feature_image}
                        width="540"
                        height="303"
                        alt={featuredPost.feature_image_alt ?? ""}
                      />
                    </figure>
                  )}
                </Link>
                <div data-aos="fade-left" data-aos-delay="200">
                  <header>
                    <h3 className="h3 text-2xl lg:text-3xl mb-2">
                      <Link
                        href={`/blog/${featuredPost.slug}`}
                        className="hover:text-gray-100 transition duration-150 ease-in-out"
                      >
                        {featuredPost.title}
                      </Link>
                    </h3>
                  </header>
                  <p className="text-lg text-gray-400 grow">
                    {featuredPost.excerpt}
                  </p>
                  {/* <footer className="flex items-center mt-4">
                    <Link href="#">
                      <img
                        className="rounded-full shrink-0 mr-4"
                        src={featuredPost.authors?.at(0)?.profile_image ?? ""}
                        width={40}
                        height={40}
                        alt={featuredPost.authors?.at(0)?.name ?? ""}
                      />
                    </Link>
                    <div>
                      <Link
                        href="#"
                        className="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out"
                      >
                        {featuredPost.authors?.at(0)?.name ?? ""}
                      </Link>
                      <span className="text-gray-700"> - </span>
                      <span className="text-gray-500">
                        <PostDate
                          dateString={featuredPost.published_at ?? ""}
                        />
                      </span>
                    </div>
                  </footer> */}
                </div>
              </article>
            </div>

            {/*  Articles list */}
            <div className="max-w-sm mx-auto md:max-w-none">
              {/*  Section title */}
              <h4
                className="h4 pb-6 mb-10 border-b border-gray-700"
                data-aos="fade-up"
              >
                Latest articles
              </h4>

              {/*  Articles container */}
              <div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
                {posts.map((post) => (
                  <PostItem key={post.uuid} post={post} />
                ))}
              </div>
            </div>

            {/*  Pagination */}
            <nav
              className="flex justify-center pt-16"
              role="navigation"
              aria-label="Pagination Navigation"
            >
              <ul className="inline-flex flex-wrap font-medium text-sm -m-1">
                <li className="m-1">
                  <span className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-4 rounded-full text-gray-500">
                    Prev
                  </span>
                </li>
                <li className="m-1">
                  <Link
                    href="#"
                    className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-purple-600 transition-colors duration-150 ease-in-out"
                  >
                    1
                  </Link>
                </li>
                <li className="m-1">
                  <Link
                    href="#"
                    className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-purple-600 transition-colors duration-150 ease-in-out"
                  >
                    2
                  </Link>
                </li>
                <li className="m-1">
                  <Link
                    href="#"
                    className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-purple-600 transition-colors duration-150 ease-in-out"
                  >
                    3
                  </Link>
                </li>
                <li className="m-1">
                  <span className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-500">
                    ...
                  </span>
                </li>
                <li className="m-1">
                  <Link
                    href="#"
                    className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-purple-600 transition-colors duration-150 ease-in-out"
                  >
                    12
                  </Link>
                </li>
                <li className="m-1">
                  <Link
                    href="#"
                    className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-4 rounded-full text-gray-300 hover:bg-purple-600 transition-colors duration-150 ease-in-out"
                  >
                    Next
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
}
