import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/App';
import Login from './components/user/Login';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MainLayout from './components/admin/components/MainLayout';
import Dashboard from './components/admin/components/dashboard/Dashboard';
import CategoryList from './components/admin/components/category/CategoryList';
import AddCategory from './components/admin/components/category/AddCategory';
import CountryList from './components/admin/components/country/CountryList';
import AddCountry from './components/admin/components/country/AddCountry';
import DrugList from './components/admin/components/drug/DrugList';
import AddDrug from './components/admin/components/drug/AddDrug';
import OrderList from './components/admin/components/order/OrderList';
import User from './components/admin/components/user/User';
import Registration from './components/user/Registration';
import { Provider } from 'react-redux';
import { store } from './components/app/store';
import SendPasswordResetEmail from './components/user/SendPasswordResetEmail';
import ResetPassword from './components/user/ResetPassword';
import ChangePassword from './components/user/ChangePassword';
import Prescription from './components/order/Prescription';
import AdList from './components/Ad/AdList';
import AdDetail from './components/Ad/AdDetail';
import Location from './components/location/Location';
import Profile from './components/user/Profile';
import Home from './components/layout/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'ad/list/',
                element: <AdList />
            },
            {
                path: '/ad/detail/:id/',
                element: <AdDetail />,
            },
            {
                path: '/location/',
                element: <Location />,
            },
            {
                path: '/profile/',
                element: <Profile />,
            },
        ],
    },
    {
        path: '/prescription/',
        element: <Prescription />,
    },
    {
        path: '/signup/',
        element: <Registration />,
    },
    {
        path: '/login/',
        element: <Login />,
    },
    {
        path: '/send/password/reset/email/',
        element: <SendPasswordResetEmail />,
    },
    {
        path: '/api/user/reset/:id/:token/',
        element: <ResetPassword />,
    },
    {
        path: '/change/password',
        element: <ChangePassword />,
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
            {
                path: 'user/list/',
                element: <User />,
            },
        ],
    },
]);

const queryClient = new QueryClient({
    defaultOptions: {},
});

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </Provider>
    </React.StrictMode>
);
