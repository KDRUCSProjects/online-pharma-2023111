import { Box, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

const Mobilenav = () => {
    return (
        <Grid container>
            <Grid item sm={12} xs={12}>
                <Box sx={{
                    width:'100%',
                    display:'flex',
                    justifyContent:'space-between'
                    
                }}>
                    <MenuIcon 
                        sx={{color:'#76bc21'}}
                    />
                     <TextField
                                size="small"
                                type="search"
                                placeholder="Search"
                                sx={{ width: { lg: '40%', xs: '60%' } }}
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
                </Box>
            </Grid>
        </Grid>
    );
};

export default Mobilenav;
