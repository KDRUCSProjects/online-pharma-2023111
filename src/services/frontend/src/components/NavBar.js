import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button, Grid, TextField, Typography, rgbToHex } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {InputAdornment} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const NavBar = () => {
  return (
    <AppBar sx={{backgroundColor: 'white'}}>
        <Toolbar bgcolor={'white'}>
            <Box sx={{padding: 2 ,flex:'3',flexGrow: '1',display: {md: 'none',lg: 'block',sm: 'none',sx: 'none'}}}><Typography variant='h3' color={'rgb(0,200,0)'} >Habib Pharma</Typography></Box>
            <Box bgcolor={'white'} sx={{flex: '2',flexGrow: '2',display: 'flex',flexDirection: 'row',justifyContent: 'space-between'}}>

                <TextField
                size='small'
                type='search'
                placeholder='Search'
                sx={{width: '40%',
                borderRadius: '20px',
            }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position='end'>
                            <SearchIcon sx={{color: 'rgb(0,200,0)'}}/>
                        </InputAdornment>
                    )
                }}
                />
                <Button variant='outlined' size='medium' startIcon={<LocationOnIcon sx={{color: 'rgb(0,200,0)'}} />}
                 endIcon={<ChevronRightIcon sx={{color: 'rgb(0,200,0)'}} />} sx={{borderRadius: '10px',fontSize: '10px', 
                 color: 'black', backgroundColor:  'white',":hover": {backgroundColor: 'white'}}} >No Address Selected</Button>
                <Button variant='outlined' size='medium' sx={{borderRadius: '10px',color: 'white', backgroundColor:  'rgb(0,200,0)',":hover": {backgroundColor: 'rgb(0,200,0)'}}} >Instance Order</Button>
                <Button  sx={{borderRadius: '10px',":hover": {cursor: 'default'
                ,backgroundColor: 'rgb(0,200,0)'},backgroundColor: 'rgb(0,200,0)'
                ,width: '90px',}}size='large'
                 startIcon={<PersonIcon sx={{":hover": {cursor: 'pointer'},color: 'white'}}/>} 
                 endIcon={<ShoppingCartIcon  sx={{":hover": {cursor: 'pointer'},color: 'white'}}/>} ></Button>
            </Box>
              
        </Toolbar>
    </AppBar>
  )
}

export default NavBar