const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const moodRoutes = require("./routes/mood.routes");
const playlistRoutes = require("./routes/playlist.routes");

const app = express();

// ✅ CORS MUST BE FIRST (before routes)
const allowedOrigins = [
  "http://localhost:5173",
  "https://moodify-boyd32vqq-parv7.vercel.app"
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(null, false);
      }
    },
    credentials: true,
  })
);

// ✅ preflight support
app.options("*", cors({ credentials: true }));

app.use(express.json());
app.use(cookieParser());

// routes
app.get("/", (req, res) => {
  res.json({ message: "Moodify Backend is Running 🚀" });
});

app.use("/api/auth", authRoutes);
app.use("/api/moods", moodRoutes);
app.use("/api/playlists", playlistRoutes);

module.exports = app;