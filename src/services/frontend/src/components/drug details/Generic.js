import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const Generic = () => {
    return (
        <Box
            sx={{
                width: '100%',
                height: {
                    lg: '42vh',
                    xl: '42vh',
                    md: '42vh',
                    sm: '25vh',
                    xs: '40vh',
                },
                mt: 2,
                borderLeft: {
                    xl: '1px solid lightgray',
                    lg: '1px solid lightgray',
                    md: '1px solid lightgray',
                    sm: '1px solid lightgray',
                    xl: '0',
                },
            }}
        >
            <Typography variant="h6" fontWeight="bold" ml={2}>
                Generic
            </Typography>
            <Typography mt={1} ml={2}>
                It works by blocking the activity of entamoeba histolytica;
                inhibiting energy production and killing the bacteria and
                parasites .
            </Typography>
        </Box>
    );
};

export default Generic;
