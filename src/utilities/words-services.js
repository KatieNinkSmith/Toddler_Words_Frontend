import * as wordsAPI from "./words-api";

export async function createWord(formData) {
  const word = await wordsAPI.createWord(formData);
  return word;
}

export async function getUserWords(userId) {
  const words = await wordsAPI.getUserWords(userId);
  return words;
}

export async function getUsersWordsByCategory(userId, category) {
  console.log(userId, category);
  const wordsInCategory = await wordsAPI.getUsersWordsByCategory(
    userId,
    category
  );
  return wordsInCategory;
}

export async function editWord(wordId, editedForm) {
  console.log(wordId, editedForm, "in services recieved data");
  const editedWord = await wordsAPI.editWord(wordId, editedForm);
  console.log(editedWord, "sent to API");
  return editedWord;
}

export async function deleteWord(wordId) {
  await wordsAPI.deleteWord(wordId);
}
