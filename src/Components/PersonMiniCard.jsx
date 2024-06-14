import { createFullImgUrl } from "../utils/helpers.js";
import personImg from "../../public/images/person.svg";

const PersonMiniCard = ({ person }) => {
  return (
    <div
      key={person?.id}
      className="bg-gray-900/30 rounded-lg p-2 flex flex-col items-center min-w-[150px] max-h-[230px] border-2 border-transparent hover:border-gray-200 "
    >
      <img
        src={
          person?.profile_path
            ? createFullImgUrl(200, person?.profile_path)
            : personImg
        }
        alt={person?.name}
        className="w-12 h-12 rounded-full object-cover mb-2"
      />
      <h3 className="text-sm font-semibold text-gray-300 text-center">
        {person?.name || person?.original_name}
      </h3>
      <p className="text-xs text-gray-400 text-center">
        {person?.character ? `as ${person?.character}` : ""}
      </p>
    </div>
  );
};

export default PersonMiniCard;
