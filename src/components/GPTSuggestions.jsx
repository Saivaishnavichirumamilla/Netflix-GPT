import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTSuggestions = () => {
  const { movieRes, movieNames } = useSelector((store) => store.gpt);
  console.log("this is suggestion page" + movieNames);
  if (!movieNames) return null;

  return (
    <div className="text-black text-lg absolute bg-black top-60  w-full px-12 py-12">
      <h1 className="text-amber-200 text-3xl font-bold ml-40 pb-10 ">
        {movieNames?.length
          ? "Here are some movie suggestions based on your latest search.."
          : "Sorry!! We couldn't find any movies related to your search"}
      </h1>
      {movieNames.map((movieName, index) => (
        <div>
          <h1>{movieName}</h1>

          <MovieList
            key={movieName}
            title={movieName}
            movies={movieRes[index]}
          />
        </div>
      ))}
    </div>
  );
};

export default GPTSuggestions;
