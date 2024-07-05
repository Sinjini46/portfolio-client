import React from "react";

function LeftSider() {
  return (
    <div>
      <div className="flex items-center justify-center gap-4 py-1">
        <a href="https://github.com/Sinjini46" target="_blank" rel="noopener noreferrer">
          <i className="ri-github-fill text-gray-400 text-xl"></i>
        </a>
        <a href="tel:+917439774486">
          <i className="ri-phone-fill text-gray-400 text-xl"></i>
        </a>
        <a href="https://www.linkedin.com/in/sinjini-hom-roy/" target="_blank" rel="noopener noreferrer">
          <i className="ri-linkedin-box-fill text-gray-400 text-xl"></i>
        </a>
      </div>
    </div>
  );
}

export default LeftSider;
