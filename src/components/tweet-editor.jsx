import React from 'react';
import Profile from './profile-photo';
import profilephoto from "./../images/profile-photo.png"
import Button from './button';
import { NavLink } from "react-router-dom";

function TweetEditor () {
return (
 <div className="tweet-editor">
  <div className='avatar'> 
  <NavLink to='/profile'> 
  <Profile icon ={profilephoto} />
  </NavLink>
  </div>
<div className='tweet-editor-form'> 
  <input className='tweet-editor-input' type= "text" placeholder="What's happening ?" />
   <div className='tweet-editor-buttons'>
     <div className='tweet-editor-actions'>
     <button> <img src='src/images/Media.png' alt='media' /> </button>
     <button> <img src='src/images/Top-Tweets.png' alt='media' /> </button>
     <button> <img src='src/images/Top-Tweets1.png' alt='media' /> </button>
     <button> <img src='src/images/Top-Tweets3.png' alt='media' /> </button>
     <button> <img src='src/images/Top-Tweets2.png' alt='media' /> </button>
     
     </div>
     <Button text="Tweet" className='button ' /> 
     
   
   </div>
  </div>
 </div>
  
)
  
}
export default TweetEditor;