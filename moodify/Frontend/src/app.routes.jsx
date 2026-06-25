import { createBrowserRouter } from "react-router-dom";
import Register from "./features/Auth/pages/Register";
import Login from "./features/Auth/pages/Login";
import FaceEmotionDetector from "./features/Expressions/components/FaceEmotionDetector";

export const router = createBrowserRouter([
    {
        path : "/",
        element : <FaceEmotionDetector />
    },

    {
        path : "/register",
        element : <Register />
    },

    {
        path : "/login",
        element : <Login />
    }
])

