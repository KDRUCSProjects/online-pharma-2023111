import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import App from '../App';
import Home from '../layout/Home';
import AdList from '../Ad/AdList';
import Profile from '../user/Profile';
import Location from '../location/Location';
import ShoppingCart from '../order/ShoppingCart';
import FeedbackForm from '../feedback/FeedbackForm';
import FeedBack from '../feedback/FeedBack';
import ComplaintForm from '../feedback/ComplaintForm';
import Faqs from '../FAQS/Faqs';
import Prescription from '../order/Prescription';
import Contact from '../contact us/Contact';
import WorkDetail from '../Ad/ad detail/WorkDetail';
import Generic from '../Ad/ad detail/Generic';
import DescriptionDetail from '../Ad/ad detail/DescriptionDetail';
import UsedForDetail from '../Ad/ad detail/UsedForDetail';
import Dosage from '../Ad/ad detail/Dosage';
import Dashboard from '../admin/components/dashboard/Dashboard';
import OrderList from '../admin/components/order/OrderList';
import PrescriptionList from '../admin/components/order/PrescriptionList';
import OrderReport from '../admin/components/report/OrderReport';
import Registration from '../user/Registration';
import Login from '../user/Login';
import SendPasswordResetEmail from '../user/SendPasswordResetEmail';
import ChangePassword from '../user/ChangePassword';
import AdDetail from '../Ad/ad detail/AdDetail';
import MainLayout from '../admin/components/MainLayout';
import ResetPassword from '../user/ResetPassword';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';

const RouteList = () => {
    const { access_token } = useSelector((state) => state.auth);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/" element={<Home />} />
                    <Route path="ad/list/:name/:id/" element={<AdList />} />
                    <Route path="/location/" element={<Location />} />
                    <Route
                        path="/profile/"
                        element={
                            access_token ? (
                                <Profile />
                            ) : (
                                <Navigate to="/login/" />
                            )
                        }
                    />
                    <Route
                        path="/shopping/cart/"
                        element={
                            access_token ? (
                                <ShoppingCart />
                            ) : (
                                <Navigate to="/login/" />
                            )
                        }
                    />
                    <Route
                        path="feedback"
                        element={
                            access_token ? (
                                <FeedBack />
                            ) : (
                                <Navigate to={'/login/'} />
                            )
                        }
                    >
                        <Route
                            path=""
                            element={
                                access_token ? (
                                    <FeedbackForm />
                                ) : (
                                    <Navigate to={'/login/'} />
                                )
                            }
                        />
                        <Route
                            path="complaint/"
                            element={
                                access_token ? (
                                    <ComplaintForm />
                                ) : (
                                    <Navigate to={'/login/'} />
                                )
                            }
                        />
                    </Route>
                    <Route path="/faq/" element={<Faqs />} />
                    <Route
                        path="/prescription/"
                        element={
                            access_token ? (
                                <Prescription />
                            ) : (
                                <Navigate to="/login/" />
                            )
                        }
                    />
                    <Route path="/contact/" element={<Contact />} />
                    <Route
                        path="ad/detail/:category/:name/:id/"
                        element={<AdDetail />}
                    >
                        <Route path="" element={<WorkDetail />} />
                        <Route
                            path="description/:id/"
                            element={<DescriptionDetail />}
                        />
                        <Route path="generic/:id/" element={<Generic />} />
                        <Route
                            path="used/for/:id/"
                            element={<UsedForDetail />}
                        />
                        <Route path="dosage/:id/" element={<Dosage />} />
                    </Route>
                </Route>
                <Route
                    path="dashboard"
                    element={
                        access_token ? (
                            <MainLayout />
                        ) : (
                            <Navigate to={'/login/'} />
                        )
                    }
                >
                    <Route
                        path=""
                        element={
                            access_token ? (
                                <Dashboard />
                            ) : (
                                <Navigate to={'/login/'} />
                            )
                        }
                    />
                    <Route
                        path="order/list/"
                        element={
                            access_token ? (
                                <OrderList />
                            ) : (
                                <Navigate to={'/login/'} />
                            )
                        }
                    />
                    <Route
                        path="prescription/list/"
                        element={
                            access_token ? (
                                <PrescriptionList />
                            ) : (
                                <Navigate to={'/login/'} />
                            )
                        }
                    />
                    <Route
                        path="day/report/"
                        element={
                            access_token ? (
                                <OrderReport />
                            ) : (
                                <Navigate to={'/login/'} />
                            )
                        }
                    />
                </Route>
                <Route path="/signup/" element={<Registration />} />
                <Route path="/login/" element={<Login />} />
                <Route
                    path="/send/password/reset/email/"
                    element={<SendPasswordResetEmail />}
                />
                <Route
                    path="/api/user/reset/:id/:token/"
                    element={<ResetPassword />}
                />
                <Route
                    path="/change/password/"
                    element={
                        access_token ? (
                            <ChangePassword />
                        ) : (
                            <Navigate to={'/login/'} />
                        )
                    }
                />
                <Route
                    path="*"
                    element={
                        <Typography variant="h4" fontWeight="bold">
                            Error 404 Page not found !!
                        </Typography>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteList;
