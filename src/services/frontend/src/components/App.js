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
                <Grid container>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <NavBar />
                    </Grid>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Box>
                            <Outlet />
                        </Box>
                    </Grid>
                </Grid>
                <ReactQueryDevtools initialIsOpen />
            </QueryClientProvider>
        </Box>
    );
};

export default App;
