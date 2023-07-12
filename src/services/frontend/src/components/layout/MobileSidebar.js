import { Grid, Link, Stack, Typography } from '@mui/material';
import React from 'react';

const MobileSidebar = () => {
    return (
        <Stack direction="column" spacing={3} ml={4} mt={10}>
            <Typography>Deals</Typography>
            <Typography>Feadback</Typography>
            <Typography>Stores</Typography>
            <Typography>Address</Typography>
            <Typography>FAQs</Typography>
            <Typography>Blogs</Typography>
            <Typography>Privecy Policy</Typography>
            <Typography>Terms & Condition</Typography>
            <Typography>Return Policy</Typography>
            <Typography>Refund Policy</Typography>
            <Typography>Shapping Policy</Typography>
        </Stack>
    );
};

export default MobileSidebar;
