import { Box, Container, Grid, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import NavBar from './layout/NavBar';
import SearchBar from './layout/SearchBar';
import { Global, css } from '@emotion/react';
import Footer from './footer/Footer';
import { Outlet } from 'react-router-dom';
import CopyRight from './footer/CopyRight';
import MenuBar from './layout/MenuBar';
import MobileAddress from './location/MobileAddress';
import BottomNavigate from './layout/BottomNavigate';

const App = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box>
            <Global
                styles={css`
                    body {
                        margin: 0;
                    }
                `}
            />
            <NavBar />
            <SearchBar />
            {isSmall ? <MobileAddress /> : <MenuBar />}
            <Outlet />
            <Grid
                sx={{
                    height: '88px',
                    display: {
                        xs: 'block',
                        lg: 'none',
                        sm: 'none',
                        md: 'none',
                        xl: 'none',
                    },
                }}
            ></Grid>
            {!isSmall ? (
                <Box>
                    <Footer />
                    <CopyRight />
                </Box>
            ) : (
                <BottomNavigate />
            )}
        </Box>
    );
};

export default App;
