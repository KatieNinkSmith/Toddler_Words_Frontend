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

  useEffect(() => {
    if (!selectedCategory) {
      return;
    }
    const fetchWords = async () => {
      try {
        let userId = ADMIN_USER_ID;
        const specialCategories = ["colors", "animals", "food", "counting"];
        if (user && !specialCategories.includes(selectedCategory)) {
          userId = user._id;
        }
        const response = await getUsersWordsByCategory(
          userId,
          selectedCategory
        );
        setWords(response);
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
  if (!words || words.length === 0)
    return <div>No words available please allow our database to load.</div>;

  console.log("Current Word Index:", currentWordIndex);
  console.log("Words List:", words);

  return (
    <div
      className="wordContainer"
      style={{
        backgroundColor: backgroundColor,
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
