import { TMDB_IMG_CDN_URL } from "../utils/constants";

const MovieCard = (props) => {
  const { posterPath, title } = props;
  if (!posterPath) return null;
  return (
    <div>
      <div className="h-[180px] w-[300px] relative  ">
        <img src={TMDB_IMG_CDN_URL + posterPath} alt="Movie poster" />
        <div className="text-white font-sans text-xl font-bold py-1 absolute bg-black/40 px-2  rounded-br-lg rounded-tr-lg bottom-5 left-0">
          {title}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
