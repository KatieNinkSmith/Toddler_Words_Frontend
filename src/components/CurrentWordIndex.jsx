import { useEffect } from "react";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
import AudioPlayer from "../components/AudioPlayer";

// TODO figure out why the current word is not passing into here to see the current word and carousel buttons
function CurrentWordIndex({ words, currentWordIndex, onWordChange }) {
  const currentWord = words[currentWordIndex];

  useEffect(() => {
    if (currentWord) {
      onWordChange(currentWordIndex);
    }
  }, [currentWordIndex, currentWord, onWordChange]);

  const nextWord = () => {
    const nextIndex = (currentWordIndex + 1) % words.length;
    onWordChange(nextIndex);
  };

  const prevWord = () => {
    const prevIndex = (currentWordIndex - 1 + words.length) % words.length;
    onWordChange(prevIndex);
  };

  if (!currentWord) return <div>Loading...</div>;

  console.log("Current Word:", currentWord.image);

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
        <HiOutlineArrowSmLeft />
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
        <HiOutlineArrowSmRight />
      </button>
    </div>
  );
}

export default CurrentWordIndex;
