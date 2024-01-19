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
import Button from './button';

function SideBar() {

  return (
    <div className='sidebar'>
       
      <div> 
      <img src="src/images/Normal.png" alt="pigeon"  /> 
      <NavLink to ='/home' className='navlink'> 
        <SidebarOption icon={homeicon} text="Home"  />
        </NavLink>
        <NavLink to ='/explore' className='navlink'> 
        <SidebarOption icon={exploreicon} text="Explore"  />
        </NavLink>
        <NavLink to="/notification" className='navlink'> 
        <SidebarOption icon={notificationicon} text="Notifications"  />
        </NavLink>
        <NavLink to="/messages" className='navlink'> 
        <SidebarOption icon={messageicon} text="Messages"  />
        </NavLink>
        <NavLink to="/bookmarks" className='navlink'> 
        <SidebarOption icon={Bookmarksicon} text="Bookmarks"  />
        </NavLink>
        <NavLink to="/lists" className='navlink'> 
        <SidebarOption icon={listicon} text="Lists"  />
        </NavLink>
        <NavLink to="/profile" className='navlink'> 
        <SidebarOption icon={profileicon} text="Profile"  />
        </NavLink>
        <NavLink to="/more" className='navlink'> 
        <SidebarOption icon={moreicon} text="More"  />
        </NavLink>
        <br/>
       
        <Button text="Tweet"  className="sidebar__tweet"/> 
        </div>
        <div className='alignement'> 
      <NavLink to='/profile' className='alignement'> 
      <Profile icon ={profilephoto} />
      <ProfileSetting icon ={ profilsetting } />
      <img src="src\images\More-2.png" alt="trois point" />
      </NavLink>
      
      </div>

    </div>
  )
}

export default SideBar;