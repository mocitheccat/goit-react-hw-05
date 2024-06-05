const MobileMenu = ({ visible }) => {
  if (!visible) {
    return null;
  }
  return (
    <div className="bg-black  w-44 absolute top-8 left-0 py-5 flex-col rounded border-2 border-gray-800 flex">
      <div className="flex flex-col gap-4">
        <div className="ml-2 px-3 text-start text-white hover:underline">Home</div>
        <div className="ml-2 px-3 text-start text-white hover:underline">
          Series
        </div>
        <div className="ml-2 px-3 text-start text-white hover:underline">
          Movies
        </div>
        <div className="ml-2 px-3 text-start text-white hover:underline">
          New & Popular
        </div>
        <div className="ml-2 px-3 text-start text-white hover:underline">
          My List
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
