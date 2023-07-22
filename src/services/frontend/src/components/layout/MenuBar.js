import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const MenuBar = () => {
    return (
        <Grid
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            sx={{
                display: {
                    xl: 'block',
                    lg: 'block',
                    md: 'none',
                    sm: 'none',
                    xs: 'none',
                },
            }}
        >
            <Paper
                elevation={1}
                sx={{
                    width: '100%',
                    height: '6vh',
                    display: 'flex',
                    justifyContent: 'space-between',
                    color: 'black',
                }}
            >
                <Container
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                >
                    <Box
                        ml={3}
                        mt={{ lg: 1, xl: 2.5 }}
                        sx={{
                            width: '96%',
                            height: '5vh',
                            display: 'flex',
                            justifyContent: 'space-between',
                            color: 'black',
                        }}
                    >
                        <Typography fontFamily="cursive" fontSize={'15px'}>
                            Medicine
                        </Typography>
                        <Typography fontFamily="cursive" fontSize={'15px'}>
                            {' '}
                            A to Z Medicine
                        </Typography>
                        <Typography fontFamily="cursive" fontSize={'15px'}>
                            Baby & Mother Care
                        </Typography>
                        <Typography fontFamily="cursive" fontSize={'15px'}>
                            Nutrition & Supplements
                        </Typography>
                        <Typography fontFamily="cursive" fontSize={'15px'}>
                            Food & Beverage
                        </Typography>
                        <Typography fontFamily="cursive" fontSize={'15px'}>
                            Device & Appliances
                        </Typography>
                        <Typography fontFamily="cursive" fontSize={'15px'}>
                            Personal Care
                        </Typography>
                        <Typography fontFamily="cursive" fontSize={'15px'}>
                            OTC & Health Need
                        </Typography>
                    </Box>
                </Container>
            </Paper>
        </Grid>
    );
};

export default MenuBar;
