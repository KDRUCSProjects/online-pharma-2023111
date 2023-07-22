import React, { useState } from 'react';
import {
    TextField,
    Button,
    Typography,
    Grid,
    Breadcrumbs,
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';
import GrainIcon from '@mui/icons-material/Grain';
import { Link } from 'react-router-dom';
import Title from '../title/Title';

const OrderReport = () => {
    const [orderDate, setOrderDate] = useState('');
    const [totalPrice, setTotalPrice] = useState(null);

    function handleSubmit(event) {
        event.preventDefault();
        fetch(
            `http://127.0.0.1:8000/api/total-selling-price/?date=${orderDate}`
        )
            .then((response) => response.json())
            .then((data) => setTotalPrice(data.total_price))
            .catch((error) => console.log(error));
    }

    return (
        <React.Fragment>
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
                        Daily Report
                    </Typography>
                </Breadcrumbs>
            </Grid>
            <Title>Report</Title>
            <form onSubmit={handleSubmit}>
                <TextField
                    type="date"
                    variant="outlined"
                    color="secondary"
                    onChange={(e) => setOrderDate(e.target.value)}
                    value={orderDate}
                    fullWidth
                    required
                    sx={{ mb: 4 }}
                />
                <Button
                    variant="outlined"
                    color="secondary"
                    type="submit"
                    mb={2}
                >
                    Send
                </Button>
            </form>
            {totalPrice ? <Title>Total Price: {totalPrice}</Title> : ''}
        </React.Fragment>
    );
};

export default OrderReport;
