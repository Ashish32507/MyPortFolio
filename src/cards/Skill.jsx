import React from "react";

function Skill({ service }) {
  return (
    <div className="flex items-center text-center gap-2 rounded-lg">
      <div className="flex items-center justify-center">
        <div className="md:text-xl text-2xl text-[#FF9C1A]">{service.icon}</div>
      </div>
      <p className="text-blue-800 font-semibold text-xl md:text-sm">
        {service.name}
      </p>
    </div>
  );
}

export default Skill;
