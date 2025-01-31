import { useState, useEffect } from "react";

const AudioPlayer = ({ currentWord }) => {
  const [audioURL, setAudioURL] = useState("");

  useEffect(() => {
    const fetchAudio = async () => {
      if (currentWord.audio) {
        setAudioURL(currentWord);
      } else {
        const word = currentWord.word;
        const formattedWord = word ? word.toLowerCase() : word;
        try {
          const response = await fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${formattedWord}`
          );
          const data = await response.json();
          console.log(data);
          let audioFileURL = "";
          for (let i = 0; i < data[0]?.phonetics.length; i++) {
            if (data[0]?.phonetics[i]?.audio) {
              audioFileURL = data[0]?.phonetics[i].audio;
              break;
            }
          }
          console.log(audioFileURL);
          if (audioFileURL) {
            setAudioURL(audioFileURL);
          } else {
            console.error("No audio found for word:", formattedWord);
          }
        } catch (error) {
          console.error("Error fetching audio:", error);
        }
      }
    };

    if (currentWord) {
      fetchAudio();
    }
  }, [currentWord]);

  const playAudio = () => {
    if (audioURL) {
      let audioSource;

      // Check if audioURL is an object (user-created audio) or a string (API-provided audio)
      if (typeof audioURL === "object" && audioURL.audio) {
        audioSource = audioURL.audio; // For user-created audio
      } else {
        audioSource = audioURL; // For API-provided audio
      }
      const audio = new Audio(audioSource);
      audio.play().catch((error) => {
        console.error("Playback failed:", error);
      });
    }
  };

  return (
    <div>
      {audioURL ? (
        <div>
          <button
            className="wordbutton"
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
