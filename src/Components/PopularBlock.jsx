import { Link } from "react-router-dom";

const PopularBlock = ({ title, link }) => {
  return (
    <div className="flex justify-between items-center text-white">
      <p className="text-white text-md md:text-lg lg:text-xl">{`Trending ${title}`}</p>
      <Link
        to={`/${link}`}
        className="bg-white text-white bg-opacity-30 rounded-md px-2 md:px-3 py-0.5 md:py:1 w-auto text-[12px] lg:text-lg hover:bg-opacity-20 transition"
        // className="text-white text-[8px] md:text-base border border-gray-400 bg-gray-400/30 rounded-md px-2 py-0.5 hover:border-red-500 hover:bg-gray-400/50"
      >
        {`More...`}
      </Link>
    </div>
  );
};

export default PopularBlock;
