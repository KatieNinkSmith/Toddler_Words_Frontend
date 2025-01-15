import { useState } from "react";
import CurrentWordIndex from "../components/CurrentWordIndex";
import AudioPlayer from "../components/AudioPlayer";
import words from "../../data/animals";

function Animals() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const handleWordChange = (newIndex, image) => {
    setCurrentWordIndex(newIndex);
  };
  return (
    <div>
      <h1>ANIMALS</h1>
      <CurrentWordIndex words={words} onWordChange={handleWordChange} />
      <AudioPlayer currentWordIndex={words[currentWordIndex]} />
    </div>
  );
}
export default Animals;
