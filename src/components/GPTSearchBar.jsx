import language from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import openAI from "../utils/openAI";
import { API_OPTIONS } from "../utils/constants";
import { addGPTMovieResult } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const languageValue = useSelector((store) => store.config.lang);

  const handleGPTSearchClick = async () => {
    const searchMovies = async (movie) => {
      const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          movie +
          "&include_adult=false&language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      return json.results;
    };

    //Make an API call to GPT AI to get the results
    const GPTQuery =
      "Act as a movie recommendation system and give name of 5 movies which are" +
      searchText.current.value +
      ".I want the list as comma separated  example result is as Rangam,RRR,Hello,Ramudu Beemudu,Lakshyam";
    const GPTResults = await openAI.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: GPTQuery }],
    });

    console.log(GPTResults.choices?.[0]?.message?.content);
    const GPTMovies = GPTResults.choices?.[0]?.message?.content.split(",");
    //For each movie search for that i TMDB API
    const promiseArray = GPTMovies.map((movie) => searchMovies(movie));
    const movieResults = await Promise.all(promiseArray);
    console.log(movieResults);

    dispatch(
      addGPTMovieResult({ movieNames: GPTMovies, movieRes: movieResults })
    );
  };

  return (
    <div className="mx-auto absolute top-40 left-70 w-3/5  ">
      <form
        className=" flex gap-5 items-center "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="search"
          placeholder={language[languageValue].askGPT + " ..."}
          className="px-6 bg-white w-3/4 py-3 m-2 rounded-4xl outline-none hover:border-3 hover:border-red-600 focus-:border-3 focus-within:border-red-600 "
        />
        <button
          onClick={handleGPTSearchClick}
          className="bg-red-600 py-2 px-5 rounded-4xl  text-lg font-bold text-white hover:bg-red-500 focus-within:bg-red-400"
        >
          {language[languageValue].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
