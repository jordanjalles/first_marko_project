import fetch from "node-fetch";

const get = (path) =>
  fetch(path, {
    headers: { "User-Agent": "chrome" },
  }).then((r) => r.json());

export function getGifs(search) {
  return get('https://api.giphy.com/v1/gifs/search?q='+{search}+'&api_key=9wMoLcLkC5BVJMPHB2Y7VU353dUMBxv5');
}
