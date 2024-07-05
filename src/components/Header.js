import React from "react";

function Header() {
  return (
    <div className="p-5 px-12 bg-primary flex flex-col sm:flex-row justify-center sm:justify-between items-center">
      <a href="#home" className="text-secondary text-xl sm:text-2xl font-semibold relative group cursor-pointer mb-2 sm:mb-0">
        Home
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-tertiary transition-all duration-500 ease-in-out group-hover:w-full group-hover:-bottom-1"></span>
      </a>
      <a href="#projects" className="text-tertiary text-xl sm:text-2xl font-semibold relative group cursor-pointer mb-2 sm:mb-0">
        Projects
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-tertiary transition-all duration-500 ease-in-out group-hover:w-full group-hover:-bottom-1"></span>
      </a>
      <a href="#skills" className="text-secondary text-xl sm:text-2xl font-semibold relative group cursor-pointer mb-2 sm:mb-0">
        Skills
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-tertiary transition-all duration-500 ease-in-out group-hover:w-full group-hover:-bottom-1"></span>
      </a>
      <a href="#contact" className="text-tertiary text-xl sm:text-2xl font-semibold relative group cursor-pointer mb-2 sm:mb-0">
        Contact
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-tertiary transition-all duration-500 ease-in-out group-hover:w-full group-hover:-bottom-1"></span>
      </a>
    </div>
  );
}

export default Header;
