import { useState, useEffect } from "react";
import FetchUser from "../components/FetchUser";
import AudioRecord from "../components/AudioRecorder";
import { createWord } from "../utilities/words-services";
import UsersWords from "../components/UsersWords";

function UserProfile() {
  const { user, loading } = FetchUser();
  const [formData, setFormData] = useState({
    word: "",
    category: "family",
    image: null,
    audio: null,
    user: user,
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
  }
  // TODO work on image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
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
        category: "family",
        image: null,
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
          <br />
          {/* Optionally, you can add file upload and audio recorder here */}
          <br />
          <button type="submit">SAVE WORD</button>
        </form>

        {/* Display success or error message */}
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
