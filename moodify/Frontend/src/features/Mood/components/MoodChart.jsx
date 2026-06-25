import { useContext } from "react";
import { moodContext } from "../context/moods.context";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function MoodChart() {

  const { history } =
    useContext(moodContext);

  const moodCounts = {
    happy: 0,
    neutral: 0,
    sad: 0,
    angry: 0,
    excited: 0
  };

  (history || []).forEach((item) => {
    moodCounts[item.mood]++;
  });

  const data = [
    {
      mood: "Happy",
      count: moodCounts.happy
    },
    {
      mood: "Neutral",
      count: moodCounts.neutral
    },
    {
      mood: "Sad",
      count: moodCounts.sad
    },
    {
      mood: "Angry",
      count: moodCounts.angry
    },
    {
      mood: "Excited",
      count: moodCounts.excited
    }
  ];

  return (
    <div className="mood-chart-card">
      <h2>Mood Trends</h2>

      <div className="mood-chart-wrapper">
        <ResponsiveContainer width="100%" height={380}>
          <BarChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="moodGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.95} />
                <stop offset="95%" stopColor="#38bdf8" stopOpacity={0.35} />
              </linearGradient>
            </defs>

            <CartesianGrid stroke="#334155" vertical={false} strokeDasharray="4 4" />

            <XAxis dataKey="mood" tick={{ fill: '#c7d2fe', fontSize: 13, fontWeight: 600 }} axisLine={false} tickLine={false} />

            <YAxis tick={{ fill: '#cbd5e1', fontSize: 12 }} axisLine={false} tickLine={false} />

            <Tooltip
              cursor={{ fill: 'rgba(148, 163, 184, 0.08)' }}
              wrapperStyle={{ borderRadius: '1rem', boxShadow: '0 18px 40px rgba(15, 23, 42, 0.25)', border: '1px solid rgba(148, 163, 184, 0.18)' }}
              contentStyle={{ background: 'rgba(15, 23, 42, 0.96)', border: 'none', color: '#f8fafc' }}
              labelStyle={{ color: '#bfdbfe', fontWeight: 700 }}
              itemStyle={{ color: '#e2e8f0', padding: '0.45rem 0' }}
            />

            <Bar dataKey="count" fill="url(#moodGradient)" radius={[12, 12, 4, 4]} barSize={42} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}