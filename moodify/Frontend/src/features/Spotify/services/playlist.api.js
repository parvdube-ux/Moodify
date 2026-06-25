
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
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