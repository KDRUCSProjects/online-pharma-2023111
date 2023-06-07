import { Container, Grid, Button, Typography } from '@mui/material';
import React from 'react';
import Slider from '../slider/Slider';
import Cat from '../category/Cat';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Layout = () => {
    return (
        <Container>
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
        </Container>
    );
};

export default Layout;
