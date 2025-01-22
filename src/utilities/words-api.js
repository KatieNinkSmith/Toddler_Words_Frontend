// ** set up the base url for the route
const LOCAL_URL = "http://localhost:5050";
const DEPLOY_URL = "https://toddler-words-backend.onrender.com";
const API_URL = "/api/words";
const URL = DEPLOY_URL + API_URL;

export async function createWord(formData) {
  const res = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid word create");
  }
}

export async function getUserWords(userId) {
  const res = await fetch(URL + `/${userId}`, {
    method: "GET",
  });
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("No words created yet");
  }
}

export async function getUsersWordsByCategory(userId, category) {
  const res = await fetch(URL + `/${userId}/${category}`, {
    method: "GET",
  });
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("No words found in this category");
  }
}

export async function editWord(wordId, editedForm) {
  const res = await fetch(URL + `/${wordId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedForm),
  });
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Word is not edited");
  }
}

export async function deleteWord(wordId) {
  const res = await fetch(URL + `/${wordId}`, { method: "DELETE" });
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Word is not deleted");
  }
}
