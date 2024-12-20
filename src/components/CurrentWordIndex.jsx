import { useState } from "react";

function CurrentWordIndex({ words, onWordChange }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const nextWord = () => {
    setCurrentWordIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % words.length;
      onWordChange(newIndex); // Notify parent component about the change
      return newIndex;
    });
  };

  const prevWord = () => {
    setCurrentWordIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + words.length) % words.length;
      onWordChange(newIndex); // Notify parent component about the change
      return newIndex;
    });
  };

  const getBackgroundColor = () => {
    return words[currentWordIndex];
  };

  const backgroundColor = getBackgroundColor();

  return (
    <div style={{ backgroundColor: backgroundColor }} className="carousel">
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
      <h2 style={{ fontSize: "200px" }}>{words[currentWordIndex]}</h2>
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
