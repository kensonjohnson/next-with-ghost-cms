export async function GET(request: Request) {
  const response = await fetch(
    `${process.env.GHOST_URL}/ghost/api/content/posts/?key=${process.env.GHOST_CONTENT_API_KEY}`
  );

  if (!response.ok) {
    return new Response(JSON.stringify({ error: "Error fetching posts" }), {
      status: 500,
    });
  }

  const data = await response.json();

  return new Response(JSON.stringify(data.posts), {
    headers: { "content-type": "application/json" },
  });
}
