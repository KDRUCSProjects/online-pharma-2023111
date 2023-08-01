import React, { useEffect, useState } from 'react';
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Stack,
    Typography,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { getObjects } from '../Api/Api';
import CircularProgress from '@mui/material/CircularProgress';
import AdCard from '../Ad/AdCard';
const TopSellingItem = () => {
    const { data, isLoading, isError, isSuccess } = useQuery(
        ['top_selling'],
        () => {
            return getObjects('top-selling');
        }
    );

    if (isError) {
        return <Typography variant="h5">Error </Typography>;
    }
    if (isLoading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
            </Box>
        );
    }
    if (isSuccess) {
        return (
            <Box
                sx={{
                    height: {
                        xl: '430px',
                        lg: '430px',
                        md: '400px',
                        sm: '340px',
                        xs: '340px',
                    },
                    mt: { xl: 4, lg: 4, md: 3, sm: 1, xs: 1 },
                }}
            >
                <Container>
                    <Typography
                        sx={{
                            color: {
                                xl: '#76bc21',
                                lg: '#76bc21',
                                md: '#76bc21',
                                sm: 'black',
                                xs: 'black',
                            },
                            fontSize: { lg: '35px', xs: '15px' },
                            fontWeight: { xl: 'bold', lg: 'bold', md: 'bold' },
                        }}
                    >
                        Top Selling Items
                    </Typography>
                    <Grid container>
                        {data.map((ad) => (
                            <Grid
                                item
                                key={ad.id}
                                xl={3}
                                lg={3}
                                md={4}
                                sm={6}
                                xs={6}
                            >
                                <AdCard key={ad.id} ad={ad} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        );
    }
};

export default TopSellingItem;
