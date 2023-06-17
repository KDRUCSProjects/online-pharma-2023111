import React, { useState } from 'react';
import {
    Box,
    Breadcrumbs,
    Button,
    FormControl,
    FormGroup,
    Grid,
    Paper,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import GrainIcon from '@mui/icons-material/Grain';
import CategoryIcon from '@mui/icons-material/Category';
import Title from '../title/Title';
import { useMutation } from '@tanstack/react-query';
import { addObject } from '../../../Api/Api';
import { create } from '@mui/material/styles/createTransitions';

const AddCountry = () => {
    const [name, setName] = useState('');
    const mutation = useMutation((DATA) => {
        return addObject('countries', DATA);
    });
    const onChange = (e) => {
        setName(e.target.value);
    };

    const Create = () => {
        mutation.mutate({ name });
    };

    return (
        <Grid container spacing={5}>
            <Grid item xs={12} lg={12}>
                <Breadcrumbs>
                    <Link
                        to={'dashboard/'}
                        style={{ textDecoration: 'none', color: 'black' }}
                    >
                        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        Dashboard
                    </Link>
                    <Link
                        to={'country/list/'}
                        style={{ textDecoration: 'none', color: 'black' }}
                    >
                        <CategoryIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        countries
                    </Link>
                    <Typography
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="text.primary"
                    >
                        <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        AddCountry
                    </Typography>
                </Breadcrumbs>
            </Grid>
            <Grid item xs={12} lg={12}>
                <Paper sx={{ minHeight: '400px' }} elevation={1}>
                    <Title>Add new Country</Title>
                    <Stack direction={'column'} spacing={3}>
                        <TextField
                            placeholder="Country"
                            sx={{ mt: 2 }}
                            type="text"
                            value={name}
                            onChange={onChange}
                        />
                        <Stack spacing={2} direction={'row'}>
                            <Button
                                variant="contained"
                                color="success"
                                onClick={Create}
                            >
                                Save
                            </Button>
                            <Button
                                type="reset"
                                variant="contained"
                                color="error"
                            >
                                Reset
                            </Button>
                        </Stack>
                    </Stack>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default AddCountry;
