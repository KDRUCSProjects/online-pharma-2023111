import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/App';
import SignUp from './components/user/SignUp';
import Login from './components/user/login';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProductDetails from './components/ProductDetails';
import Profile from './components/user/Profile';
import Layout from './components/home/Layout';
import ButtomNav from './components/mobileview/ButtomNav';
import Cat from './components/category/Cat';
import Slider from './components/slider/Slider';
import MobileAddres from './components/mobileviewaddres/MobileAddres';
import Mobilenav from './components/navbar/Mobilenav';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Layout/>
            },
            {
                path: 'account/',
                element: <Profile />
            },
        ],
    },
    {
        path: '/signup/',
        element: <SignUp />,
    },
    {
        path: '/login/',
        element: <Login />,
    },
    {
        path: 'details/',
        element: <ProductDetails />
    },
]);

const queryClient = new QueryClient({
    defaultOptions: {},
});

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </React.StrictMode>
);
