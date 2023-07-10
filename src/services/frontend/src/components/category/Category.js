import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import Card from './card/Card';
import MedicationIcon from '@mui/icons-material/Medication';

const Category = () => {
    let name = 'Medicine';
    let icon = <MedicationIcon sx={{ fontSize: '50px', color: '#bb5a77' }} />;
    return (
        <Box
            sx={{
                backgroundColor: '#76bc21',
                width: '100%',
                height: {
                    xl: '480px',
                    lg: '480px',
                    md: '520px',
                    sm: '520px',
                    xs: '520px',
                },
                mt: 2,
            }}
        >
            <Container>
                <Grid container>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Typography
                            sx={{
                                color: {
                                    xl: 'white',
                                    lg: 'white',
                                    md: 'white',
                                    sm: 'white',
                                    xs: 'black',
                                },
                                fontSize: { lg: '35px', xs: '20px' },
                            }}
                        >
                            Categories
                        </Typography>
                    </Grid>
                    <Grid
                        xl={12}
                        lg={12}
                        md={12}
                        sm={12}
                        xs={12}
                        sx={{
                            height: {
                                xl: '430px',
                                lg: '430px',
                                md: '400px',
                                sm: '400px',
                                xs: '400px',
                            },
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(4,1fr)',
                                fontWeight: 'bold',
                                height: '380px',
                                width: '80%',
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
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Category;
