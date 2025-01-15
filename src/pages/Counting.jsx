import { useState } from "react";
import CurrentWordIndex from "../components/CurrentWordIndex";
import AudioPlayer from "../components/AudioPlayer";
import words from "../../data/counting";

function Counting() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const handleWordChange = (newIndex) => {
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
