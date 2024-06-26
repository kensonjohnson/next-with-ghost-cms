import ghostApi from "@/ghost/ghost-api";

export async function GET() {
  const data = await ghostApi.posts.browse({
    limit: "all",
    include: ["tags", "authors"],
    filter: "visibility:public",
  });

  const metaRemoved = data.map((post) => post);

  return new Response(JSON.stringify(metaRemoved), {
    headers: { "content-type": "application/json" },
  });
}
