import { login, register, getme, logout } from "../services/auth.api"
import { useContext, useEffect } from "react"
import { AuthContext } from "../context/auth.context"

export const useAuth = () => {
    const context = useContext(AuthContext)
    const { user, setuser, loading, setloading } = context

    async function handleLogin({
        username,
        email,
        password
    }) {

        setloading(true);

        try {

            const data =
                await login({
                    username,
                    email,
                    password
                });

            setuser(data.user);

            return {
                success: true
            };

        } catch (error) {

            return {
                success: false,
                message:
                    error.response?.data?.message ||
                    "Login failed"
            };

        } finally {

            setloading(false);

        }

    }

    async function handleRegister({
        username,
        email,
        password
    }) {

        setloading(true);

        try {

            const data =
                await register({
                    username,
                    email,
                    password
                });

            setuser(data.user);

            return {
                success: true
            };

        } catch (error) {

            return {
                success: false,
                message:
                    error.response?.data?.message ||
                    "Registration failed"
            };

        } finally {

            setloading(false);

        }

    }

    async function handleGetme() {
        setloading(true)
        try {
            const data = await getme()
            setuser(data.user)
        } catch (error) {
            setuser(null)
        } finally {
            setloading(false)
        }
    }

    async function handleLogout() {
        setloading(true)
        await logout()
        setuser(null)
        setloading(false)
    }

    useEffect(() => {
        handleGetme()
    }, [])

    return {
        user, loading, handleGetme, handleLogin, handleLogout, handleRegister
    }
}