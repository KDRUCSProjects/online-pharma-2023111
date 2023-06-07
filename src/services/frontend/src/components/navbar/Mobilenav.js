import {
    Box,
    Grid,
    InputAdornment,
    Menu,
    MenuItem,
    Modal,
    Paper,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import MobileSidebar from '../sidebar/MobileSidebar';

const Mobilenav = () => {
    const [open, setOpen] = useState(false);
    return (
        <Grid container>
            <Grid item sm={12} xs={12}>
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <MenuIcon
                        sx={{ color: '#76bc21' }}
                        onClick={() => {
                            setOpen(true);
                        }}
                    />
                    <TextField
                        size="small"
                        type="search"
                        placeholder="Search"
                        sx={{ width: { lg: '40%', xs: '60%' } }}
                        InputProps={{
                            style: {
                                borderRadius: '10px',
                            },
                            startAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon sx={{ color: '#76bc21' }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
                <Modal
                    open={open}
                    onClose={() => {
                        setOpen(false);
                    }}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <Paper
                        sx={{
                            border: 0,
                            width: '68%',
                            height: '52%',
                            mt: 5,
                            overflowX: 'hidden',
                            overflowY: 'scroll',
                            bgcolor: 'white',
                            borderTopRightRadius: '40px',
                            borderBottomRightRadius: '40px',
                        }}
                    >
                        <Stack
                            sx={{
                                position: 'fixed',
                                bgcolor: '#76bc21',
                                margin: 0,
                                height: '80px',
                                width: '68%',
                                borderTopRightRadius: '40px',
                                borderBottomRightRadius: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'white',
                                fontSize: '30px',
                                fontWeight: 'bold',
                            }}
                        >
                            Habib Pharma
                        </Stack>

                        <Grid>
                            <MobileSidebar />
                        </Grid>
                    </Paper>
                </Modal>
            </Grid>
        </Grid>
    );
};

export default Mobilenav;
