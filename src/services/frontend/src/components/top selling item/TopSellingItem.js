import React, { useEffect, useState } from 'react';
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Container,
    Stack,
    Typography,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { getObjects } from '../Api/Api';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';

const styles = {
    card: {
        minWidth: 275,
        marginRight: 16,
    },
};

const TopSellingItem = () => {
    const { data, isLoading, isError, isSuccess } = useQuery(['top_selling'], () => {
        return getObjects('top-selling');
    });

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
                    <Box
                        sx={{
                            display: 'flex',
                            overflowX: 'auto',
                            scrollBehavior: 'smooth',
                            '::-webkit-scrollbar': {
                                height: 0,
                            },
                            mt: { xl: 4, lg: 4, md: 4, sm: 3, xs: 3 },
                        }}
                    >
                        {data.map((ad) => (
                            <Card
                                key={ad.id}
                                sx={{
                                    minWidth: {
                                        xl: 275,
                                        lg: 275,
                                        md: 250,
                                        sm: 200,
                                        xs: 200,
                                    },
                                    m: 1,
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={ad.images[0].image}
                                    alt={ad.images[0].name}
                                    sx={{
                                        height: {
                                            xl: 160,
                                            lg: 160,
                                            md: 140,
                                            sm: 120,
                                            xs: 100,
                                        },
                                    }}
                                />
                                <CardContent>
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        justifyContent="space-between"
                                        mb={1}
                                    >
                                        <Box align="left">
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontSize: {
                                                        xl: '15px',
                                                        lg: '15px',
                                                        md: '13px',
                                                        sm: '12px',
                                                        xs: '10px',
                                                    },
                                                }}
                                            >
                                                {ad.title}
                                            </Typography>
                                        </Box>
                                        <Stack
                                            direction="row"
                                            justifyContent={'flex-end'}
                                            spacing={1}
                                        ></Stack>
                                    </Stack>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'flex-end',
                                            fontSize: '14px',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            fontSize={16}
                                            color="#880e4f"
                                            display={'inline'}
                                            align="right"
                                        >
                                            {ad.sell_price}
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                </Container>
            </Box>
        );
    }
};

export default TopSellingItem;
