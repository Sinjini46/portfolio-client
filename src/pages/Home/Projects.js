import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData;

  return (
    <div id="projects">
      <SectionTitle title="Projects" />
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="flex flex-col gap-4 w-full md:w-1/4 md:border-[#135e4c82]">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedItemIndex(index)}
              className="cursor-pointer"
            >
              <h1
                className={`text-base sm:text-lg md:text-xl px-2 sm:px-4 md:px-5 ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31]"
                    : "text-white"
                }`}
              >
                {project.title}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5 md:flex-row md:w-3/4">
          <div className="w-full md:w-1/2">
            <img
              src={projects[selectedItemIndex].image}
              alt={projects[selectedItemIndex].title}
              className="w-full h-auto max-h-48 sm:max-h-64 object-contain rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-4 md:w-1/2">
            <h1 className="text-secondary text-lg sm:text-xl">
              {projects[selectedItemIndex].title}
            </h1>
            <p className="text-white text-sm sm:text-base md:text-lg">
              {projects[selectedItemIndex].description}
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a
                href={projects[selectedItemIndex].sourceCodeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-tertiary text-tertiary px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded hover:bg-tertiary hover:text-primary transition flex items-center"
              >
                <FontAwesomeIcon icon={faGithub} />
                <span className="text-xs sm:text-sm md:text-base"></span>
              </a>
              <a
                href={projects[selectedItemIndex].demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-tertiary text-tertiary px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded hover:bg-tertiary hover:text-primary transition flex items-center"
              >
                <FontAwesomeIcon icon={faCode} />
                <span className="text-xs sm:text-sm md:text-base"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
