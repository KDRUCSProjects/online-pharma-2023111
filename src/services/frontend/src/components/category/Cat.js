import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import Card from './card/Card';
import MedicationIcon from '@mui/icons-material/Medication';

const Cat = () => {
    let name = 'Medicine';
    let icon = <MedicationIcon sx={{ fontSize: '50px', color: '#bb5a77' }} />
    return (

        <Grid
            sx={{
                width: {lg: '100vw',xs: '100%',sm: '820px',md: '100vw'},
                Height: {lg: '80vh',xs: '90vh',md:'90vh',sm:'90vh'},
                marginTop: {xs: 20},
                bgcolor: {lg: '#76bc21',xs: 'white',sm: '#76bc21',md: '#76bc21'},
                ml:{sm:6},
                mr:{lg:-4.6}
            }}
            
        >
            <Typography
                sx={{
                    color: {lg: 'white',md: 'white',xs: 'black',sm: 'white'},
                    fontSize: {lg:'35px',xs:'20px'},     
                    fontWeight: {lg:'bold',xs:'bold'},
                    ml:{sm:5}
                }}
            >
                Categories
            </Typography>
            <Grid
                container
                lg={9}
                sm={6}
                md={6}
                xs={6}
                sx={{
                    margin: '0px auto',
                    minWidth: {lg: '50%',xs: '405px',md: '40%',sm: '40%'},
                    minHeight: {lg: '70vh',xs: '30vh',md: '35vh',sm: '30vh'},
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4,1fr)',
                    fontWeight: 'bold',
                    ':hover': {height: {lg:'170px',xs:'none',sm:'none'}},
                    ml:{sm:14,lg:20},
                    mt:{sm:3,lg:2}
                }}
            >
                <Card data={name} icon={icon} />
                <Card data={name} icon={icon} />
                <Card data={name} icon={icon} />
                <Card data={name} icon={icon} />
                <Card data={name} icon={icon} />
                <Card data={name} icon={icon} />
                <Card data={name} icon={icon} />
                <Card data={name} icon={icon} />
            </Grid>
        </Grid>
    
    );
};

export default Cat;
