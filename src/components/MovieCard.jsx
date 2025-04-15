import { TMDB_IMG_CDN_URL } from "../utils/constants";

const MovieCard = (props) => {
  const { posterPath } = props;
  return (
    <div>
      <div className="h-[180px] w-[300px]">
        <img src={TMDB_IMG_CDN_URL + posterPath} alt="Movie poster" />
      </div>
    </div>
  );
};

export default MovieCard;
