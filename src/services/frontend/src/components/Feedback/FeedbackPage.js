import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid,Button, InputLabel, Select, MenuItem,handleChange } from '@mui/material';



export default function FeedbackPage() {
    

    const [age, setAge] = React.useState('');
    
  

    return (

        <Grid
        
            sx={{width:'100%',height:'90vh',display:'flex',alignItems:'left',flexDirection:'column',justifyContent:'center'}}
        >


     <Grid 
     
        sx={{width:'60%',height:'15%'}}
     >

        <FormControl >
        
        <RadioGroup
        row
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="FeedbackForm"
            name="radio-buttons-group"
            
        >
            <FormControlLabel  value="FeedbackForm" control={<Radio color="success" />} label="Feedback Form" />
            <FormControlLabel onClick={() => {
                            open ? setOpen(false) : setOpen(true);
                        }} 
                        
            value="ComplaintForm" control={<Radio color="success" />} label="Complaint Form" />
           
        </RadioGroup>
        </FormControl>

    </Grid >

                <Grid sx={{width:'100%',height:'60%'}}>

        <Box
        
        component="form"
            sx={{
              
                '& > :not(style)': { m: 1, width: '25%',ml:'10px' },
            }}
            noValidate
            autoComplete="off"
        
        >


            
        </Box>

       <Box

            component="form"
            sx={{

                  display:'flex',  
                '& > :not(style)': { m: 1, width: '25%',ml:'10px' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField id="outlined-basic" sx={{":onfocus":{borderColor:'lightgray'}}}  label="Your Name" variant="outlined" />
            
            { open ? (
                <>
                    <TextField id="filled-basic" label="Enter a Phone number" variant="outlined" />
                </>  
                
                ) :null }
            {
            /* <TextField id="filled-basic" display="hide" label="Enter a Phone number" variant="outlined" /> */}
           

            


        {/* <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Branch Type</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            >
            <MenuItem value={10}>Online</MenuItem>
            <MenuItem value={20}>Habib Parma Rood</MenuItem>
            </Select>
        </FormControl>
        </Box> */}
{/* 
        <Box sx={{ minWidth: 120 }}>

        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Complaint Type</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            >
            <MenuItem value={10}>Item missing order</MenuItem>
            <MenuItem value={20}>Order Dayled</MenuItem>
            <MenuItem value={20}>Order Naver delivered</MenuItem>
            <MenuItem value={20}>Refunds and payments</MenuItem>
            </Select>
        </FormControl>
        </Box>
                 */}



            </Box>





        <Box sx={{width:'60%',height:'40%'}}>

        <TextField
            id="outlined-multiline-static"
            label="What's your feedback"
            multiline
            rows={4}
            nonenone
            sx={{width:'40%',height:'90%',mt:'1%',ml:'1%',borderRadius:'5px',boder:'0.5px solid lightgray'}}
            
            /> 
            
              
        </Box>

                

     <Button sx={{width:'15%',height:'15%',color:'white',borderRadius:'10px',ml:'10px',mt:'20px',fontWeight:'bold',bgcolor:'#76bc21',
    
       ":hover":{
            bgcolor:'#76bc21',
            color:'white'
        } 
    
    }}
    
    >Submit</Button>
      
        </Grid>    



    </Grid>
  );
}