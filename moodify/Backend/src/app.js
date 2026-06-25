const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/auth.routes");
const moodRoutes = require("./routes/mood.routes");
const playlistRoutes = require("./routes/playlist.routes");

const app = express();

// ✅ MUST BE FIRST MIDDLEWARE
app.use(cors({
  origin: "https://moodify-parv7.vercel.app/",
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({ message: "Moodify Backend Running 🚀" });
});

app.use("/api/auth", authRoutes);
app.use("/api/moods", moodRoutes);
app.use("/api/playlists", playlistRoutes);

module.exports = app;