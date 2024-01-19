import React from 'react';
import { NavLink } from "react-router-dom";

function Tweet({ title, value, text, image, tweetProfile }) {

  return (
    <div className="tweet">
      <div className="tweet-avatar">
        <NavLink to='/profile'> 
        <img src={tweetProfile} alt="profil" /></NavLink> </div>
      <div className="tweet-content">
        <div className="tweet-body">
          <div className="tweet-title">
            <h2 className='tweet-title-author'> {title} </h2>
            <img src="src/images/Verified.png" alt="valided" className="tweet-title-author" />
            <p className="tweet-title-details"> {value} </p>
          </div>
          <p className="tweet-text"> {text} </p>
          <div className="tweet-image">
            <img src={image} />
          </div>
        </div>
        <div className="tweet-actions">
          <div className='tweet-icon0 tweet-icon'>

            <img src="src\images\Butonlike.svg" alt="" />  
             <p>36</p>
          </div>
          <div className='tweet-icon1 tweet-icon'>

            <img src="src\images\Butonretweet.svg" alt="" />  
             <p>36</p>
          </div>
          <div className='tweet-icon2 tweet-icon'>

            <img src="src\images\Buton.svg" alt="" />  
             <p>36</p>
          </div>
          <div className='tweet-icon3'>

            <img src="src\images\Butonchare.svg" alt="" />  
            
          </div>

          {/* <img className="tweet-action" src="src/images/Tweet-Replies.png" alt="like" /> */}
          {/* <img className="tweet-action" src="src/images/Tweet-Replies (1).png" alt="like" />
          <img className="tweet-action" src="src/images/Tweet-Replies (2).png" alt="like" />
          <img className="tweet-action" src="src/images/Tweet-Replies (3).png" alt="like" /> */}
        </div>
      </div>

    </div>
  )

}
export default Tweet;