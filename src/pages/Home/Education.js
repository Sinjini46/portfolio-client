import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Education() {
  const { portfolioData } = useSelector((state) => state.root);
  const { educations } = portfolioData;
  return (
    <div>
      <SectionTitle title="Education" />
      <div className="max-w-screen-lg mx-auto px-4 py-8">
        <div className="flex flex-row gap-10 overflow-x-auto sm:overflow-visible">
          <div className="flex-shrink-0 w-2"></div>
          <div className="flex-1">
            {educations.map((item, index) => (
              <div
                key={item.id}
                className={`mb-8 relative ${index !== 0 ? 'mt-8' : ''} transform transition duration-300 ease-in-out hover:scale-105`}
              >
                {/* Bullet symbol */}
                <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                {/* Education content */}
                <div className="ml-4 pl-4 py-4 border-1 border-tertiary border rounded-lg hover:bg-[#1a7f5a31] hover:cursor-pointer">
                  <h3 className="text-tertiary font-semibold">{item.period}</h3>
                  <h2 className="text-secondary text-xl font-semibold mt-2">{item.degree}</h2>
                  <p className="text-white mt-2">{item.institution}</p>
                  <p className="text-tertiary mt-2">{item.marks}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-shrink-0 w-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Education;
