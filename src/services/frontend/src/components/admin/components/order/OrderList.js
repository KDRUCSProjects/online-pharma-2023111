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
        field: 'user',
        headerName: 'User',
        width: 150,
    },
    {
        field: 'drug',
        headerName: 'Drug',
        width: 150,
    },
    {
        field: 'quantity',
        headerName: 'Quantity',
        width: 150,
    },
    {
        field: 'address',
        headerName: 'Address',
        width: 250,
    },
    {
        field: 'state',
        headerName: 'State',
        width: 150,
    },
];

const rows = [
    {
        number: 1,
        user: 'Sami',
        drug: 'Trimadol',
        quantity: '3',
        address: 'Kandahar, Ainu Mina',
        state: 'Pending',
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
const OrderList = () => {
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
                        Order List
                    </Typography>
                </Breadcrumbs>
            </Grid>
            <Grid item xs={12} lg={12}>
                <Paper>
                    <Title>Orders</Title>
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

export default OrderList;
