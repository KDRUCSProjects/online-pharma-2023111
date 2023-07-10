import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

const NavBar = () => {
    const user = '';
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
                                    My Ads
                                </MenuItem>
                                <MenuItem onClick={handleMenuClose}>
                                    <Button>logout</Button>
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
                                            Login
                                        </MenuItem>
                                        <MenuItem onClick={handleMenuClose}>
                                            Register
                                        </MenuItem>
                                    </Menu>
                                </>
                            ) : (
                                <>
                                    <Button variant="contained" color="primary">
                                        Login
                                    </Button>
                                    <pre> OR </pre>
                                    <Button variant="contained" color="success">
                                        Register
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
