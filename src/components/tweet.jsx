import React from 'react';

function Tweet({ title, value, text, image, tweetProfile }) {

  return (
    <div className="tweet">
      <div className="tweet-avatar">
        <img src={tweetProfile} alt="profil" /> </div>
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
          <img className="tweet-action" src="src/images/Tweet-Replies.png" alt="like" />
          <img className="tweet-action" src="src/images/Tweet-Replies (1).png" alt="like" />
          <img className="tweet-action" src="src/images/Tweet-Replies (2).png" alt="like" />
          <img className="tweet-action" src="src/images/Tweet-Replies (3).png" alt="like" />
        </div>
      </div>

    </div>
  )

}
export default Tweet;