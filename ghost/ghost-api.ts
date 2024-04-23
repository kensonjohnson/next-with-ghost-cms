import GhostContentAPI from "@tryghost/content-api";

const ghostApi = new GhostContentAPI({
  url: process.env.GHOST_URL!,
  key: process.env.GHOST_CONTENT_API_KEY!,
  version: process.env.GHOST_API_VERSION!,
});

export default ghostApi;
