import {
    Box,
    Button,
    FormControl,
    Grid,
    Menu,
    MenuItem,
    MenuList,
    Modal,
    Paper,
} from '@mui/material';
import MenuItems from './menuItems/MenuItems';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandMore from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react';

const MenuBar = () => {
    const [openMedicine, setOpenMedicine] = useState(false);
    const [openOTC, setOpenOTC] = useState(false);
    const [openBabi, setOpenBabi] = useState(false);
    const [openNutriation,setOpenNutration]=useState(false);
    const [openFoods,setOpenFoods]= useState(false);
    const [openDevice,setOpenDevice]=useState(false);
    const [openPersonal,setOpenPersonal]=useState(false);
    
    
    return (
        <Grid>
            <Paper sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button
                        onMouseOver={() => {
                            setOpenMedicine(true);
                        }}
                        sx={{
                            textTransform: 'capitalize',
                            color: 'black',
                            fontWeight: 'normal',
                            fontSize: '13px',
                        }}
                        endIcon={<ExpandMore />}
                    >
                        Medicine
                    </Button>
             {/* First Menu items */}
                  
                   <Menu
                        aria-labelledby="demo-positioned-button"
                        sx={{
                            width: '18%',
                            height: '60%',
                            margin: 0,
                            padding: 0,
                            mt: 16,
                        }}
                        open={openMedicine}
                        onClose={() => {
                            setOpenMedicine(false);
                        }}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        <MenuItems/>
                    </Menu>
                           



                <Button
                onMouseOver={()=>setOpenBabi(true)}
                    sx={{
                        textTransform: 'capitalize',
                        color: 'black',
                        fontWeight: 'normal',
                        fontSize: '13px',
                    }}
                    endIcon={<ExpandMore />}
                >
                    BayBy & Mother Care
                </Button>
{/* Seccond menu items */}

                <Menu
                        aria-labelledby="demo-positioned-button"
                        sx={{
                            width: '18%',
                            height: '60%',
                            margin: 0,
                            padding: 0,
                            mt: 16,
                            ml: '120px'
                        }}
                        open={openBabi}
                        onClose={() => {
                            setOpenBabi(false);
                        }}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        <MenuItems/>
                    </Menu>






                <Button


                 onMouseOver={()=>setOpenNutration(true)}
                    sx={{
                        textTransform: 'capitalize',
                        color: 'black',
                        fontWeight: 'normal',
                        fontSize: '13px',
                    }}
                    endIcon={<ExpandMore />}
                >
                    Nautrations & Supplements
                </Button>


          {/* 3rd menu items */}
                <Menu

                        aria-labelledby="demo-positioned-button"
                        sx={{
                            width: '18%',
                            height: '60%',
                            margin: 0,
                            padding: 0,
                            mt: 16,
                            ml: '400px'
                        }}
                        open={openNutriation}
                        onClose={() => {
                            setOpenNutration(false);
                        }}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        <MenuItems/>
                    </Menu>





                <Button
                 onMouseOver={()=>setOpenFoods(true)}
                    sx={{
                        textTransform: 'capitalize',
                        color: 'black',
                        fontWeight: 'normal',
                        fontSize: '13px',
                    }}
                    endIcon={<ExpandMore />}
                >
                    Foods & Beverages
                </Button>

{/* 4rd Menu items */}

<Menu

                        aria-labelledby="demo-positioned-button"
                        sx={{
                            width: '18%',
                            height: '60%',
                            margin: 0,
                            padding: 0,
                            mt: 16,
                            ml: '590px'
                        }}
                        open={openFoods}
                        onClose={() => {
                            setOpenFoods(false);
                        }}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        <MenuItems/>
                    </Menu>                        




                <Button

             onMouseOver={()=>setOpenDevice(true)}

                    sx={{
                        textTransform: 'capitalize',
                        color: 'black',
                        fontWeight: 'normal',
                        fontSize: '13px',
                    }}
                    endIcon={<ExpandMore />}
                >
                    Devices & Support
                </Button>


{/* 5th Menu  */}


                        <Menu

                        aria-labelledby="demo-positioned-button"
                        sx={{
                            width: '18%',
                            height: '60%',
                            margin: 0,
                            padding: 0,
                            mt: 16,
                            ml: '748px'
                        }}
                        open={openDevice}
                        onClose={() => {
                            setOpenDevice(false);
                        }}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        <MenuItems/>
                    </Menu>  



                <Button

                onMouseOver={()=>setOpenPersonal(true)}




                    sx={{
                        textTransform: 'capitalize',
                        color: 'black',
                        fontWeight: 'normal',
                        fontSize: '13px',
                    }}
                    endIcon={<ExpandMore />}
                >
                    Personal Care
                </Button>




 {/* Personal and care menu items  */}



                        <Menu

                        aria-labelledby="demo-positioned-button"
                        sx={{
                            width: '18%',
                            height: '60%',
                            margin: 0,
                            padding: 0,
                            mt: 16,
                            ml: '890px',
                            

                        }}
                        open={openPersonal}
                        onClose={() => {
                            setOpenPersonal(false);
                        }}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        <MenuItems/>
                    </Menu>  


                <Button


            onMouseOver={()=>setOpenOTC(true)}

                    sx={{
                        textTransform: 'capitalize',
                        color: 'black',
                        fontWeight: 'normal',
                        fontSize: '13px',
                    }}
                    endIcon={<ExpandMore />}
                >
                    OTC And Health Need
                </Button>


{/* Menu bar */}


                        <Menu

                        aria-labelledby="demo-positioned-button"
                        sx={{
                            width: '18%',
                            height: '60%',
                            margin: 0,
                            padding: 0,
                            mt: 16,
                            ml: '890px',
                            

                        }}
                        open={openPersonal}
                        onClose={() => {
                            setOpenPersonal(false);
                        }}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        <MenuItems/>
                    </Menu>  




                    <Menu

        aria-labelledby="demo-positioned-button"
        sx={{
    width: '18%',
    height: '60%',
    margin: 0,
    padding: 0,
    mt: 16,
    ml: '1080px',
    

}}
open={openOTC}
onClose={() => {
    setOpenOTC(false);
}}
anchorOrigin={{
    vertical: 'top',
    horizontal: 'left',
}}
transformOrigin={{
    vertical: 'top',
    horizontal: 'left',
}}
>
<MenuItems/>
</Menu>  



            </Paper>
        </Grid>
    );
};

export default MenuBar;
