import React from "react";
import { useSelector } from "react-redux";

function Intro() {
  //scroll page up and down
  const handleScrollDown = () => {
    const scrollDistance = window.innerHeight - 100;
    window.scrollTo({
      top: window.scrollY + scrollDistance,
      behavior: "smooth",
    });
  };

  const { loading, portfolioData } = useSelector((state) => state.root); // eslint-disable-line no-unused-vars
  const { intro } = portfolioData;
  const { welcomeText, firstName, lastName, caption, description, lottieURl } =
    intro;

  return (
    <div
      id="intro"
      className="bg-primary flex flex-col md:flex-row items-center justify-center sm:py-10 px-12 gap-4"
    >
      <div className="flex flex-col gap-5 w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-white text-4xl sm:text-4xl md:text-6xl font-semibold">
          {welcomeText || ""}
        </h1>
        <h1 className="text-secondary text-4xl sm:text-7xl md:text-6xl font-semibold">
          {firstName || ""} {lastName || ""}
        </h1>
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold">
          {caption || ""}
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl">
          {description || ""}
        </p>
        <div className="mt-4 flex justify-center md:justify-start">
          <button
            className="border-2 border-tertiary text-tertiary px-6 py-2 rounded"
            onClick={handleScrollDown}
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="h-[65vh] w-full md:w-1/2">
        {/* Replace with your Lottie animation component */}
        <dotlottie-player
          src={lottieURl}
          background="transparent"
          speed="1"
          direction="1"
          playMode="normal"
          autoplay
        ></dotlottie-player>
      </div>
    </div>
  );
}

export default Intro;
