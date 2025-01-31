import { useState, useEffect } from "react";
import { useUser } from "../contexts/UserContext";
import AudioRecord from "../components/AudioRecorder";
import { createWord } from "../utilities/words-services";
import { app, storage } from "../utilities/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function CreateWords() {
  const { user, loading } = useUser();
  const [formData, setFormData] = useState({
    word: "",
    category: "family",
    image: "",
    audio: "",
    user: user ? user._id : "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [resetRecorderFlag, setResetRecorderFlag] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        user: user._id,
      }));
    }
  }, [user, loading]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleImageChange = async (e) => {
    const image = e.target.files[0];
    if (image) {
      try {
        // Create an image element and load the file into it
        const img = new Image();
        const objectURL = URL.createObjectURL(image);
        img.src = objectURL;

        // Wait for the image to load
        await new Promise((resolve) => {
          img.onload = resolve;
        });

        // Create a canvas to draw the image and convert it to jpeg format
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        // Convert the image on the canvas to a jpeg Blob (quality 0.8, can adjust quality)
        const jpegBlob = await new Promise((resolve) => {
          canvas.toBlob(resolve, "image/jpeg", 0.8); // Convert to jpeg with a quality of 0.8
        });

        // Create a new file from the jpeg Blob
        const jpegFile = new File([jpegBlob], `${Date.now()}.jpeg`, {
          type: "image/jpeg",
        });

        // Upload the jpeg file to Firebase Storage
        const storageRef = ref(storage, `images/${jpegFile.name}`);
        const snapshot = await uploadBytes(storageRef, jpegFile);
        const imageURL = await getDownloadURL(snapshot.ref());

        setFormData((prevFormData) => ({
          ...prevFormData,
          image: imageURL,
        }));
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  const handleRecordingComplete = async (audioBlob) => {
    const file = new File([audioBlob], `${Date.now()}-audio.wav`, {
      type: "audio/wav",
    });
    const storageRef = ref(storage, `audio/${file.name}`);
    try {
      const snapshot = await uploadBytes(storageRef, file);
      const audioURL = await getDownloadURL(snapshot.ref);
      setFormData((prevFormData) => ({
        ...prevFormData,
        audio: audioURL,
      }));
    } catch (error) {
      console.error("Error uploading audio:", error);
    }
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
        image: "",
        audio: "",
        user: user._id,
      });

      setSuccessMessage("Word successfully added!");
      setResetRecorderFlag(true);
      setTimeout(() => setResetRecorderFlag(false), 100);
    } catch (error) {
      console.error("Error sending data to backend:", error);
      setErrorMessage("Failed to add word. Please try again.");
    }
  };

  const handleStartNewRecording = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      audio: "", // Clear audio when re-recording
    }));
    setResetRecorderFlag(true);
    setTimeout(() => setResetRecorderFlag(false), 100); // Reset flag after a small timeout
  };

  if (loading) return <div>Loading...</div>;

  if (!user) return <div>No user logged in.</div>;

  return (
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
        <label>Record a sound clip</label>
        <AudioRecord
          onRecordingComplete={handleRecordingComplete}
          resetRecorderFlag={resetRecorderFlag}
        />
        <button type="button" onClick={handleStartNewRecording}>
          Start New Recording
        </button>
        <br />
        <button type="submit">SAVE WORD</button>
      </form>
      {successMessage && <div className="successMessage">{successMessage}</div>}
      {errorMessage && <div className="errorMessage">{errorMessage}</div>}
    </div>
  );
}

export default CreateWords;
