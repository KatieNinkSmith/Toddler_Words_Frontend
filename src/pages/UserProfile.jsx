import { useState, useEffect } from "react";
import { useUser } from "../contexts/UserContext";
import AudioRecord from "../components/AudioRecorder";
import { createWord } from "../utilities/words-services";
import UsersWords from "../components/UsersWords";

// TODO fix blob
function UserProfile() {
  const { user, loading } = useUser();
  const [formData, setFormData] = useState({
    word: "",
    category: "colors",
    image: null,
    imageURL: "",
    audio: null,
    user: user ? user._id : "",
  });
  console.log(user, loading);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // TODO see is  set time out helps :(
  useEffect(() => {
    if (user) {
      console.log("user data avalible:", user);
      setFormData((prevFormData) => ({
        ...prevFormData,
        user: user._id, // Set user._id once it's available
      }));
    }
  }, [user, loading]); // Runs when user data changes

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file, imageURL: "" });
  };
  const handleImageURLChange = (e) => {
    const url = e.target.value;
    setFormData({ ...formData, imageURL: url, image: null }); // Clear image if a URL is entered
  };
  // TODO work on blob
  const handleRecordingComplete = async (mp3Blob) => {
    if (mp3Blob) {
      setFormData({ ...formData, audio: mp3Blob }); // Update formData with the audio Blob URL
    }
  };

  const handleSaveWord = async (e) => {
    e.preventDefault();
    setSuccessMessage(""); // Reset success message
    setErrorMessage(""); // Reset error message

    try {
      const submitWord = { ...formData };
      await createWord(submitWord); // Assuming createWord handles the API call
      // Reset form data after a successful submit
      setFormData({
        word: "",
        category: "colors",
        image: null,
        imageURL: "",
        audio: null,
        user: user._id, // Keep the user ID
      });
      // TODO set timeout so the success message goes away
      setSuccessMessage("Word successfully added!"); // Show success message
    } catch (error) {
      console.error("Error sending data to backend:", error);
      setErrorMessage("Failed to add word. Please try again."); // Show error message
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Wait for user data to load
  }

  if (!user) {
    return <div>No user logged in.</div>;
  }

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
            <option>counting</option>
            <option>food</option>
            <option>animals</option>
            <option>colors</option>
          </select>
          <br />
          <label>Upload an image file</label>
          <br />
          <input type="file" onChange={handleImageChange} />
          <br />
          <label>Or enter an image URL</label>
          <br />
          <input
            type="text"
            name="imageURL"
            value={formData.imageURL}
            onChange={handleImageURLChange}
            placeholder="Enter image URL"
          />
          <br />
          <label>Record a sound clip</label>
          <AudioRecord onRecordingComplete={handleRecordingComplete} />
          <br />
          <button type="submit">SAVE WORD</button>
        </form>
        {successMessage && (
          <div className="successMessage">{successMessage}</div>
        )}
        {errorMessage && <div className="errorMessage">{errorMessage}</div>}
      </div>
      <UsersWords />
    </div>
  );
}

export default UserProfile;
