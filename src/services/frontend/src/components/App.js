import { Box, Container, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import NavBar from './layout/NavBar';
import SearchBar from './layout/SearchBar';
import { Global, css } from '@emotion/react';
import Category from './category/Category';
import Footer from './footer/Footer';
import { Outlet } from 'react-router-dom';
import Slider from './slider/Slider';

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
            <Outlet />
            {!isSmall ? <Footer /> : ''}
        </Box>
    );
};

export default App;
