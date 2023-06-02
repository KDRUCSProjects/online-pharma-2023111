import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/App';
import SignUp from './components/user/SignUp';
import MenuBar from './components/menubar/MenuBar';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [],
    },
    {
        path: '/signup/',
        element: <SignUp />,
    },
    // {
    //     path: '/menubar/',
    //     element: <MenuBar/>
    // }
]);

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
