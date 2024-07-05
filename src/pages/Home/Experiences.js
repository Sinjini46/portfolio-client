import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Experiences() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { experiences } = portfolioData;
  return (
    <div>
      <SectionTitle title="Experience" />
      <div className="flex py-10 gap-10 flex-col sm:flex-row">
        <div className="flex flex-col gap-4 w-full md:w-1/4 md:border-[#135e4c82]">
          {experiences.map((experience, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5 ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31]"
                    : "text-white"
                }`}
              >
                {experience.period}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-secondary text-xl">
            {experiences[selectedItemIndex].title}
          </h1>
          <h1 className="text-tertiary text-xl">
            {experiences[selectedItemIndex].company}
          </h1>
          <p className="text-white">
            {experiences[selectedItemIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
