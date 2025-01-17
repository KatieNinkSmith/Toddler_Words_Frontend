import { useState } from "react";
import {
  getUserWords,
  editWord,
  deleteWord,
} from "../utilities/words-services";
import FetchUser from "../components/FetchUser";

function UsersWords() {
  const [words, setWords] = useState(null);
  const { user, loading } = FetchUser();
  // console.log(user);
  // TODO: Fetch data from a server API and display the fetched words
  async function displayWords() {
    // console.log(user);
    const userId = user._id;
    const words = await getUserWords(userId);
    setWords(words);
  }

  async function editRequest(wordId) {
    // TODO: Implement word editing functionality with conditional rendering of input form to make edits
    const editedWord = await editWord(wordId);
    console.log("Edited word:", editedWord);
    return editedWord;
  }

  async function deleteRequest(wordId) {
    const deletedWord = await deleteWord(wordId);
    return deletedWord;
  }

  return (
    <div>
      <div>{user ? user.name + "'s Words" : "Created Words"}</div>
      <button onClick={displayWords}>Created Words</button>
      {words && (
        <ul>
          {words.map((word, index) => (
            <li key={index}>
              Word: {word.word}
              <br />
              Category: {word.category}
              <br />
              Image: {word.image}
              <br />
              Audio: {word.audio}
              <br />
              <button onClick={() => editRequest(word._id)}>EDIT</button>
              <button onClick={() => deleteRequest(word._id)}>DELETE</button>
            </li>
          ))}
        </ul>
      )}
      {!words && <p>Loading...</p>}
      {words && words.length === 0 && <p>No words found.</p>}
    </div>
  );
}

export default UsersWords;
