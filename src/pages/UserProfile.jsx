import React, { useState, useEffect } from "react";
import FetchUser from "../components/FetchUser";
import AudioRecord from "../components/AudioRecorder";
import { createWord } from "../utilities/words-services";
import UsersWords from "../components/UsersWords";

function UserProfile() {
  const { user, loading } = FetchUser();
  // console.log(user);
  const [formData, setFormData] = useState({
    word: "",
    category: "Family",
    image: null,
    audio: null,
    user: user,
  });

  useEffect(() => {
    if (user) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        user: user._id, // Set user._id once it's available
      }));
    }
  }, [user]); // Runs when user data changes

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(formData);
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
    // console.log(formData);
  };

  const handleRecordingComplete = async (mp3Blob) => {
    if (mp3Blob) {
      // Directly use the Blob URL, no need to process it
      setFormData({ ...formData, audio: mp3Blob }); // Update formData with the audio URL (Blob URL)
    }
    // console.log(formData);
  };

  // TODO
  const handleSaveWord = async (e) => {
    // console.log(formData); // ! corect info
    e.preventDefault();
    try {
      const submitWord = { ...formData };
      const word = await createWord(submitWord);
      // // console.log(formData);

      // const response = await fetch("http://localhost:5050/api/words", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });
      // // console.log(response);
      // // Handle the response from the backend
      // if (response.ok) {
      //   console.log("Word saved successfully!");
      //   // Handle success (maybe show a success message or clear the form)
      // } else {
      //   console.error("Failed to save word:", response.statusText);
      // }
    } catch (error) {
      console.error("Error sending data to backend:", error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>No user data available.</div>;
  return (
    <div className="profilePage">
      <div className="userProfile">
        <div> Hi! {user.name} </div>
        <p>Add a word for your child to learn</p>
        <form onSubmit={handleSaveWord}>
          <input
            type="text"
            name="word"
            value={formData.word}
            onChange={handleChange}
            placeholder="Enter your word"
            required
          />
          <br />
          <label>Select a category for your word</label>
          <br />
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option>family</option>
            <option>places</option>
            <option>things</option>
            <option>clothing</option>
          </select>
          {/* <br />
          <label>Upload an image for the word</label>
          <br />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
          <br />
          <AudioRecord onRecordingComplete={handleRecordingComplete} /> */}
          <br />
          <button type="submit">SAVE WORD</button>
        </form>
      </div>
      <div>
        <UsersWords />
      </div>
    </div>
  );
}

export default UserProfile;
