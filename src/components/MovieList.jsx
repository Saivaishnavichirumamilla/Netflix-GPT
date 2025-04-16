import MovieCard from "./MovieCard";

const MovieList = (props) => {
  const { title, movies } = props;
  return (
    <div className="px-6">
      <h1 className="text-white text-lg font-bold md:text-2xl py-4">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar ">
        <div className="flex gap-3">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.backdrop_path}
              title={movie.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
