import { Grid, TextField, Box, Typography, Paper, Button } from '@mui/material';
import React, { useState } from 'react';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Link, useNavigate } from 'react-router-dom';
import { getToken, storeToken } from '../services/LocalStorageService';
import { setUserToken } from '../features/authSlice';
import { useLoginUserMutation } from '../services/userAuthApi';
import { useDispatch } from 'react-redux';

const Login = () => {
    const [server_error, setServerError] = useState({});
    const navigate = useNavigate();
    const [loginUser, { isLoading }] = useLoginUserMutation();
    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            email: data.get('email'),
            password: data.get('password'),
        };
        const res = await loginUser(actualData);

        if (res.error) {
            setServerError(res.error.data.error);
        }
        if (res.data) {
            storeToken(res.data.token);
            let { access_token } = getToken();
            dispatch(setUserToken({ access_token: access_token }));
            navigate('/');
        }
    };
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
                elevation={0}
                fullWidth
                sx={{
                    backgroundColor: 'white',
                    margin: '0px auto',
                    width: { lg: '80%', xs: '90%', md: '90%', sm: '90%' },
                }}
            >
                <Box
                    fullWidth
                    component="form"
                    noValidate
                    id="login-form"
                    onSubmit={handleSubmit}
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
                    <TextField
                        fullWidth
                        placeholder="email@example.com"
                        size="small"
                        type="email"
                        name="email"
                        label="Email Address"
                        sx={{ borderRadius: '10px', mt: 3 }}
                    />
                    <TextField
                        fullWidth
                        placeholder="password"
                        size="small"
                        type="password"
                        name="password"
                        label="Password"
                        sx={{ mt: 3 }}
                    />
                    <Box align="center">
                        <Button
                            variant="outlined"
                            type="submit"
                            sx={{
                                ':hover': { backgroundColor: '#76bc21' },
                                backgroundColor: '#76bc21',
                                color: 'white',
                                margin: '0px auto',
                                mt: 3,
                                width: '30%',
                                borderRadius: '15px',
                            }}
                        >
                            Login
                        </Button>
                    </Box>
                    <Box align="center" marginTop={2}>
                        <Link
                            to={'/send/password/reset/email/'}
                            style={{ display: 'block', marginBottom: '20px'}}
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
                </Box>
            </Paper>
        </Grid>
    );
};
export default Login;
