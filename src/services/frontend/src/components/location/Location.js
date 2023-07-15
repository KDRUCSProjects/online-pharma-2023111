import {
    Box,
    Button,
    Container,
    Grid,
    IconButton,
    InputAdornment,
    TextField,
    Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import React from 'react';
const Location = () => {
    const ButtonStyle = {
        background: '#76bc21',
        color: 'white',
        textTransform: 'capitalize',
        borderRadius: '10px',
    };
    const location = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '300px',
    };
    return (
        <Container>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Grid
                    container
                    sx={{ width: { lg: '70%', xl: '70%' } }}
                    spacing={5}
                >
                    <Grid
                        item
                        xl={6}
                        lg={6}
                        sm={12}
                        xs={12}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Typography variant="h5">Find Your Address</Typography>
                        <TextField
                            sx={{ mt: 2 }}
                            type="search"
                            size="small"
                            placeholder="Search Here"
                            InputProps={{
                                style: {
                                    borderRadius: '10px',
                                },
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Button>
                                            <SearchIcon
                                                sx={{ color: '#76bc21' }}
                                            />
                                        </Button>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Box style={location}>
                            <IconButton
                                sx={{ ':hover': { background: 'white' } }}
                            >
                                <MyLocationIcon
                                    sx={{
                                        fontSize: '170px',
                                        background: '#76bc21',
                                        color: 'white',
                                        borderRadius: '50%',
                                    }}
                                />
                            </IconButton>
                            <Typography pt={2}>
                                Click here for your current location
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xl={6}
                        lg={6}
                        md={12}
                        sm={12}
                        xs={12}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Typography variant="h5">Enter address</Typography>
                        <TextField
                            sx={{ mt: 2 }}
                            size="small"
                            placeholder="Floor, House, Office No "
                            InputProps={{
                                style: {
                                    borderRadius: '10px',
                                },
                            }}
                        />
                        <Button
                            fullWidth
                            style={ButtonStyle}
                            size="large"
                            sx={{ mt: 2 }}
                        >
                            Save Address
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Location;
