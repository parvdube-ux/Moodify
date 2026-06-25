import {
  useContext,
  useEffect
} from "react";

import { moodContext }
from "../context/moods.context";

import { useMood }
from "../hooks/useMoodHist";

export default function MoodHistory() {

  const fetchHistory =
    useMood();

  const {
    history,
    currentMood,
    currentConfidence
  } = useContext(moodContext);

  useEffect(() => {

    fetchHistory();

  }, []);

  const oneWeekAgo =
    new Date();

  oneWeekAgo.setDate(
    oneWeekAgo.getDate() - 7
  );

  const weeklyHistory =
    history.filter(
      item =>
        new Date(
          item.createdAt
        ) >= oneWeekAgo
    );

  const moodStats =
    weeklyHistory.reduce(
      (acc, item) => {

        acc[item.mood] =
          (acc[item.mood] || 0) + 1;

        return acc;

      },
      {}
    );

  const recentDetections =
    history.slice(0, 5);

  const mostFrequentMood =
    Object.keys(moodStats).length
      ? Object.keys(moodStats)
          .reduce(
            (a, b) =>
              moodStats[a] >
              moodStats[b]
                ? a
                : b
          )
      : "No Data";

  return (

    <div className="mood-history-card">

      <div className="mood-history-summary-row">
        <div className="mood-history-card-item">
          <h2>Current Mood</h2>
          <p className="mood-history-value">
            {currentMood || "No Mood Yet"}
          </p>
        </div>

        <div className="mood-history-card-item">
          <h2>Confidence</h2>
          <p className="mood-history-value">
            {(currentConfidence * 100).toFixed(1)}%
          </p>
        </div>

        <div className="mood-history-card-item">
          <h2>Most Frequent</h2>
          <p className="mood-history-value">{mostFrequentMood}</p>
        </div>
      </div>

      <div className="mood-history-grid">
        <div className="mood-history-stat-card">
          <h2>This Week</h2>
          <p><span className="mood-history-label">Happy:</span> {moodStats.happy || 0}</p>
          <p><span className="mood-history-label">Neutral:</span> {moodStats.neutral || 0}</p>
          <p><span className="mood-history-label">Sad:</span> {moodStats.sad || 0}</p>
          <p><span className="mood-history-label">Angry:</span> {moodStats.angry || 0}</p>
        </div>

        <div className="mood-history-recent-card">
          <h2>Recent Detections</h2>
          {recentDetections.map(item => (
            <div key={item._id} className="mood-history-item">
              <p><span className="mood-history-label">Mood:</span> {item.mood}</p>
              <p><span className="mood-history-label">Confidence:</span> {(item.confidence * 100).toFixed(0)}%</p>
            </div>
          ))}
        </div>
      </div>

    </div>

  );
}