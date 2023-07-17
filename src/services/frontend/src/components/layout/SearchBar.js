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
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 1),
    },
    marginLeft: 0,
    width: '100%',
    color: 'black',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
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
    color: '#bb5a77',
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
    return (
        <AppBar position="static" sx={{ backgroundColor: '#76bc21', ml: 0 }}>
            <Container sx={{ paddingRight: 0 }}>
                <Toolbar>
                    <Box display="flex">
                        <Search sx={{ background: 'lightGrey' }}>
                            <SearchInputIcon>
                                <SearchIcon />
                            </SearchInputIcon>
                            <StyledSearchInput
                                placeholder="Search Products"
                                inputProps={{ 'aria-label': 'search' }}
                                autoComplete="off"
                            />
                        </Search>
                        <Button type="submit" variant="contained">
                            <SearchIcon />
                        </Button>
                    </Box>

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
