import React, { useState, useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import {
    Button,
    AppBar,
    Box,
    Toolbar,
    InputBase,
    IconButton,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';
import PlaceIcon from '@mui/icons-material/Place';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 1),
    },
    marginLeft: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    color: 'black',
    [theme.breakpoints.up('sm')]: {
        width: 'auto',
    },
}));

const SearchInputIcon = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#76bc21',
}));

const StyledSearchInput = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
}));

const SearchBar = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <AppBar position="static" sx={{ backgroundColor: '#76bc21', ml: 0 }}>
            <Container sx={{ paddingRight: 0 }}>
                <Toolbar>
                    <Box display="flex">
                        <Search
                            sx={{
                                background: 'white',
                                borderRadius: '10px',
                            }}
                        >
                            <StyledSearchInput
                                placeholder="Search Products"
                                inputProps={{ 'aria-label': 'search' }}
                                autoComplete="off"
                            />
                            <Button
                                type="submit"
                                variant="none"
                                sx={{
                                    background: 'white',
                                    borderRadius: '10px',
                                    ml: '2px',
                                    ':hover': { backgroundColor: 'white' },
                                }}
                            >
                                <SearchIcon
                                    sx={{
                                        color: '#76bc21',
                                    }}
                                />
                            </Button>
                        </Search>
                    </Box>
                    {!isSmall ? (
                        <Box
                            ml={{ lg: 35, xl: 35, md: 2, sm: 0, xs: 0 }}
                            mt={{ Lg: 0, xl: 3, md: 1.5, sm: 1, xs: 0 }}
                            mr={{ Lg: 0, xl: 0, md: 0, sm: 13, xs: 0 }}
                            mb={{ lg: 2, xl: 2, md: 0, sm: 0, xs: 0 }}
                            sx={{
                                width: {
                                    xl: '40%',
                                    lg: '40%',
                                    md: '30%',
                                    sm: '40%',
                                    xs: '40%',
                                },
                                height: {
                                    xl: '5vh',
                                    lg: '8vh',
                                    md: '5vh',
                                    sm: '5vh',
                                    xs: '5vh',
                                },
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Link to={'/location/'}>
                                <Button
                                    startIcon={
                                        <PlaceIcon sx={{ color: '#76bc21' }} />
                                    }
                                    endIcon={
                                        <ChevronRightIcon
                                            sx={{ color: '#76bc21' }}
                                        />
                                    }
                                    sx={{
                                        borderRadius: '10px',
                                        width: {
                                            xl: '200px',
                                            lg: '200px',
                                            md: '200px',
                                            sm: '150px',
                                            xs: '150px',
                                        },
                                        height: {
                                            lg: '6vh',
                                            xl: '3vh',
                                            md: '3vh',
                                            sm: '3vh',
                                            xs: '0vh',
                                        },
                                        backgroundColor: 'white',
                                        color: 'black',
                                        ':hover': {
                                            backgroundColor: 'white',
                                        },
                                        mt: '8.5px',
                                        ml: '70px',
                                        justifyContent: 'space-between',
                                        fontSize: {
                                            xl: '11px',
                                            lg: '11px',
                                            md: '8px',
                                            sm: '6px',
                                            xl: '11px',
                                        },
                                        marginRight: {
                                            xl: '15px',
                                            lg: '15px',
                                            md: '10px',
                                            sm: '10px',
                                            xl: '0px',
                                        },
                                    }}
                                >
                                    No Address selected
                                </Button>
                            </Link>
                            <Link to={'/prescription/'}>
                                <Button
                                    startIcon={
                                        <HistoryEduIcon
                                            sx={{ color: '#76bc21', ml: 1 }}
                                        />
                                    }
                                    sx={{
                                        borderRadius: '10px',
                                        width: {
                                            xl: '160px',
                                            lg: '160px',
                                            md: '160px',
                                            sm: '140px',
                                            xs: '0px',
                                        },
                                        height: {
                                            lg: '6vh',
                                            xl: '3vh',
                                            md: '3vh',
                                            sm: '3vh',
                                            xs: '0vh',
                                        },
                                        backgroundColor: 'white',
                                        color: 'black',
                                        ':hover': {
                                            backgroundColor: 'white',
                                        },
                                        mt: '8.5px',
                                        justifyContent: 'space-between',
                                        fontSize: {
                                            xl: '14px',
                                            lg: '14px',
                                            md: '12px',
                                            sm: '10px',
                                            xl: '0px',
                                        },
                                    }}
                                >
                                    <Typography
                                        textTransform={'capitalize'}
                                        fontSize={'14px'}
                                        mr={2}
                                    >
                                        Prescription
                                    </Typography>
                                </Button>
                            </Link>
                        </Box>
                    ) : null}

                    <IconButton sx={{ ml: 'auto' }}>
                        <Link
                            to={'/shopping/cart/'}
                            style={{ textDecoration: 'none' }}
                        >
                            <ShoppingCartIcon sx={{ color: 'white', mt: 1 }} />
                        </Link>
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default SearchBar;
