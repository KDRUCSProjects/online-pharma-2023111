import {
    Grid,
    TextField,
    Box,
    Typography,
    Paper,
    Button,
    FormGroup,
    InputAdornment,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import React, { useState } from 'react';
import { addObject } from '../Api/Api';
import {
    userNameValidator,
    firstNameValidator,
    emailValidator,
    passwordValidator,
} from '../Validators/Validators';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { v4 as uuidv4 } from 'uuid';

const SignUp = () => {
    const navigate = useNavigate();
    let form_errors = [];
    const [userNameText, setUserNameText] = useState();
    const [firstNameText, setFirstNameText] = useState();
    const [emailText, setEmailText] = useState();
    const [passwordText, setPasswordText] = useState();
    const [confirmPasswordText, setConfirmPasswordText] = useState();
    const [password, setPassword] = useState();
    const [userNameError, setUserNameError] = useState();
    const [firstNameError, setFirstNameError] = useState();
    const [emailError, setEmailError] = useState();
    const [passwordError, setPasswordError] = useState();
    const [confirmPasswordError, setConfirmPasswordError] = useState();
    const [emptyFormMessage, setEmptyFormMessage] = useState();
    const [register, setRegister] = useState([]);

    const handleChange = (e) => {
        setRegister({
            ...register,
            [e.target.name]: e.target.value,
        });

        if (e.target.name == 'username') {
            setUserNameError(true);
            let flag = false;
            flag = userNameValidator(e.target.value);
            if (flag == true) {
                setUserNameError(false);
                setUserNameText('');
            } else {
                setUserNameText(userNameValidator(e.target.value));
            }
        } else if (e.target.name == 'first_name') {
            setFirstNameError(true);
            let flag = false;
            flag = firstNameValidator(e.target.value);
            if (flag == true) {
                setFirstNameError(false);
                setFirstNameText('');
            } else {
                setFirstNameText(firstNameValidator(e.target.value));
            }
        } else if (e.target.name == 'last_name') {
            setLastNameError(true);
            let flag = false;
            flag = lastNameValidator(e.target.value);
            if (flag == true) {
                setLastNameError(false);
                setLastNameText('');
            } else {
                setLastNameText(lastNameValidator(e.target.value));
            }
        } else if (e.target.name == 'email') {
            setEmailError(true);
            let flag = false;
            flag = emailValidator(e.target.value);
            if (flag == true) {
                setEmailError(false);
                setEmailText('');
            } else {
                setEmailText(emailValidator(e.target.value));
            }
        } else if (e.target.name == 'password') {
            setPasswordError(true);
            let flag = false;
            flag = passwordValidator(e.target.value);
            if (flag == true) {
                setPasswordError(false);
                setPasswordText('');
                setPassword(e.target.value);
            } else {
                setPasswordText(passwordValidator(e.target.value));
            }
        }
        if (e.target.name == 'confirm_password') {
            setConfirmPasswordError(true);
            if (password == e.target.value) {
                setConfirmPasswordError(false);
                setConfirmPasswordText('');
            } else {
                setConfirmPasswordText('Password can not match');
            }
        }
    };
    const addRegisterMutation = useMutation((data) => addObject('users', data));

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            userNameError == false &&
            firstNameError == false &&
            emailError == false &&
            passwordError == false
        ) {
            addRegisterMutation.mutate(register);
        } else {
            setEmptyFormMessage('Please fill all fields');
        }
    };

    if (addRegisterMutation.isError) {
        let response_errors = addRegisterMutation.error.response.data;
        for (let key in response_errors) {
            form_errors.push(response_errors[key]);
        }
    }
    if (addRegisterMutation.isSuccess) {
        navigate('/login/'); // redirecting user to login page
    }

    return (
        <Grid
            container
            sx={{
                margin: '0px auto',
                mt: 10,
                width: { lg: '50%', xs: '90%', sm: '90%', md: '90%' },
            }}
        >
            <Paper
                fullWidth
                sx={{
                    margin: '0px auto',
                    width: { lg: '100%', xs: '90%', md: '90%', sm: '90%' },
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
                    <Typography align="center" variant="h4" pt={2}>
                        SignUp
                    </Typography>
                    <List component="nav">
                        {form_errors.map((response_error) => (
                            <ListItem key={uuidv4()} sx={{ color: 'red' }}>
                                <ListItemIcon>
                                    <CircleIcon sx={{ color: 'red' }} />
                                </ListItemIcon>
                                <ListItemText primary={response_error} />
                            </ListItem>
                        ))}
                    </List>
                    <form action="#" onSubmit={handleSubmit} noValidate>
                        <FormGroup>
                            <TextField
                                fullWidth
                                placeholder="Username"
                                size="small"
                                type="name"
                                sx={{ borderRadius: '10px', mt: 3 }}
                                name="username"
                                onChange={handleChange}
                                error={userNameError}
                                helperText={userNameText}
                                autoFocus
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonOutlinedIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                fullWidth
                                placeholder="Name"
                                size="small"
                                type="name"
                                name="first_name"
                                sx={{ borderRadius: '10px', mt: 3 }}
                                onChange={handleChange}
                                error={firstNameError}
                                helperText={firstNameText}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonOutlinedIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                fullWidth
                                placeholder="Email Address"
                                size="small"
                                type="email"
                                name="email"
                                sx={{ borderRadius: '10px', mt: 3 }}
                                onChange={handleChange}
                                error={emailError}
                                helperText={emailText}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <MarkunreadOutlinedIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                fullWidth
                                placeholder="Password"
                                size="small"
                                type="password"
                                name="password"
                                sx={{ borderRadius: '10px', mt: 3 }}
                                onChange={handleChange}
                                helperText={passwordText}
                                error={passwordError}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockOutlinedIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                fullWidth
                                placeholder="Confirm Password"
                                size="small"
                                type="password"
                                name="confirm_password"
                                sx={{ borderRadius: '10px', mt: 3 }}
                                onChange={handleChange}
                                error={confirmPasswordError}
                                helperText={confirmPasswordText}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockOutlinedIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <Box align="center">
                                <Button
                                    variant="outlined"
                                    type='submit'
                                    sx={{
                                        ':hover': {
                                            backgroundColor: '#76bc21',
                                        },
                                        backgroundColor: '#76bc21',
                                        color: 'white',
                                        margin: '0px auto',
                                        mt: 3,
                                        width: '30%',
                                    }}
                                >
                                    Submit
                                </Button>
                            </Box>
                        </FormGroup>
                    </form>
                </Box>
            </Paper>
        </Grid>
    );
};

export default SignUp;
