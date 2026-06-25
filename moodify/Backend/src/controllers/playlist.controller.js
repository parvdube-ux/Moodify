const {
  getPlaylistByMood
} = require(
  "../services/playlist.service"
);

async function recommendPlaylist(req,res){

  const { mood } = req.body;

  const playlist = getPlaylistByMood(mood);
    

  return res.status(200).json({
    message:
      "Playlist recommended",
    playlist
  });

}

module.exports = {
  recommendPlaylist
};