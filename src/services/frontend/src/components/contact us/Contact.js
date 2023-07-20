import {
    Box,
    Breadcrumbs,
    Container,
    Grid,
    Paper,
    Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const Contact = () => {
    return (
        <Container>
            <Grid container>
                <Grid item lg={6} xl={6} md={6} sm={8} xs={12}>
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
                            About
                        </Typography>
                    </Breadcrumbs>
                    <Typography
                        variant="h6"
                        color={'#76bc21'}
                        mt={3}
                        pl={1}
                        sx={{ borderLeft: '3px solid gray' }}
                    >
                        Contact
                    </Typography>
                    <Paper
                        sx={{
                            width: '100%',
                            height: '44vh',
                            bgcolor: '#76bc21',
                            marginTop: '20px',
                            boxShadow: 'none',
                        }}
                    >
                        <Box
                            ml={0.45}
                            sx={{
                                width: '98%',
                                height: '45vh',
                                bgcolor: 'white',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <Typography
                                mt={2}
                                ml={2}
                                variant="h6"
                                fontWeight="bold"
                            >
                                Contact Us:
                            </Typography>
                            <Typography
                                mt={3}
                                ml={2}
                                sx={{
                                    fontSize: '20px',
                                    fontFamily: 'fantasy',
                                    fontWeight: 'bold',
                                }}
                            >
                                Email Me:
                            </Typography>
                            <Link
                                style={{
                                    marginLeft: '18px',
                                    fontWeight: 'bolder',
                                    color: '#76bc21',
                                }}
                            >
                                samiullah.arian@icloud.com
                            </Link>
                            <Typography
                                mt={3}
                                ml={2}
                                sx={{
                                    fontSize: '20px',
                                    fontFamily: 'fantasy',
                                    fontWeight: 'bold',
                                }}
                            >
                                Phone Number:
                            </Typography>
                            <Link
                                style={{
                                    marginLeft: '18px',
                                    fontWeight: 'bolder',
                                    color: '#76bc21',
                                }}
                            >
                                +93705310309
                            </Link>
                            <Typography
                                mt={3}
                                ml={2}
                                sx={{
                                    fontSize: '20px',
                                    fontFamily: 'fantasy',
                                    fontWeight: 'bold',
                                }}
                            >
                                Address:
                            </Typography>
                            <Link
                                style={{
                                    marginLeft: '18px',
                                    fontWeight: 'bolder',
                                    color: '#76bc21',
                                }}
                            >
                                Ayobi Health Markit
                            </Link>
                            <Link
                                style={{
                                    marginLeft: '18px',
                                    fontWeight: 'bolder',
                                    color: '#76bc21',
                                }}
                            >
                                Shop #4
                            </Link>
                            <Box
                                mt={12}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    fontFamily="cursive"
                                    fontSize="10px"
                                >
                                    Habib Pharma Kandahar Afghanistan
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Contact;
