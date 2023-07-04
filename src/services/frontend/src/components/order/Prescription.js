import React, { useState } from 'react';
import {
    Alert,
    Box,
    Button,
    Container,
    CssBaseline,
    Grid,
    Paper,
    Stack,
    Typography,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CollectionsIcon from '@mui/icons-material/Collections';
import { useMutation } from '@tanstack/react-query';
import { addObject } from '../Api/Api';
const Prescription = () => {
    const [open, setOpen] = useState(true);
    const [image, setImage] = useState('');
    const [message, setMessage] = useState('');
    const mutation = useMutation((data) => {
        return addObject('prescriptions', data);
    });
    function handleImage(e) {
        setImage(e.target.files[0]);
    }

    function handleApi() {
        const formData = new FormData();
        formData.append('image', image);
        formData.append('user_id', 1);
        mutation.mutate(formData);
        const success = 'Successfully Uploaded!';
        if (mutation.isSuccess) {
            setMessage(success);
            setImage('');
        }
    }

    return (
        <CssBaseline>
            <Container>
                <Grid container>
                    {message ? (
                        <Grid
                            item
                            xl={12}
                            lg={12}
                            sm={12}
                            md={12}
                            xs={12}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                mb: 2,
                            }}
                        >
                            <Alert severity="success" color="info">
                                {message}
                            </Alert>
                        </Grid>
                    ) : (
                        ''
                    )}
                    <Grid item>
                        <Typography
                            sx={{
                                color: '#67bc21',
                                borderLeft: '2px solid #67bc21',
                                fontWeight: 'bold',
                                padding: 2,
                            }}
                            variant="h5"
                        >
                            Upload Prescription
                        </Typography>
                        <Typography
                            sx={{
                                width: '100%',
                                fontSize: '15px',
                                mt: '3%',
                            }}
                        >
                            Upload Prescription & get your medication delivered
                        </Typography>
                        <Stack
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexDirection: 'row',
                                pt: 1,
                            }}
                        >
                            <Stack direction={'column'} alignItems={'center'}>
                                <CloudUploadIcon
                                    sx={{ color: '#75A157', fontSize: '50px' }}
                                />
                                <Typography fontSize={'10px'}>
                                    Upload Prescription
                                </Typography>
                            </Stack>
                            <Stack direction={'column'} alignItems={'center'}>
                                <NotificationsIcon
                                    sx={{ color: '#75A157', fontSize: '50px' }}
                                />
                                <Typography fontSize={'10px'}>
                                    Received Notification
                                </Typography>
                            </Stack>
                            <Stack direction={'column'} alignItems={'center'}>
                                <MeetingRoomIcon
                                    sx={{ color: '#75A157', fontSize: '50px' }}
                                />
                                <Typography fontSize={'10px'}>
                                    Doorstep Delivery
                                </Typography>
                            </Stack>
                        </Stack>
                        <Box
                            border={'1px solid lightGrey'}
                            borderRadius={'10px'}
                            mt={10}
                        >
                            <Box
                                sx={{
                                    border: '1px solid lightGray',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    height: '40px',
                                }}
                            >
                                <Typography variant="h6" ml={1}>
                                    Prescription Guide
                                </Typography>
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
                                <Box pl={2} pt={2}>
                                    <Box sx={{ display: 'flex' }}>
                                        <CheckCircleIcon
                                            fontSize="small"
                                            sx={{ color: '#67bc21' }}
                                        />
                                        <Typography sx={{ color: 'grey' }}>
                                            Upload Clear image
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex' }}>
                                        <CheckCircleIcon
                                            fontSize="small"
                                            sx={{ color: '#67bc21' }}
                                        />
                                        <Typography sx={{ color: 'grey' }}>
                                            Doctor details required
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex' }}>
                                        <CheckCircleIcon
                                            fontSize="small"
                                            sx={{ color: '#67bc21' }}
                                        />
                                        <Typography sx={{ color: 'grey' }}>
                                            Date of prescription
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex' }}>
                                        <CheckCircleIcon
                                            fontSize="small"
                                            sx={{ color: '#67bc21' }}
                                        />
                                        <Typography sx={{ color: 'grey' }}>
                                            Patient details
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex' }}>
                                        <CheckCircleIcon
                                            fontSize="small"
                                            sx={{ color: '#67bc21' }}
                                        />
                                        <Typography sx={{ color: 'grey' }}>
                                            Dosage details
                                        </Typography>
                                    </Box>
                                </Box>
                            ) : null}
                        </Box>
                    </Grid>
                    <Grid item lg={3}></Grid>
                    <Grid item lg={5}>
                        <Paper
                            sx={{
                                height: '500px',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <Stack
                                direction={'column'}
                                textAlign={'center'}
                                component="form"
                                noValidate
                            >
                                {image ? (
                                    <img
                                        src={URL.createObjectURL(image)}
                                        alt="Preview"
                                    />
                                ) : (
                                    <Box>
                                        <label htmlFor="file">
                                            <CollectionsIcon
                                                sx={{
                                                    fontSize: '50px',
                                                    color: '#76bc21',
                                                }}
                                            />
                                        </label>
                                        <input
                                            style={{ display: 'none' }}
                                            id="file"
                                            type="file"
                                            name="file"
                                            accept="image/*"
                                            onChange={handleImage}
                                        />
                                        <Typography sx={{ fontWeight: '500' }}>
                                            Gallery
                                        </Typography>
                                        <Typography variant="body2" mt={2}>
                                            <b>Note:</b> Always upload a clear
                                            version of your Prescription for
                                            getting better results
                                        </Typography>
                                    </Box>
                                )}
                            </Stack>
                        </Paper>
                        {!image ? (
                            ''
                        ) : (
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '130px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    mt: 2,
                                }}
                                component="form"
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-evenly',
                                    }}
                                >
                                    <Button
                                        sx={{
                                            backgroundColor: '#67bc21',
                                            color: 'white',
                                            borderRadius: '10px',
                                            width: '100px',
                                        }}
                                    >
                                        Change
                                    </Button>
                                    <Button
                                        sx={{
                                            backgroundColor: '#67bc21',
                                            color: 'white',
                                            borderRadius: '10px',
                                            width: '100px',
                                        }}
                                    >
                                        Remove
                                    </Button>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Button
                                        sx={{
                                            width: '70%',
                                            borderRadius: '10px',
                                            backgroundColor: '#67bc21',
                                            color: 'white',
                                            height: '60px',
                                        }}
                                        onClick={handleApi}
                                    >
                                        Place Order
                                    </Button>
                                </Box>
                            </Box>
                        )}
                    </Grid>
                </Grid>
            </Container>
        </CssBaseline>
    );
};

export default Prescription;
