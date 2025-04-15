import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

import usePopularAndUpcomingMovies from "../hooks/useTopRatedAndUpcomingMovies";
import useTopRatedAndUpcomingMovies from "../hooks/useTopRatedAndUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  useTopRatedAndUpcomingMovies();
  return (
    <div className=" ">
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/**
         Main Container
          - Video background
          - Video title
          Secondary Container
          - Movie List * n
           - cards*n
         */}
    </div>
  );
};

export default Browse;
