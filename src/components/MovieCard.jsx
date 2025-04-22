import { TMDB_IMG_CDN_URL } from "../utils/constants";

const MovieCard = (props) => {
  const { posterPath, title } = props;
  if (!posterPath) return null;
  return (
    <div>
      <div className="md:h-[180px] md:w-[300px] relative h-[90px] w-[180px] ">
        <img src={TMDB_IMG_CDN_URL + posterPath} alt="Movie poster" />
        <div className="text-white font-sans md:text-xl text-md md:font-bold md:py-1 absolute bg-black/40 md:px-2 px-1 rounded-br-lg rounded-tr-lg md:bottom-5 bottom-2 left-0">
          {title}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
