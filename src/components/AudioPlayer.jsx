import React from "react";
import { useState, useEffect } from "react";

const AudioPlayer = ({ currentWordIndex }) => {
  const [audioURL, setAudioURL] = useState("");
  const [word, setWord] = useState("");

  // Ensure word is set when currentWordIndex is valid
  useEffect(() => {
    if (currentWordIndex && currentWordIndex.word) {
      setWord(currentWordIndex.word.toLowerCase());
    }
  }, [currentWordIndex]);

  useEffect(() => {
    const getAudio = async () => {
      try {
        if (!word) return; // Don't proceed if word is empty or undefined

        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        const data = await response.json();

        let audioFileURL = "";
        for (let i = 0; i < data[0]?.phonetics.length; i++) {
          if (data[0]?.phonetics[i]?.audio === "") {
            continue;
          }
          audioFileURL = data[0]?.phonetics[i].audio;
        }
        setAudioURL(audioFileURL);
      } catch (error) {
        console.error("Error fetching audio:", error);
      }
    };

    getAudio();
  }, [word]); // Only run this when the word changes

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
              margin: "100px",
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
