import {
  useSimpleAudioRecorder,
  SimpleAudioRecorder,
  preloadWorker,
  RecorderStates,
} from "simple-audio-recorder/react";
import { useEffect } from "react";

export default function AudioRecord({
  onRecordingComplete,
  resetRecorderFlag,
}) {
  const recorder = useSimpleAudioRecorder({
    workerUrl:
      "https://cdn.jsdelivr.net/npm/simple-audio-recorder@1.1.0/dist/mp3worker.js",

    onDataAvailable: (data) => console.log("DATA size", data.length),
    onComplete: (mp3Blob) => {
      console.log("MP3 Blob Data:", mp3Blob); // Log full blob object

      // Ensure it's a valid Blob
      if (mp3Blob instanceof Blob) {
        console.log("MP3 Blob is a valid Blob object");
        console.log("MP3 Blob Size:", mp3Blob.size);
        console.log("MP3 Blob type:", mp3Blob.type);
      } else {
        console.error("Invalid MP3 Blob:", mp3Blob);
      }

      if (mp3Blob && mp3Blob.size > 0 && mp3Blob.type === "audio/mpeg") {
        console.log("Valid audio data received.");
        onRecordingComplete(mp3Blob); // Send the valid blob to the parent
      } else {
        console.error("Invalid MP3 Blob:", mp3Blob);
        console.error("Recording failed or generated empty audio.");
      }
    },

    onError: (error) => console.log("RECORDING ERROR!", error),
  });

  useEffect(() => {
    if (resetRecorderFlag) {
      if (recorder.state === "recording") {
        recorder.stop(); // Stop recording if it's in progress
      }
      recorder.mp3Urls.length = 0; // Clear the recorded audio
    }
  }, [resetRecorderFlag, recorder]);

  const viewInitial = (
    <button type="button" onClick={recorder.start}>
      start recording
    </button>
  );

  const viewRecording = (
    <>
      <button type="button" onClick={recorder.stop}>
        stop recording ({(recorder.time / 1000.0).toFixed(1) + "s"})
      </button>
      <button type="button" onClick={recorder.pause}>
        pause
      </button>
    </>
  );

  const viewPaused = (
    <>
      <button type="button" onClick={recorder.stop}>
        stop recording ({(recorder.time / 1000.0).toFixed(1) + "s"})
      </button>
      <button type="button" onClick={recorder.resume}>
        resume
      </button>
    </>
  );

  const viewError = (
    <>
      {viewInitial}
      <div>Error occurred! {recorder.errorStr}</div>
    </>
  );

  return (
    <div>
      <SimpleAudioRecorder
        {...recorder.getProps()}
        viewInitial={viewInitial}
        viewRecording={viewRecording}
        viewPaused={viewPaused}
        viewError={viewError}
      />
      {recorder.mp3Urls.toReversed().map((url) => (
        <div key={url}>
          <audio src={url} controls />
        </div>
      ))}
    </div>
  );
}
