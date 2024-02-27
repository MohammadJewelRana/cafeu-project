import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../Layout/HomeLayout.jsx'
import Home from '../Pages/Home/Home.jsx';
import About from '../Pages/About/About.jsx';
import Contact from '../Pages/Contact/Contact.jsx';
import Menu from '../Pages/Menu/Menu.jsx';
 



 const router=createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        children:[
            { path:'/', element: <Home></Home>   },
            { path:'/about', element: <About></About> },
            { path:'/contact', element:  <Contact></Contact>},
            { path:'/menu', element:  <Menu></Menu>    },
        ]
    }
 ])

 export default router;