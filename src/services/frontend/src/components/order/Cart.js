import React from 'react';
import { Box, Button, Card, CardMedia, Typography } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Cart = (props) => {
    const data = props;
    return (
        <Card
            sx={{
                width: '95%',
                height: '100px',
                border: '1px solid gray',
                ml: 0.8,
                mb: 2,
                borderRadius: 2,
                boxShadow: 'none',
                display: 'flex',
                justifyContent: 'space-between',
            }}
        >
            <Box>
                <Box
                    sx={{
                        width: '100%',
                        height: '65px',
                        m: 1,
                        borderRadius: 2,
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <CardMedia
                        component="img"
                        image="http://127.0.0.1:8000/frontend/static/images/table-of-contents-cover.png"
                        alt="image"
                        sx={{
                            width: '80%',
                            height: '50px',
                            ml: 1.3,
                            mt: 0.8,
                        }}
                    ></CardMedia>
                    <Box
                        sx={{
                            width: '100%',
                            height: '80px',
                            ml: 2,
                            mb: 1,
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: '12px',
                                fontWeight: 'bold',
                            }}
                        >
                            Drug Name
                        </Typography>
                        <Typography marginTop={1}>{data.item.name}</Typography>
                        <Typography
                            sx={{
                                fontSize: '12px',
                                fontWeight: 'bold',
                                mt: 1,
                            }}
                        >
                            Rs. 100.00
                        </Typography>
                    </Box>
                    <Button
                        startIcon={
                            <RemoveIcon
                                sx={{
                                    color: '#76bc21',
                                    border: '1px solid gray',
                                    borderRadius: 1,
                                }}
                            />
                        }
                        endIcon={
                            <AddIcon
                                sx={{
                                    color: '#76bc21',
                                    border: '1px solid gray',
                                    borderRadius: 1,
                                }}
                            />
                        }
                        sx={{
                            ':hover': {
                                color: '#76bc21',
                                cursor: 'pointer',
                                backgroundColor: 'white',
                            },
                            height: '40px',
                            borderColor: 'white',
                            display: 'flex',
                            mt: 6,
                        }}
                    >
                        <Typography sx={{ color: 'black' }}>5</Typography>
                    </Button>
                </Box>
            </Box>
            <Box>
                <Button
                    sx={{
                        ml: 5,
                        color: 'gray',
                        ':hover': {
                            color: '#76bc21',
                            cursor: 'pointer',
                            backgroundColor: 'white',
                        },
                    }}
                    onClick={() => {
                        setOpen(false);
                    }}
                >
                    <HighlightOffIcon />
                </Button>
            </Box>
        </Card>
    );
};

export default Cart;
