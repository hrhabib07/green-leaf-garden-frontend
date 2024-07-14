const TopBanner = () => {
  return (
    <div className="h-full bg-gray-50">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center max-w-[1200px] mx-8 md:mx-auto">
        <div className="">
          <div className="text-start max-w-[600px]">
            <p className="border-l-4 border-l-green-950 pl-2 text-2xl uppercase ">
              {" "}
              Welcome to
            </p>
            <h2 className="text-green-950 font-semibold text-5xl uppercase">
              Green Leaf Garden
            </h2>
            <p className="my-4 text-gray-500">
              Discover the finest selection of trees and plants at our nursery's
              official website. Browse, filter, and purchase a variety of trees
              to beautify your garden and home. Experience nature's best with
              Green Leaf Garden!
            </p>
            <div className="h-6">
              <a href="#product-container">
                <button className="btn btn-active bg-green-950  text-white my-4 uppercase hover:bg-white  hover:text-green-950">
                  <span className="">Explore more</span>
                  <span className="animate-pulse">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
                      />
                    </svg>
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <img src="/src/assets/banner.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
