import { Box, Container, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import NavBar from './layout/NavBar';
import SearchBar from './layout/SearchBar';
import { Global, css } from '@emotion/react';
import Footer from './footer/Footer';
import { Outlet } from 'react-router-dom';
import CopyRight from './footer/CopyRight';
import MenuBar from './layout/MenuBar';
import MobileAddress from './mobil address/MobileAddress';

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
            {!isSmall ? (
                <Box>
                    <Footer />
                    <CopyRight />
                </Box>
            ) : (
                ''
            )}
        </Box>
    );
};

export default App;
