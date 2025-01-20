// TODO: we are using fetch here and can update to axios later
// ** set up the base url for the route
const LOCAL_URL = "http://localhost:5050";
const DEPLOY_URL = "https://toddler-words-backend.onrender.com";
const API_URL = "/api/words";
const URL = DEPLOY_URL + API_URL;

export async function createWord(formData) {
  // fetch uses an options object as a second arg to make requests other then basic GET requests, include data, headers, ect
  const res = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // fetch requires data payloads to be stringified and assigned to a body property on the options object
    body: JSON.stringify(formData),
  });
  // check is request was successful
  if (res.ok) {
    // eventually, res.json() will resolve to the JWT
    return res.json();
  } else {
    throw new Error("Invalid word create");
  }
}

export async function getUserWords(userId) {
  const res = await fetch(URL + `/${userId}`, {
    method: "GET",
  });
  // console.log(res);
  // check if successful
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("No words created yet");
  }
}

export async function getUsersWordsByCategory(user, category) {
  const res = await fetch(URL + `/${user}/${category}`, {
    method: "GET",
  });
  // console.log(res);
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("No words found in this category");
  }
}

export async function editWord(wordId, editedForm) {
  console.log(wordId, editedForm, "in API recieved");
  const res = await fetch(URL + `/${wordId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json", // Make sure to include this
    },
    body: JSON.stringify(editedForm),
  });
  // console.log(res, "response in API frontend");
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Word is not edited");
  }
}

export async function deleteWord(wordId) {
  const res = await fetch(URL + `/${wordId}`, { method: "DELETE" });
  // console.log(res);
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Word is not deleted");
  }
}
