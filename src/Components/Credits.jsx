import PersonMiniCard from "./PersonMiniCard.jsx";
import { useMemo, useState } from "react";

const Credits = ({ data, fullMediadata }) => {
  const [isMoreCast, setIsMoreCast] = useState(false);

  const handleMoreClick = () => {
    setIsMoreCast(!isMoreCast);
  };
  const directors = useMemo(() => {
    if (fullMediadata.number_of_seasons) {
      return fullMediadata.created_by.map((creator) => {
        return creator;
      });
    } else {
      return data.crew.filter((member) => member.job === "Director");
    }
  }, [data, fullMediadata]);

  return (
    <>
      <h2 className="text-lg text-gray-400 md:text-2xl font-semibold my-3">
        {fullMediadata.number_of_seasons ? "Creator(s)" : "Director(s)"}
      </h2>
      <div className="flex space-x-2">
        {directors.map((director) => (
          <PersonMiniCard key={director.id} person={director} />
        ))}
      </div>
      <div className="flex justify-between items-center">
        <h2 className="text-lg text-gray-400 md:text-2xl font-semibold my-3">
          Cast
        </h2>
        {data.cast.length > 10 && (
          <button
            className="text-white text-[8px] md:text-base border border-gray-400 bg-gray-400/30 rounded-md px-2 py-0.5 hover:border-red-500 hover:bg-gray-400/50"
            onClick={handleMoreClick}
          >
            {`Show ${!isMoreCast ? "more" : "less"}`}
          </button>
        )}
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
