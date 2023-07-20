import React from 'react';
import { Grid, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import GrainIcon from '@mui/icons-material/Grain';
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
        field: 'userName',
        headerName: 'User Name',
        width: 200,
    },
    {
        field: 'action',
        headerName: 'Action',
        width: 200,
    },
];

const rows = [
    {
        number: 1,
        userName: 'Mansoor Faizi',
        id: 1,
    },
    {
        number: 2,
        userName: 'Sami Rasa',
        id: 2,
    },
    {
        number: 3,
        userName: 'Nabi Jan Aminkhil',
        id: 3,
    },
];

function CustomToolbar() {
    return (
        <GridToolbarContainer>
            <GridToolbarExport />
        </GridToolbarContainer>
    );
}

const User = () => {
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
                        users
                    </Typography>
                </Breadcrumbs>
            </Grid>
            <Grid item xs={12} lg={12}>
                <Paper>
                    <Title>Users</Title>
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

export default User;
