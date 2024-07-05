import React from "react";

function SectionTitle({ title }) {
  return (
    <div className="flex gap-10 items-center py-10">
      <h3 className="text-white text-3xl font-semibold">{title}</h3>
      <div className="w-60 h-[1px] bg-tertiary"></div>
    </div>
  );
}

export default SectionTitle;
