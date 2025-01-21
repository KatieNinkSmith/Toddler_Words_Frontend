import { useState, useEffect } from "react";
import AudioPlayer from "../components/AudioPlayer";
import CurrentWordIndex from "../components/CurrentWordIndex";
import { useUser } from "../contexts/UserContext";
import { useSelectedCategory } from "../contexts/SelectedCategoryContext";
import { getUsersWordsByCategory } from "../utilities/words-services";

function InteractiveWords() {
  const { selectedCategory } = useSelectedCategory();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const { user, loading } = useUser();
  const [words, setWords] = useState([]);
  const userId = user._id;

  useEffect(() => {
    if (userId && selectedCategory) {
      const fetchWords = async () => {
        try {
          const response = await getUsersWordsByCategory(
            userId,
            selectedCategory
          );
          setWords(response); // Set the fetched words in state
          console.log(words);
        } catch (error) {
          console.error("Error fetching words:", error);
        }
      };
      fetchWords();
    }
  }, [userId, selectedCategory]);

  const handleWordChange = (newIndex) => {
    setCurrentWordIndex(newIndex);
  };

  const getBackgroundColor = () => {
    return words[currentWordIndex]?.word;
  };
  const backgroundColor = getBackgroundColor();

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>No user words available.</div>;

  console.log("Current Word Index:", currentWordIndex);
  console.log("Words List:", words);

  return (
    <div
      style={{
        backgroundColor: backgroundColor, // Adjusted to set the background color using the word
      }}
    >
      <h1>{selectedCategory ? selectedCategory : "Interactive Words"}</h1>
      <CurrentWordIndex
        words={words}
        currentWordIndex={currentWordIndex}
        onWordChange={handleWordChange}
      />
    </div>
  );
}
export default InteractiveWords;
