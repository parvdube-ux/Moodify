import {
  getPlaylistRecommendation,
} from "../services/playlist.api";

export default function usePlaylistRecommendation() {
  const recommendPlaylist =
    async (mood) => {
      const data =
        await getPlaylistRecommendation(
          mood
        );

      return data.playlist;
    };

  return recommendPlaylist;
}