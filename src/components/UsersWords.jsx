import { useState, useEffect } from "react";
import {
  getUserWords,
  editWord,
  deleteWord,
} from "../utilities/words-services";
import FetchUser from "../components/FetchUser";

function UsersWords() {
  const [words, setWords] = useState(null);
  const { user, loading } = FetchUser();
  const [editedForm, setEditedForm] = useState(null);

  // Fetch words when the component mounts (or when `user` changes)
  useEffect(() => {
    if (user && user._id) {
      displayWords(); // Fetch words once when the user is available
    }
  }, [user]); // Only call when `user` is set/changed

  async function displayWords() {
    if (user && user._id) {
      const userId = user._id;
      const words = await getUserWords(userId);
      setWords(words);
    }
  }

  const handleEdit = (word, category, userId) => {
    setEditedForm({
      word: word,
      category: category,
      userId: userId,
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const cancelEdit = () => {
    setEditedForm(null); // Reset the form
  };

  async function handleEditSubmit(wordId) {
    const updatedWord = await editWord(wordId, editedForm);
    console.log("Edited word:", updatedWord);
    setEditedForm(null); // Close the edit form after submitting
    displayWords(); // Re-fetch words to reflect the changes
  }

  async function deleteRequest(wordId) {
    await deleteWord(wordId);
    displayWords(); // Re-fetch words after deleting
  }

  return (
    <div className="userAdditions">
      <h4>{user ? user.name + "'s Words" : "Created Words"}</h4>
      {words && (
        <ul className="wordsList">
          {words.map((word, index) => (
            <li key={index} className="listWord">
              <div className="wordInfo">
                Word: {word.word}
                <br />
                Category: {word.category}
                <br />
                Image: {word.image}
                <br />
                Audio: {word.audio}
              </div>
              <div className="wordButton">
                <button
                  onClick={() => handleEdit(word.word, word.category, word._id)}
                >
                  EDIT
                </button>
                <br />
                <button onClick={() => deleteRequest(word._id)}>DELETE</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {!words && <p>Loading...</p>}
      {words && words.length === 0 && <p>No words found.</p>}

      {/* Edit Form */}
      {editedForm && (
        <div>
          <label>Edit Word:</label>
          <input
            type="text"
            name="word"
            value={editedForm.word}
            onChange={handleEditChange}
            required
          />
          <label>Edit Category:</label>
          <select
            name="category"
            value={editedForm.category}
            onChange={handleEditChange}
            required
          >
            <option>family</option>
            <option>places</option>
            <option>things</option>
            <option>clothing</option>
          </select>
          <button onClick={() => handleEditSubmit(editedForm.userId)}>
            Save
          </button>
          <button onClick={cancelEdit}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default UsersWords;
