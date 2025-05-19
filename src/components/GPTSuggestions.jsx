import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTSuggestions = () => {
  const { movieRes, movieNames } = useSelector((store) => store.gpt);

  if (!movieNames) return null;
  var num = 1;
  return (
    <div className="text-black text-lg mt-10 bg-black  w-full  md:px-12 md:py-12 px-3  ">
      <h1 className="text-amber-200 md:text-3xl text-lg md:font-bold md:ml-40 mx-auto md:pb-10">
        {movieNames?.length
          ? "Here are some movie suggestions based on your latest search.."
          : "Sorry!! We couldn't find any movies related to your search"}
      </h1>
      {movieNames.map((movieName, index) => (
        <div key={index}>
          <h1>{movieName}</h1>
          <MovieList key={index} title={movieName} movies={movieRes[index]} />
        </div>
      ))}
    </div>
  );
};

export default GPTSuggestions;
