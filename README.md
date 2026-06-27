# 🎵 Moodify

> **An AI-powered Mood-Based Music Recommendation System built using the MERN Stack.**

Moodify detects a user's facial emotion in real time using **Google MediaPipe Face Landmarker (AI/ML)** and recommends Spotify playlists that match the detected mood. The application also stores mood history, provides analytics through interactive charts, and offers a fully responsive user experience.

---

## 🌐 Live Demo

**Frontend:** https://moodify-parv7.vercel.app/

**Backend API:** https://moodify-3d5t.onrender.com

---

## 📌 Features

* 🎭 Real-time facial emotion detection using **Google MediaPipe Face Landmarker**
* 🤖 AI-powered mood recognition (Happy, Sad, Angry, Excited & Neutral)
* 🎵 Spotify playlist recommendations based on detected emotions
* 💡 Playlist explanation describing why each playlist suits the user's mood
* 📊 Mood history with interactive charts and analytics
* 🔐 Secure JWT Authentication (Register, Login & Logout)
* 🍪 HTTP-only Cookie Authentication
* 💾 MongoDB database integration
* ⚡ RESTful API architecture
* 📱 Fully Responsive Design
* ☁️ Deployed using **Vercel** and **Render**

---

# 🖥️ Application Preview

## Login Page

<img width="1918" height="908" alt="Screenshot 2026-06-26 130946" src="https://github.com/user-attachments/assets/ec5f20dc-58ff-47e6-b37f-5295ddc556e2" />


---

## Register Page

<img width="1907" height="907" alt="Screenshot 2026-06-26 132958" src="https://github.com/user-attachments/assets/8e894f32-06cf-401b-972f-409765fd8270" />


---

## Real-Time Emotion Detection

<img width="1896" height="792" alt="Screenshot 2026-06-26 133113" src="https://github.com/user-attachments/assets/6c24e4fc-06ef-409b-8b2b-a81e8aa8370e" />


---

## Spotify Playlist Recommendation

<img width="1901" height="905" alt="Screenshot 2026-06-26 133132" src="https://github.com/user-attachments/assets/fa11a391-50a2-4f7c-823e-5cfe7709570a" />


---

## Mood History

<img width="1901" height="907" alt="Screenshot 2026-06-26 133149" src="https://github.com/user-attachments/assets/cf3d3e50-909c-4e54-8362-e69267a8902b" />


---

## Mobile Responsive View

<img width="727" height="1600" alt="mobiless" src="https://github.com/user-attachments/assets/03aca547-2491-4a49-86e9-20509ff6da78" />


---

# 🛠 Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* SCSS
* Chart.js
* MediaPipe Tasks Vision

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt.js
* Cookie Parser
* Redis (Token Blacklisting)

### AI / Machine Learning

* Google MediaPipe Face Landmarker

### Deployment

* Vercel
* Render

---

# 🧠 How It Works

1. User registers or logs into the application.
2. Camera permission is requested.
3. MediaPipe Face Landmarker analyzes facial expressions in real time.
4. The detected facial landmarks are classified into one of the following emotions:

   * 😊 Happy
   * 😢 Sad
   * 😠 Angry
   * 😲 Excited
   * 😐 Neutral
5. The detected mood is saved in MongoDB along with its confidence score.
6. A Spotify playlist matching the detected mood is recommended.
7. Users can view their previous moods and analytics from the dashboard.

---

# 📂 Project Structure

```text
Moodify
│
├── Backend
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── middlewares
│   │   ├── models
│   │   ├── routes
│   │   ├── services
│   │   ├── utils
│   │   └── app.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── Frontend
│   ├── src
│   │   ├── assets
│   │   ├── features
│   │   │
│   │   ├── Auth
│   │   ├── Expressions
│   │   ├── Mood
│   │   ├── Navbar
│   │   ├── Shared
│   │   ├── Spotify
│   │   └── Video
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── package.json
│
├── README.md
└── .gitignore
```

---

# ⚙️ Installation

## Clone the Repository

```bash
git clone https://github.com/parvdube-ux/Moodify.git
```

---

## Backend Setup

```bash
cd Backend

npm install

npm start
```

---

## Frontend Setup

```bash
cd Frontend

npm install

npm run dev
```

---

# 🔐 Environment Variables

## Backend (.env)

```env
MONGODB_URI=your_mongodb_connection_string

JWT_TOKEN=your_jwt_secret

REDIS_URL=your_redis_connection_string
```

---

## Frontend (.env)

```env
VITE_API_URL=https://your-render-backend.onrender.com
```

---

# 🚀 Future Improvements

* 🎧 Spotify Web API Integration
* 📈 Mood Trends & Weekly Reports
* 👤 User Profile Dashboard
* 🌙 Dark Mode
* 🎶 Playlist Personalization
* 📥 Export Mood History
* 📊 Advanced Analytics
* 😊 Improved Emotion Detection Accuracy

---

# 📚 Key Learnings

Through this project, I gained hands-on experience in:

* Full-Stack MERN Development
* REST API Development
* JWT Authentication
* HTTP-only Cookie Authentication
* MongoDB Data Modeling
* Integrating AI/ML models into web applications
* Facial Emotion Recognition using MediaPipe
* Data Visualization with Chart.js
* Frontend-Backend Communication
* Production Deployment using Vercel & Render
* Debugging CORS, Cookies & Deployment Issues

---

# 👨‍💻 Author

**Parv Dube**

If you found this project interesting, feel free to ⭐ the repository and connect with me on LinkedIn!

---

# 📜 License

This project is developed for learning and portfolio purposes.
