import { useState, useEffect } from "react";
import { getUsersWordsByCategory } from "../utilities/words-services"; // Ensure this is imported
import { useNavigate } from "react-router";

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

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [categoriesWithWords, setCategoriesWithWords] = useState([]);

  const handleCategoryClick = (category) => {
    navigate(`/interactivewords/${category}`); // Redirect to the InteractiveWords page with the selected category
  };

  return (
    <div>
      <h1>Welcome</h1>
      <div className="homeLinks">
        <div
          onClick={() => handleCategoryClick("colors")}
          style={{
            backgroundImage: colorUrl,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            color: "black",
            fontSize: "50px",
          }}
        >
          Colors
        </div>
        <div
          onClick={() => handleCategoryClick("animals")}
          style={{
            backgroundImage: animalUrl,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            color: "black",
            fontSize: "50px",
          }}
        >
          Animals
        </div>
        <div
          onClick={() => handleCategoryClick("food")}
          style={{
            backgroundImage: foodUrl,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "black",
            fontSize: "50px",
          }}
        >
          Food
        </div>
        <div
          onClick={() => handleCategoryClick("numbers")}
          style={{
            backgroundImage: countingUrl,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            color: "black",
            fontSize: "50px",
          }}
        >
          Numbers
        </div>

        {/* Show additional categories if words exist */}
        {categoriesWithWords.length > 0 && (
          <div>
            {categoriesWithWords.map(({ category, words }) => (
              <div
                key={category}
                onClick={() => handleCategoryClick(category)}
                style={{
                  backgroundImage:
                    category === "family"
                      ? familyUrl
                      : category === "places"
                      ? placesUrl
                      : category === "things"
                      ? thingsUrl
                      : clothingUrl,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  color: "black",
                  fontSize: "50px",
                }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Welcome;
