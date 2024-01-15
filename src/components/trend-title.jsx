import React from "react";

function Trendtitle({text,icon}) {
  return (
    <div className="trend-tilte">
        <h3>{text}</h3>
      <img src={icon} alt="" />
      
    </div>
  );
}

export default Trendtitle;