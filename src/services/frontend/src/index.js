import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from './components/app/store';
import RouteList from './components/router/RouteList';

const queryClient = new QueryClient({
    defaultOptions: {},
});

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <RouteList />
            </QueryClientProvider>
        </Provider>
    </React.StrictMode>
);
