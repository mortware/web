const SongsPage = () => {
  return (
    <div className="container">
      <h1>Songs</h1>
      <ul>
        {/* {songs?.map((song: Song) => (
          <li key={song.Id}>
            <Link to={`/song/${song.Id}`}>
              {song.Title} by {song.Artist}
            </Link>
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default SongsPage;
