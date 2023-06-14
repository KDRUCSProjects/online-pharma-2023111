import React from 'react';
import { Button, Grid, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import GrainIcon from '@mui/icons-material/Grain';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Title from '../title/Title';

const columns = [
    {
        field: 'number',
        headerName: 'Number',
        width: 200,
    },
    {
        field: 'country',
        headerName: 'Country',
        width: 200,
    },
];

const rows = [
    {
        number: 1,
        country: 'Afghanistan',
        id: 1,
    },
    {
        number: 2,
        country: 'Pakistan',
        id: 2,
    },
    {
        number: 3,
        country: 'Iran',
        id: 3,
    },
    {
        number: 4,
        country: 'India',
        id: 4,
    },
];

function CustomToolbar() {
    return (
        <GridToolbarContainer>
            <GridToolbarExport />
        </GridToolbarContainer>
    );
}

const CountryList = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} lg={12}>
                <Breadcrumbs>
                    <Link
                        color="secondary"
                        to={'/dashboard/'}
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
                        Country
                    </Typography>
                </Breadcrumbs>
            </Grid>
            <Grid item xs={12} lg={12}>
                <Paper sx={{ display: 'flex', justifyContent: 'end' }}>
                    <Link to={'/dashboard/category/add/'}>
                        <Button
                            variant="contained"
                            color="primary"
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
                    <Title>All Countries</Title>
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

export default CountryList;
