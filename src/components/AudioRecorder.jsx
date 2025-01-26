import {
  useSimpleAudioRecorder,
  SimpleAudioRecorder,
  preloadWorker,
  RecorderStates,
} from "simple-audio-recorder/react";

export default function AudioRecord({ onRecordingComplete }) {
  const recorder = useSimpleAudioRecorder({
    workerUrl:
      "https://cdn.jsdelivr.net/npm/simple-audio-recorder@1.1.0/dist/mp3worker.js",

    onDataAvailable: (data) => console.log("DATA AVAILABLE", data.length),
    onComplete: (mp3Blob) => {
      onRecordingComplete(mp3Blob.mp3Url);
    },

    onError: (error) => console.log("RECORDING ERROR!", error),
  });

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
