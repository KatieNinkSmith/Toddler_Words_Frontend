import { useState, useEffect } from "react";
import { getUsersWordsByCategory } from "../utilities/words-services";
import { useUser } from "../contexts/UserContext";
import AudioPlayer from "../components/AudioPlayer";
import CurrentWordIndex from "../components/CurrentWordIndex";

function WordDisplay({ selectedCategory }) {
  const { user, loading } = useUser();
  const [words, setWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [categoryWords, setCategoryWords] = useState(null);

  // Fetch words based on category when `category` or `user` changes
  useEffect(() => {
    console.log(user, selectedCategory);
    if (user && selectedCategory) {
      getUsersWordsByCategory(user, selectedCategory)
        .then((fetchedWords) => {
          setWords(fetchedWords);
          setCurrentWordIndex(0);
        })
        .catch((error) => {
          console.error("Error fetching words:", error);
          setWords([]);
        });
    }
  }, [user, selectedCategory, categoryWords]);

  const handleWordChange = (newIndex) => {
    setCurrentWordIndex(newIndex);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!words.length) {
    return <div>No words available for this category.</div>;
  }

  return (
    <div>
      <h1>{selectedCategory}</h1>
      <h1>This is displaying here</h1>
      <CurrentWordIndex
        wordCategory={selectedCategory}
        onWordChange={handleWordChange}
        currentWordIndex={currentWordIndex}
      />
      <AudioPlayer currentWord={word.audio} />
    </div>
  );
}

export default WordDisplay;
