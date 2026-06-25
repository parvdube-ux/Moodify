import { RouterProvider } from 'react-router-dom'
import { router } from './app.routes.jsx'
import './features/Shared/Styles/global.scss'
import './features/Auth/Styles/login.scss'
import './features/Auth/Styles/register.scss'
import { AuthProvider } from './features/Auth/context/auth.context.jsx'
import { MoodProvider } from './features/Mood/context/moods.context.jsx'

import Footer from "./features/Shared/Components/Footer";

function App() {
  return (
    <AuthProvider>
      <MoodProvider>
        <div className="app-shell">
          <RouterProvider router={router} />
          <Footer />
        </div>
      </MoodProvider>
    </AuthProvider>
  )
}

export default App