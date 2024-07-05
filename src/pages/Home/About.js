import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function About() {

  const { loading, portfolioData } = useSelector((state) => state.root); // eslint-disable-line no-unused-vars
  const { about } = portfolioData;
  const { lottieurl , description1}= about;
  return (
    <div id="about">
      <SectionTitle title="About Me" />
      {/* About me section starts */}
      <div className="flex w-full items-center h-[50vh]">
        <div className="h-[70vh] w-1/2">
          <dotlottie-player
            src={lottieurl}
            background="transparent"
            speed="1"
            direction="1"
            playMode="normal"
            autoplay
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2">
          <p className="text-white">
            {description1 || ""}
          </p>
        </div>
      </div>
      <div className="h-19 sm:h-12"></div>
      {/* About me section ends */}
    </div>
  );
}

export default About;
