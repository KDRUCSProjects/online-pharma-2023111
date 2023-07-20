1;
2;
3;
4;
5;
6;
7;
8;
9;
10;
11;
12;
13;
14;
15;
16;
17;
18;
19;
20;
21;
22;
23;
24;
25;
26;
27;
28;
29;
30;
31;
32;
33;
34;
35;
36;
37;
38;
39;
40;
41;
42;
43;
44;
45;
46;
47;
48;
49;
50;
51;
52;
53;
54;
55;
56;
57;
58;
59;
60;
61;
62;
63;
64;
65;
66;
67;
68;
69;
70;
71;
72;
73;
74;
75;
76;
77;
78;
79;
80;
81;
82;
83;
84;
85;
import React, { useState } from 'react';
import { TextField, Button, Container, Stack, Typography } from '@mui/material';
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
