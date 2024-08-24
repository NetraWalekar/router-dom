import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import About from './view/about/about'
import Contact from './view/contact/contact'
import Home from './view/home/home'
import {createBrowserRouter,RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
    {
        path:'/',
        element: <Home/>
    },
    {
        path:'/about',
        element: <About/>
    },
    {
        path:'/contact',
        element: <Contact/>
    },

   
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
    <RouterProvider router={router}/>

</div>);
