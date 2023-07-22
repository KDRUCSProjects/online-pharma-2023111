import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/App';
import Login from './components/user/Login';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MainLayout from './components/admin/components/MainLayout';
import Dashboard from './components/admin/components/dashboard/Dashboard';
import OrderList from './components/admin/components/order/OrderList';
import PrescriptionList from './components/admin/components/order/PrescriptionList';
import Registration from './components/user/Registration';
import { Provider } from 'react-redux';
import { store } from './components/app/store';
import SendPasswordResetEmail from './components/user/SendPasswordResetEmail';
import ResetPassword from './components/user/ResetPassword';
import ChangePassword from './components/user/ChangePassword';
import Prescription from './components/order/Prescription';
import AdList from './components/Ad/AdList';
import Location from './components/location/Location';
import Profile from './components/user/Profile';
import Home from './components/layout/Home';
import ShoppingCart from './components/order/ShoppingCart';
import FeedBack from './components/feedback/FeedBack';
import FeedbackForm from './components/feedback/FeedbackForm';
import ComplaintForm from './components/feedback/ComplaintForm';
import Faqs from './components/FAQS/Faqs';
import OrderReport from './components/admin/components/report/OrderReport';
import Contact from './components/contact us/Contact';
import AdDetail from './components/Ad/ad detail/AdDetail';
import WorkDetail from './components/Ad/ad detail/WorkDetail';
import Generic from './components/Ad/ad detail/Generic';
import UsedForDetail from './components/Ad/ad detail/UsedForDetail';
import Dosage from './components/Ad/ad detail/Dosage';
import DescriptionDetail from './components/Ad/ad detail/DescriptionDetail';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'ad/list/:name/:id/',
                element: <AdList />,
            },
            {
                path: '/location/',
                element: <Location />,
            },
            {
                path: '/profile/',
                element: <Profile />,
            },
            {
                path: '/shopping/cart/',
                element: <ShoppingCart />,
            },
            {
                path: 'feedback',
                element: <FeedBack />,
                children: [
                    {
                        path: '',
                        element: <FeedbackForm />,
                    },
                    {
                        path: 'complaint/',
                        element: <ComplaintForm />,
                    },
                ],
            },
            {
                path: '/faq/',
                element: <Faqs />,
            },
            {
                path: '/prescription/',
                element: <Prescription />,
            },
            {
                path: '/contact/',
                element: <Contact />,
            },
            {
                path: 'ad/detail/:category/:name/:id/',
                element: <AdDetail />,
                children: [
                    {
                        path: '',
                        element: <WorkDetail />,
                    },
                    {
                        path: 'description/:id/',
                        element: <DescriptionDetail />,
                    },
                    {
                        path: 'generic/:id/',
                        element: <Generic />,
                    },
                    {
                        path: 'used/for/:id/',
                        element: <UsedForDetail />,
                    },
                    {
                        path: 'dosage/:id/',
                        element: <Dosage />,
                    },
                ],
            },
        ],
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
        path: 'complaint/',
        element: <ComplaintForm />,
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
                path: 'order/list/',
                element: <OrderList />,
            },
            {
                path: 'prescription/list/',
                element: <PrescriptionList />,
            },
            {
                path: 'day/report/',
                element: <OrderReport />,
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
