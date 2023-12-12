import React from 'react';

function SideBar() {

  return (
    <div className='sidebar'>
       
      <img src="src/images/Normal.png" alt="pigeon" /> 
      <div className='alignement'>
      <img src='src\images\Home-Fill.png' alt ="home" />
      <p>Home</p></div>

      <div className='alignement'>
      <img src='src\images\Fill.png' alt ="home" />
      <p>Explore</p></div>

      <div className='alignement'>
      <img src='src\images\Notifications.png' alt ="home" />
      <p>Notifications</p></div>

      <div className='alignement'>
      <img src='src\images\Messages.png' alt ="home" />
      <p>Messages</p></div>

      <div className='alignement'>
      <img src='src\images\Bookmarks.png' alt ="home" />
      <p>Bookmarks</p></div>

      <div className='alignement'>
      <img src='src\images\Lists.png' alt ="home" />
      <p>Lists</p></div>

      <div className='alignement'>
      <img src='src\images\Profile.png' alt ="home" />
      <p>Profile</p></div>

      <div className='alignement'>
      <img src='src\images\More.png' alt ="home" />
      <p>More</p></div> <br/>

      <button className='button'>tweet</button>
      
    

    </div>
  )
}

export default SideBar;