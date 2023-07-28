import * as React from 'react';
import Typography from '@mui/material/Typography';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Stack,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import StyleIcon from '@mui/icons-material/Style';
import { useCartContext } from '../features/cart context/cart_context';
import { Link } from 'react-router-dom';

const AdCard = (props) => {
    const { addToCart } = useCartContext();
    const data = props.ad;
    return (
        <Card sx={{ height: 300, marginTop: 2, marginLeft: 2, width: 250 }}>
            <Link
                to={`/ad/detail/${data.id}/`}
                style={{
                    textDecoration: 'none',
                }}
            >
                <CardMedia
                    component="img"
                    height="120"
                    image={data.images[0].image}
                    alt="hello"
                    sx={{
                        width: '215px',
                        height: '180px',
                        mt: '16px',
                        ml: '16px',
                        transition: 'all 1s',
                        ':hover': { transform: 'scale(0.7)' },
                    }}
                />
            </Link>
            <CardContent>
                <Stack
                    direction="column"
                    spacing={1}
                    justifyContent="flex-start"
                    mb={1}
                    height={'78px'}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: {
                                lg: '17px',
                                sm: '17px',
                                xs: '17px',
                                md: '17px',
                                xl: '17px',
                            },
                        }}
                    >
                        {data.title.length < 22
                            ? data.title
                            : `${data.title.slice(0, 22)}...`}
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '215px',
                            height: '42px',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                }}
                            >
                                <StyleIcon sx={{ color: 'lightgray' }} />
                                <Typography
                                    ml={1}
                                    variant="h6"
                                    fontSize={16}
                                    color="#76bc21"
                                    display={'inline'}
                                    align="right"
                                >
                                    {data.sell_price}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    borderLeft: '2px solid lightgray',
                                    ml: '120px',
                                }}
                            >
                                <Button
                                    onClick={() => addToCart(data.id, 1, data)}
                                >
                                    <AddShoppingCartIcon
                                        sx={{
                                            fontSize: '30px',
                                            color: '#76bc21',
                                            mt: '6px',
                                            ml: '5px',
                                        }}
                                    />
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default AdCard;
