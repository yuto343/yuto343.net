export const prerender = false;
import type { APIRoute } from "astro";

const ORIGIN = "https://topic-site-migration.conference-as2.pages.dev";

export const GET: APIRoute = async ({ params }) => {
  const { slug } = params;

  // /conferenceに直アクセスした時
  if (slug === undefined) {
    return show404();
  }
  const target = `${ORIGIN}/conference/${slug}`;
  const response = await fetch(target);
  const contentType = response.headers.get("Content-Type");

  if (response.status === 404) {
    return show404();
  }
  if (!response.ok) {
    return show404();
  }
  if (contentType === null) {
    return show404();
  }

  return new Response(response.body, {
    status: response.status,
    headers: {
      "Content-Type": contentType,
    },
  });
};

const show404 = async (): Promise<Response> => {
  const response = await fetch(`${ORIGIN}/404`);
  const contentType = response.headers.get("Content-Type") ?? "text/html";
  const notFoundBody = await response.text();

  return new Response(notFoundBody, {
    status: 404,
    headers: {
      "Content-Type": contentType,
    },
  });
};
