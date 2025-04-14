import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div className="min-h-screen">
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
