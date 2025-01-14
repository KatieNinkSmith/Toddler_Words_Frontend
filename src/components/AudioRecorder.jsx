import React, { useEffect, useState } from "react";
import { AudioRecorder } from "react-audio-voice-recorder";

const ReactDOM = require("react-dom");

function AddAudioElement() {
  const [audioUrl, setAudioUrl] = useState(null);

  // This will be triggered when the recording is complete
  const handleRecordingComplete = (blob) => {
    const url = URL.createObjectURL(blob); // create a URL for the recorded audio
    setAudioUrl(url); // Store the URL for playback
  };

  return (
    <div>
      <React.StrictMode>
        <AudioRecorder
          onRecordingComplete={handleRecordingComplete}
          audioTrackConstraints={{
            noiseSuppression: true,
            echoCancellation: true,
          }}
          downloadOnSavePress={false}
          downloadFileExtension="webm"
        />
      </React.StrictMode>

      {audioUrl && (
        <audio controls>
          <source src={audioUrl} type="audio/webm" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <AddAudioElement />
);

export default AddAudioElement;
