import { useState } from "react";
import CurrentWordIndex from "../components/CurrentWordIndex";
import AudioPlayer from "../components/AudioPlayer";
import words from "../../data/counting";

function Counting() {
  const [currentImage, setCurrentImage] = useState();
  const [currentWordIndex, setCurrentWordIndex] = useState(0); // Initial index of the current word

  // Handle changes to the word index from the CurrentWordIndex component
  const handleWordChange = (newIndex, image) => {
    setCurrentWordIndex(newIndex);
  };

  return (
    <div>
      <h1>NUMBERS</h1>
      <CurrentWordIndex words={words} onWordChange={handleWordChange} />
      <AudioPlayer currentWordIndex={words[currentWordIndex]} />
    </div>
  );
}

export default Counting;
