import { Track, Stem, Mix } from "@/data/models";
import Icon from "../Icon";
import { useDownloadTrackFile } from "@/data/hooks/use-download-track-file";
import Spinner from "../Spinner";

type TrackFileProps = {
  track: Track;
  item: Stem | Mix;
};

function TrackFile({ track, item }: TrackFileProps) {
  const { download, isDownloading } = useDownloadTrackFile();

  async function handleDownload(file: Stem | Mix) {
    console.log(`Downloading ${file.type}`, file.slug);
    if (!track || !track.slug) return;

    await download(track.slug, file, `${track.slug}-${file.slug}.mp3`);
  }

  return (
    <div
      className="flex gap-2 items-center cursor-pointer border rounded hover:bg-slate-200 p-1 text-sm"
      onClick={() => handleDownload(item)}
    >
      <div
        className="size-8 bg-red-300 grid items-center justify-center rounded"
        style={{ backgroundColor: (item as Stem).color }}
      >
        <Icon icon="music" size={24} color="white" />
      </div>
      <div className="flex-1">{item.name}</div>
      {/* <pre>{JSON.stringify(item)}</pre> */}
      {/* <ReactAudioPlayer
        className="flex-1"
        preload="none"
        controls
        src={`http://localhost:5001/api/track/${track.id}/stem/${stem.id}/stream`}
      /> */}
      {isDownloading ? <Spinner /> : <Icon icon="download" size={24} />}
    </div>
  );
}

export default TrackFile;
