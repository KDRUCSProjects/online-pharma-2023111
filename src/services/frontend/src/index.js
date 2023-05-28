import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './components/App';
import NavBar from './components/NavBar'
import Footer from './components/footer/Footer';


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: "/footer",
        element: <Footer /> 
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
