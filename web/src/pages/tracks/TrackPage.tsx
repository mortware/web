import Icon from "@/components/Icon";
import { Link, useParams } from "react-router-dom";
import { useGetTrack } from "@/data/hooks/use-get-track";
import TrackItem from "@/components/tracks/TrackItem";

const TrackPage = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) throw new Error("No track id provided");

  const { data: track, isLoading } = useGetTrack(id);

  return (
    <div className="container">
      <h1>
        <Link to="/tracks" className="font-semibold text-blue-500">
          Tracks
        </Link>
        <span> / </span>
        <span>
          {track?.artist} - {track?.title}
        </span>
      </h1>
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="flex flex-col gap-4">
            <section className="py-2 px-4 bg-slate-200">
              <ul>
                <li>
                  BPM: {track?.tempo}{" "}
                  {track?.tempoVariable && (
                    <span>
                      <Icon icon="variable" />
                    </span>
                  )}
                </li>
                <li>Key: {track?.songKey}</li>
                <li>Duration: {track?.duration}</li>
              </ul>
            </section>
            {track?.fullMix && (
              <TrackItem
                key={track?.fullMix?.id}
                track={track}
                item={track?.fullMix}
              />
            )}
            <div className="grid grid-cols-2 gap-4">
              <section>
                <h1>Stems</h1>
                <p className="text-sm">Download individual stem tracks</p>
                <div className="flex flex-col gap-1">
                  {track?.stems
                    .sort((a, b) => a.order - b.order)
                    .map((stem) => (
                      <TrackItem key={stem.id} track={track} item={stem} />
                    ))}
                </div>
              </section>

              <section>
                <h1>Mixes</h1>
                <p className="text-sm">
                  Pre-made mixes with parts taken out, useful for practice
                </p>
                <div className="flex flex-col gap-1">
                  {track?.mixes.map((mix) => (
                    <TrackItem key={mix.id} track={track} item={mix} />
                  ))}
                </div>
              </section>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackPage;
