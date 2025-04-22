import { PLAY_BTN } from "../utils/constants";

const VideoTitle = (props) => {
  const { title, overview } = props;
  return (
    <div className="text-white md:w-1/2 w-2/5 md:p-15 p-3 md:pt-38 pt-15 absolute  ">
      <h1 className="md:text-5xl text-md font-bold  text-white m-2">{title}</h1>
      <p className=" md:m-2  hidden md:block">{overview}</p>
      <div className="m-2 w-full flex gap-2 md:mt-10">
        <button className=" cursor-pointer md:m-2 md:w-1/4 w-14 h-7 md:h-14 flex  justify-center md:gap-4 gap-1 items-center md:text-xl text-sm  bg-white hover:bg-white/50 text-black  rounded-sm">
          <div className="hidden md:block">{PLAY_BTN}</div>
          <div>Play</div>
        </button>
        <button className="cursor-pointer md:m-2 md:w-1/4 w-17 h-7 md:h-14 bg-white/30 hover:bg-white/20 md:text-xl text-sm text-white md:p-2 rounded-sm border-[0.5px] border-gray-10">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
