import React from 'react';
import Header from "./../components/header";
import TweetEditor from "./../components/tweet-editor";
import Tweets from "./../components/tweets";

function Home() {
  return (
    <> 
    <header className="sidebar" >
    
    </header>
    <main className="timeline">
      <Header />
      <TweetEditor />
      <Tweets />

    </main>
    </>
  );
}

export default Home;