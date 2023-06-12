import React from 'react';
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

const categories = [
    {
        value: 'medicine',
        label: 'medicine',
    },
];

const AddCountry = () => {
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
                    <form action="#">
                        <FormGroup>
                            <Stack direction={'column'} spacing={3}>
                                <TextField placeholder="Country" sx={{mt: 2}}/>
                                <Stack spacing={2} direction={'row'}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="success"
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
                        </FormGroup>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default AddCountry;
