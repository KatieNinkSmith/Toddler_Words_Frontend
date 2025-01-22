import { useEffect } from "react";

import AudioPlayer from "../components/AudioPlayer"; // Assuming AudioPlayer is imported

// TODO figure out why the current word is not passing into here to see the current word and carousel buttons
function CurrentWordIndex({ words, currentWordIndex, onWordChange }) {
  const currentWord = words[currentWordIndex];

  useEffect(() => {
    if (currentWord) {
      // You can do additional setup when the current word changes
      onWordChange(currentWordIndex); // Notify parent of the change
    }
  }, [currentWordIndex, currentWord, onWordChange]);

  const nextWord = () => {
    const nextIndex = (currentWordIndex + 1) % words.length; // Wrap around to first word
    onWordChange(nextIndex); // Change word index in parent component
  };

  const prevWord = () => {
    const prevIndex = (currentWordIndex - 1 + words.length) % words.length; // Wrap around to last word
    onWordChange(prevIndex); // Change word index in parent component
  };

  if (!currentWord) return <div>Loading...</div>;

  console.log("Current Word:", currentWord);

  return (
    <div className="carousel">
      <button
        className="wordbutton"
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
          backgroundImage: `url(${currentWord.image})`,
        }}
      >
        <h2
          style={{
            fontSize: "500%",
            textShadow: "1px 1px black",
            marginTop: "10px",
            marginBottom: "250px",
          }}
        >
          {currentWord.word}
        </h2>
        <AudioPlayer currentWord={currentWord} />
      </div>
      <button
        className="wordbutton"
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
