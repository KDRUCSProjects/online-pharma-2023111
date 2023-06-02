import React from 'react';
import NavBar from './navbar/NavBar';
import { Box, Container, Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
import MenuBar from './menubar/MenuBar';

const App = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <NavBar />
            <MenuBar />
            <Container>
                <Box>
                    <Outlet />
                </Box>
            </Container>
        </Box>
    );
};

export default App;
