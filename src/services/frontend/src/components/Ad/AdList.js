import React from 'react';
import { Box, Breadcrumbs, Grid, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import AdCard from './AdCard';

const AdList = () => {
    const data = [
        {
            id: 1,
            name: 'medicine',
        },
        {
            id: 2,
            name: 'medicine',
        },
        {
            id: 3,
            name: 'medicine',
        },
        {
            id: 4,
            name: 'medicine',
        },
        {
            id: 5,
            name: 'medicine',
        },
        {
            id: 6,
            name: 'medicine',
        },
        {
            id: 7,
            name: 'medicine',
        },
        {
            id: 8,
            name: 'medicine',
        },
        {
            id: 9,
            name: 'medicine',
        },
    ];
    return (
        <Box>
            <Breadcrumbs aria-label="breadcrumb" sx={{ mt: 3 }}>
                <Link
                    to={'/'}
                    style={{ textDecoration: 'none', color: '#76bc21' }}
                >
                    <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Home
                </Link>
                <Typography
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="text.primary"
                >
                    AdList
                </Typography>
            </Breadcrumbs>
            <Typography
                variant="h6"
                color={'#76bc21'}
                mt={3}
                pl={1}
                sx={{ borderLeft: '3px solid #76bc21' }}
            >
                AdList
            </Typography>
            <Grid container>
                {data.map((ad) => (
                    <Grid item key={ad.id} xl={3} lg={3} md={4} sm={6} xs={12}>
                        <Link
                            to={`/ad/detail/${ad.id}`}
                            style={{ textDecoration: 'none' }}
                        >
                            <AdCard ad={ad} />
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default AdList;
