import React from "react";

function SidebarLinks({ text, Icon, active }) {
  return (
    <div
      className={`text-[#a6a6a6] flex justify-center xl:justify-start items-center space-x-3 hoverAnim px-2 py-1 text-md ${
        active && "font-bold"
      }`}
    >
      <Icon className="h-6" />
      <span className="hidden xl:inline ">{text}</span>
    </div>
  );
}

export default SidebarLinks;
