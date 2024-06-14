const BillboardPlaceholder = () => {
  return (
    <div className="relative h-[70vw] lg:h-[70vh] overflow-hidden rounded-b-xl shadow-2xl shadow-red-900/70 text-transparent">
      <div className="absolute inset-0 w-full h-[70vw] lg:h-[70vh] object-cover brightness-[40%] shimmer rounded-md"></div>
      <div className="relative h-[70vw] lg:h-[70vh] overflow-hidden rounded-b-xl flex items-center top-6">
        <div className="ml-4 md:ml-16">
          <p className="text-2xl md:text-4xl h-full w-[80%] lg:text-6xl font-bold drop-shadow-xl shimmer rounded-md">
            Lorem ipsum dolor.
          </p>
          <p className="shimmer rounded-md text-[10px] md:text-lg lg:text-xl mt-1 md:mt-3 w-[90%] sm:w-[95%] lg:w-[60%] drop-shadow-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
            assumenda, cumque doloribus est ex facere, minima odit perferendis
            praesentium quas qui quibusdam quis repellat saepe sapiente sit
            voluptatibus.
          </p>
          <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
            <div
              className="
                bg-white
                bg-opacity-30
                rounded-md
                py-1 md:py-2
                px-2 md:px-4
                w-auto
                text-sm lg:text-lg
                font-semibold
                flex flex-row items-center
                hover:bg-opacity-20
                transition
                shimmer
              "
            >
              <div className="w-4 mr-1 shimmer rounded-md"></div>
              More info
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillboardPlaceholder;
