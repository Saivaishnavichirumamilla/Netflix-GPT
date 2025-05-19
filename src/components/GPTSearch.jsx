import GPTSearchBar from "./GPTSearchBar";
import GPTSuggestions from "./GPTSuggestions";
import Header from "./Header";

const GPTSearch = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Header /> {/* assuming this is fixed at top */}
      <div className="pt-10 px-4">
        {" "}
        {/* 👈 Add pt-20 here */}
        <GPTSearchBar />
        <GPTSuggestions />
      </div>
    </div>
  );
};

export default GPTSearch;
