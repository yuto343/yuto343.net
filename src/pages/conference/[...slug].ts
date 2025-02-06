import type { APIRoute } from "astro";
export const GET: APIRoute = async ({ params }) => {
  const ORIGIN = "https://topic-site-migration.conference-as2.pages.dev";

  const { slug } = params;
  const target = `${ORIGIN}/conference/${typeof slug === "string" ? slug : slug.join("/")}`;
  const response = await fetch(target);
  console.log(target);
  console.log(response);
  return new Response(response.body);
};

// export const onRequest: PagesFunction = async ({ params }) => {
//   const ORIGIN = "https://topic-site-migration.conference-as2.pages.dev";

//   const { slug } = params;
//   const target = `${ORIGIN}/conference/${typeof slug === "string" ? slug : slug.join("/")}`;
//   return fetch(target);
// };
