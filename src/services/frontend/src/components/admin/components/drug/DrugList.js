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
        width: 150,
    },
    {
        field: 'drugName',
        headerName: 'Drug',
        width: 150,
    },
    {
        field: 'category',
        headerName: 'Category',
        width: 150,
    },
    {
        field: 'country',
        headerName: 'Country',
        width: 150,
    },
    {
        field: 'GenericName',
        headerName: 'Generic Name',
        width: 150,
    },
    {
        field: 'quantity',
        headerName: 'Quantity',
        width: 150,
    },
];

const rows = [
    {
        number: 1,
        drugName: 'Trimadol',
        category: 'medicine',
        country: 'PK',
        GenericName: 'Anti Biotic',
        quantity: '10',
        id: 1,
    },
];

function CustomToolbar() {
    return (
        <GridToolbarContainer>
            <GridToolbarExport />
        </GridToolbarContainer>
    );
}
const DrugList = () => {
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
                        Drug List
                    </Typography>
                </Breadcrumbs>
            </Grid>
            <Grid item xs={12} lg={12}>
                <Paper sx={{ display: 'flex', justifyContent: 'end' }}>
                    <Link to={'/dashboard/drug/add/'}>
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
                    <Title>Drugs</Title>
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

export default DrugList;
