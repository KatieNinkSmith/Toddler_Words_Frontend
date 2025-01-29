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
    imageURL: "",
    audio: "",
    user: user ? user._id : "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [resetRecorderFlag, setResetRecorderFlag] = useState(false);

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

  const handleImageChange = async (e) => {
    console.log(e.target.files[0]);
    const image = e.target.files[0];
    if (image) {
      const storageRef = ref(
        storage,
        "images/" + Date.now() + "-" + image.name
      );
      try {
        const snapshot = await uploadBytes(storageRef, image);
        console.log("Uploaded a file!", snapshot.ref);

        const imageURL = await getDownloadURL(snapshot.ref); // Wait for the URL to resolve
        console.log("Image uploaded successfully, URL:", imageURL);

        setFormData((prevFormData) => ({
          ...prevFormData,
          image: imageURL,
          imageURL: "", // Set the image URL properly
        }));
        console.log(formData); // Check the updated form data
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  const handleImageURLChange = (e) => {
    const url = e.target.value;
    setFormData({ ...formData, imageURL: url, image: "" });
  };

  //TODO find an api that transforms a blob into the correct url formate to store and use later
  // Example function to upload an audio file
  const handleRecordingComplete = async (mp3Blob) => {
    console.log("Audio Blob received:", mp3Blob);
    console.log("Blob size:", mp3Blob.size); // Check the size of the blob
    console.log("Blob MIME type:", mp3Blob.type); // Ensure it's an audio type

    // Manually create a File from the mp3Blob with a correct MIME type (assuming MP3)
    const file = new File([mp3Blob], Date.now() + "-audio.mp3", {
      type: "audio/mpeg", // Set MIME type to audio/mpeg
    });
    // Log to confirm the file details
    console.log("File created:", file);
    console.log("File size:", file.size);
    console.log("File MIME type:", file.type);

    if (file && file.type === "audio/mpeg") {
      const fileName = Date.now() + "-audio.mp3"; // Ensure the file has a .mp3 extension
      const storageRef = ref(storage, "audio/" + fileName);

      try {
        // Upload the file to Firebase Storage
        const snapshot = await uploadBytes(storageRef, file);
        console.log("Uploaded a file!", snapshot.ref);

        // Get the download URL of the uploaded audio file
        const audioURL = await getDownloadURL(snapshot.ref);
        console.log("Audio uploaded successfully, URL:", audioURL);

        // Set the form data with the audio URL
        setFormData((prevFormData) => ({
          ...prevFormData,
          audio: audioURL,
        }));
        console.log("Updated form data:", formData);
      } catch (error) {
        console.error("Error uploading audio:", error);
      }
    } else {
      console.error("The audio file is not an MP3 file. MIME type:", file.type);
      alert("Please ensure the audio is recorded in MP3 format.");
    }
  };

  // useEffect(() => {
  //   console.log(formData); // This will show the updated formData after the state change
  // }, [formData]);

  const handleSaveWord = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const submitWord = { ...formData };
      console.log(formData);
      await createWord(submitWord);
      console.log(submitWord);
      setFormData({
        word: "",
        category: "family",
        image: "",
        imageURL: "",
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>No user logged in.</div>;
  }
  return (
    <div>
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
        <AudioRecord
          onRecordingComplete={handleRecordingComplete}
          resetRecorderFlag={resetRecorderFlag}
        />
        <br />
        <button type="submit">SAVE WORD</button>
      </form>
      {successMessage && <div className="successMessage">{successMessage}</div>}
      {errorMessage && <div className="errorMessage">{errorMessage}</div>}
    </div>
  );
}

export default CreateWords;
