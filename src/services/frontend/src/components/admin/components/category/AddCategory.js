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

const categories = [
    {
        value: 'medicine',
        label: 'medicine',
    },
];

const AddCategory = () => {
    const handleSubmit = {

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
                        to={'category/list/'}
                        style={{ textDecoration: 'none', color: 'black' }}
                    >
                        <CategoryIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        Categories
                    </Link>
                    <Typography
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="text.primary"
                    >
                        <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        AddCategory
                    </Typography>
                </Breadcrumbs>
            </Grid>
            <Grid item xs={12} lg={12}>
                <Paper sx={{ minHeight: '400px' }} elevation={1}>
                    <form action="#">
                        <FormGroup>
                            <Stack direction={'column'} spacing={3}>
                                <TextField placeholder="Category" />
                                <TextField
                                    id="outlined-select-currency-native"
                                    select
                                    label="Parent"
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
                                <Stack spacing={2} direction={'row'}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="success"
                                        onClick={handleSubmit}
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

export default AddCategory;
