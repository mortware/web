import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { Link } from "react-router-dom";
import { Track } from "@/data/models";
import { useListTracks } from "@/data/hooks/use-list-tracks";
import Icon from "@/components/Icon";

function TracksPage() {
  const [filter, setFilter] = useState("");

  const { data: tracks, isLoading } = useListTracks({ filter });

  function handleArtistClick(artist: string) {
    setFilter(artist);
  }

  return (
    <div className="container flex flex-col gap-2">
      <div className="sticky top-16">
        <h1>Tracks</h1>
        <SearchBar
          debounce={500}
          value={filter}
          onChange={setFilter}
          onReset={() => setFilter("")}
        />
      </div>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="text-sm">
            {tracks?.count} of {tracks?.totalCount} tracks. Use search to
            filter.
          </div>

          <table className="table-fixed w-full text-sm">
            <thead>
              <tr>
                <th>Title</th>
                <th>Artist</th>
                <th className="text-right">BPM</th>
                <th className="text-right">Key</th>
              </tr>
            </thead>
            <tbody>
              {tracks?.value.map((track: Track) => (
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
                    <a
                      href="#"
                      onClick={() => handleArtistClick(track.artist)}
                      title="Search for more tracks by this artist"
                      className="flex items-center gap-1"
                    >
                      {track.artist}
                      <Icon icon="search" className="opacity-50" size={16} />
                    </a>
                  </td>
                  <td className="text-right">{track.tempo.toFixed(0)}</td>
                  <td className="text-right">{track.songKey}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default TracksPage;
