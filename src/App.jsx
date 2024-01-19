import Home from "./pages/home.jsx";
import SideBar from "./components/side-bar.jsx";
import Trend from "./components/trends.jsx";
import Layout from "./components/layout.jsx";

import('./style/reset.css');
import('./style/App.css');

export default function App() {
  return (
    <>
    <SideBar />
    
      <Layout>
      </Layout>
      <Trend/> 
      
    </>
  );
}
