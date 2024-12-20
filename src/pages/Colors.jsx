import { useState } from "react";
import AudioPlayer from "../components/AudioPlayer";
import CurrentWordIndex from "../components/CurrentWordIndex";

function Colors() {
  const words = ["Red", "Blue", "Yellow", "Green", "Purple", "Black", "White"];
  const API_KEY = import.meta.env.VITE_YOUR_API_KEY;

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Handle changes to the word index from the CurrentWordIndex component
  const handleWordChange = (newIndex) => {
    setCurrentWordIndex(newIndex);
  };

  return (
    <div
      style={{
        backgroundColor: words[currentWordIndex],
      }}
    >
      <h1>COLORS</h1>
      <CurrentWordIndex words={words} onWordChange={handleWordChange} />
      <AudioPlayer currentWordIndex={words[currentWordIndex]} />
    </div>
  );
}

export default Colors;
