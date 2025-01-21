import { useState, useEffect } from "react";
import { getUsersWordsByCategory } from "../utilities/words-services";
import { useUser } from "../contexts/UserContext";
import AudioPlayer from "../components/AudioPlayer"; // Assuming AudioPlayer is imported
import CurrentWordIndex from "../components/CurrentWordIndex"; // Assuming this is imported

function WordDisplay({ selectedCategory }) {
  const { user, loading } = useUser(); // Fetch user info
  const [words, setWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0); // Track current word index
  const [categoryWords, setCategoryWords] = useState(null); // State to track the

  // Fetch words based on category when `category` or `user` changes
  useEffect(() => {
    console.log(user, selectedCategory);
    if (user && selectedCategory) {
      getUsersWordsByCategory(user, selectedCategory)
        .then((fetchedWords) => {
          setWords(fetchedWords);
          setCurrentWordIndex(0); // Reset to first word
        })
        .catch((error) => {
          console.error("Error fetching words:", error);
          setWords([]); // Optionally handle errors (e.g., show an error message)
        });
    }
  }, [user, selectedCategory, categoryWords]); // Re-fetch when either user or category changes

  const handleWordChange = (newIndex) => {
    setCurrentWordIndex(newIndex); // Update the current word index based on the user's actions
  };

  // Show loading state while user data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // If no words are available or fetched, display a message
  if (!words.length) {
    return <div>No words available for this category.</div>;
  }

  return (
    <div>
      <h1>{selectedCategory}</h1> {/* Display selected category */}
      <h1>This is displaying here</h1>
      <CurrentWordIndex
        wordCategory={selectedCategory}
        onWordChange={handleWordChange}
        currentWordIndex={currentWordIndex}
      />
      <AudioPlayer currentWord={words[currentWordIndex]} />
    </div>
  );
}

export default WordDisplay;
