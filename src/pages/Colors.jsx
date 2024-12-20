import { useState } from "react";
import AudioPlayer from "../components/AudioPlayer";
import CurrentWordIndex from "../components/CurrentWordIndex";

function Colors() {
  const words = [
    { word: "Red", image: "" },
    { word: "Blue", image: "" },
    { word: "Yellow", image: "" },
    { word: "Green", image: "" },
    { word: "Purple", image: "" },
    { word: "Black", image: "" },
    { word: "White", image: "" },
  ];

  const API_KEY = import.meta.env.VITE_YOUR_API_KEY;

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Handle changes to the word index from the CurrentWordIndex component
  const handleWordChange = (newIndex) => {
    setCurrentWordIndex(newIndex);
    console.log("Updated index:", newIndex); // Log the new index
  };
  // console.log(words[currentWordIndex], "which one!");
  // console.log(words[currentWordIndex].word.toLowerCase(), "or this one!");

  const getBackgroundColor = () => {
    return words[currentWordIndex]?.word.toLowerCase();
  };

  const backgroundColor = getBackgroundColor();

  return (
    <div
      style={{
        backgroundColor: backgroundColor, // Adjusted to set the background color using the word
      }}
    >
      <h1>Animals</h1>
      <CurrentWordIndex words={words} onWordChange={handleWordChange} />
      <AudioPlayer currentWordIndex={words[currentWordIndex]} />
    </div>
  );
}

export default Colors;
