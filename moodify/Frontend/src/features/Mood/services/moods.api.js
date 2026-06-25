import axios from "axios"

const api = axios.create({
    baseURL : import.meta.env.VITE_API_URL,
    withCredentials: true
})

export async function saveMood(moodData){
    const response = await api.post("/api/moods", moodData)

    return response.data
}

export async function moodHist(){
    const response = await api.get("/api/moods/history")

    return response.data
}