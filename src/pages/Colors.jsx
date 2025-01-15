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
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const handleWordChange = (newIndex) => {
    setCurrentWordIndex(newIndex);
  };
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
      <h1>COLORS</h1>
      <CurrentWordIndex words={words} onWordChange={handleWordChange} />
      <AudioPlayer currentWordIndex={words[currentWordIndex]} />
    </div>
  );
}
export default Colors;
