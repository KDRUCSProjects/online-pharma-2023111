import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import Card from './Card';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import HealingIcon from '@mui/icons-material/Healing';
import BabyChangingStationIcon from '@mui/icons-material/BabyChangingStation';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import EarbudsIcon from '@mui/icons-material/Earbuds';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

const Category = () => {
    const data = [
        {
            name: 'medicine',
            icon: <VaccinesIcon sx={{ fontSize: '50px', color: '#bb5a77' }} />,
        },
        {
            name: 'A to Z Medicine',
            icon: <HealingIcon sx={{ fontSize: '50px', color: '#bb5a77' }} />,
        },
        {
            name: 'Baby & Mother Care',
            icon: (
                <BabyChangingStationIcon
                    sx={{ fontSize: '50px', color: '#bb5a77' }}
                />
            ),
        },
        {
            name: 'Nutrition & Supplements',
            icon: (
                <LocalDiningIcon
                    sx={{ fontSize: '50px', color: '#bb5a77' }}
                />
            ),
        },
        {
            name: 'Food & Beverage',
            icon: (
                <LunchDiningIcon
                    sx={{ fontSize: '50px', color: '#bb5a77' }}
                />
            ),
        },
        {
            name: 'Devices & Appliances',
            icon: (
                <EarbudsIcon
                    sx={{ fontSize: '50px', color: '#bb5a77' }}
                />
            ),
        },
        {
            name: 'Personal Care',
            icon: (
                <VolunteerActivismIcon
                    sx={{ fontSize: '50px', color: '#bb5a77' }}
                />
            ),
        },
        {
            name: 'OTC And Health Need',
            icon: (
                <HealthAndSafetyIcon
                    sx={{ fontSize: '50px', color: '#bb5a77' }}
                />
            ),
        },
    ];
    return (
        <Box
            sx={{
                backgroundColor: {
                    lg: '#76bc21',
                    xs: 'white',
                    sm: '#76bc21',
                    md: '#76bc21',
                },
                width: '100%',
                height: {
                    xl: '480px',
                    lg: '480px',
                    md: '400px',
                    sm: '400px',
                    xs: '400px',
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
                                md: '350px',
                                sm: '350px',
                                xs: '350px',
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
                                height: {
                                    xl: '380px',
                                    lg: '380px',
                                    md: '300px',
                                    sm: '300px',
                                    xs: '300px',
                                },
                                width: {
                                    xl: '80%',
                                    lg: '80%',
                                    md: '100%',
                                    sm: '100%',
                                    xs: '100%',
                                },
                            }}
                        >
                            {data.map((ad) => (
                                <Card ad={ad} />
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Category;
