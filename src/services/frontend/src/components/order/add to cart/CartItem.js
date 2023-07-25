import React from 'react';
import { Box, Button, Card, CardMedia, Typography } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useCartContext } from '../../features/cart context/cart_context';

const CartItem = ({ id, title, image, amount, price }) => {
    const { removeItem, setDecrease, setIncrease } = useCartContext();
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
                        image={image}
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
                        <Typography marginTop={1}>{title}</Typography>
                        <Typography
                            sx={{
                                fontSize: '12px',
                                fontWeight: 'bold',
                                mt: 1,
                            }}
                        >
                            Rs. {price}
                        </Typography>
                    </Box>
                    <Button
                        onClick={() => setDecrease(id)}
                        startIcon={
                            <RemoveIcon
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
                    />
                    <Typography>{amount}</Typography>
                    <Button
                        onClick={() => setIncrease(id)}
                        startIcon={
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
                    />
                </Box>
            </Box>
            <Box>
                <Button
                    onClick={() => removeItem(id)}
                    sx={{
                        ml: 5,
                        color: 'gray',
                        ':hover': {
                            color: '#76bc21',
                            cursor: 'pointer',
                            backgroundColor: 'white',
                        },
                    }}
                >
                    <HighlightOffIcon />
                </Button>
            </Box>
        </Card>
    );
};

export default CartItem;
