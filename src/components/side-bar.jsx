import React from 'react';
import { NavLink } from "react-router-dom";
import homeicon from  "./../images/Home-Fill.png"
import exploreicon from "./../images/Fill.png"
import notificationicon from "./../images/Notifications.png"
import messageicon from "./../images/Messages.png"
import Bookmarksicon from "./../images/Bookmarks.png"
import listicon from "./../images/Lists.png"
import profileicon from "./../images/Profile.png"
import moreicon from "./../images/More.png"

import SidebarOption from './sidebar-options';

function SideBar() {

  return (
    <div className='sidebar'>
       

      <img src="src/images/Normal.png" alt="pigeon"  /> 
  
        <SidebarOption icon={homeicon} text="Home"  />
        <SidebarOption icon={exploreicon} text="Explore"  />
        <SidebarOption icon={notificationicon} text="Notifications"  />
        <SidebarOption icon={messageicon} text="Messages"  />
        <SidebarOption icon={Bookmarksicon} text="Bookmarks"  />
        <SidebarOption icon={listicon} text="Lists"  />
        <SidebarOption icon={profileicon} text="Profile"  />
        <SidebarOption icon={moreicon} text="More"  />
        <br/>

      <button className='button'>tweet</button>
      
    

    </div>
  )
}

export default SideBar;