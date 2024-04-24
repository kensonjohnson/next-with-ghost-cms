import Link from "next/link";
import Image from "next/image";
import PostDate from "@/components/post-date";
import PostTags from "./post-tags";
import { PostOrPage } from "@tryghost/content-api";

type PostItemProps = {
  post: PostOrPage;
};

export default function PostItem({ post }: PostItemProps) {
  return (
    <article className="flex flex-col h-full" data-aos="fade-up">
      <header>
        {post.feature_image && (
          <Link href={`/blog/${post.slug}`} className="block mb-6">
            <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
              <Image
                className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                src={post.feature_image}
                width={352}
                height={198}
                alt={post.feature_image_alt ?? ""}
              />
            </figure>
          </Link>
        )}
        {post.tags && (
          <div className="mb-3">
            <PostTags tags={post.tags} />
          </div>
        )}
        <h3 className="h4 mb-2">
          <Link
            href={`/blog/${post.slug}`}
            className="hover:text-gray-100 transition duration-150 ease-in-out"
          >
            {post.title}
          </Link>
        </h3>
      </header>
      <p className="text-lg text-gray-400 grow">{post.excerpt}</p>
      <footer className="flex items-center mt-4">
        <Link href="#">
          <Image
            className="rounded-full shrink-0 mr-4"
            src={post.authors?.at(0)?.profile_image ?? ""}
            width={40}
            height={40}
            alt={post.authors?.at(0)?.name ?? ""}
          />
        </Link>
        <div className="font-medium">
          <Link
            href="#"
            className="text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out"
          >
            {post.authors?.at(0)?.name ?? ""}
          </Link>
          <span className="text-gray-700"> - </span>
          <span className="text-gray-500">
            <PostDate dateString={post.published_at ?? ""} />
          </span>
        </div>
      </footer>
    </article>
  );
}
