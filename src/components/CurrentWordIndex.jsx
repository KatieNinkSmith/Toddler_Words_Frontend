import { useState, useEffect } from "react";

function CurrentWordIndex({ words, onWordChange }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    // This effect ensures that whenever currentWordIndex changes, we notify the parent (Colors component)
    const currentImage = words[currentWordIndex]?.image;
    onWordChange(currentWordIndex, currentImage);
  }, [currentWordIndex, words, onWordChange]); // Effect will run whenever currentWordIndex changes

  const nextWord = () => {
    setCurrentWordIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % words.length; // Ensure circular navigation
      const newImage = words[newIndex]?.image;
      onWordChange(newIndex, newImage); // Notify parent component about the change
      return newIndex;
    });
  };

  const prevWord = () => {
    setCurrentWordIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + words.length) % words.length; // Ensure circular navigation
      const newImage = words[newIndex]?.image;
      onWordChange(newIndex, newImage); // Notify parent component about the change
      return newIndex;
    });
  };

  return (
    <div className="carousel">
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
