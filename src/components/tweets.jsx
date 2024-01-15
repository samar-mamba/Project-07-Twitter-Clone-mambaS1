import React from 'react';
import Tweet from "./../components/tweet";
import tweetimage from "./../images/tweet-image.png"
import newyorkprofil from "./../images/Tweet-Profile-new.png"
import tweetoiseau from "./../images/Tweet-oiseau.png"
import cnnprofile from "./../images/cnn-Profile-Photo.png"
function Tweets() {
  return (
    <div className='tweets'>

      <Tweet tweetProfile={cnnprofile} title="CNN" value="@CNN .7m " text="President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a major breakthrough that would serve to both strengthen the US steel industry and combat the global climate crisis."
      />

      <Tweet tweetProfile={newyorkprofil} title="The New York Times" image={tweetimage} value="@nytimes . 2h " text="Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land"
      />

      <Tweet tweetProfile={tweetoiseau} title="Twitter" value="@Twitter . oct 29" text="BIG NEWS lol jk still Twitter" />

      <Tweet tweetProfile={tweetoiseau} title="Twitter" value="@Twitter . Oct 4 " text="hello literally everyone" />

      <Tweet tweetProfile={tweetoiseau} title="Twitter" image={tweetimage} value="@Twitter . Oct 4 " text="hello literally everyone"
      />


    </div>
  )

}
export default Tweets;