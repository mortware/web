import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { Link } from "react-router-dom";
import { Track } from "@/data/models";
import { useListTracks } from "@/data/hooks/use-list-tracks";

function TracksPage() {
  const [filter, setFilter] = useState("");

  const { data: tracks, isLoading } = useListTracks({ filter });

  if (isLoading) return <div>Loading...</div>;

  function handleArtistClick(artist: string) {
    setFilter(artist);
  }

  return (
    <div className="container flex flex-col gap-2">
      <h1>Tracks</h1>
      <SearchBar
        debounce={500}
        value={filter}
        onChange={setFilter}
        onReset={() => setFilter("")}
      />

      <table className="table-fixed w-full text-sm">
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>BPM</th>
            <th>Key</th>
          </tr>
        </thead>
        <tbody>
          {tracks?.map((track: Track) => (
            <tr key={track.id} className="hover:bg-slate-100">
              <td>
                <Link
                  to={`/track/${track.id}`}
                  className="font-semibold text-blue-500"
                >
                  {track.title}
                </Link>
              </td>
              <td>
                <a href="#" onClick={() => handleArtistClick(track.artist)}>
                  {track.artist}
                </a>
              </td>
              <td>{track.tempo}</td>
              <td>{track.songKey}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TracksPage;
