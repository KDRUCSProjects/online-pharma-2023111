import React from 'react';
import NavBar from './navbar/NavBar';
import { Box, Container, Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Footer from './footer/Footer';
import ButtomNav from './mobileview/ButtomNav';
import useMediaQuery from '@mui/material/useMediaQuery';
import MobileAddres from './mobileviewaddres/MobileAddres';
import Mobilenav from './navbar/Mobilenav';

const App = () => {
    const matches = useMediaQuery('(max-width:414px)');
    const queryClient = new QueryClient({
        defaultOptions: {},
    });
    return (
        <Box sx={{ flexGrow: 1 }}>
            <QueryClientProvider client={queryClient}>
                <Grid container>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        {matches? <Mobilenav /> : <NavBar />}
                    </Grid>
                    <Grid item sm={12} xs={12}>
                        {matches ? <MobileAddres />: ''}
                    </Grid>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Box>
                            <Outlet />
                        </Box>
                    </Grid>
                </Grid>
                {matches ? <ButtomNav/> : <Footer
                />}
                <ReactQueryDevtools initialIsOpen />
            </QueryClientProvider>
        </Box>
    );
};

export default App;
