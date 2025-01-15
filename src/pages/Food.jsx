import { useState } from "react";
import CurrentWordIndex from "../components/CurrentWordIndex";
import AudioPlayer from "../components/AudioPlayer";
import words from "../../data/food";

function Food() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const handleWordChange = (newIndex) => {
    setCurrentWordIndex(newIndex);
  };
  return (
    <div>
      <h1>Food</h1>
      <CurrentWordIndex words={words} onWordChange={handleWordChange} />
      <AudioPlayer currentWordIndex={words[currentWordIndex]} />
    </div>
  );
}
export default Food;
