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
import MainLayout from './components/admin/components/MainLayout';
import Dashboard from './components/admin/components/dashboard/Dashboard';
import CategoryList from './components/admin/components/category/CategoryList';
import AddCategory from './components/admin/components/category/AddCategory';
import CountryList from './components/admin/components/country/CountryList';
import AddCountry from './components/admin/components/country/AddCountry';
import DrugList from './components/admin/components/drug/DrugList';
import AddDrug from './components/admin/components/drug/AddDrug';
import OrderList from './components/admin/components/order/OrderList';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Layout />,
            },
            {
                path: 'account/',
                element: <Profile />,
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
        element: <ProductDetails />,
    },
    {
        path: 'dashboard',
        element: <MainLayout />,
        children: [
            {
                path: '',
                element: <Dashboard />,
            },
            {
                path: 'category/list/',
                element: <CategoryList />,
            },
            {
                path: 'category/add/',
                element: <AddCategory />,
            },
            {
                path: 'country/list/',
                element: <CountryList />,
            },

            {
                path: 'country/add/',
                element: <AddCountry />,
            },
            {
                path: 'drug/list/',
                element: <DrugList />,
            },
            {
                path: 'drug/add/',
                element: <AddDrug />,
            },
            {
                path: 'order/list/',
                element: <OrderList />,
            },
        ],
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
