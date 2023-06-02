import React, { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import images from './Images';

const Slider = (props) => {
    const [current, setCurrent] = useState(0);
    const length = images.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <Grid
            sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItem: 'center',
                margin: '0 auto',
                height: '100vh',
            }}
        >
            <ArrowBackIosIcon
                onClick={prevSlide}
                className="left-arrow"
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '130px',
                    fontSize: '3rem',
                    color: '#000',
                    zIndex: '10',
                    cursor: 'pointer',
                    userSelect: 'none',
                    borderRadius: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            />
            {images.map((slide, index) => {
                return (
                    <Grid
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                        sx={{
                            opacity: '1',
                            transitionDuration: '5s',
                            transform: 'Scale(1.08)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        {index === current && (
                            <Grid
                                component="img"
                                src={slide.Image}
                                alt={''}
                                sx={{
                                    width: '1000px',
                                    height: '350px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: '14px',
                                    borderRadius: '15px',
                                }}
                            ></Grid>
                        )}
                    </Grid>
                );
            })}
            <ArrowForwardIosIcon
                onClick={nextSlide}
                className="right-arrow"
                sx={{
                    position: 'absolute',
                    top: '50%',
                    right: '130px',
                    fontSize: '3rem',
                    color: '#000',
                    zIndex: '10',
                    cursor: 'pointer',
                    userSelect: 'none',
                    borderRadius: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            />
        </Grid>
    );
};

export default Slider;
