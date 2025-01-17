import * as wordsAPI from "./words-api";

export async function createWord(formData) {
  const word = await wordsAPI.createWord(formData);
  return { word };
}
