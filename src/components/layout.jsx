import React from 'react';
import {Outlet} from "react-router-dom";
// import Home from "./pages/home.jsx";
import SideBar from "./side-bar.jsx";
import Trend from "./trends.jsx";


function Layout({children}) {
    return (
        <>

            <div>
            <Outlet/>
            </div>
            <div className="right-sidebar" >
            
            </div> 


        </>
    );
}

export default Layout;