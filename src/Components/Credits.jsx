import PersonMiniCard from "./PersonMiniCard.jsx";
import { useMemo, useState } from "react";

const Credits = ({ data }) => {
  const [isMoreCast, setIsMoreCast] = useState(false);

  const handleMoreClick = () => {
    console.log(isMoreCast);
    setIsMoreCast(!isMoreCast);
  };
  const director = useMemo(() => {
    return data.crew.find((member) => member.job === "Director");
  }, [data]);

  return (
    <>
      <h2 className="text-lg text-gray-400 md:text-2xl font-semibold my-3">
        Director(s)
      </h2>
      <div className="flex">
        <PersonMiniCard key={director?.id} person={director} />
      </div>
      <div className="flex justify-between items-center">
        <h2 className="text-lg text-gray-400 md:text-2xl font-semibold my-3">
          Cast
        </h2>
        <button
          className="text-white text-[8px] md:text-base border border-gray-400 bg-gray-400/30 rounded-md px-2 py-0.5 hover:border-red-500 hover:bg-gray-400/50"
          onClick={handleMoreClick}
        >
          {`Show ${!isMoreCast ? "more" : "less"}`}
        </button>
      </div>

      {!isMoreCast ? (
        <div className="flex scrollbar-custom overflow-x-auto space-x-2 py-3">
          {data.cast.slice(0, 10).map((castMember) => (
            <PersonMiniCard key={castMember.id} person={castMember} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {data.cast.map((castMember) => (
            <PersonMiniCard key={castMember.id} person={castMember} />
          ))}
        </div>
      )}
    </>
  );
};

export default Credits;
