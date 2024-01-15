import React from "react";
import Button from './button';

function Followlist({ title, value, tweetProfile }) {
  return (
    <div className="follow-list">
        
        <div className="follow-title">
        <img src={tweetProfile} alt="profil" /> 
        <div> 
        <div className="title-children"> 
        <h4>{title}</h4>
        <img src="src/images/Verified.png" alt="valided"  />
        </div>
        <p> {value}</p>
        </div>
        </div>
        <div>
        <Button text="Follow" className='button2 ' /></div>



        {/* <div className="follow1">
        <div>
            <h2> {title} </h2>
            <img src="src/images/Verified.png" alt="valided"  />
            </div>
            <p> {value}</p>
            </div>
         <div> 
            <Button text="Follow" className='button2 ' /> </div> */}
          

    </div>
  );
}

export default Followlist;