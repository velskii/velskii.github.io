import { Router } from "./router.ts";

const app = new Router();

app.get("/", (req: Request) => {
  return new Response("Hello World");
});

app.post("/health-check", () => {
  return new Response("It's ALIVE!");
});

export default {
  fetch(req) {
    return app.handler(req);
  },
} satisfies Deno.ServeDefaultExport;
