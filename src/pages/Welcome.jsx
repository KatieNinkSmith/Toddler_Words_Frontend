import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelectedCategory } from "../contexts/SelectedCategoryContext";
import { useUser } from "../contexts/UserContext";
import { getUserWords } from "../utilities/words-services";

function Welcome({ setSelectedCategory }) {
  const colorUrl =
    'url("https://images.unsplash.com/photo-1500042600524-37ecb686c775?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHJhaW5ib3d8ZW58MHx8MHx8fDA%3D")';
  const animalUrl =
    'url("https://plus.unsplash.com/premium_photo-1722100465381-a6b9ad3cb996?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHpvbyUyMGFuaW1hbHN8ZW58MHx8MHx8fDA%3D")';
  const foodUrl =
    'url("https://plus.unsplash.com/premium_photo-1734291397771-1e65a74f3e4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dG9kZGxlciUyMGZvb2R8ZW58MHx8MHx8fDA%3D")';
  const countingUrl =
    'url("https://images.unsplash.com/photo-1568828668638-b1b4014d91a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8")';
  const familyUrl =
    "url(https://plus.unsplash.com/premium_photo-1663091823415-eaa421ddd235?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGZhbWlseXxlbnwwfHwwfHx8MA%3D%3D)";
  const placesUrl =
    "url(https://images.unsplash.com/photo-1625603736199-775425d2890a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk2fHxob3VzZXxlbnwwfHwwfHx8MA%3D%3D)";
  const thingsUrl =
    "url(https://images.unsplash.com/photo-1577638104555-83af2d50b5e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGhvdXNlaG9sZCUyMGl0ZW1zfGVufDB8fDB8fHww)";
  const clothingUrl =
    "url(https://images.unsplash.com/photo-1560506840-ec148e82a604?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE0fHxjbG90aGluZyUyMHRvZGRsZXJ8ZW58MHx8MHx8fDA%3D)";

  const { setCategory } = useSelectedCategory();
  const navigate = useNavigate();
  const { user } = useUser();
  const [availableCategories, setAvailableCategories] = useState([]);
  const [words, setWords] = useState([]);

  const adminCategories = ["colors", "animals", "food", "counting"];
  const userCategories = user
    ? availableCategories.filter((category) => category.hasUserWords)
    : [];

  const categoryUrls = {
    colors: colorUrl,
    animals: animalUrl,
    food: foodUrl,
    counting: countingUrl,
    family: familyUrl,
    places: placesUrl,
    things: thingsUrl,
    clothing: clothingUrl,
  };

  useEffect(() => {
    if (user && user._id) {
      displayWords(); // Fetch words once when the user is available
    }
  }, [user]);

  async function displayWords() {
    if (user && user._id) {
      const userId = user._id;
      const fetchedWords = await getUserWords(userId); // Assuming this function fetches the user's words

      setWords(fetchedWords); // Store the user's words in state

      // Now check which categories the user has words for
      const userCategories = [];

      // Check which categories the user has words for
      const categoriesWithUserWords = [
        "family",
        "places",
        "things",
        "clothing",
      ];
      categoriesWithUserWords.forEach((category) => {
        const hasWordsInCategory = fetchedWords.some(
          (word) => word.category === category
        );
        if (hasWordsInCategory) {
          userCategories.push(category);
        }
      });
      console.log(userCategories);
      // Combine admin categories and user's categories into available categories
      setAvailableCategories([...adminCategories, ...userCategories]);
    }
  }

  const handleCategoryClick = (category) => {
    setCategory(category);
    navigate(`/interactivewords/${category}`); // Redirect to the InteractiveWords page with the selected category
  };
  console.log(userCategories);
  return (
    <div>
      <h1>Welcome</h1>
      <div className="homeLinks">
        <div
          className="homeLink"
          onClick={() => handleCategoryClick("colors")}
          style={{ backgroundImage: colorUrl }}
        >
          Colors
        </div>
        <div
          className="homeLink"
          onClick={() => handleCategoryClick("animals")}
          style={{ backgroundImage: animalUrl }}
        >
          Animals
        </div>
        <div
          className="homeLink"
          onClick={() => handleCategoryClick("food")}
          style={{ backgroundImage: foodUrl }}
        >
          Food
        </div>
        <div
          className="homeLink"
          onClick={() => handleCategoryClick("counting")}
          style={{ backgroundImage: countingUrl }}
        >
          Counting
        </div>
        {availableCategories.includes("family") ? (
          <div
            className="homeLink"
            onClick={() => handleCategoryClick("family")}
            style={{ backgroundImage: familyUrl }}
          >
            Family
          </div>
        ) : null}
        {availableCategories.includes("places") ? (
          <div
            className="homeLink"
            onClick={() => handleCategoryClick("places")}
            style={{ backgroundImage: placesUrl }}
          >
            Places
          </div>
        ) : null}
        {availableCategories.includes("clothing") ? (
          <div
            className="homeLink"
            onClick={() => handleCategoryClick("clothing")}
            style={{ backgroundImage: clothingUrl }}
          >
            Clothing
          </div>
        ) : null}
        {availableCategories.includes("things") ? (
          <div
            className="homeLink"
            onClick={() => handleCategoryClick("things")}
            style={{ backgroundImage: thingsUrl }}
          >
            Things
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Welcome;
