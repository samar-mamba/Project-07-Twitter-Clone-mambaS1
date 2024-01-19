import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import App from './App'
import Layout from './components/layout';
import Home from './pages/home';
import Explore from './pages/explore';
import Notification from './pages/notification'
import Messages from './pages/messages';
import Bookmarks from './pages/bookmarks';
import Lists from './pages/lists';
import Profile from './components/profile-photo';
import More from './pages/more';

const router = createBrowserRouter([

  {
    path:'/',
    element:<App />,
    children: [
      {
        path:'/',
        element:<Layout />,
        children:[
          {
            path:'/home',
            element:<Home/>,
          },
          {
            path:'/explore',
            element:<Explore/>,
          },
          {
            path:'/notification',
            element:<Notification/>
          },
          {
            path:'/messages',
            element:<Messages/>
          },
          {
            path:'/bookmarks',
            element:<Bookmarks/>
          },
          {
            path:'/lists',
            element:<Lists/>
          },
          {
            path:'/profile',
            element:<Profile/>
          },
          {
            path:'/more',
            element:<More/>
          },
        ]
      }
    ]
  }
])






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < RouterProvider router={router} />
  </React.StrictMode>,
)