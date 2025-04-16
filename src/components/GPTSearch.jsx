import GPTSearchBar from "./GPTSearchBar";
import GPTSuggestions from "./GPTSuggestions";
import Header from "./Header";

const GPTSearch = () => {
  return (
    <div className="relative bg-black min-h-screen">
      <Header />
      <GPTSearchBar />
      <GPTSuggestions />
    </div>
  );
};

export default GPTSearch;
