import React from 'react';
import { Box, Button, Container, Grid, TextField } from '@mui/material';
const ComplaintForm = () => {
    return (
        <Container>
            <Grid container>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mt={4}>
                    <Box>
                        <TextField
                            placeholder="What's your complaint"
                            multiline
                            rows="6"
                            borderRadius={5}
                            sx={{
                                width: {
                                    lg: '35%',
                                    md: '35%',
                                    xl: '35%',
                                    sm: '100%',
                                    xs: '100%',
                                },
                                borderRadius: '20px',
                                outline: '0px',
                                border: '0px',
                            }}
                            InputProps={{
                                style: {
                                    borderRadius: '20px',
                                },
                            }}
                        />
                    </Box>
                    <Button
                        sx={{
                            width: '140px',
                            height: '40px',
                            bgcolor: '#76bc21',
                            color: 'white',
                            mt: 4,
                            ':hover': { bgcolor: '#76bc21' },
                            borderRadius: '15px',
                        }}
                    >
                        SUBMIT
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ComplaintForm;
