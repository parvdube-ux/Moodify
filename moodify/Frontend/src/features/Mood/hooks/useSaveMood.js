import { useContext } from "react";

import { moodContext }
from "../context/moods.context";

import { saveMood }
from "../services/moods.api";

export default function useSaveMood() {

  const {
    setcurrentMood,
    setcurrentConfidence
  } = useContext(moodContext);

  const saveMoodHandler =
    async (moodData) => {

      try {

        const data =
          await saveMood(moodData);

        setcurrentMood(
          moodData.mood
        );

        setcurrentConfidence(
          moodData.confidence
        );

        return data;

      } catch (error) {

        console.error(error);

      }

    };

  return saveMoodHandler;
}