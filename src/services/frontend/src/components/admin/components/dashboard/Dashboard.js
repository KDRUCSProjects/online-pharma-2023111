import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Orders from '../order/Orders';
import { Box, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const Dashboard = () => {
    const [userCount, setUserCount] = useState(0);
    useEffect(() => {
        fetch('http://localhost:8000/api/user/user-count/')
            .then((response) => response.json())
            .then((data) => setUserCount(data.count))
            .catch((error) => console.error(error));
    }, []);
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
                <Paper
                    sx={{
                        p: 2,
                        height: '200px',
                        borderRadius: '15px',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Typography fontWeight="bold" variant="h6">
                            Total Users
                        </Typography>
                        <PersonIcon
                            sx={{ color: '#3791B7', fontSize: '40px' }}
                        />
                    </Box>
                    <Typography pt={8} pl={2} variant="h4" fontWeight="bold">
                        {userCount}
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
                <Paper
                    sx={{
                        p: 2,
                        height: '200px',
                        borderRadius: '15px',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Typography fontWeight="bold" variant="h6">
                            Total Orders
                        </Typography>
                        <PersonIcon sx={{ color: 'green', fontSize: '40px' }} />
                    </Box>
                    <Typography pt={8} pl={2} variant="h4" fontWeight="bold">
                        {userCount}
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
                <Paper
                    sx={{
                        p: 2,
                        height: '200px',
                        borderRadius: '15px',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Typography fontWeight="bold" variant="h6">
                            Total Pending Orders
                        </Typography>
                        <PersonIcon sx={{ color: 'green', fontSize: '40px' }} />
                    </Box>
                    <Typography pt={8} pl={2} variant="h4" fontWeight="bold">
                        {userCount}
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
                <Paper
                    sx={{
                        p: 2,
                        height: '200px',
                        borderRadius: '15px',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Typography fontWeight="bold" variant="h6">
                            Total Completed Orders
                        </Typography>
                        <PersonIcon sx={{ color: 'green', fontSize: '40px' }} />
                    </Box>
                    <Typography pt={8} pl={2} variant="h4" fontWeight="bold">
                        {userCount}
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
                <Paper
                    sx={{
                        p: 2,
                        height: '200px',
                        borderRadius: '15px',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Typography fontWeight="bold" variant="h6">
                            Total Canceled Orders
                        </Typography>
                        <PersonIcon sx={{ color: 'green', fontSize: '40px' }} />
                    </Box>
                    <Typography pt={8} pl={2} variant="h4" fontWeight="bold">
                        {userCount}
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <Orders />
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
