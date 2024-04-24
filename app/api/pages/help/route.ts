import ghostApi from "@/ghost/ghost-api";

export async function GET() {
  const data = await ghostApi.pages.browse({
    limit: "all",
    include: ["tags", "authors"],
    filter: "visibility:public+tags.slug:help",
  });

  const metaRemoved = data.map((page) => page);

  return new Response(JSON.stringify(metaRemoved), {
    headers: { "content-type": "application/json" },
  });
}
