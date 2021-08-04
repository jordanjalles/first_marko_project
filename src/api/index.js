import client from "axios";
const GIPHY_API_KEY = "9wMoLcLkC5BVJMPHB2Y7VU353dUMBxv5";

/**
 * Get Gifs
 * Using axios just cause it's easy and nice.
 *
 * @param {string} - search query term
 */
export async function getGifs(queryTerm, limit) {
  return await client
    .get("https://api.giphy.com/v1/gifs/search", {
      params: {
        api_key: GIPHY_API_KEY,
        q: queryTerm,
        limit: limit,
      },
    })
    .then((response) => response.data?.data)
    .catch((error) => {
      console.log("error", error);
    });
}
