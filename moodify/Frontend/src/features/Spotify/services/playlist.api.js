
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true
});

export async function
getPlaylistRecommendation(
  mood
) {

  const response =
    await api.post(
      "/api/playlists/recommend",
      { mood }
    );

  return response.data;
}