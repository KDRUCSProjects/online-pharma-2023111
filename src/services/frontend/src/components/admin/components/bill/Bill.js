import {
    Box,
    Button,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    boxShadow: 25,
    p: 4,
    minWidth: 700,
    maxHeight: 630,
    border: '1px solid red',
};

const Bill = () => {
    return (
        <Box sx={style}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                }}
            >
                <Button
                    sx={{
                        width: '10vw',
                        height: '4vh',
                        color: 'white',
                        backgroundColor: '#76bc21',
                        borderRadius: '10px',
                        ':hover': {
                            backgroundColor: '#76bc21',
                        },
                    }}
                >
                    Print
                </Button>
            </Box>
            <Box
                sx={{
                    borderTop: '2px solid #76bc21',
                    mt: '5px',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Link
                        to={'/'}
                        style={{
                            color: '#76bc21',
                        }}
                        onClick={() => {
                            props.setSearchStatus(false);
                        }}
                    >
                        <Box
                            component="img"
                            src="http://localhost:8000/frontend/static/images/logo/header.png"
                            sx={{
                                height: {
                                    xl: '60px',
                                    lg: '50px',
                                    md: '40px',
                                    sm: '35px',
                                    xs: '30px',
                                },
                                width: {
                                    xl: '300px',
                                    lg: '250px',
                                    md: '230px',
                                    sm: '220px',
                                    xs: '200px',
                                },
                                paddingTop: '2px',
                                mr: '5px',
                            }}
                        />
                    </Link>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        Invoice
                    </Typography>
                </Box>
                <Box
                    mt={1.5}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography>Bill To</Typography>
                    <Typography>Date:00.00.00</Typography>
                </Box>
                <Box mt={2}>
                    <Box
                        sx={{
                            display: 'flex',
                            width: '100%',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Typography>Customer Name</Typography>
                        <Typography>Niamat</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            mt: '2px',
                            width: '100%',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Typography>Phone Number</Typography>
                        <Typography>+93788115860</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            mt: '2px',
                            width: '100%',
                            justifyContent: 'space-between',
                            borderBottom: '2px solid #76bc21',
                        }}
                    >
                        <Typography>Location</Typography>
                        <Typography>Kandahar</Typography>
                    </Box>
                    <Table
                        sx={{
                            alignItems: 'center',
                        }}
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell>Product Name</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>price</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Product Name</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>price</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Product Name</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>price</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Product Name</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>price</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Product Name</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>price</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Product Name</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>price</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        mt: '20px',
                        width: '100%',
                        justifyContent: 'flex-end',
                        borderTop: '2px solid #76bc21',
                    }}
                >
                    <Typography mt={1} mr={5}>
                        Total Amount
                    </Typography>
                    <Typography mt={1}>550.Rs</Typography>
                </Box>
            </Box>
        </Box>
    );
};
export default Bill;
