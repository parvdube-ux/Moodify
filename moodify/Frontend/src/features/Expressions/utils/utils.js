export const getScore = (blendShapes, name) => {
  return (
    blendShapes.find(
      (shape) => shape.categoryName === name
    )?.score || 0
  );
};



export const detectEmotion = (blendShapes) => {
  const smile =
    (getScore(blendShapes, "mouthSmileLeft") +
      getScore(blendShapes, "mouthSmileRight")) / 2;

  const jawOpen = getScore(
    blendShapes,
    "jawOpen"
  );

  const browInnerUp = getScore(
    blendShapes,
    "browInnerUp"
  );

  const browDownLeft = getScore(
    blendShapes,
    "browDownLeft"
  );

  const browDownRight = getScore(
    blendShapes,
    "browDownRight"
  );

  const mouthFrownLeft = getScore(
    blendShapes,
    "mouthFrownLeft"
  );

  const mouthFrownRight = getScore(
    blendShapes,
    "mouthFrownRight"
  );

  if (smile > 0.55) {
    return {
      mood: "happy",
      confidence: smile,
    };
  }

  if (
    jawOpen > 0.5 &&
    browInnerUp > 0.45
  ) {
    return {
      mood: "excited",
      confidence:
        (jawOpen + browInnerUp) / 2,
    };
  }

  if (
    browDownLeft > 0.25 &&
    browDownRight > 0.25
  ) {
    return {
      mood: "angry",
      confidence:
        (browDownLeft +
          browDownRight) /
        2,
    };
  }

  if (
    (mouthFrownLeft > 0.05 ||
      mouthFrownRight > 0.05) &&
    smile < 0.2
  ) {
    return {
      mood: "sad",
      confidence: Math.max(
        mouthFrownLeft,
        mouthFrownRight
      ),
    };
  }

  return {
    mood: "neutral",
    confidence: 1,
  };
};

export const moodLabels = {
  happy: "😊 Happy",
  sad: "😢 Sad",
  angry: "😠 Angry",
  excited: "😲 Excited",
  neutral: "😐 Neutral",
};