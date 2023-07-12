import React, { useState } from 'react';
import images from './Images';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import { Grid } from '@mui/material';

const Slider1 = () => {
    const [current, setCurrent] = useState(0);
    const length = images.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {

        setCurrent(current === 0 ? length - 1 : current - 1);
    };
   setInterval(prevSlide,5000)

    return (
        <Grid
            lg={12}
            sm={12}
            md={12}
            xs={12}
            container
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <ArrowCircleLeftIcon
                onClick={prevSlide}
                sx={{
                    position: 'absolute',
                    left: '100px',
                    fontSize: '50px',
                    ":hover": {cursor: 'pointer'}
                }}
            />
            {images.map((image, index) => {
                return (
                    <>
                        {index === current && (
                            <Grid
                                component="img"
                                sx={{
                                    width: {
                                        lg: '90%',
                                        sm: '90%',
                                        xs: '85%',
                                        md: '90%',
                                    },
                                    height: {
                                        lg: '70vh',
                                        xs: '30vh',
                                        md: '55vh',
                                        sm: '55vh',
                                    },
                                    borderRadius: '20px'
                                }}
                                src={image.Image}
                            ></Grid>
                        )}
                    </>
                );
            })}
            <ArrowCircleRightIcon
                className="right-arrow"
                onClick={nextSlide}
                sx={{
                    position: 'absolute',
                    right: '100px',
                    fontSize: '50px',
                    ":hover": {cursor: 'pointer'}
                }}
            />
        </Grid>
    );
};
export default Slider1;


