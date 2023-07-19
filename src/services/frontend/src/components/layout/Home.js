import React from 'react';
import Slider from '../slider/Slider';
import Category from '../category/Category';
import { Box } from '@mui/material';
import TopSellingItem from '../top selling item/TopSellingItem';
import FeaturedProducts from '../Featured Products/FeaturedProducts';

const Home = () => {
    return (
        <Box>
            <Slider />
            <Category />
            <TopSellingItem />
            <FeaturedProducts />
        </Box>
    );
};

export default Home;
