export const onRequest: PagesFunction = async ({ params }) => {
  const ORIGIN = "https://topic-site-migration.conference-as2.pages.dev";

  const target = params.conference;

  return fetch(
    `${ORIGIN}/${typeof target === "string" ? target : target.join("/")}`
  );
};
