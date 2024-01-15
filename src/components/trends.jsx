import React from 'react';
import Trendtitle from './trend-title';
import Trendlist from './trend-list';
import search from './../images/Search-Icon.svg'
import option from "./../images/Options.svg"
import more from "./../images/More-2.png"
import Followlist from './follow-list';
import cnnprofile from "./../images/cnn-Profile-Photo.png"
import newyorkprofil from "./../images/Tweet-Profile-new.png"
import tweetoiseau from "./../images/Tweet-oiseau.png"
import Footer from './twitter-footer';


function Trend( ) {

    return (
        <div className='trend'>
    
            <div className='trends-input'> 
            <img src={search} alt="search icon" />
            <input className='trends-search' placeholder="Search Twitter" type="text" />
            </div>
            <div className='trendfor-you'>
                <Trendtitle text="Trends for you" icon={option} /> 
                <Trendlist textpara="Trending in Turkey" icon={more} text="#SQUID" tweetnombre="2,066 Tweets" />
                <Trendlist textpara="Trending in Turkey" icon={more} text="#SQUID" tweetnombre="2,066 Tweets" />
                <Trendlist textpara="Trending in Turkey" icon={more} text="#SQUID" tweetnombre="2,066 Tweets" />
                <Trendlist textpara="Trending in Turkey" icon={more} text="#SQUID" tweetnombre="2,066 Tweets" /> 
                <h3 className='show-more'>Show more</h3> 

            </div>
            <div className='who-follow '>
            <Trendtitle text="Who to follow" /> 
            <Followlist tweetProfile={newyorkprofil} title="The New York Times" value="@nytimes"  />
            <Followlist tweetProfile={cnnprofile} title="CNN" value="@CNN"  />
            <Followlist tweetProfile={tweetoiseau} title="Twitter" value="@Twitter"  />
            <h3 className='show-more'>Show more</h3> 

            </div>
            <Footer />  

            <div>


            </div>
            
        </div>


    )
}

export default Trend