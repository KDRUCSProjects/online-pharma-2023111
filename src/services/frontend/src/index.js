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
import Dashboard from './components/admin/components/Dashboard';

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
    {
        path: 'dashboard/',
        element: <Dashboard />
    }
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
