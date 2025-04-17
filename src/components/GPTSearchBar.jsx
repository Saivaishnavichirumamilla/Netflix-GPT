import language from "../utils/languageConstants";
import { useSelector } from "react-redux";
import { useRef } from "react";
import openAI from "../utils/openAI";

const GPTSearchBar = () => {
  const searchText = useRef(null);
  const languageValue = useSelector((store) => store.config.lang);
  const handleGPTSearchClick = async () => {
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
