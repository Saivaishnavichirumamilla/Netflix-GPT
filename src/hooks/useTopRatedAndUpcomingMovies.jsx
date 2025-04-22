import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies, addUpcomingMovies } from "../utils/moviesSlice";

const useTopRatedAndUpcomingMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store?.movies?.topRatedMovies);
  const popularMovies = useSelector((store) => store?.movies?.popularMovies);
  const getTopRatedAndUpcomingMovies = async () => {
    const data1 = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const data2 = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json1 = await data1.json();
    const json2 = await data2.json();

    dispatch(addTopRatedMovies(json1.results));

    dispatch(addUpcomingMovies(json2.results));
  };
  useEffect(() => {
    if (!topRatedMovies || !popularMovies) getTopRatedAndUpcomingMovies();
  }, []);
};

export default useTopRatedAndUpcomingMovies;
