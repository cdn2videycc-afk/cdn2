export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname.slice(1);

    if (!path) {
      return new Response("Link not found", { status: 404 });
    }

    // KV database se original link fetch karein
    const targetUrl = await env.LINKS.get(path);

    if (targetUrl) {
      return Response.redirect(targetUrl, 302);
    } else {
      return new Response("Link not found", { status: 404 });
    }
  },
};
