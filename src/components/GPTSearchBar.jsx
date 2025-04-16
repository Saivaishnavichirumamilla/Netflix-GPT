const GPTSearchBar = () => {
  return (
    <div className="mx-auto absolute top-40 left-70 w-3/5  ">
      <form className=" flex gap-5 items-center ">
        <input
          type="search"
          placeholder="Ask GPT......"
          className="pl-6 bg-white w-3/4 py-3 m-2 rounded-4xl outline-none hover:border-3 hover:border-red-600 focus-:border-3 focus-within:border-red-600 "
        />
        <button className="bg-red-600 py-2 px-5 rounded-4xl  text-lg font-bold text-white hover:bg-red-500 focus-within:bg-red-400">
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
