import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Breadcrumbs,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import GrainIcon from '@mui/icons-material/Grain';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Title from '../title/Title';
const state = [
    { id: 1, state: 'pending' },
    { id: 2, state: 'canceled' },
    { id: 3, state: 'completed' },
];

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/orders/')
            .then((response) => {
                setOrders(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} lg={12}>
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
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
                <Title>Orders</Title>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontSize: '13px' }}>
                                    ID
                                </TableCell>
                                <TableCell sx={{ fontSize: '13px' }}>
                                    User
                                </TableCell>
                                <TableCell
                                    align="left"
                                    sx={{ fontSize: '13px' }}
                                >
                                    Product
                                </TableCell>
                                <TableCell
                                    align="left"
                                    sx={{ fontSize: '13px' }}
                                >
                                    Location
                                </TableCell>
                                <TableCell
                                    align="center"
                                    sx={{ fontSize: '13px' }}
                                >
                                    Quantity
                                </TableCell>
                                <TableCell
                                    align="center"
                                    sx={{ fontSize: '13px' }}
                                >
                                    Total Amount
                                </TableCell>
                                <TableCell
                                    align="left"
                                    sx={{ fontSize: '13px' }}
                                >
                                    Order Date
                                </TableCell>
                                <TableCell
                                    align="center"
                                    sx={{ fontSize: '13px' }}
                                >
                                    Status
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{
                                        '&:last-child td, &:last-child th': {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {row.user.name}
                                    </TableCell>
                                    <TableCell align="left">
                                        {row.ad.title}
                                    </TableCell>
                                    <TableCell align="left">
                                        {row.address}
                                    </TableCell>
                                    <TableCell align="center">
                                        {row.quantity}
                                    </TableCell>
                                    <TableCell align="center">
                                        {row.total_amount}
                                    </TableCell>
                                    <TableCell align="left">
                                        {row.created_at}
                                    </TableCell>
                                    <TableCell align="center">
                                        {row.status == 1
                                            ? state[0].state
                                            : row.status == 2
                                            ? state[1].state
                                            : state[2].state}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
};

export default OrderList;
