import * as wordsAPI from "./words-api";

export async function createWord(formData) {
  const word = await wordsAPI.createWord(formData);
  return word;
}

export async function getUserWords(userId) {
  const words = await wordsAPI.getUserWords(userId);
  return words;
}

export async function editWord(wordId) {
  const editedWord = await wordsAPI.editWord(wordId);
  return editedWord;
}

export async function deleteWord(wordId) {
  await wordsAPI.deleteWord(wordId);
}
