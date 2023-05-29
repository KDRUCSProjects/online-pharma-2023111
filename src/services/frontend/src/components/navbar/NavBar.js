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
import RequestPageIcon from '@mui/icons-material/RequestPage';
const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar sx={{backgroundColor: 'white'}}>
        <Toolbar bgcolor={'white'}>
            <Box sx={{padding: 2 ,flex:'3',flexGrow: '1',display: {md: 'none',lg: 'block',sm: 'none',sx: 'none'}}}><Typography variant='h3' color={'#76bc21'} >Habib Pharma</Typography></Box>
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
                            <SearchIcon sx={{color: '#76bc21'}}/>
                        </InputAdornment>
                    )
                }}
                />
                <Button variant='outlined' size='medium' startIcon={<LocationOnIcon sx={{color: '#76bc21'}} />}
                 endIcon={<ChevronRightIcon sx={{color: '#76bc21'}} />} sx={{textTransform:'capitalize',borderRadius: '10px',fontSize: '10px', 
                 color: 'black', backgroundColor:  'white',":hover": {backgroundColor: 'white'}}} >No Address Selected</Button>
                <Button variant='outlined' size='medium' startIcon={<RequestPageIcon sx={{color: 'white'}} />} sx={{textTransform: 'capitalize',borderRadius: '10px',color: 'white', backgroundColor:  '#76bc21',":hover": {backgroundColor: '#76bc21'}}} >Instant Order</Button>
                <Button  sx={{borderRadius: '10px',":hover": {cursor: 'default'
                ,backgroundColor: '#76bc21'},backgroundColor: '#76bc21'
                ,width: '90px',}}size='large'
                 startIcon={<PersonIcon sx={{":hover": {cursor: 'pointer'},color: 'white'}}/>} 
                 endIcon={<ShoppingCartIcon  sx={{":hover": {cursor: 'pointer'},color: 'white'}}/>} ></Button>
            </Box>
              
        </Toolbar>
    </AppBar>
    </Box>
  )
}

export default NavBar