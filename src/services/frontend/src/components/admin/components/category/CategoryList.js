import React from 'react';
import { Button, Grid, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import GrainIcon from '@mui/icons-material/Grain';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const columns = [
    {
        field: 'number',
        headerName: 'Number',
        width: 200,
    },
    {
        field: 'category',
        headerName: 'Category',
        width: 200,
    },
    {
        field: 'parentCategory',
        headerName: 'Parent Category',
        width: 200,
    },
];

const rows = [
    {
        number: 1,
        category: 'Ear',
        parentCategory: 'Medicine',
        id: 1,
    },
    {
        number: 2,
        category: 'Ear',
        parentCategory: 'Medicine',
        id: 2,
    },
];

function CustomToolbar() {
    return (
        <GridToolbarContainer>
            <GridToolbarExport />
        </GridToolbarContainer>
    );
}

const CategoryList = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} lg={12}>
                <Breadcrumbs>
                    <Link
                        color="secondary"
                        to={'dashboard/'}
                        style={{ textDecoration: 'none', color: 'black' }}
                    >
                        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        Dashboard
                    </Link>
                    <Typography
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="text.primary"
                    >
                        <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        Categories
                    </Typography>
                </Breadcrumbs>
            </Grid>
            <Grid item xs={12} lg={12}>
                <Paper sx={{ display: 'flex', justifyContent: 'end' }}>
                    <Link to={'category/add/'}>
                        <Button
                            variant="contained"
                            color="success"
                            startIcon={<AddIcon />}
                            borderRadius="20px"
                        >
                            Add
                        </Button>
                    </Link>
                </Paper>
            </Grid>
            <Grid item xs={12} lg={12}>
                <Paper>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        slots={{ toolbar: GridToolbar }}
                    />
                </Paper>
            </Grid>
        </Grid>
    );
};

export default CategoryList;
