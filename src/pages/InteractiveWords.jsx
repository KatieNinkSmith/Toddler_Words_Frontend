import { useState, useEffect } from "react";
import { useParams } from "react-router";
import AudioPlayer from "../components/AudioPlayer";
import CurrentWordIndex from "../components/CurrentWordIndex";
import UsersWords from "../components/UsersWords";
import FetchUser from "../components/FetchUser";

function InteractiveWords() {
  const { selectedCategory } = useParams();
  console.log(selectedCategory);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const { user, loading } = FetchUser();

  const handleWordChange = (newIndex) => {
    setCurrentWordIndex(newIndex);
  };
  const getBackgroundColor = () => {
    return words[currentWordIndex]?.word.toLowerCase();
  };
  const backgroundColor = getBackgroundColor();
  const words = user.words.filter((word) => word.category === selectedCategory);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>No user words available.</div>;

  return (
    <div
      style={{
        backgroundColor: backgroundColor, // Adjusted to set the background color using the word
      }}
    >
      <h1>InteractiveWords</h1>
      <CurrentWordIndex
        wordCategory={selectedCategory}
        onWordChange={handleWordChange}
      />
      <AudioPlayer currentWordIndex={words[currentWordIndex]?.word} />
    </div>
  );
}
export default InteractiveWords;
