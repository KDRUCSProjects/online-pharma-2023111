import {
    Grid,
    TextField,
    Box,
    Typography,
    Paper,
    Button,
    Link,
} from '@mui/material';
import React from 'react';
import LockOpenIcon from '@mui/icons-material/LockOpen';

const Login = () => {
    return (
        <Grid
            container
            sx={{
                margin: '0px auto',
                mt: 10,
                width: { lg: '40%', xs: '90%', sm: '90%', md: '90%' },
            }}
        >
            <Paper
                fullWidth
                sx={{
                    backgroundColor: 'white',
                    margin: '0px auto',
                    width: { lg: '80%', xs: '90%', md: '90%', sm: '90%' },
                }}
            >
                <Box
                    fullWidth
                    sx={{
                        backgroundColor: 'white',
                        width: {
                            lg: '80%',
                            md: '100%',
                            sm: '100%',
                            xs: '100%',
                        },
                        height: '70vh',
                        margin: '0px auto',
                    }}
                >
                    <Box align="center" marginBottom={0} marginTop={5}>
                        <LockOpenIcon />
                    </Box>
                    <Typography align="center" variant="h5" pt={2}>
                        Login
                    </Typography>
                    <form autoComplete="off">
                        <TextField
                            fullWidth
                            placeholder="username or email"
                            size="small"
                            type="name"
                            sx={{ borderRadius: '10px', mt: 3 }}
                        />
                        <TextField
                            fullWidth
                            placeholder="password"
                            size="small"
                            type="password"
                            sx={{ mt: 3 }}
                        />
                        <Box align="center">
                            <Button
                                variant="outlined"
                                sx={{
                                    ':hover': { backgroundColor: '#76bc21' },
                                    backgroundColor: '#76bc21',
                                    color: 'white',
                                    margin: '0px auto',
                                    mt: 3,
                                    width: '30%',
                                }}
                            >
                                Login
                            </Button>
                        </Box>
                        <Box align="center" marginTop={2}>
                            <Link
                                display="block"
                                mb={2}
                                sx={{ ':hover': { cursor: 'pointer' } }}
                            >
                                Forgot Password?
                            </Link>
                            <Typography display="inline">
                                Don't have an acount?
                            </Typography>
                            <Link sx={{ ':hover': { cursor: 'pointer' } }}>
                                Sign Up
                            </Link>
                        </Box>
                    </form>
                </Box>
            </Paper>
        </Grid>
    );
};
export default Login;
