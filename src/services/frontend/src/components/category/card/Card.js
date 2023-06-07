import { Box, Grid, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import MedicationIcon from '@mui/icons-material/Medication';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Card = (props) => {
    console.log(props);
    const [open, setOpen] = useState(null);
    const [openIcon, setOpenIcon] = useState(null);
    return (
        <Grid
            onMouseOver={() => {
                setOpen(true);
                setOpenIcon(true);
            }}
            onMouseLeave={() => {
                setOpen(false);
                setOpenIcon(false);
            }}
            sx={{
                width: {lg: '180px',xs: '100px'},
                height: {lg: '160px',xs: '100px'},
                margin: '0px auto',
                backgroundColor: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
                borderRadius: '10px',
                
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {props.icon}
            </Box>
            {open ? (
                <Typography sx={{ 
                    
                    color: {lg:'lightgray',xs:'white'} 
                    
                    }}>
                    ________________________
                </Typography>
            ) : null}
            <Box
                align="center"
                sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {props.data}
            </Box>
            {openIcon ? (
                <ChevronRightIcon
                    sx={{
                        backgroundColor: {lg:'#76bc21',sx:'white'},
                        borderRadius: '50%',
                        fontSize: '30px',
                        color: 'white',
                    }}
                />
            ) : null}
        </Grid>
    );
};

export default Card;
