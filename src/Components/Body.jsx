import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';
import Header from './Header';
import Home from './Home';
import Step1SignUp from './SignUp/Step1SignUp';
import Step2SignUp from './SignUp/Step2SignUp';

const Body = () => {

    const Layout = () => {
        return(
            <div>
                <Header />
                <Outlet /> 
            </div>
        )
    }
  
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Layout />, // Using Layout as the wrapper for pages
            children: [
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
                },
                {
                    path: "/signUpStep1",
                    element: <Step1SignUp />
                },
                {
                    path: "/signUpStep2",
                    element: <Step2SignUp />
                }
            ]
        }
    ]);

    return (
        <RouterProvider router={appRouter} />
    );
}

export default Body;
