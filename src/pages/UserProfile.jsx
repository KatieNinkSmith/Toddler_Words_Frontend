import React, { useState, useEffect } from "react";
import FetchUser from "../components/FetchUser";
import AudioRecord from "../components/AudioRecorder";

function UserProfile() {
  const { user, loading } = FetchUser();
  console.log(FetchUser());
  console.log(user);
  const [formData, setFormData] = useState({
    word: "",
    category: "Family",
    image: null,
    audio: null,
    userId: null,
  });

  // Set userId from fetched user data
  useEffect(() => {
    if (user) {
      console.log(user);
      setFormData((prevState) => ({
        ...prevState,
        userId: user._id, // Assuming the user object has 'id' as the user ID
      }));
    }
  }, [user]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleRecordingComplete = async (mp3Blob) => {
    if (mp3Blob) {
      // Directly use the Blob URL, no need to process it
      setFormData({ ...formData, audio: mp3Blob }); // Update formData with the audio URL (Blob URL)
    }
  };

  // TODO this is not working and now its acting as if they can not communicate at all even to login which this should not effect
  const handleSaveWord = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (
      !formData.word ||
      !formData.category ||
      !formData.image ||
      !formData.audio ||
      !formData.userId
    ) {
      alert("Please fill out all fields and upload audio/image.");
      return;
    }

    // Create a new FormData object
    const formDataToSend = new FormData();

    // Append other fields (word, category, image, userId)
    formDataToSend.append("word", formData.word);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("userId", formData.userId);

    // Append the image file
    if (formData.image) {
      formDataToSend.append("image", formData.image);
    }

    // Fetch the audio Blob from the Blob URL
    const audioBlob = await fetch(formData.audio).then((response) =>
      response.blob()
    );

    // Append the audio Blob (converted from Blob URL)
    formDataToSend.append("audio", audioBlob, "audio.mp3");
    console.log(formDataToSend);

    // Now send the FormData to your backend
    try {
      console.log(formDataToSend);
      const response = await fetch("http://localhost:5050/api/words", {
        method: "POST",
        body: formDataToSend,
      });
      console.log(response);
      // Handle the response from the backend
      if (response.ok) {
        console.log("Word saved successfully!");
        // Handle success (maybe show a success message or clear the form)
      } else {
        console.error("Failed to save word:", response.statusText);
      }
    } catch (error) {
      console.error("Error sending data to backend:", error);
    }
  };
  console.log(user);
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
            <option>Family</option>
            <option>Places</option>
            <option>Things</option>
            <option>Clothes</option>
          </select>
          <br />
          <label>Upload an image for the word</label>
          <br />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
          <br />
          <AudioRecord onRecordingComplete={handleRecordingComplete} />
          <br />
          <button type="submit">SAVE WORD</button>
        </form>
      </div>
    </div>
  );
}

export default UserProfile;
