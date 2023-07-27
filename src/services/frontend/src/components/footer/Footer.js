import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Grid
            color={'white'}
            container
            sx={{
                padding: '30px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: {
                    lg: 'space-between',
                    xl: 'space-between',
                    md: 'space-between',
                    sm: 'flex-start',
                    xs: 'none',
                },
                backgroundColor: '#76bc21',
                width: '100%',
                mt: 2,
            }}
        >
            <Grid color={'white'}>
                <Typography variant="h4">Habib Pharma</Typography>
                <Typography
                    variant="h6"
                    align="center"
                    mt={5}
                    mr={2}
                    fontSize={'20px'}
                >
                    Follow Us
                </Typography>
                <Box align="center">
                    <FacebookIcon sx={{ color: 'white', mr: 2 }} />
                    <TwitterIcon sx={{ color: 'white', mr: 2 }} />
                    <InstagramIcon sx={{ color: 'white', mr: 2 }} />
                </Box>
            </Grid>
            <Grid ml={{ lg: 0, xl: 0, md: 0, sm: 6 }}>
                <Typography variant="h6" fontSize={'20px'} fontWeight={'bold'}>
                    Categories
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        color: 'white',
                        height: '280px',
                    }}
                    align="left"
                >
                    <Link
                        style={{
                            marginTop: 18,
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        Medicine
                    </Link>
                    <Link
                        style={{
                            marginTop: 18,
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        A to Z Medicine
                    </Link>
                    <Link
                        style={{
                            marginTop: 18,
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        Baby & Mother Care
                    </Link>
                    <Link
                        style={{
                            marginTop: 18,
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        Food & Beverage{' '}
                    </Link>
                    <Link
                        style={{
                            marginTop: 18,
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        Device & Appliances
                    </Link>
                    <Link
                        style={{
                            marginTop: 18,
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        Personal Care
                    </Link>
                    <Link
                        style={{
                            marginTop: 18,
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        OTC & Health Need
                    </Link>
                </Box>
            </Grid>
            <Grid ml={{ lg: 0, xl: 0, md: 0, sm: 4 }}>
                <Typography variant="h6" fontSize={'20px'} fontWeight={'bold'}>
                    Navigate
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        color: 'white',
                        height: '280px',
                    }}
                    align="left"
                >
                    <Link
                        style={{
                            marginTop: 18,
                            color: 'white',
                            textDecoration: 'none',
                        }}
                        to={'/feedback/'}
                    >
                        Feedback
                    </Link>
                    <Link
                        style={{
                            marginTop: 18,
                            color: 'white',
                            textDecoration: 'none',
                        }}
                        to={'/prescription/'}
                    >
                        Prescription
                    </Link>
                    <Link
                        to={'orders/'}
                        style={{
                            marginTop: 18,
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        My Order
                    </Link>
                    <Link
                        style={{
                            marginTop: 18,
                            color: 'white',
                            textDecoration: 'none',
                        }}
                        to={'/profile/'}
                    >
                        User Profile
                    </Link>
                </Box>
            </Grid>
            <Grid ml={{ lg: 0, xl: 0, md: 0, sm: 4 }}>
                <Typography variant="h6" fontSize={'20px'} fontWeight={'bold'}>
                    Support
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        color: 'white',
                        height: '280px',
                    }}
                    align="left"
                >
                    <Link
                        style={{
                            marginTop: 18,
                            color: 'white',
                            textDecoration: 'none',
                        }}
                        to={'/faq/'}
                    >
                        FAQs
                    </Link>
                    <Link
                        style={{
                            marginTop: 18,
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        Term Of Service
                    </Link>
                    <Link
                        style={{
                            marginTop: 18,
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        Shipping Policy{' '}
                    </Link>
                    <Link
                        style={{
                            marginTop: 18,
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        Return Policy{' '}
                    </Link>
                    <Link
                        style={{
                            marginTop: 18,
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        Refund Policy
                    </Link>
                    <Link
                        style={{
                            marginTop: 18,
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        Privacy Policy
                    </Link>
                </Box>
            </Grid>
            <Grid ml={{ lg: 0, xl: 0, md: 0, sm: 4 }}>
                <Typography variant="h6" fontSize={'20px'} fontWeight={'bold'}>
                    Contact Us
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        color: 'white',
                        height: '280px',
                    }}
                    align="left"
                >
                    <Link
                        style={{
                            marginTop: 18,
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        Habib Pharma
                    </Link>
                    <Typography sx={{ mt: 1, height: '4px', fontSize: '16px' }}>
                        Email
                    </Typography>
                    <Link
                        style={{
                            marginTop: 18,
                            color: 'white',
                        }}
                    >
                        samiullah.arian@icloud.com
                    </Link>
                    <Typography sx={{ mt: 1, height: '4px', fontSize: '16px' }}>
                        Phone
                    </Typography>
                    <Link
                        style={{
                            marginTop: 18,
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        (+93705310309)
                    </Link>
                    <Link
                        style={{
                            marginTop: 18,
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        Ayobi Health Markit
                    </Link>
                    <Link
                        style={{
                            marginTop: 18,
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        Shop #4
                    </Link>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Footer;
