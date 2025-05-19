import { TMDB_IMG_CDN_URL } from "../utils/constants";
import { useState } from "react";

const MovieCard = (props) => {
  const { posterPath, title, overview } = props;
  const [showOverview, setShowOverview] = useState(false);
  if (!posterPath) return null;
  return (
    <div
      className="group relative md:h-[180px] md:w-[300px] h-[90px] w-[180px] cursor-pointer"
      onClick={() => setShowOverview((prev) => !prev)}
      // Prevent toggle on desktop hover to keep hover effect intact
      onMouseLeave={() => setShowOverview(false)}
    >
      {/* Movie Poster */}
      <img
        src={
          posterPath
            ? TMDB_IMG_CDN_URL + posterPath
            : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
        }
        alt="Movie poster"
        className="h-full w-full object-cover rounded-md"
      />

      {/* Title – visible on md+, visible on hover or tap on small screens */}
      <div
        className={`
          text-white font-sans text-sm px-1 md:px-2 md:font-bold md:text-md md:py-1
          rounded-br-lg rounded-tr-lg absolute bottom-2 md:bottom-5 left-0
          bg-black bg-opacity-40
          md:block
          ${
            showOverview
              ? "block" // Show on tap for mobile
              : "hidden group-hover:block" // Hover on mobile won't work, but fallback
          }
        `}
      >
        {title}
      </div>

      {/* Overview – popup on hover or tap */}
      <div
        className={`
          overflow-x-scroll no-scrollbar absolute top-0 left-0 z-20 w-full h-full
          bg-black bg-opacity-90 text-white text-xs md:text-sm p-2
          transition-opacity duration-300 rounded-md overflow-y-auto
          md:opacity-0 md:group-hover:opacity-50
          ${showOverview ? "opacity-30" : "opacity-0"}
        `}
      >
        {overview}
      </div>
    </div>
  );
};

export default MovieCard;
