import React, { useEffect, useRef, useState } from "react";
import { FilesetResolver, FaceLandmarker } from "@mediapipe/tasks-vision";

import Video from "../../Video/Video";
import Navbar from "../../Navbar/Navbar";

import useSaveMood from "../../Mood/hooks/useSaveMood";
import usePlaylistRecommendation from "../../Spotify/hooks/usePlaylistRecommendation";

import PlaylistCard from "../../Spotify/component/PlaylistCard";
import MoodHistory from "../../Mood/components/MoodHistory";
import MoodChart from "../../Mood/components/MoodChart";

export default function FaceEmotionDetector() {
  const videoRef = useRef(null);
  const faceLandmarker = useRef(null);

  const [recommendedPlaylist, setRecommendedPlaylist] = useState(null);

  const saveMoodHandler = useSaveMood();
  const recommendPlaylist = usePlaylistRecommendation();

  useEffect(() => {
    const initialize = async () => {
      try {
        const vision = await FilesetResolver.forVisionTasks(
          "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
        );

        faceLandmarker.current = await FaceLandmarker.createFromOptions(
          vision,
          {
            baseOptions: {
              modelAssetPath:
                "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/latest/face_landmarker.task",
            },
            runningMode: "VIDEO",
            outputFaceBlendshapes: true,
            numFaces: 1,
          }
        );
      } catch (err) {
        console.error(err);
      }
    };

    initialize();
  }, []);

  return (
    <>
      <Navbar />

      <Video
        ref={videoRef}
        faceLandmarker={faceLandmarker}
        saveMoodHandler={saveMoodHandler}
        recommendPlaylist={recommendPlaylist}
        setRecommendedPlaylist={setRecommendedPlaylist}
      />

      <h2 className="playlist-heading">Recommended Playlist</h2>
      <PlaylistCard playlist={recommendedPlaylist} />

      <MoodHistory />
      <MoodChart />
    </>
  );
}