import {
    Box,
    Button,
    Container,
    FormControl,
    Grid,
    MenuItem,
    Select,
    TextField,
    Typography,
} from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import React from 'react';

const Profile = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid
                    item
                    xl={12}
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                >
                    <Typography
                        color="#76BC21"
                        fontWeight="bold"
                        fontSize="40px"
                    >
                        Samiullah
                    </Typography>
                    <Typography
                        color="#76BC21"
                        fontWeight="bold"
                        fontSize="30px"
                    >
                        +93708102047
                    </Typography>
                </Grid>
                <Grid
                    item
                    sx={{ display: 'flex' }}
                    xl={12}
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    mt={4}
                >
                    <Box mr={2}>
                        <Box border="1px solid lightGrey" borderRadius="20%">
                            <HistoryIcon
                                sx={{ fontSize: '80px', color: '#76BC21' }}
                            />
                        </Box>
                        <Typography>Order History</Typography>
                    </Box>
                    <Box mr={2} sx={{ alignItems: 'center' }}>
                        <Box border="1px solid lightGrey" borderRadius="20%">
                            <LocationOnIcon
                                sx={{ fontSize: '80px', color: '#76BC21' }}
                            />
                        </Box>
                        <Typography sx={{ width: '30px' }} mt={1}>
                            Delivery Address
                        </Typography>
                    </Box>
                    <Box mr={2}>
                        <Box border="1px solid lightGrey" borderRadius="20%">
                            <AddShoppingCartIcon
                                sx={{ fontSize: '80px', color: '#76BC21' }}
                            />
                        </Box>
                        <Typography>Cart</Typography>
                    </Box>
                </Grid>
                <Grid
                    item
                    xl={12}
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    mt={4}
                >
                    <Grid container>
                        <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
                            <Typography>Email</Typography>
                            <TextField placeholder="Email" sx={{width: '97%'}}/>
                        </Grid>
                        <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
                            <Typography>BirthDay</Typography>
                            <TextField sx={{width: '97%'}}/>
                        </Grid>
                        <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
                            <Typography>Gender</Typography>
                            <FormControl sx={{ minWidth: '97%' }}>
                                <Select >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem>Male</MenuItem>
                                    <MenuItem>Female</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    xl={3}
                    lg={3}
                    md={12}
                    sm={12}
                    xs={12}
                    mt={4}
                >
                    <Button sx={{xs:{marginLeft: '10px'} ,color: 'white', background: '#76BC21', width:'70%', height: '50px', borderRadius: '10px'}}>Logout</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Profile;
