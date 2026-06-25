const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const authRoutes = require("./routes/auth.routes")
const moodRoutes = require("./routes/mood.routes")
const cors = require('cors')
const playlistRoutes = require('./routes/playlist.routes')



app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

app.use('/api/auth',authRoutes)
app.use('/api/moods',moodRoutes)

app.use(
  "/api/playlists",
  playlistRoutes
);

module.exports = app