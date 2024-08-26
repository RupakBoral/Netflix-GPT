import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';
import Header from './Header';
import Home from './Home';

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        }
    ])

    return (
        <RouterProvider router={appRouter}>
            <div className='bg-black'>
                <Header />
                <Outlet />
            </div>
        </RouterProvider>
    );
}

export default Body;
