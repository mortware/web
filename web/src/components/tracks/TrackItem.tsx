import { Track, Stem, Mix } from "@/data/models";
import Icon from "../Icon";
import { useDownloadTrackItem } from "@/data/hooks/use-download-track-item";
import Spinner from "../Spinner";

type TrackItemProps = {
  track: Track;
  item: Stem | Mix;
};

function TrackItem({ track, item }: TrackItemProps) {
  const { download, isDownloading } = useDownloadTrackItem();

  async function handleDownload(item: Stem | Mix) {
    console.log("Downloading stem", item.id);
    if (!track) return;

    await download(track.id, item, `${track.slug}-${item.slug}.mp3`);
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

export default TrackItem;
