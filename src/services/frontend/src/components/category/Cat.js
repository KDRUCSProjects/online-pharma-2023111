import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import Card from './card/Card';
import MedicationIcon from '@mui/icons-material/Medication';

const Cat = () => {
    let name = 'Medicine';
    let icon = <MedicationIcon sx={{ fontSize: '50px', color: '#bb5a77' }} />;

    return (
        <Container sx={{
            display: 'flex',
            justifyContent: 'center'
        }}>
        <Grid
            sx={{
                width: {lg: '99vw',xs: '510px'},
                Height: {lg: '80vh',xs: '90vh'},
                marginTop: {xs: 22},
                bgcolor: {lg: '#76bc21',xs: 'white',sm: 'white',md: '#76bc21'},
                mb: 1,
                mr: 0,
            }}
        >
            <Typography
                sx={{
                    color: {lg: 'white',md: 'white',xs: 'black',sm: 'black'},
                    fontSize: {lg:'35px',xs:'20px'},     
                    fontWeight: {lg:'bold',xs:'bold'}
                }}
            >
                Categories
            </Typography>
            <Grid
                container
                lg={8}
                sm={6}
                md={6}
                xs={6}
                sx={{
                    margin: '0px auto',
                    minWidth: {lg: '1200px',xs: '405px'},
                    minHeight: {lg: '70vh',xs: '30vh'},
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontWeight: 'bold',
                    ':hover': {height: {lg:'170px',xs:'none'}},
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
        </Container> 
    );
};

export default Cat;
