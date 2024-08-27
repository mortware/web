import { test } from "@data/api";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { SearchBar } from "@components/SearchBar";

function SongsPage() {
  const [filter, setFilter] = useState("");

  const { data, isLoading } = useQuery<any>({
    queryKey: ["test", filter],
    queryFn: () => test(),
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>Songs</h1>
      <SearchBar
        debounce={500}
        value={filter}
        onChange={setFilter}
        onReset={() => setFilter("")}
      />
      <pre>{JSON.stringify(data)}</pre>
      {/* <ul>
        {songs?.map((song: any) => (
          <li key={song.Id}>
            <Link to={`/song/${song.Id}`}>
              {song.Artist} - {song.Title}
            </Link>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default SongsPage;
