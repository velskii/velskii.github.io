import { Router } from "./router.ts";
import { generateShortCode } from "./lib.ts";
import { storeShortLink, getShortLink } from "./db.ts";

const app = new Router();

app.get("/", (req: Request) => {
  return new Response("Hello World");
});

app.post("/health-check", () => {
  return new Response("It's ALIVE!");
});

app.post("/links", async (req: Request) => {
  const { longUrl } = await req.json();

  const shortCode = await generateShortCode(longUrl);
  await storeShortLink(longUrl, shortCode, "testUser");

  return new Response("success", { status: 201 });
});

app.get("/links/:id", async (_req: Request, _info, params) => {
  const shortCode = params?.pathname.groups.id;

  const link = await getShortLink(shortCode!);

  return new Response(JSON.stringify(link), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
});

export default {
  fetch(req) {
    return app.handler(req);
  },
} satisfies Deno.ServeDefaultExport;
