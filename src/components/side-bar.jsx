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
import profilephoto from "./../images/profile-photo.png"
import profilsetting from "./../images/profile-setting.png"
import Profile from './profile-photo';
import ProfileSetting from './profile-setting';
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
      
      <Profile icon ={profilephoto} />
      <ProfileSetting icon ={profilesetting} />
      
    

    </div>
  )
}

export default SideBar;