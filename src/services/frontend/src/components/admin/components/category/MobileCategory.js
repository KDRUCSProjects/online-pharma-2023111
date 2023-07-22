import {
    Box,
    Breadcrumbs,
    Container,
    Grid,
    Paper,
    Typography,
} from '@mui/material';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const MobileCategory = () => {
    return (
        <Container>
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
                    Category
                </Typography>
            </Breadcrumbs>
            <Typography
                variant="h6"
                color={'#76bc21'}
                mt={3}
                pl={1}
                sx={{ borderLeft: '3px solid #76bc21' }}
            >
                Category
            </Typography>
            <Grid item lg={12} xl={12} md={12} sm={12} xs={12} mt={5}>
                <Paper
                    elevation={1}
                    sx={{
                        height: {
                            lg: '58vh',
                            xl: '58vh',
                            md: '58vh',
                            sm: '50vh',
                            xs: '52vh',
                        },
                    }}
                >
                    <Link
                        style={{
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >
                        <Box
                            sx={{
                                height: '6vh',
                                borderBottom: '1px solid lightgray',
                            }}
                        >
                            <Typography
                                variant="h6"
                                fontFamily={'cursive'}
                                fontSize={'22px'}
                                mt={4}
                                ml={5}
                            >
                                Medicine
                            </Typography>
                        </Box>
                    </Link>
                    <Link
                        style={{
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >
                        <Box
                            sx={{
                                height: '6vh',
                                borderBottom: '1px solid lightgray',
                            }}
                        >
                            <Typography
                                variant="h6"
                                fontFamily={'cursive'}
                                fontSize={'22px'}
                                ml={5}
                                mb={5}
                            >
                                A to Z Medicine
                            </Typography>
                        </Box>
                    </Link>
                    <Link
                        style={{
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >
                        <Box
                            sx={{
                                height: '4.5vh',
                                borderBottom: '1px solid lightgray',
                            }}
                        >
                            <Typography
                                variant="h6"
                                fontSize={'22px'}
                                fontFamily={'cursive'}
                                mt={2}
                                ml={5}
                            >
                                Baby & Mother Care
                            </Typography>
                        </Box>
                    </Link>
                    <Link
                        style={{
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >
                        <Box
                            sx={{
                                height: '5vh',
                                borderBottom: '1px solid lightgray',
                            }}
                        >
                            <Typography
                                variant="h6"
                                fontSize={'22px'}
                                fontFamily={'cursive'}
                                mt={2}
                                ml={5}
                            >
                                Nutrition & Supplements
                            </Typography>
                        </Box>
                    </Link>
                    <Link
                        style={{
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >
                        <Box
                            sx={{
                                height: '5vh',
                                borderBottom: '1px solid lightgray',
                            }}
                        >
                            <Typography
                                variant="h6"
                                fontSize={'22px'}
                                fontFamily={'cursive'}
                                mt={2}
                                ml={5}
                            >
                                Food & Beverage
                            </Typography>
                        </Box>
                    </Link>
                    <Link
                        style={{
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >
                        <Box
                            sx={{
                                height: '5vh',
                                borderBottom: '1px solid lightgray',
                            }}
                        >
                            <Typography
                                variant="h6"
                                fontSize={'22px'}
                                fontFamily={'cursive'}
                                mt={2}
                                ml={5}
                            >
                                Device & Appliances
                            </Typography>
                        </Box>
                    </Link>
                    <Link
                        style={{
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >
                        <Box
                            sx={{
                                height: '5vh',
                                borderBottom: '1px solid lightgray',
                            }}
                        >
                            <Typography
                                variant="h6"
                                fontSize={'22px'}
                                fontFamily={'cursive'}
                                mt={2}
                                ml={5}
                            >
                                Personal Care
                            </Typography>
                        </Box>
                    </Link>
                    <Link
                        style={{
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >
                        <Box
                            sx={{
                                height: '5vh',
                            }}
                        >
                            <Typography
                                variant="h6"
                                fontSize={'22px'}
                                fontFamily={'cursive'}
                                mt={2}
                                ml={5}
                            >
                                OTC & Health Need
                            </Typography>
                        </Box>
                    </Link>
                </Paper>
            </Grid>
        </Container>
    );
};

export default MobileCategory;
