import { useState, useEffect } from "react";

function CurrentWordIndex({ selectedCategory, onWordChange }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  console.log(selectedCategory);
  // const [currentImage, setCurrentImage] = useState(selectedCategory[0]?.image);

  useEffect(() => {
    // This effect ensures that whenever currentWordIndex changes, we notify the parent (Colors component)
    // const currentImage = selectedCategory[currentWordIndex]?.image;
    // onWordChange(currentWordIndex, currentImage);
  }, [currentWordIndex, selectedCategory, onWordChange]); // Effect will run whenever currentWordIndex changes

  const nextWord = () => {
    setCurrentWordIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % words.length; // Ensure circular navigation
      const newImage = words[newIndex]?.image;
      handleWordChange(newIndex, newImage); // Notify parent component about the change
      return newIndex;
    });
  };

  const prevWord = () => {
    setCurrentWordIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + words.length) % words.length; // Ensure circular navigation
      const newImage = words[newIndex]?.image;
      handleWordChange(newIndex, newImage); // Notify parent component about the change
      return newIndex;
    });
  };

  const handleWordChange = (newIndex, image) => {
    setCurrentImage(image); // Set the current image
    setCurrentWordIndex(newIndex);
  };

  // TODO ${currentImage} in to line 43
  return (
    <div
      className="carousel"
      style={{
        height: "100%",
        backgroundImage: `url()`,
        backgroundPosition: "center",
        backgroundSize: "50%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <button
        onClick={prevWord}
        style={{
          width: "200px",
          fontSize: "40px",
          padding: "15px",
        }}
      >
        Previous
      </button>
      <div
        className="main"
        style={{
          display: "flex",
          justifyContent: "spaceBetween",
          flexDirection: "column",
          flex: "center",
        }}
      >
        <h2
          style={{
            fontSize: "500%",
            textShadow: "1px 1px white",
            marginTop: "10px",
            marginBottom: "250px",
          }}
        >
          {/* {selectedCategory[currentWordIndex]?.word} */}
        </h2>
        {/* <AudioPlayer currentWordIndex={selectedCategory[currentWordIndex]} /> */}
      </div>
      <button
        onClick={nextWord}
        style={{
          width: "200px",
          fontSize: "40px",
          padding: "15px",
        }}
      >
        Next
      </button>
    </div>
  );
}

export default CurrentWordIndex;
