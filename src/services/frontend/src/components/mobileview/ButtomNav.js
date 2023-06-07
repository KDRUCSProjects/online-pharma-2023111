import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import Person2Icon from '@mui/icons-material/Person2';
import { Container, Grid } from '@mui/material';

const ButtomNav = () => {
    return (
        <Container>
            <Grid container>
                <Grid item xs={12} sm={12}>
                    <BottomNavigation
                        showLabels
                        sx={{
                            position: 'fixed',
                            bottom: '0px',
                            left: '0px',
                            right: '0px',
                            marginBottom: '0px',
                            width: '100%',
                        }}
                    >
                        <BottomNavigationAction
                            label="Home"
                            icon={<HomeIcon 
                                sx={{
                                    color:'#76bc21'
                                }}
                            />}
                        />
                        <BottomNavigationAction
                        sx={{color:'gray'}}
                            label="Category"
                            icon={<CategoryIcon />}
                        />
                        <BottomNavigationAction icon={<ShoppingCartIcon
                          sx={{color:'#76bc21',fontSize:'50px'}}
                        />} />
                        <BottomNavigationAction
                         sx={{color:'gray'}}
                            label="Prescription"
                            icon={< RequestPageIcon/>}
                        />
                        <BottomNavigationAction
                         sx={{color:'gray'}}
                            label="Profile"
                            icon={<Person2Icon />}
                        />
                    </BottomNavigation>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ButtomNav;
