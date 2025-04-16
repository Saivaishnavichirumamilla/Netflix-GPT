import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRatedAndUpcomingMovies from "../hooks/useTopRatedAndUpcomingMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
  console.log(showGPTSearch);
  useNowPlayingMovies();
  useTopRatedAndUpcomingMovies();
  return (
    <div className=" ">
      <Header />

      {showGPTSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

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
