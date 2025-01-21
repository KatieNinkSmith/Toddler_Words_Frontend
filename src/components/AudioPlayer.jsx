import { useState, useEffect } from "react";

// TODO figure out why the current word is not passing into here to see the audio to play
const AudioPlayer = ({ currentWord }) => {
  const [audioURL, setAudioURL] = useState("");

  useEffect(() => {
    const fetchAudio = async () => {
      console.log(currentWord);
      if (currentWord.audio) {
        // Use the provided audio file if available
        setAudioURL(currentWord.audio);
      } else {
        // If no audio is provided, fetch it from the API
        const word = currentWord.word.toLowerCase();
        try {
          const response = await fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
          );
          const data = await response.json();

          let audioFileURL = "";
          for (let i = 0; i < data[0]?.phonetics.length; i++) {
            if (data[0]?.phonetics[i]?.audio) {
              audioFileURL = data[0]?.phonetics[i].audio;
              break; // Use the first valid audio file
            }
          }

          if (audioFileURL) {
            setAudioURL(audioFileURL); // Set the audio URL if found
          } else {
            console.error("No audio found for word:", word);
          }
        } catch (error) {
          console.error("Error fetching audio:", error);
        }
      }
    };

    fetchAudio();
  }, [currentWord]);

  const playAudio = () => {
    if (audioURL) {
      const audio = new Audio(audioURL);
      audio.play().catch((error) => {
        console.error("Playback failed:", error);
      });
    }
  };

  return (
    <div>
      {/* Display an audio player if URL exists */}
      {audioURL ? (
        <div>
          <button
            onClick={playAudio}
            style={{
              width: "200px",
              fontSize: "40px",
              padding: "15px",
              marginBottom: "20px",
            }}
          >
            PLAY
          </button>
        </div>
      ) : (
        <h2>No Audio </h2>
      )}
    </div>
  );
};

export default AudioPlayer;
