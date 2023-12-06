import React from 'react';

function TweetEditor () {
return (
 <div className="tweet-editor">
  <div className='avatar'>  
 <img src="src/images/profile-photo.png" alt="tweet-editor" /> </div>
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
     <button className='button'>tweet</button>
   
   </div>
  </div>
 </div>
  
)
  
}
export default TweetEditor;