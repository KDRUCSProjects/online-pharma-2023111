import { Container, Grid, Button, Typography } from '@mui/material';
import React from 'react';
import Slider from '../slider/Slider';
import Cat from '../category/Cat';

const Layout = () => {
    return (
        
            <Grid
                sx={{
                    mt: 0.5,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '90vw',
                }}
            >
                <Slider />
                <Cat />
            </Grid>
    );
};

export default Layout;
