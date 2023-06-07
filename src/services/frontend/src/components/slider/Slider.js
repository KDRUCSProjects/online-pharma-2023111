import React, { useState } from 'react';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
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
                height: {lg: '100vh',xs: '15vw'},
                width: {lg: '90vw',xs: '220px'},
            }}
        >
            <ArrowCircleLeftIcon
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
                    display: {xs: 'block',lg:'block',md:'block',sm:'block'},
                    color:'#76bc21',
                    marginTop:{lg:'0px',xs:'65px'},
                    marginLeft:{lg:'0px',xs:'100px'},

                    
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
                                    width: {lg: '1000px',xs: '360px'},
                                    height: {lg:'350px',xs:'120px'},
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: {lg:'14px',xs:'150px'},
                                    borderRadius: '15px',
                                }}
                            ></Grid>
                        )}
                    </Grid>
                );
            })}
            <ArrowCircleRightIcon
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
                    display: {xs: 'block',lg:'block',md:'block',sm:'block'},
                    color:'#76bc21',
                    marginTop:{lg:'0px',xs:'65px'},
                    marginRight:{lg:'0px',xs:'100px'},
                }}
            />
        </Grid>
    );
};

export default Slider;
