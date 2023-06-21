import {
    Button,
    Container,
    Grid,
    InputLabel,
    List,
    ListItem,
    TextField,
    Typography,
} from '@mui/material';
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CollectionsIcon from '@mui/icons-material/Collections';

const PrecirptionPage = () => {
    const [open, setOpen] = useState(true);
    return (
        <Container>
            <Grid
                container
                sx={{
                    width: '100%',
                    height: '90vh',
                    display: 'flex',
                    justifyContent: {lg: 'space-between',xs: 'center',sm: 'center',md: 'space-between'},
                    alignItems: 'center',
                }}
            >
                <Grid sx={{ width: {lg:'30%',md:'40%'}, height:{ lg:'80%'}, ml: '5%' }} item>
                    <Grid sx={{ width:{ lg:'400px',md:'600px',xl:'800px'}, heihgt: {lg:'40%',md:'45%'} }}>
                        <Typography
                            sx={{
                                fontSize: {lg:'30px',md:'30px',xl:'60px'},
                                pl: '3%',
                                color: '#67bc21',
                                borderLeft: '2px solid #67bc21',
                                
                            }}
                        >
                            Upload Precirption
                        </Typography>
                    </Grid>

                    <Grid >
                        <Typography
                            sx={{
                                width: '100%',
                                heihgt: '30%',
                                fontSize: '15px',
                                mt: '3%',
                             
                            }}
                        >
                            Upload Precirption & get your medication delivered{' '}
                        </Typography>
                    </Grid>




                    <Grid

                    sx={{
                        width: '30%',
                        height: '75%',
                        border: '1px solid lightgray',
                        mr: '6%',
                        padding: '30px',
                        display: 'flex',
                        
                        justifyContent: 'center',
                        alignItems: 'center',
                      
                       display: {lg: 'none',md: 'none',sm: 'block',xs: 'block',width:'100%'},
                    }}
                >
                    <Grid sx={{mt:{md:'30px'}}}>
                        <Grid
                            sx={{
                                width: '90%',
                                height: '10%',
                                fontSize: '50px',
                                textAlign: 'center',
                                wordSpacing: '2px',
                                color: '#76bc21',
                                mb: '5px',
                                ml: '10px',
                                
                                
                            }}
                        >
                            <label htmlFor="file">
                                <CollectionsIcon sx={{ fontSize: '50px' }} />
                            </label>
                            <input
                                style={{ display: 'none' }}
                                id="file"
                                type="file"
                            />
                            <Typography sx={{ fontWeight: '500' }}>
                                Gallery
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography variant="h8">
                                {' '}
                                <b>Note:</b> Always upload a clear version of
                                your Prescription for getting better results
                            </Typography>
                        </Grid>
                    </Grid>
                    </Grid>






                    <Grid
                        sx={{
                            width:{ lg:'80%',md:'300px'},
                            heihgt: '60%',
                            border: '1px solid lightgray',
                            mt:'30%',
                            padding: '3px',
                            borderRadius: '5%',
                           mt:{sm:'50px',sm:'60px',xm:'60%'}
                        }}
                        onClick={() => {
                            open ? setOpen(false) : setOpen(true);
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: '20px',
                                fontWeight: '500',
                                ml: '4%',
                            }}
                        >
                            Precirption Guide{' '}
                            <ExpandLessIcon sx={{ ml: '24%', mt: '5%' }} />{' '}
                        </Typography>
                    </Grid>

                    <Grid
                        sx={{
                            width:{lg:'80%',md:'300px'} ,
                            minHeight: '0%',
                            border: '1px solid lightgray',

                            borderRadius: '5px',
                        }}
                    >
                        {open ? (
                            <>
                                <Typography sx={{ pb: '2px' }}>
                                    1: Upload Clear image
                                </Typography>
                                <Typography sx={{ pb: '2px' }}>
                                    2: Doctor details required
                                </Typography>
                                <Typography sx={{ pb: '2px' }}>
                                    3: Date of prescription
                                </Typography>
                                <Typography sx={{ pb: '2px' }}>
                                    4: Patient details
                                </Typography>
                                <Typography>5: Dosage details</Typography>
                            </>
                        ) : null}
                    </Grid>
                </Grid>
                <Grid
                    sx={{
                        width: '30%',
                        height: '75%',
                        border: '1px solid lightgray',
                        mr: '6%',
                        padding: '30px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                       display: {lg: 'block',md: 'block',sm: 'none',xs: 'none'},
                    }}
                >
                    <Grid >
                        <Grid
                            sx={{
                                width: '90%',
                                height: '10%',
                                fontSize: '50px',
                                textAlign: 'center',
                                wordSpacing: '2px',
                                color: '#76bc21',
                                mb: '5px',
                                ml: '10px',
                            }}
                        >
                            <label htmlFor="file">
                                <CollectionsIcon sx={{ fontSize: '50px' }} />
                            </label>
                            <input
                                style={{ display: 'none' }}
                                id="file"
                                type="file"
                            />
                            <Typography sx={{ fontWeight: '500' }}>
                                Gallery
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography variant="h8">
                                {' '}
                                <b>Note:</b> Always upload a clear version of
                                your Prescription for getting better results
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default PrecirptionPage;
