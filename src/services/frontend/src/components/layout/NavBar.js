import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {
    useMediaQuery,
    Box,
    useTheme,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Avatar,
    Container,
} from '@mui/material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SideBarDrawer from './SideBarDrawer';
import { getToken, removeToken } from '../services/LocalStorageService';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo, unsetUserInfo } from '../features/userSlice';
import { unSetUserToken } from '../features/authSlice';
import { useGetLoggedUserQuery } from '../services/userAuthApi';

const NavBar = () => {
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
    const { access_token } = getToken();
    if (access_token) {
        const { data, isSuccess } = useGetLoggedUserQuery(access_token);
        // Store User Data in Redux Store
        useEffect(() => {
            if (data && isSuccess) {
                dispatch(
                    setUserInfo({
                        id: data.id,
                        email: data.email,
                        name: data.name,
                        phone: data.phone_number,
                    })
                );
            }
        }, [data, isSuccess, dispatch]);
    }
    const myData = useSelector((state) => state.user);
    const user = myData.name;
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
    const [menuOpen, setmenuOpen] = useState(false);
    const [menuPosition, setmenuPosition] = useState(null);
    const handleMenuClick = (e) => {
        setmenuPosition(e.currentTarget);
        setmenuOpen(true);
    };
    const handleMenuClose = () => {
        setmenuPosition(null);
        setmenuOpen(false);
    };
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [userMenuPosition, setUserMenuPosition] = useState(null);
    const handleUserMenuClick = (e) => {
        setUserMenuPosition(e.currentTarget);
        setUserMenuOpen(true);
    };
    const handleUserMenuClose = () => {
        setUserMenuPosition(null);
        setUserMenuOpen(false);
    };
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Toolbar>
                    {isSmall ? <SideBarDrawer /> : ''}
                    <Typography
                        sx={{
                            flexGrow: 1,
                            fontSize: { lg: '30px', sm: '10px' },
                            fontWeight: 'bold',
                        }}
                    >
                        <Link
                            to={'/'}
                            style={{
                                textDecoration: 'none',
                                color: 'black',
                            }}
                        >
                            Habib Pharma
                        </Link>
                    </Typography>
                    {user ? (
                        <>
                            <Typography>{myData.name}</Typography>
                            <IconButton
                                variant="contained"
                                color="primary"
                                onClick={handleUserMenuClick}
                            >
                                <Avatar>M</Avatar>
                            </IconButton>
                            <Menu
                                anchorEl={userMenuPosition}
                                open={userMenuOpen}
                                onClose={handleUserMenuClose}
                            >
                                <MenuItem onClick={handleUserMenuClose}>
                                    <Link
                                        to={'/profile/'}
                                        style={{
                                            textDecoration: 'none',
                                            color: 'black',
                                        }}
                                    >
                                        Profile
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleMenuClose}>
                                    <Button onClick={handleLogout}>
                                        logout
                                    </Button>
                                </MenuItem>
                            </Menu>
                        </>
                    ) : (
                        <>
                            {isSmall ? (
                                <>
                                    <IconButton
                                        variant="contained"
                                        color="primary"
                                        onClick={handleMenuClick}
                                    >
                                        <AccountCircleRoundedIcon fontSize="large" />
                                    </IconButton>
                                    <Menu
                                        anchorEl={menuPosition}
                                        open={menuOpen}
                                        onClose={handleMenuClose}
                                    >
                                        <MenuItem onClick={handleMenuClose}>
                                            <Link
                                                to={'/login/'}
                                                style={{
                                                    textDecoration: 'none',
                                                    color: 'black',
                                                }}
                                            >
                                                Login
                                            </Link>
                                        </MenuItem>
                                        <MenuItem onClick={handleMenuClose}>
                                            <Link
                                                to={'/signup/'}
                                                style={{
                                                    textDecoration: 'none',
                                                    color: 'black',
                                                }}
                                            >
                                                Register
                                            </Link>
                                        </MenuItem>
                                    </Menu>
                                </>
                            ) : (
                                <>
                                    <Button variant="contained" color="primary">
                                        <Link
                                            to={'/login/'}
                                            style={{
                                                textDecoration: 'none',
                                                color: 'white',
                                            }}
                                        >
                                            Login
                                        </Link>
                                    </Button>
                                    <pre> OR </pre>
                                    <Button variant="contained" color="success">
                                        <Link
                                            to={'/signup/'}
                                            style={{
                                                textDecoration: 'none',
                                                color: 'white',
                                            }}
                                        >
                                            Register
                                        </Link>
                                    </Button>
                                </>
                            )}
                        </>
                    )}
                </Toolbar>
            </Box>
        </Container>
    );
};

export default NavBar;
