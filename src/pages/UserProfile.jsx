import { useState, useEffect } from "react";
import { useUser } from "../contexts/UserContext";
import AudioRecord from "../components/AudioRecorder";
import { createWord } from "../utilities/words-services";
import UsersWords from "../components/UsersWords";

// ** file file saves and blob saves so that they can save AND be read later
function UserProfile() {
  const { user, loading } = useUser();
  const [formData, setFormData] = useState({
    word: "",
    category: "family",
    image: null,
    imageURL: "",
    audio: null,
    user: user ? user._id : "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (user) {
      console.log("user data avalible:", user);
      setFormData((prevFormData) => ({
        ...prevFormData,
        user: user._id,
      }));
    }
  }, [user, loading]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file, imageURL: "" });
  };

  const handleImageURLChange = (e) => {
    const url = e.target.value;
    setFormData({ ...formData, imageURL: url, image: null });
  };

  const handleRecordingComplete = async (audioUrl) => {
    console.log("Received audio URL:", audioUrl);
    setFormData((prevFormData) => ({
      ...prevFormData,
      audio: audioUrl,
    }));
  };

  const handleSaveWord = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const submitWord = { ...formData };
      await createWord(submitWord);
      setFormData({
        word: "",
        category: "family",
        image: null,
        imageURL: "",
        audio: null,
        user: user._id,
      });
      setSuccessMessage("Word successfully added!");
    } catch (error) {
      console.error("Error sending data to backend:", error);
      setErrorMessage("Failed to add word. Please try again.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
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
            {/* options added for admin addition
            <option>counting</option>
            <option>food</option>
            <option>animals</option>
            <option>colors</option> */}
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
