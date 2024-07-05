import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Skills() {
  const { loading, portfolioData } = useSelector((state) => state.root); // eslint-disable-line no-unused-vars
  const { skills } = portfolioData;

  // Settings for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "150px",
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          centerMode: true,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  };

  // Custom arrow components
  function CustomPrevArrow(props) {
    const { className, onClick } = props;
    return (
      <button
        className={`${className} absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 text-xl`}
        onClick={onClick}
        aria-label="Previous"
      >
        Prev
      </button>
    );
  }

  function CustomNextArrow(props) {
    const { className, onClick } = props;
    return (
      <button
        className={`${className} absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 text-xl`}
        onClick={onClick}
        aria-label="Next"
      >
        Next
      </button>
    );
  }

  return (
    <div className="py-8" id="skills">
      <SectionTitle title="Skills" />
      <div className="max-w-screen-lg mx-auto px-2">
        <Slider {...settings}>
          {skills && skills.map((skill, index) => (
            <div key={index} className="px-2 py-5">
              <div className="border border-tertiary py-2 px-3 mx-2">
                <h1 className="text-tertiary text-center">{skill.skill}</h1>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Skills;
