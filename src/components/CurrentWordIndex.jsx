import { useState, useEffect } from "react";
import AudioPlayer from "./AudioPlayer";

function CurrentWordIndex({ words, onWordChange }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(words[0]?.image);

  useEffect(() => {
    // This effect ensures that whenever currentWordIndex changes, we notify the parent (Colors component)
    const currentImage = words[currentWordIndex]?.image;
    setCurrentImage(currentImage);
    onWordChange(currentWordIndex, currentImage);
  }, [currentWordIndex, words, onWordChange]); // Effect will run whenever currentWordIndex changes

  const nextWord = () => {
    setCurrentWordIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % words.length; // Ensure circular navigation
      const newImage = words[newIndex]?.image;
      handleWordChange(newIndex, newImage); // Notify parent component about the change
      return newIndex;
    });
  };

  const prevWord = () => {
    setCurrentWordIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + words.length) % words.length; // Ensure circular navigation
      const newImage = words[newIndex]?.image;
      handleWordChange(newIndex, newImage); // Notify parent component about the change
      return newIndex;
    });
  };

  const handleWordChange = (newIndex, image) => {
    setCurrentImage(image); // Set the current image
    setCurrentWordIndex(newIndex);
  };
  return (
    <div
      className="carousel"
      style={{
        height: "100%",
        backgroundImage: `url(${currentImage})`,
        backgroundPosition: "center",
        backgroundSize: "50%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <button
        onClick={prevWord}
        style={{
          width: "200px",
          fontSize: "40px",
          padding: "15px",
        }}
      >
        Previous
      </button>
      <div
        className="main"
        style={{
          display: "flex",
          justifyContent: "spaceBetween",
          flexDirection: "column",
          flex: "center",
        }}
      >
        <h2
          style={{
            fontSize: "500%",
            textShadow: "1px 1px white",
            marginTop: "10px",
            marginBottom: "250px",
          }}
        >
          {words[currentWordIndex]?.word}
        </h2>
        {/* <AudioPlayer currentWordIndex={words[currentWordIndex]} /> */}
      </div>
      <button
        onClick={nextWord}
        style={{
          width: "200px",
          fontSize: "40px",
          padding: "15px",
        }}
      >
        Next
      </button>
    </div>
  );
}

export default CurrentWordIndex;
