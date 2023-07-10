import React, { useState, useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import {
    Button,
    useTheme,
    useMediaQuery,
    AppBar,
    Box,
    Toolbar,
    InputBase,
    IconButton,
    Typography,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Container } from '@mui/system';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
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
    const ismedium = useMediaQuery(theme.breakpoints.down('md'));

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
                        <ShoppingCartIcon sx={{ color: 'white' }} />
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default SearchBar;
