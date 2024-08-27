import { useParams } from "react-router-dom";

const SongPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Song Page {id}</h1>
      <div></div>
    </div>
  );
};

export default SongPage;
