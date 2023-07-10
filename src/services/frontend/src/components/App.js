import { Box } from '@mui/material';
import React from 'react';
import NavBar from './layout/NavBar';
import SearchBar from './layout/SearchBar';
import { Global, css } from '@emotion/react';
import Category from './category/Category';

const App = () => {
    return (
        <Box>
            <Global
                styles={css`
                    body {
                        margin: 0;
                    }
                `}
            />
            <NavBar />
            <SearchBar />
            <Category />
        </Box>
    );
};

export default App;
