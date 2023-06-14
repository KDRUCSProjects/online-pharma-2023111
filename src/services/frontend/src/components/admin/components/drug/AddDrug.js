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
const country = [
    {
        value: 'afg',
        label: 'AFG',
    },
    {
        value: 'ir',
        label: 'IR',
    },
    {
        value: 'pk',
        label: 'PK',
    },
];
const generic = [
    {
        value: 'Anti biotic',
        label: 'generic',
    },
];

const AddDrug = () => {
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
                        to={'drug/list/'}
                        style={{ textDecoration: 'none', color: 'black' }}
                    >
                        <CategoryIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        drugs
                    </Link>
                    <Typography
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="text.primary"
                    >
                        <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        Add Drug
                    </Typography>
                </Breadcrumbs>
            </Grid>
            <Grid item xs={12} lg={12}>
                <Paper sx={{ minHeight: '400px' }} elevation={1}>
                    <Title>Add new Drug</Title>
                    <form action="#">
                        <FormGroup>
                            <Stack direction={'column'} spacing={3}>
                                <TextField
                                    placeholder="drug name"
                                    sx={{ mt: 2 }}
                                />
                                <TextField placeholder="price" type="number" />
                                <TextField
                                    id="outlined-select-currency-native"
                                    select
                                    label="category"
                                >
                                    {categories.map((option) => (
                                        <option
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </option>
                                    ))}
                                </TextField>
                                <TextField
                                    id="outlined-select-currency-native"
                                    select
                                    label="country"
                                >
                                    {country.map((option) => (
                                        <option
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </option>
                                    ))}
                                </TextField>
                                <TextField
                                    id="outlined-select-currency-native"
                                    select
                                    label="Generic Name"
                                >
                                    {generic.map((option) => (
                                        <option
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </option>
                                    ))}
                                </TextField>
                                <TextField
                                    placeholder="quantity"
                                    type="number"
                                />

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

export default AddDrug;
