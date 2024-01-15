import React from "react";

function Trendlist({text,icon,textpara,tweetnombre}) {
  return (
    <div className="trend-list">
        <div className="trend-tilte">
        <p> {textpara} </p>
        <img src={icon} alt="icon" /></div>
        <h3>{text}</h3>
        <p className="tweet-nombre"> {tweetnombre} </p>
        
      
      
    </div>
  );
}

export default Trendlist;