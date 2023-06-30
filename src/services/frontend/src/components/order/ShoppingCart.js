import {
    Box,
    Breadcrumbs,
    Container,
    Grid,
    Typography,
    Button,
    TextField,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';

const ShoppingCart = () => {
    const data = [
        {
            name: 'medicine',
            id: 1,
        },
        {
            name: 'medicine',
            id: 2,
        },
        {
            name: 'medicine',
            id: 3,
        },
        {
            name: 'medicine',
            id: 4,
        },
    ];
    return (
        <Container>
            <Grid container mt={3}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
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
                            ShoppingCart
                        </Typography>
                    </Breadcrumbs>
                </Grid>
                <Grid item xl={7} lg={7} md={6} sm={12} xs={12}>
                    <Box
                        sx={{
                            height: {
                                xl: '100px',
                                lg: '100px',
                                md: '90px',
                                sm: '80px',
                                xs: '80px',
                            },
                            width: '100%',
                            border: '1px solid gray',
                            borderRadius: 2,
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Box ml={3}>
                            <Typography
                                mt={2}
                                sx={{
                                    fontSize: {
                                        xl: '20px',
                                        lg: '20px',
                                        md: '15px',
                                        sm: '10xp',
                                        xs: '10px',
                                    },
                                    fontWeight: 'bold',
                                }}
                            >
                                Delivery Address
                            </Typography>
                            <Typography
                                mt={2}
                                sx={{
                                    fontSize: {
                                        xl: '14px',
                                        lg: '14px',
                                        md: '12px',
                                        sm: '10px',
                                        xs: '10px',
                                    },
                                    color: '#76bc21',
                                    fontWeight: 'bold',
                                }}
                            >
                                jp5s+20 Kandahar, Afghanistan
                            </Typography>
                        </Box>
                        <Box mt={4} mr={3.3}>
                            <Button
                                variant="text"
                                sx={{
                                    backgroundColor: '#76bc21',
                                    height: {
                                        xl: '40px',
                                        lg: '40px',
                                        md: '32px',
                                        sm: '30px',
                                        xs: '30px',
                                    },
                                    fontSize: {
                                        xl: '20px',
                                        lg: '20px',
                                        md: '15px',
                                        sm: '7px',
                                        xs: '7px',
                                    },
                                    borderRadius: 2,
                                    color: 'white',
                                    ':hover': { backgroundColor: '#76bc21' },
                                }}
                            >
                                CHANGE ADDRESS
                            </Button>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: '100%',
                            height: '120px',
                            border: '1px solid gray',
                            mt: 4,
                            borderRadius: 2,
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Typography
                            mt={2}
                            ml={3}
                            sx={{
                                fontSize: '17px',
                                fontWeight: 'bold',
                            }}
                        >
                            Delivery Instruction
                        </Typography>
                        <TextField
                            placeholder="Write Here"
                            sx={{
                                width: '90%',
                                borderRadius: 2,
                                ml: 3,
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexDirection: 'column',
                            mt: 3,
                            ml: 2,
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: '20px',
                                fontWeight: 'bold',
                            }}
                        >
                            Quick Delivery Guaranteed!
                        </Typography>
                        <Typography
                            mt={2}
                            sx={{
                                fontSize: '14px',
                                color: '#76bc21',
                                fontWeight: 'bold',
                            }}
                        >
                            Your order will be delivered within 1 hour
                        </Typography>
                    </Box>
                </Grid>
                <Grid
                    item
                    xl={5}
                    lg={5}
                    md={6}
                    sm={12}
                    xs={12}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'end',
                    }}
                >
                    <Box
                        sx={{
                            border: {
                                lg: '1px solid gray',
                                xs: '1px solid white',
                            },
                            width: {
                                xl: '60%',
                                lg: '60%',
                                md: '70%',
                                sm: '100%',
                                xs: '100%',
                            },
                            minHeight: '400px',
                            borderRadius: 2,
                        }}
                    >
                        <Box
                            sx={{
                                width: '100%',
                                minHeight: '70%',
                                display: 'flex',
                                flexDirection: 'column',
                                mt: 1,
                            }}
                        >
                            {data.map((item) => (
                                <Cart key={item.id} item={item} />
                            ))}
                        </Box>
                        <Box m={1}>
                            <Typography
                                sx={{
                                    fontSize: '20px',
                                }}
                            >
                                Bill Details
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    flexDirection: 'row',
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: '12px',
                                    }}
                                >
                                    Delivery Fee
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '12px',
                                    }}
                                >
                                    Rs.25.00
                                </Typography>
                            </Box>
                            <Typography sx={{ fontSize: '8px' }}>
                                _____________________________________________________________
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    flexDirection: 'row',
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: '18px',
                                    }}
                                >
                                    Order Total
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '12px',
                                    }}
                                >
                                    Rs.325.00
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: {
                                xl: '60%',
                                lg: '60%',
                                md: '70%',
                                sm: '100%',
                                xs: '100%',
                            },
                        }}
                    >
                        <Button
                            variant="text"
                            sx={{
                                backgroundColor: '#76bc21',
                                width: '100%',
                                mt: { xl: 3, lg: 3, md: 2, sm: 2, xs: 2 },
                                borderRadius: 2,
                                color: 'white',
                                ':hover': { backgroundColor: '#76bc21' },
                            }}
                        >
                            CHECKOUT
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ShoppingCart;
