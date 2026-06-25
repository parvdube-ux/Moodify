export default function PlaylistCard({
  playlist,
}) {
  if (!playlist)
    return null;

  return (
    <div className="playlist-card">
      <h2 className="playlist-card__title">
        {playlist.name}
      </h2>

      <p className="playlist-card__description">
        {playlist.explanation}
      </p>

      <iframe
        className="playlist-card__player"
        title="spotify-player"
        src={`https://open.spotify.com/embed/playlist/${playlist.playlistId}`}
        width="100%"
        height="420"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media"
      />
    </div>
  );
}