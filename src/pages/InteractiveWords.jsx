import { useState, useEffect } from "react";
import CurrentWordIndex from "../components/CurrentWordIndex";
import { useUser } from "../contexts/UserContext";
import { useSelectedCategory } from "../contexts/SelectedCategoryContext";
import { getUsersWordsByCategory } from "../utilities/words-services";

const ADMIN_USER_ID = "678c6b69b870157e2433da8d";

function InteractiveWords() {
  const { selectedCategory } = useSelectedCategory();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const { user, loading } = useUser();
  const [words, setWords] = useState([]);
  // const userId = user._id;
  // console.log(userId);

  useEffect(() => {
    if (!selectedCategory) {
      return; // Do nothing if no category is selected
    }
    const fetchWords = async () => {
      try {
        let userId = ADMIN_USER_ID;

        // Always fetch admin's words for 'colors', 'animals', 'food', 'counting'
        const specialCategories = ["colors", "animals", "food", "counting"];
        if (user && !specialCategories.includes(selectedCategory)) {
          // If a user is logged in and it's not one of the special categories, fetch user's words
          userId = user._id;
        }
        const response = await getUsersWordsByCategory(
          userId,
          selectedCategory
        );
        setWords(response); // Set the fetched words in state
        console.log(response);
        console.log(words);
      } catch (error) {
        console.error("Error fetching words:", error);
      }
    };
    fetchWords();
  }, [user, loading, selectedCategory]);

  const handleWordChange = (newIndex) => {
    setCurrentWordIndex(newIndex);
  };

  const getBackgroundColor = () => {
    return words[currentWordIndex]?.word;
  };
  const backgroundColor = getBackgroundColor();

  if (loading) return <div>Loading...</div>;
  if (!words || words.length === 0) return <div>No words available.</div>;

  console.log("Current Word Index:", currentWordIndex);
  console.log("Words List:", words);

  return (
    <div
      className="wordContainer"
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
