import { useState, useEffect, useRef } from "react";

export default function AudioRecord({
  onRecordingComplete,
  resetRecorderFlag,
}) {
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const streamRef = useRef(null);

  useEffect(() => {
    if (resetRecorderFlag) {
      stopRecording();
    }
  }, [resetRecorderFlag]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      streamRef.current = stream;

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/wav",
        });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioURL(audioUrl);
        onRecordingComplete(audioBlob);
      };

      mediaRecorderRef.current.start();
      setRecording(true);
    } catch (error) {
      console.error("Error accessing the microphone", error);
      setErrorMessage("Failed to access microphone.");
    }
  };

  useEffect(() => {
    if (resetRecorderFlag) {
      stopRecording(); // Stop the current recording if reset flag is true
      setAudioURL(""); // Clear the audio URL when resetting
    }
  }, [resetRecorderFlag]); // Watch for resetRecorderFlag changes

  const stopRecording = () => {
    if (mediaRecorderRef.current && recording) {
      mediaRecorderRef.current.stop(); // Stop the recorder
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop()); // Stop the microphone stream
      }
      setRecording(false); // Set recording state to false
    }
  };

  return (
    <div>
      {errorMessage && <div className="errorMessage">{errorMessage}</div>}
      {recording ? (
        <div>
          <button type="button" onClick={stopRecording}>
            Stop recording
          </button>
        </div>
      ) : (
        <div>
          <button type="button" onClick={startRecording}>
            Start recording
          </button>
        </div>
      )}
      {audioURL && (
        <div>
          <audio controls>
            <source src={audioURL} type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
}
