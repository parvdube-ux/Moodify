const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/auth.routes");
const moodRoutes = require("./routes/mood.routes");
const playlistRoutes = require("./routes/playlist.routes");

const app = express();

const allowedOrigins = [
  "https://moodify-parv7.vercel.app",
  "http://localhost:3000"
];

app.use(cors({
  origin: function (origin, callback) {
    // allow server-to-server or mobile apps (no origin)
    if (!origin) return callback(null, true);

    // normalize trailing slash just in case
    const normalizedOrigin = origin.replace(/\/$/, "");

    if (allowedOrigins.includes(normalizedOrigin)) {
      return callback(null, true);
    }

    return callback(new Error("CORS blocked: " + origin));
  },
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