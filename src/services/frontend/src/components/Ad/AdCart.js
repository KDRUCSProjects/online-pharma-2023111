import * as React from 'react';
import Typography from '@mui/material/Typography';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Menu,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const AdCart = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <Container>
            <Grid>
                <Card
                    sx={{
                        width: '20%',
                        height: '55vh',
                        borderTopLeftRadius: '10px',
                        borderTopRightRadius: '10px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <Box
                        sx={{
                            width: '95%',
                            height: '180px',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <CardMedia
                            component="img"
                            image="http://127.0.0.1:8000/frontend/static/images/d1.avif"
                            alt="Paella dish"
                            sx={{
                                width: '100%',
                                height: '100%',
                                ':hover': { width: '110%', height: '220px' },
                                transition: 'all 1.5s',
                            }}
                        ></CardMedia>
                    </Box>

                    <CardContent
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <Box
                            sx={{
                                width: '100%',
                                height: '100px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                }}
                            >
                                Habib Pharma Products
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '20px',
                                    fontWeight: 'bold',
                                    color: '#76bc21',
                                }}
                            >
                                899.55$
                            </Typography>
                        </Box>
                    </CardContent>

                    <CardActions
                        sx={{
                            width: '100%',
                            height: '10px',
                            display: 'flex',
                            justifyContent: 'end',
                            mb: 1,
                        }}
                    >
                        <Card
                            sx={{
                                width: '30%',
                                height: '10vh',
                                display: 'flex',
                                boxShadow: 'none',
                                justifyContent: 'end',
                                ':hover': { width: '28%', height: '150px' },
                                transition: 'all 1.5s',
                            }}
                        >
                            <Button
                                sx={{
                                    borderRadius: '50px',
                                    bgcolor: '#76bc21',
                                    ':hover': { bgcolor: '#76bc21' },
                                    width: '16px',
                                    height: '50px',
                                }}
                            >
                                <ShoppingCartIcon
                                    sx={{
                                        fontSize: '30px',
                                        color: 'white',
                                    }}
                                />
                            </Button>
                        </Card>
                    </CardActions>
                </Card>
            </Grid>
        </Container>
    );
};

export default AdCart;
