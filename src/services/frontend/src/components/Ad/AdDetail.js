import {
    Box,
    Button,
    Card,
    CardMedia,
    Grid,
    Paper,
    Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const AdDetail = () => {
    return (
        <Grid
            container
            sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
            }}
        >
            <Grid
                sx={{
                    width: '250px',
                    height: '250px',

                    display: 'flex',
                    justifyContent: 'right',
                    // ,border:'1px solid blue'
                }}
                item
                lg={4}
            >
                <Box
                    sx={{
                        border: '1px solid lightGray',
                        width: '280px',
                        height: '280px',

                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '10px',
                    }}
                >
                    <Box
                        sx={{
                            width: '230px',
                            height: '230px',
                            borderRadius: '10px 10px',
                        }}
                        component="img"
                        src="http://127.0.0.1:8000/frontend/static/images/d1.avif"
                    ></Box>
                </Box>
            </Grid>
            <Grid sx={{ width: '450px' }} item lg={6}>
                <Grid
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'left',
                    }}
                >
                    <Grid sx={{ mt: '20px' }}>
                        <Box sx={{ width: '590px' }}>
                            <Typography variant="h6" sx={{ color: 'black' }}>
                                Syr Bd 1Cc Insulin 6Mm Syringe 1S
                            </Typography>
                            <Typography
                                sx={{ color: 'gray', mt: '10px', mb: '10px' }}
                            >
                                Brand: <Link>B-D (Becton-Dickenson)</Link>{' '}
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Typography sx={{ color: '#76bc21' }}>
                                    Per PC
                                </Typography>
                                <Typography>AF. 10.00</Typography>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                width: '600px',

                                display: 'flex',
                                flexDirection: 'column',
                                mt: '40px',
                            }}
                        >
                            <Paper
                                sx={{
                                    width: '200px',
                                    display: 'inline',
                                    p: '15px',
                                }}
                            >
                                Delivery Time: 10:00AM -11May
                            </Paper>
                            <Box
                                sx={{
                                    width: '155px',
                                    display: 'inline',
                                    ml: '227px',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Button
                                    variant="outlined"
                                    sx={{
                                        backgroundColor: '#76bc21',
                                        color: 'white',
                                        pl: '10px',
                                        pr: '10px',
                                        ':hover': {
                                            backgroundColor: '#76bc21',
                                            borderColor: '#76bc21',
                                            borderRadius: '3px',
                                        },
                                    }}
                                >
                                    Add to Chart
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid
                        sx={{
                            display: 'flex',
                            border: '1px solid lightGray',
                            borderRadius: '10px',
                            width: '600px',
                            height: '420px',
                            mt: '20px',
                        }}
                    >
                        <Grid>
                            <Button
                                variant="outlined"
                                sx={{
                                    mt: '60px',
                                    ml: '35px',
                                    backgroundColor: '#76bc21',
                                    color: 'white',
                                    borderRadius: '4px',
                                    border: '1px solid #76bc21',
                                    ':hover': {
                                        backgroundColor: '#76bc21',
                                        borderColor: '#76bc21',
                                        borderRadius: '3px',
                                    },
                                }}
                            >
                                Description
                            </Button>
                        </Grid>
                        <Grid
                            sx={{
                                width: '500px',
                                minHeight: '200px',
                                padding: 2,
                                fontFamily: 'Courier',
                                mt: '20px',
                                backgroundColor: '1px solid gray',
                                padding: '25px',
                            }}
                        >
                            <Typography variant="h5" sx={{ mb: '10px' }}>
                                Description
                            </Typography>
                            <Typography variant="h8" sx={{ lineHeight: '2' }}>
                                BD Ultra-Fine™ 6mm x 31G insulin syringe, 25%
                                shorter than the 8mm needle. This length is
                                supported by recent recommendations published in
                                Mayo Clinic Proceedings that advocate using the
                                shortest needle first-line for all patient
                                categories.1† Preferred by most patients over
                                their current needle length, BD Ultra-Fine™ 6mm
                                x 31G insulin syringes provide approximately
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default AdDetail;
