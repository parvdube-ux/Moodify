import { createContext, useState } from "react";

export const moodContext = createContext();

export const MoodProvider = ({ children }) => {

  const [history, sethistory] =
    useState([]);

  const [currentMood, setcurrentMood] =
    useState(null);

  const [
    currentConfidence,
    setcurrentConfidence
  ] = useState(0);

  return (
    <moodContext.Provider
      value={{
        history,
        sethistory,

        currentMood,
        setcurrentMood,

        currentConfidence,
        setcurrentConfidence
      }}
    >
      {children}
    </moodContext.Provider>
  );
};