import { useState } from "react";
import CurrentWordIndex from "../components/CurrentWordIndex";
import AudioPlayer from "../components/AudioPlayer";
import words from "../../data/food";

function Food() {
  const [currentImage, setCurrentImage] = useState();
  const [currentWordIndex, setCurrentWordIndex] = useState(0); // Initial index of the current word

  // Handle changes to the word index from the CurrentWordIndex component
  const handleWordChange = (newIndex, image) => {
    setCurrentImage(image); // Set the current image
    setCurrentWordIndex(newIndex);
  };

  return (
    <div
    // style={{
    //   backgroundImage: currentImage,
    //   backgroundSize: "cover",
    //   backgroundRepeat: "no-repeat",
    // }}
    >
      <h1>Food</h1>
      <CurrentWordIndex words={words} onWordChange={handleWordChange} />
      {/* Only show the image if currentImage is set */}
      {/* {currentImage && (
        <img
          src={currentImage}
          alt={words[currentWordIndex]}
          style={{ width: "50%", height: "auto" }}
        />
      )} */}

      <AudioPlayer currentWordIndex={words[currentWordIndex]} />
    </div>
  );
}
export default Food;
