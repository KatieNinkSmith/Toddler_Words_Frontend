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
  const [edit, setEdit] = useState(false);
  // console.log(user);
  // TODO: Fetch data from a server API and display the fetched words
  async function displayWords() {
    // console.log(user);
    const userId = user._id;
    const words = await getUserWords(userId);
    setWords(words);
  }
  displayWords();

  // const handleEdit = (date, type, description, id) => {
  //   //console.log(date, type, description, id); // *** all data is pulled
  //   setEditFormId(id);
  //   //console.log("this is the edit id:", id);
  //   // *** edited form data
  //   setEditedForm({
  //     entryDate: date,
  //     entryType: type,
  //     description: description,
  //   });

  //   //console.log(editedForm); // ** ensuring the form data is going fully through the handleEdit
  // };
  // // ** Cancel Edit
  // const cancelEdit = () => {
  //   setEditFormId(null); // ** Clear the edit form state
  //   setEditedForm({ entryDate: current, entryType: "", description: "" }); // ** Reset the form
  // };

  //     // ** This function is called when the user changes any input field (date, type, description)
  // const handleEditChange = (e) => {
  //   const { name, value } = e.target;
  //   // ** Update only the field that changed (keeping others intact)
  //   setEditedForm((prevForm) => ({
  //     ...prevForm, // ** Keep the previous values intact
  //     [name]: value, // ** Update the specific field that changed
  //   }));
  // };

  // const handleTypeSelect = (e) => {
  //   setEntryType(e.target.value);
  // };
  async function editRequest(wordId) {
    const { name, value } = e.target;
    // ** Update only the field that changed (keeping others intact)
    setEditedForm((prevForm) => ({
      ...prevForm, // ** Keep the previous values intact
      [name]: value, // ** Update the specific field that changed
    }));
    setEdit(true);
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
    <div className="userAdditions">
      <div>{user ? user.name + "'s Words" : "Created Words"}</div>
      {words && (
        <ul className="wordsList">
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

// {editFormId === entry._id ? (
//   <>
//     <>
//       <input
//         type="date"
//         name="entryDate"
//         required
//         onChange={handleEditChange}
//         value={editedForm.entryDate}
//       />
//       <label>
//         Choose the Entry Type
//         <select
//           name="entryType"
//           value={editedForm.entryType}
//           onChange={handleEditChange}
//         >
//           <option value="None"> </option>
//           <option value="ToDo">To Do</option>
//           <option value="Idea">Idea</option>
//           <option value="Appt">Appt</option>
//           <option value="Sched">Sched</option>
//           <option value="List">List</option>
//         </select>
//       </label>
//       <input
//         type="text"
//         name="description"
//         required
//         onChange={handleEditChange}
//         value={editedForm.description}
//       />
//       <button onClick={() => editEntry(entry._id)}>Save</button>
//       <button onClick={cancelEdit}>Cancel</button>
//     </>
//   </>
// ) : (
//   <>
//     {entry.entryDate}: {entry.entryType} : {entry.description}
//     <button
//       onClick={() =>
//         handleEdit(
//           entry.entryDate,
//           entry.entryType,
//           entry.description,
//           entry._id
//         )
//       }
//     >
//       Edit
//     </button>
//   </>
// )}
