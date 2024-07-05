import React from "react";

function Footer() {
  return (
    <div className="py-4">
      <div className="h-[1px] w-full bg-gray-700"></div>
      <div className="flex flex-col items-center justify-center mt-6 gap-2 opacity-70">
        <h1 className="text-white">Designed and Developed By</h1>
        <h1 className="text-white">
          <span className="text-tertiary">SINJINI HOM ROY</span>
        </h1>
      </div>
    </div>
  );
}

export default Footer;
