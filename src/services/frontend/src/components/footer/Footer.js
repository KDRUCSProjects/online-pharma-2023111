import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Grid color={'white'} container spacing={1} sx={{padding:'30px',display: 'flex',flexDirection: 'row',justifyContent: 'space-between',backgroundColor: '#76bc21'}}>
        <Grid color={'white'} >
            <Typography variant='h3'>Habib Pharma</Typography>
            <Typography variant='h4'align='center' mt={5} >Follow Us</Typography>
            <Box align='center'>
                <FacebookIcon  sx={{color: 'white',mr: 2}} />
                <TwitterIcon sx={{color: 'white',mr: 2}} />
                <InstagramIcon sx={{color: 'white',mr: 2}} />
            </Box>
        </Grid>
        <Grid >
        <Typography variant='h4'>Categories</Typography>
        <Box sx={{display: 'flex',flexDirection: 'column',color: 'white',height: '280px'}} align='center' >
        <Link style={{marginTop: 18,color: 'white',textDecoration: 'none'}}>Medicine</Link>
        <Link style={{marginTop: 18,color: 'white',textDecoration: 'none'}}>A to Z Medicine</Link>
        <Link style={{marginTop: 18,color: 'white',textDecoration: 'none'}} >Baby & Mother Care</Link>
        <Link style={{marginTop: 18,color: 'white',textDecoration: 'none'}} >Food & Beverage </Link>
        <Link style={{marginTop: 18,color: 'white',textDecoration: 'none'}} >Device & Appliances</Link>
        <Link style={{marginTop: 18,color: 'white',textDecoration: 'none'}} >Personal Care</Link>
        <Link style={{marginTop: 18,color: 'white',textDecoration: 'none'}} >OTC & Health Need</Link>
        </Box>
        </Grid>
        <Grid>
        <Typography variant='h4'>Navigate</Typography>
        <Box sx={{display: 'flex',flexDirection: 'column',color: 'white',height: '280px'}} align='center' >
        <Link style={{marginTop: 18,color: 'white',textDecoration: 'none'}} >Feedback</Link>
        <Link style={{marginTop: 18,color: 'white',textDecoration: 'none'}} >FInsstant Order </Link>
        <Link style={{marginTop: 18,color: 'white',textDecoration: 'none'}} >Stores</Link>
        <Link style={{marginTop: 18,color: 'white',textDecoration: 'none'}} >My Order</Link>
        <Link style={{marginTop: 18,color: 'white',textDecoration: 'none'}} >User Profile</Link>
        </Box>
        </Grid>
        <Grid>
        <Typography variant='h4'>Support</Typography>
        <Box sx={{display: 'flex',flexDirection: 'column',color: 'white',height: '280px'}} align='center' >
        <Link style={{marginTop: 18,color: 'white',textDecoration: 'none'}}>FAQs</Link>
        <Link style={{marginTop: 18,color: 'white',textDecoration: 'none'}} >Term Of Service</Link>
        <Link style={{marginTop: 18,color: 'white',textDecoration: 'none'}} >Shipping Policy </Link>
        <Link style={{marginTop: 18,color: 'white',textDecoration: 'none'}} >Return Policy </Link>
        <Link style={{marginTop: 18,color: 'white',textDecoration: 'none'}} >Refund Policy</Link>
        <Link style={{marginTop: 18,color: 'white',textDecoration: 'none'}} >Privacy Policy</Link>
        </Box>
        </Grid>
        <Grid>
        <Typography variant='h4'>Contact Us</Typography>
        </Grid>
    </Grid>
  )
}

export default Footer