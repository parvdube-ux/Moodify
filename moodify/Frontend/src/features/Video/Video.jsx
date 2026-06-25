import React, {
  forwardRef,
  useEffect,
  useRef,
  useImperativeHandle,
  useState,
} from "react";

import "./video.scss";
import { detectEmotion, moodLabels } from "../Expressions/utils/utils.js";

const Video = forwardRef((props, ref) => {
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const [emotion, setEmotion] = useState("Loading...");
  const [confidence, setConfidence] = useState(0);

  useImperativeHandle(ref, () => ({
    getVideo: () => videoRef.current,
  }));

  useEffect(() => {
    const startCamera = async () => {
      try {
        streamRef.current = await navigator.mediaDevices.getUserMedia({
          video: true,
        });

        videoRef.current.srcObject = streamRef.current;
      } catch (err) {
        console.error("Camera Error:", err);
      }
    };

    startCamera();

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
      }
    };
  }, []);

  const detect = async () => {
    const faceLandmarker = props.faceLandmarker?.current;

    if (!videoRef.current || !faceLandmarker) {
      console.log("Model or video not ready");
      return;
    }

    const results = faceLandmarker.detectForVideo(
      videoRef.current,
      performance.now()
    );

    if (!results.faceBlendshapes?.length) {
      setEmotion("No Face Detected");
      setConfidence(0);
      return;
    }

    const blendShapes = results.faceBlendshapes[0].categories;

    const result = detectEmotion(blendShapes);

    setEmotion(moodLabels[result.mood]);
    setConfidence(result.confidence);

    try {
      await props.saveMoodHandler({
        mood: result.mood,
        confidence: result.confidence,
      });

      const playlist = await props.recommendPlaylist(result.mood);

      props.setRecommendedPlaylist(playlist);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="Main-container">
      <div className="video-container">
        <video
          className="video"
          ref={videoRef}
          autoPlay
          playsInline
          muted
          width="500"
          height="400"
        />
      </div>

      <div className="side-container">
        <div className="emotion-box">
            <h3 className="emotion-line">Your Current Emotion is..</h3>
            <h2>{emotion}</h2></div>

        <div className="confidence">
            <h3 className="confidence-line">I can say that with a Confidence of,</h3>
            <h2>Confidence: {(confidence * 100).toFixed(1)}%</h2>
        </div>

        <button onClick={detect}>Detect</button>
      </div>
    </div>
  );
});

export default Video;