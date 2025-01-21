import { useState, useEffect } from "react";
import { useParams } from "react-router";
import AudioPlayer from "../components/AudioPlayer";
import CurrentWordIndex from "../components/CurrentWordIndex";
import UsersWords from "../components/UsersWords";
import FetchUser from "../components/FetchUser";
import WordDisplay from "../components/WordDisplay";

function InteractiveWords() {
  const { selectedCategory } = useParams();
  console.log(selectedCategory);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const { user, loading } = FetchUser();
  console.log(user);

  // const words = user.words.filter((word) => word.category === selectedCategory);

  const handleWordChange = (newIndex) => {
    setCurrentWordIndex(newIndex);
  };
  const getBackgroundColor = () => {
    console.log(selectedCategory);
    return selectedCategory[currentWordIndex]?.word;
  };
  const backgroundColor = getBackgroundColor();

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>No user words available.</div>;

  return (
    <div
      style={{
        backgroundColor: backgroundColor, // Adjusted to set the background color using the word
      }}
    >
      <WordDisplay currentWordIndex={currentWordIndex} />
      {selectedCategory ? (
        <h1>{selectedCategory}</h1>
      ) : (
        <h1>InteractiveWords</h1>
      )}
      <CurrentWordIndex
        wordCategory={selectedCategory}
        onWordChange={handleWordChange}
      />
      <AudioPlayer
        currentWordIndex={selectedCategory[currentWordIndex]?.word}
      />
    </div>
  );
}
export default InteractiveWords;
