import { Grid, TextField,Box, Typography, Paper, Button } from '@mui/material'
import React from 'react'

const SignUp = () => {
  return (
    <Grid container sx={{margin: '0px auto',mt: 10,width: {lg: '50%',xs: '90%',sm: '90%',md: '90%'}}}>
        <Paper fullWidth sx={{margin: '0px auto', width: {lg: '100%',xs: '90%',md: '90%',sm: '90%'}}}>
        <Box fullWidth sx={{backgroundColor: 'white',width: {lg: '80%',md: '100%',sm: '100%',xs: '100%'},height: '70vh',margin: '0px auto'}}>
            <Typography align='center' variant='h4' pt={2} >SignUp</Typography>
            <form autoComplete='off'>
                <TextField
                fullWidth
                placeholder='name'
                size='small'
                type='name'
                sx={{borderRadius: '10px',mt: 3,}}
                />
                <TextField
                fullWidth
                placeholder='username'
                size='small'
                type='name'
                sx={{borderRadius: '10px',mt: 3,}}
                />
                <TextField
                fullWidth
                placeholder='phone number'
                size='small'
                type='name'
                sx={{borderRadius: '10px',mt: 3,}}
                />
                <TextField
                fullWidth
                placeholder='password'
                size='small'
                type='password'
                sx={{borderRadius: '10px',mt: 3,}}
                />
                <TextField
                fullWidth
                placeholder='confirm password'
                size='small'
                type='password'
                sx={{borderRadius: '10px',mt: 3,}}
                />
                <Box align="center">
                <Button variant='outlined' sx={{":hover": {backgroundColor: '#76bc21'},backgroundColor: '#76bc21',color: 'white',margin: '0px auto',mt: 3,width: '30%'}}  >Submit</Button>  
                </Box>              
            </form>    
        </Box>
        </Paper>
    </Grid>
  )
}

export default SignUp