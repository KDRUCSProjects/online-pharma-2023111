import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import Card from './card/Card';
import MedicationIcon from '@mui/icons-material/Medication';

const Cat = () => {
    let name = 'Medicine';
    let icon = <MedicationIcon sx={{ fontSize: '50px', color: '#bb5a77' }} />;

    return (
        <Grid
            sx={{
                width: '100vw',
                minHeight: '80vh',
                bgcolor: '#76bc21',
            }}
        >
            <Typography
                sx={{
                    color: 'white',
                    fontSize: '35px',
                    marginLeft: '70px',
                    fontWeight: 'bold',
                }}
            >
                Categories
            </Typography>
            <Grid
                container
                lg={8}
                sm={6}
                md={6}
                xs={12}
                sx={{
                    margin: '0px auto',
                    width: '100vw',
                    minHeight: '70vh',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontWeight: 'bold',
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
