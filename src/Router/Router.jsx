import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../Layout/HomeLayout.jsx'
import Home from '../Pages/Home/Home.jsx';
import About from '../Pages/About/About.jsx';
import Contact from '../Pages/Contact/Contact.jsx';
import Menu from '../Pages/Menu/Menu.jsx';
import Shop from '../Pages/Shop/Shop.jsx';
import ShopDetails from '../Pages/Shop/ShopDetails.jsx';
import Cart from '../Pages/Cart/Cart.jsx';
import Wishlist from '../Pages/Cart/Wishlist.jsx';
import Checkout from '../Pages/Cart/Checkout.jsx';
 



 const router=createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        children:[
            { path:'/', element: <Home></Home>   },
            { path:'/about', element: <About></About> },
            { path:'/contact', element:  <Contact></Contact>},
            { path:'/menu', element:  <Menu></Menu>    },
            { path:'/shop', element:  <Shop></Shop>   },
            { path:'/shopDetails', element:  <ShopDetails></ShopDetails>   },
            { path:'/cart', element: <Cart></Cart>    },
            { path:'/wishList', element: <Wishlist></Wishlist>   },
            { path:'/checkout', element: <Checkout></Checkout> },
        ]
    }
 ])

 export default router;