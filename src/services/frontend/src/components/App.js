import React from 'react';
import NavBar from './navbar/NavBar';
import { Box, Container, Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const App = () => {
    const queryClient = new QueryClient({
        defaultOptions: {},
    });
    return (
        <Box sx={{ flexGrow: 1 }}>
            <QueryClientProvider client={queryClient}>
                <NavBar />
                <Container>
                    <Box>
                        <Outlet />
                    </Box>
                </Container>
                <ReactQueryDevtools initialIsOpen />
            </QueryClientProvider>
        </Box>
    );
};

export default App;
