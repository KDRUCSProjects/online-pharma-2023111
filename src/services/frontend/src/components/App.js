import React from 'react';
import NavBar from './navbar/NavBar';
import { Box, Container, Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';

const App = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <NavBar />
            <Container>
                <Box>
                    <Outlet />
                </Box>
            </Container>
        </Box>
    );
};

export default App;
