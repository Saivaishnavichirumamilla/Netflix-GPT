import { PLAY_BTN } from "../utils/constants";

const VideoTitle = (props) => {
  const { title, overview } = props;
  return (
    <div className="text-white w-1/2 p-15 pt-38 absolute  ">
      <h1 className="text-5xl font-bold  text-white m-2">{title}</h1>
      <p className=" m-2 ">{overview}</p>
      <div className="m-2 w-full flex mt-10">
        <button className=" cursor-pointer m-2 w-1/4 flex justify-center gap-4 items-center text-xl bg-white hover:bg-white/50 text-black  rounded-sm">
          <div>{PLAY_BTN}</div>
          <div>Play</div>
        </button>
        <button className="cursor-pointer m-2 w-1/4 bg-white/30 hover:bg-white/20 text-xl text-white p-2 rounded-sm border-[0.5px] border-gray-10">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
