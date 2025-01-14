import React, { useState } from "react";
import { AudioRecorder } from "react-audio-voice-recorder";

function AddAudioElement() {
  const [audioUrl, setAudioUrl] = useState(null);

  // This will be triggered when the recording is complete
  const handleRecordingComplete = (blob) => {
    const url = URL.createObjectURL(blob); // create a URL for the recorded audio
    setAudioUrl(url); // Store the URL for playback
  };

  return (
    <div>
      <AudioRecorder
        onRecordingComplete={handleRecordingComplete}
        audioTrackConstraints={{
          noiseSuppression: true,
          echoCancellation: true,
        }}
        downloadOnSavePress={false}
        downloadFileExtension="mp3"
      />

      {audioUrl && (
        <audio controls>
          <source src={audioUrl} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
}

export default AddAudioElement;
