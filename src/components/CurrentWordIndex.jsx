import { useState, useEffect } from "react";

function CurrentWordIndex({ words, onWordChange }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState("");

  // Update current image based on currentWordIndex
  useEffect(() => {
    if (words.length > 0) {
      const currentWord = words[currentWordIndex];
      setCurrentImage(currentWord?.image || ""); // Update the image based on the current word
      console.log(currentImage);
    }
  }, [currentWordIndex, words]); // Only run when currentWordIndex or words change

  const nextWord = () => {
    setCurrentWordIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % words.length; // Ensure circular navigation
      onWordChange(newIndex); // Notify parent component about the change
      return newIndex;
    });
  };

  const prevWord = () => {
    setCurrentWordIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + words.length) % words.length; // Ensure circular navigation
      onWordChange(newIndex); // Notify parent component about the change
      return newIndex;
    });
  };

  return (
    <div
      className="carousel"
      style={{
        backgroundImage: currentImage,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <button
        onClick={prevWord}
        style={{
          width: "200px",
          fontSize: "40px",
          padding: "15px",
          margin: "10px",
        }}
      >
        Previous
      </button>
      <h2 style={{ fontSize: "200px" }}>{words[currentWordIndex]?.word}</h2>
      <button
        onClick={nextWord}
        style={{
          width: "200px",
          fontSize: "40px",
          padding: "15px",
          margin: "10px",
        }}
      >
        Next
      </button>
    </div>
  );
}

export default CurrentWordIndex;
