import { useState, useEffect } from "react";
import {
  getUserWords,
  editWord,
  deleteWord,
} from "../utilities/words-services";
import { useUser } from "../contexts/UserContext";
// import AudioPlayer from "../components/AudioPlayer";

function UsersWords() {
  const [words, setWords] = useState(null);
  const { user, loading } = useUser();
  const [editedForm, setEditedForm] = useState(null);
  const [successMessage, setSuccessMessage] = useState(""); // Success message state

  // Fetch words when the component mounts (or when `user` changes)
  useEffect(() => {
    if (user && user._id) {
      displayWords(); // Fetch words once when the user is available
    }
  }, [user]); // Only call when `user` is set/changed

  async function displayWords() {
    if (user && user._id) {
      const userId = user._id;
      const fetchedWords = await getUserWords(userId);

      setWords(fetchedWords);
    }
  }

  const handleEdit = (word, category, wordId, image) => {
    console.log(word, category, image, wordId);
    setEditedForm({
      word: word,
      category: category,
      image: image,
      audio: null,
      _id: wordId,
    });
    setSuccessMessage(""); // Clear any previous success message when starting to edit
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  // const handleImageEdit = (e) => {
  //   const file = e.target.files[0];
  //   setFormData({ ...formData, image: file, imageURL: "" });
  // };
  const handleImageURLEdit = (e) => {
    const url = e.target.value;
    setFormData({ ...formData, imageURL: url, image: url }); // Clear image if a URL is entered
  };

  const cancelEdit = () => {
    setEditedForm(null); // Reset the form
  };

  async function handleEditSubmit(wordId) {
    console.log(wordId, editedForm);
    const updatedWord = await editWord(wordId, editedForm);
    console.log("Edited word:", updatedWord);
    setEditedForm(null); // Close the edit form after submitting
    setSuccessMessage("Word successfully edited!"); // Set success message
    displayWords(); // Re-fetch words to reflect the changes
  }

  async function deleteRequest(wordId) {
    await deleteWord(wordId);
    displayWords(); // Re-fetch words after deleting
  }

  // const playAudio = (word) => {
  //   console.log(word);
  //   if (word) {
  //     console.log(word.audio);
  //     const audio = new Audio(word.audio);
  //     audio.play().catch((error) => {
  //       console.error("Playback failed:", error);
  //     });
  //   }
  // };

  //TODO figure out audio recording editing without having to delete the word

  return (
    <div className="userAdditions">
      <h4>{user ? user.name + "'s Words" : "Created Words"}</h4>
      // TODO search by category
      {words && (
        <ul className="wordsList">
          {words.map((word, index) => (
            <li key={index} className="listWord">
              <div className="wordInfo">
                Word: {word.word}
                <br />
                Category: {word.category}
                <br />
                Image:{" "}
                {word.image ? (
                  <img
                    style={{ width: "80px" }}
                    src={word.image}
                    alt={word.word}
                  />
                ) : null}
                <br />
                {/* Audio:
                {word.audio ? (
                  <div>
                    <button
                      onClick={() => playAudio(word)}
                      style={{
                        width: "80px",
                        fontSize: "10px",
                        padding: "2px",
                      }}
                    >
                      PLAY
                    </button>
                    <AudioPlayer currentWord={word.audio} />
                  </div>
                ) : (
                  <h2>No Audio </h2>
                )} */}
              </div>
              <div className="wordButton">
                <button
                  onClick={() =>
                    handleEdit(word.word, word.category, word._id, word.image)
                  }
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
      {!words && <p>The words are still loading...</p>}
      {words && words.length === 0 && <p>There are no words yet</p>}
      {/* Success message */}
      {successMessage && <p className="successMessage">{successMessage}</p>}
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
            <option>counting</option>
            <option>food</option>
            <option>animals</option>
            <option>colors</option>
          </select>
          <br />
          {/* <label>Edit Image:</label>
          <input type="file" onChange={handleImageEdit} />
          <br /> */}
          <label>Edit image by entering a new image URL</label>
          <br />
          <input
            type="text"
            name="imageURL"
            value={editedForm.image}
            onChange={handleImageURLEdit}
            placeholder="Enter image URL"
          />
          <br />
          <label>
            To edit your audio file you will need to delete your word and create
            it again.
          </label>
          <button onClick={() => handleEditSubmit(editedForm._id)}>Save</button>
          <button onClick={cancelEdit}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default UsersWords;
