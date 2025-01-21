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
      console.log("Recording complete, mp3Blob:", mp3Blob.mp3Url);
      console.log("mp3Url:", mp3Blob.mp3Url); // This should be the correct URL
      // let data = mp3Blob.mp3Url;
      // console.log(data);
      onRecordingComplete(mp3Blob.mp3Url); // Pass the mp3Blob to the parent
    },

    onError: (error) => console.log("RECORDING ERROR!", error),
  });

  const viewInitial = <button onClick={recorder.start}>start recording</button>;

  const viewRecording = (
    <>
      <button onClick={recorder.stop}>
        stop recording ({(recorder.time / 1000.0).toFixed(1) + "s"})
      </button>
      <button onClick={recorder.pause}>pause</button>
    </>
  );

  const viewPaused = (
    <>
      <button onClick={recorder.stop}>
        stop recording ({(recorder.time / 1000.0).toFixed(1) + "s"})
      </button>
      <button onClick={recorder.resume}>resume</button>
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
