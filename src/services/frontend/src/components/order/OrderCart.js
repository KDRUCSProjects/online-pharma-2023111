import { Box, Grid, Typography } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react';

const OrderCart = (props) => {
    const ad = props.ad;
    const [open, setOpen] = useState(false);
    return (
        <Box border={'1px solid lightGrey'} borderRadius={'10px'} mt={5}>
            <Box
                sx={{
                    border: '1px solid lightGray',
                    borderRadius: '10px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '80px',
                }}
            >
                <Box
                    sx={{
                        borderRadius: '8px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        height: '80px',
                        flexDirection: 'row',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            height: '80px',
                            flexDirection: 'row',
                        }}
                    >
                        <Box
                            sx={{
                                border: '1px solid gray',
                                width: '60px',
                                height: '60px',
                                ml: 3,
                                backgroundColor: 'red',
                            }}
                        >
                            <ShoppingCartCheckoutIcon
                                sx={{
                                    width: '50px',
                                    height: '50px',
                                    color: 'white',
                                    mt: 1,
                                    ml: 1,
                                }}
                            />
                        </Box>
                        <Box>
                            <Typography variant="h6" fontWeight="bold" ml={2}>
                                Order ID {ad.id}
                            </Typography>
                            <Typography ml={2}>
                                {ad.order_date}.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                {open ? (
                    <ExpandLessIcon
                        fontSize="large"
                        sx={{ color: 'grey' }}
                        onClick={() => {
                            setOpen(false);
                        }}
                    />
                ) : (
                    <ExpandMoreIcon
                        fontSize="large"
                        sx={{ color: 'grey' }}
                        onClick={() => {
                            setOpen(true);
                        }}
                    />
                )}
            </Box>
            {open ? (
                <Box pl={2}>
                    <Grid
                        container
                        sx={{
                            display: 'flex',
                        }}
                    >
                        <Grid
                            item
                            lg={3.5}
                            xl={3.5}
                            md={3.5}
                            sm={3.5}
                            xs={12}
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                            }}
                        >
                            <Box mt={2}>
                                <Typography variant="h5" fontWeight="bold">
                                    {ad.user.name}
                                </Typography>
                                <Typography
                                    sx={{
                                        mt: 0.5,
                                        fontSize: '14px',
                                        color: 'gray',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {ad.address}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid
                            item
                            ml={{
                                lg: 2,
                                xl: 2,
                                md: 2,
                                sm: 2,
                                xs: 2,
                            }}
                            mr={{
                                lg: 0,
                                xl: 0,
                                md: 0,
                                sm: 0,
                                xs: 1,
                            }}
                            mt={6}
                            lg={8}
                            xl={8}
                            md={8}
                            sm={8}
                            xs={12}
                        >
                            {ad.order_item.map((item) => (
                                <>
                                    <Box
                                        sx={{
                                            mt: 1,
                                            width: '55%',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <Box>
                                            <Typography>Drug Name</Typography>
                                            <Typography>
                                                Quantity:
                                                {item.quantity}
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography>
                                                af. {item.ad.title}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </>
                            ))}

                            <Box
                                sx={{
                                    width: '55%',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Box>
                                    <Typography mt={2}>Total</Typography>
                                </Box>
                                <Box>
                                    <Typography mr={2} mt={2}>
                                        af.
                                        {ad.total_amount}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            ) : null}
        </Box>
    );
};

export default OrderCart;
