import { useState } from "react";
import CurrentWordIndex from "../components/CurrentWordIndex";
import AudioPlayer from "../components/AudioPlayer";

function Food() {
  const words = [
    "Apple",
    "Rice",
    "Banana",
    "Bread",
    "Shrimp",
    "Sausage",
    "Carrots",
    "Broccoli",
    "Cucumber",
    "Tomato",
    "Kiwi",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0); // Initial index of the current word

  // Handle changes to the word index from the CurrentWordIndex component
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
