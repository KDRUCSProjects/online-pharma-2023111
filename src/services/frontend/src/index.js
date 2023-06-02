import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/App';
import SignUp from './components/user/SignUp';
import Login from './components/user/login';

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
    {
        path: '/login/',
        element: <Login />
    }
]);

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
