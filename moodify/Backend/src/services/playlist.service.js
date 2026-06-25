const playlistMap =
  require("../utils/playlistMap");

function getPlaylistByMood(mood) {

  return (
    playlistMap[mood] ||
    playlistMap.neutral
  );

}

module.exports = {
  getPlaylistByMood
};