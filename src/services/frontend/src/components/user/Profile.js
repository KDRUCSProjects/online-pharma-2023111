import {
    Box,
    Breadcrumbs,
    Button,
    Container,
    Grid,
    Typography,
} from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { unsetUserInfo } from '../features/userSlice';
import { unSetUserToken } from '../features/authSlice';
import { removeLocation, removeToken } from '../services/LocalStorageService';
import { useCartContext } from '../features/cart context/cart_context';

const Profile = () => {
    const { clearCart } = useCartContext();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(
            unsetUserInfo({
                id: '',
                email: '',
                name: '',
                phone_number: '',
                admin: '',
            })
        );
        dispatch(unSetUserToken({ access_token: null }));
        removeToken();
        removeLocation();
        clearCart();
        navigate('/login/');
    };

    // Getting User Data from Redux Store
    const myData = useSelector((state) => state.user);
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
                    Profile
                </Typography>
            </Breadcrumbs>
            <Typography
                variant="h6"
                color={'#76bc21'}
                mt={1}
                pl={1}
                mb={2}
                sx={{ borderLeft: '3px solid #76bc21' }}
            >
                Profile
            </Typography>
            <Grid container spacing={2} mt={3}>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                    <Box
                        sx={{
                            width: '100%',
                            height: '70vh',
                        }}
                    >
                        <Box
                            ml={4}
                            sx={{
                                borderBottom: '1px solid gray',
                            }}
                        >
                            <Typography
                                color="#76bc21"
                                fontWeight="bold"
                                fontSize="30px"
                            >
                                Name: {myData.name}
                            </Typography>
                            <Typography
                                color="#76bc21"
                                fontWeight="bold"
                                fontSize="25px"
                            >
                                Phone: {myData.phone}
                            </Typography>
                            <Typography
                                color="#76bc21"
                                fontWeight="bold"
                                fontSize={{
                                    xl: '25px',
                                    lg: '25px',
                                    md: '20px',
                                    sm: '20px',
                                    xs: '20px',
                                }}
                            >
                                Email: {myData.email}
                            </Typography>
                        </Box>
                        <Box
                            ml={3}
                            mt={2}
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                            }}
                        >
                            <Link
                                to={'/orders/'}
                                style={{
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    color: 'black',
                                }}
                            >
                                <Box mr={2}>
                                    <Box
                                        border="1px solid lightGrey"
                                        borderRadius="20%"
                                    >
                                        <HistoryIcon
                                            sx={{
                                                fontSize: '80px',
                                                color: '#76BC21',
                                            }}
                                        />
                                    </Box>
                                    <Typography>Order History</Typography>
                                </Box>
                            </Link>
                            <Link
                                style={{
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    color: 'black',
                                }}
                            >
                                <Box mr={2} sx={{ alignItems: 'center' }}>
                                    <Box
                                        border="1px solid lightGrey"
                                        borderRadius="20%"
                                    >
                                        <LocationOnIcon
                                            sx={{
                                                fontSize: '80px',
                                                color: '#76BC21',
                                            }}
                                        />
                                    </Box>
                                    <Typography sx={{ width: '30px' }} mt={1}>
                                        Delivery Address
                                    </Typography>
                                </Box>
                            </Link>
                            <Link
                                to={'/shopping/cart/'}
                                style={{
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    color: 'black',
                                }}
                            >
                                <Box mr={2}>
                                    <Box
                                        border="1px solid lightGrey"
                                        borderRadius="20%"
                                    >
                                        <AddShoppingCartIcon
                                            sx={{
                                                fontSize: '80px',
                                                color: '#76BC21',
                                            }}
                                        />
                                    </Box>
                                    <Typography>Cart</Typography>
                                </Box>
                            </Link>
                        </Box>
                        <Box mt={3} ml={3}>
                            <Button
                                sx={{
                                    xs: { marginLeft: '10px' },
                                    color: 'white',
                                    background: '#76BC21',
                                    width: {
                                        xl: '40%',
                                        lg: '40%',
                                        md: '30%',
                                        sm: '30%',
                                        xs: '100%',
                                    },
                                    height: '50px',
                                    borderRadius: '10px',
                                    ':hover': { backgroundColor: '#76bc21' },
                                }}
                                onClick={handleLogout}
                            >
                                Logout
                            </Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid
                    item
                    xl={6}
                    lg={6}
                    md={6}
                    sm={6}
                    xs={12}
                    sx={{
                        display: {
                            xl: 'block',
                            lg: 'block',
                            md: 'block',
                            sm: 'block',
                            xs: 'none',
                        },
                    }}
                >
                    <Box
                        ml={3}
                        component="img"
                        alt="Profile"
                        src="http://127.0.0.1:8000/frontend/static/images/slider/slide4.webp"
                        sx={{
                            width: '70%',
                            height: {
                                xl: '50vh',
                                lg: '50vh',
                                md: '30vh',
                                sm: '30vh',
                                xs: '0px',
                            },
                            border: '1px solid lightgray',
                        }}
                    ></Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Profile;
