const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/auth.routes");
const moodRoutes = require("./routes/mood.routes");
const playlistRoutes = require("./routes/playlist.routes");

const app = express();

// MUST BE FIRST
app.use(cors({
  origin: "https://moodify-boyd32vqq-parv7.vercel.app",
  credentials: true
}));

// MUST handle preflight
app.options("*", cors({
  origin: "https://moodify-boyd32vqq-parv7.vercel.app",
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/moods", moodRoutes);
app.use("/api/playlists", playlistRoutes);

module.exports = app;