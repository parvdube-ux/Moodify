const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const moodRoutes = require("./routes/mood.routes");
const playlistRoutes = require("./routes/playlist.routes");

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://YOUR-VERCEL-APP.vercel.app",
    ],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.json({
    message: "Moodify Backend is Running 🚀",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/moods", moodRoutes);
app.use("/api/playlists", playlistRoutes);

module.exports = app;