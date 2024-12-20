import React from "react";
import { useState, useEffect } from "react";

const AudioPlayer = ({ currentWordIndex }) => {
  // console.log(currentWordIndex.word);
  const [audioURL, setAudioURL] = useState("");
  const word = currentWordIndex.word;
  word.toLowerCase();

  useEffect(() => {
    const getAudio = async () => {
      try {
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        // console.log(response, "how bout dis");
        const data = await response.json(); // Parse JSON response
        // console.log(data, "whats here");
        let audioFileURL = "";
        for (let i = 0; i < data[0]?.phonetics.length; i++) {
          // console.log(data[0]?.phonetics[i], "array of audio");
          if (data[0]?.phonetics[i]?.audio == "") {
            continue;
          }
          audioFileURL = data[0]?.phonetics[i].audio;
          // if (audioFileURL) {

          //   console.log(audioURL, "newState");
          // }
        }
        // Check if the API gives the URL for audio
        // console.log(audioFileURL, "this is the audio URL");
        setAudioURL(audioFileURL);
        // console.log(audioURL, "new word");
        // if (audioFileURL) {
        //   setAudioURL(audioFileURL);
        //   console.log(audioURL, "newState");
        // }
      } catch (error) {
        console.error("Error fetching audio:", error);
      }
    };
    if (word) {
      getAudio();
    }
  }, [word, audioURL]);
  // console.log(audioURL);
  const playAudio = () => {
    // console.log("test");
    const audio = new Audio(audioURL);
    // console.log(audioURL, "this one");
    audio.play().catch((error) => {
      console.error("Playback failed:", error);
    });
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
