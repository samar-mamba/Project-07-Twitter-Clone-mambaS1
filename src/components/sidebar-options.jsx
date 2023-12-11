import React from "react";

function SidebarOption({ text, icon }) {
  return (
    <div className='alignement'>
      <img src={icon} alt="" />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;