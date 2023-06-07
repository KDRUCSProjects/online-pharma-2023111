import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {
    Button,
    Container,
    Grid,
    TextField,
    Typography,
    rgbToHex,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import MenuIcon from '@mui/icons-material/Menu';
const NavBar = () => {
    return (
        <Box position="static" sx={{ flexGrow: 1, width: '100%' }}>
            <AppBar sx={{ backgroundColor: 'white' }}>
                <Container>
                    <Toolbar bgcolor={'white'}>
                        <MenuIcon
                            sx={{
                                color: '#76bc21',
                                display: {
                                    lg: 'none',
                                    md: 'none',
                                    xs: 'block',
                                    sm: 'block',
                                },
                                fontSize: '35px',
                            }}
                        />
                        <Box
                            sx={{
                                padding: 2,
                                flex: '3',
                                flexGrow: '1',
                                display: {
                                    lg: 'block',
                                    sm: 'block',
                                    md: 'block',
                                    xs: 'none',
                                },
                            }}
                        >
                            <Typography variant="h3" color={'#76bc21'}>
                                Habib Pharma
                            </Typography>
                        </Box>
                        <Box
                            bgcolor={'white'}
                            sx={{
                                flex: '2',
                                flexGrow: '2',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}
                        >
                            <TextField
                                size="small"
                                type="search"
                                placeholder="Search"
                                sx={{ width: { lg: '40%', xs: '70%' } }}
                                InputProps={{
                                        style: {
                                          borderRadius: "10px",
                                        },
                                    startAdornment: (
                                        <InputAdornment position="end">
                                            <SearchIcon
                                                sx={{ color: '#76bc21' }}
                                            />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <Grid
                                sx={{
                                    display: {
                                        lg: 'block',
                                        sm: 'none',
                                        md: 'none',
                                        xs: 'none',
                                    },
                                    ml: '5px',
                                }}
                            >
                                <Button
                                    variant="outlined"
                                    size="medium"
                                    startIcon={
                                        <LocationOnIcon
                                            sx={{ color: '#76bc21' }}
                                        />
                                    }
                                    endIcon={
                                        <ChevronRightIcon
                                            sx={{ color: '#76bc21' }}
                                        />
                                    }
                                    sx={{
                                        textTransform: 'capitalize',
                                        borderRadius: '10px',
                                        fontSize: '10px',
                                        color: 'black',
                                        backgroundColor: 'white',
                                        ':hover': { backgroundColor: 'white' },
                                    }}
                                >
                                    No Address Selected
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="medium"
                                    startIcon={
                                        <RequestPageIcon
                                            sx={{ color: 'white' }}
                                        />
                                    }
                                    sx={{
                                        textTransform: 'capitalize',
                                        borderRadius: '10px',
                                        color: 'white',
                                        backgroundColor: '#76bc21',
                                        ':hover': {
                                            backgroundColor: '#76bc21',
                                        },
                                        ml: '5px',
                                    }}
                                >
                                    Instant Order
                                </Button>
                                <Button
                                    sx={{
                                        borderRadius: '10px',
                                        ':hover': {
                                            cursor: 'default',
                                            backgroundColor: '#76bc21',
                                        },
                                        backgroundColor: '#76bc21',
                                        width: '90px',
                                        ml: '5px',
                                    }}
                                    size="large"
                                    startIcon={
                                        <PersonIcon
                                            sx={{
                                                ':hover': { cursor: 'pointer' },
                                                color: 'white',
                                            }}
                                        />
                                    }
                                    endIcon={
                                        <ShoppingCartIcon
                                            sx={{
                                                ':hover': { cursor: 'pointer' },
                                                color: 'white',
                                            }}
                                        />
                                    }
                                ></Button>
                            </Grid>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};

export default NavBar;
