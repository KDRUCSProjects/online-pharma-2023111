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
import { removeToken } from '../services/LocalStorageService';

const Profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(
            unsetUserInfo({ id: '', email: '', name: '', phone_number: '' })
        );
        dispatch(unSetUserToken({ access_token: null }));
        removeToken();
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
            <Grid container spacing={2}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Typography
                        color="#76BC21"
                        fontWeight="bold"
                        fontSize="40px"
                    >
                        {myData.name}
                    </Typography>
                    <Typography
                        color="#76BC21"
                        fontWeight="bold"
                        fontSize="30px"
                    >
                        {myData.phone}
                    </Typography>
                    <Typography
                        color="#76BC21"
                        fontWeight="bold"
                        fontSize="30px"
                    >
                        {myData.email}
                    </Typography>
                </Grid>
                <Grid
                    item
                    sx={{ display: 'flex' }}
                    xl={12}
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    mt={4}
                >
                    <Box mr={2}>
                        <Box border="1px solid lightGrey" borderRadius="20%">
                            <HistoryIcon
                                sx={{ fontSize: '80px', color: '#76BC21' }}
                            />
                        </Box>
                        <Typography>Order History</Typography>
                    </Box>
                    <Box mr={2} sx={{ alignItems: 'center' }}>
                        <Box border="1px solid lightGrey" borderRadius="20%">
                            <LocationOnIcon
                                sx={{ fontSize: '80px', color: '#76BC21' }}
                            />
                        </Box>
                        <Typography sx={{ width: '30px' }} mt={1}>
                            Delivery Address
                        </Typography>
                    </Box>
                    <Box mr={2}>
                        <Box border="1px solid lightGrey" borderRadius="20%">
                            <AddShoppingCartIcon
                                sx={{ fontSize: '80px', color: '#76BC21' }}
                            />
                        </Box>
                        <Typography>Cart</Typography>
                    </Box>
                </Grid>
                <Grid item xl={3} lg={3} md={12} sm={12} xs={12} mt={4}>
                    <Button
                        sx={{
                            xs: { marginLeft: '10px' },
                            color: 'white',
                            background: '#76BC21',
                            width: '70%',
                            height: '50px',
                            borderRadius: '10px',
                        }}
                        onClick={handleLogout}
                    >
                        Logout
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Profile;
