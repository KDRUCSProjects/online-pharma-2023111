import React from 'react';
import { Grid, Button, Stack, Box, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const MobileAddres = () => {
    return (
        <Grid container
        >
            <Grid item sm={12} xs={12}>
                <Box
                    sx={{
                        width: '100%',
                    }}
                >
                    <Button
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Box
                            sx={{
                                border: '1px solid #76bc21',
                                borderRadius: '50%',
                                width: '40px',
                            }}
                        >
                            <LocationOnIcon sx={{ mt: '5px' ,color:'#76bc21'}} />
                        </Box>
                        <Typography
                            sx={{color:'black'}}
                        >No Address Selected</Typography>
                        <ChevronRightIcon sx={{color:'#76bc21'}} />
                    </Button>
                </Box>
            </Grid>
        </Grid>
    );
};

export default MobileAddres;
