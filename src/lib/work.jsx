import fetch from "node-fetch";

/**
 * works全部
 */
const apiUrl =
  "https://ate-u.heteml.net/test/ito_test/wp/nextpress/wp-json/wp/v2/posts";
export async function getAllWorksData() {
  const res = await fetch(new URL(apiUrl));
  const works = await res.json();
  return works;
}

/**
 * web
 */
// const apiUrl =
//   "https://ate-u.heteml.net/test/ito_test/wp/nextpress/wp-json/wp/v2/posts";

export async function getAllWebsData() {
  const res = await fetch(new URL(apiUrl));
  const web = await res.json();
  return web;
}

/**
 * youtube
 */
// const apiUrl =
//   "https://ate-u.heteml.net/test/ito_test/wp/nextpress/wp-json/wp/v2/posts";
export async function getAllYoutubesData() {
  const res = await fetch(new URL(apiUrl));
  const youtube = await res.json();
  return youtube;
}

/**
 * interview
 */
// const apiUrl =
//   "https://ate-u.heteml.net/test/ito_test/wp/nextpress/wp-json/wp/v2/posts";

export async function getAllInterviewsData() {
  const res = await fetch(new URL(apiUrl));
  const interview = await res.json();
  return interview;
}

/**
 * artworks
 */
// const apiUrl =
//   "https://ate-u.heteml.net/test/ito_test/wp/nextpress/wp-json/wp/v2/posts";

export async function getAllArtWorksData() {
  const res = await fetch(new URL(apiUrl));
  const artworks = await res.json();
  return artworks;
}
