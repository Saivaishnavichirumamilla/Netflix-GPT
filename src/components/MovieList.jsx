import MovieCard from "./MovieCard";

const MovieList = (props) => {
  const { title, movies } = props;
  return (
    <div className="md:px-6 px-4 ">
      <h1 className="text-white text-lg font-bold md:text-2xl md:py-4 py-2">
        {title}
      </h1>
      <div className="flex overflow-x-scroll no-scrollbar  ">
        <div className="flex md:gap-3 gap-2">
          {console.log(movies)}
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.backdrop_path}
              title={movie.title}
              overview={movie.overview}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
