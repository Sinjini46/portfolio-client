import React from "react";
import SectionTitle from "../../components/SectionTitle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";

function Achievements() {
  const { loading, portfolioData } = useSelector((state) => state.root); // eslint-disable-line no-unused-vars
  const { achievements } = portfolioData;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <SectionTitle title="Achievements" />
      <div className="max-w-screen-lg mx-auto px-4 py-8">
        <Slider {...settings}>
          {achievements && achievements.map((achievement, index) => (
            <div key={index} className="p-4">
              <div className="bg-[#1a7f5a31] border-1 border-tertiary border rounded-lg p-4 transform transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer">
                <h2 className="text-secondary text-xl font-semibold mb-2">
                  {achievement.title}
                </h2>
                <p className="text-tertiary">{achievement.year}</p>
                <p className="text-white mt-2">{achievement.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Achievements;
