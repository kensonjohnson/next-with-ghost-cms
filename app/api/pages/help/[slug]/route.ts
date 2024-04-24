import ghostApi from "@/ghost/ghost-api";

export async function GET(request: Request) {
  // get the slug from the URL
  const slug = request.url.split("/").pop()!;
  const data = await ghostApi.pages.read(
    { slug: slug },
    {
      include: ["tags", "authors", "count.posts"],
    }
  );

  return new Response(JSON.stringify(data), {
    headers: { "content-type": "application/json" },
  });
}
