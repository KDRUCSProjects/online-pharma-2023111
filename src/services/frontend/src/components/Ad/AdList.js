import React from 'react';
import { Box, Breadcrumbs, Container, Grid, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CircularProgress from '@mui/material/CircularProgress';
import { Link, useOutletContext } from 'react-router-dom';
import AdCard from './AdCard';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getObjects, searchObject } from '../Api/Api';

const AdList = () => {
    const { name, id } = useParams();
    const [searchInfo, searchInfoData] = useOutletContext();
    if (searchInfo) {
        const { data, error, isError, isLoading, isSuccess } = useQuery(
            ['ad', searchInfoData],
            () => {
                return searchObject('ads', searchInfoData);
            }
        );
        console.log(data);
        if (isError) {
            return <div>{error.message} Ad Not Found</div>;
        }
        if (isLoading) {
            return (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>
            );
        }
        if (error) {
            return <div>Not loaded</div>;
        }
        if (isSuccess) {
            if (data.data.length == 0) {
                return <div>There is no such ad</div>;
            } else {
                return (
                    <Container>
                        <Breadcrumbs aria-label="breadcrumb" sx={{ mt: 3 }}>
                            <Link
                                to={'/'}
                                style={{
                                    textDecoration: 'none',
                                    color: '#76bc21',
                                }}
                            >
                                <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                                Home
                            </Link>
                            <Typography
                                sx={{ display: 'flex', alignItems: 'center' }}
                                color="text.primary"
                            >
                                Search
                            </Typography>
                        </Breadcrumbs>
                        <Typography
                            variant="h6"
                            color={'#76bc21'}
                            mt={3}
                            pl={1}
                            sx={{ borderLeft: '3px solid #76bc21' }}
                        >
                            Search
                        </Typography>
                        <Grid container>
                            {data.data.map((ad) => (
                                <Grid item key={ad.id}>
                                    <Link
                                        to={`/ad/detail/${ad.id}/`}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <AdCard ad={ad} />
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                );
            }
        }
    } else {
        const { data, error, isError, isLoading } = useQuery(
            ['ad_list'],
            () => {
                return getObjects('ads');
            }
        );
        if (isError) {
            return <div>{error.message} some error</div>;
        }
        if (isLoading) {
            return (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>
            );
        }
        return (
            <Container>
                <Box>
                    <Breadcrumbs aria-label="breadcrumb" sx={{ mt: 3 }}>
                        <Link
                            to={'/'}
                            style={{ textDecoration: 'none', color: '#76bc21' }}
                        >
                            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                            Home
                        </Link>
                        <Typography
                            sx={{ display: 'flex', alignItems: 'center' }}
                            color="text.primary"
                        >
                            {name}
                        </Typography>
                    </Breadcrumbs>
                    <Typography
                        variant="h6"
                        color={'#76bc21'}
                        mt={3}
                        pl={1}
                        sx={{ borderLeft: '3px solid #76bc21' }}
                    >
                        {name}
                    </Typography>
                    <Grid container>
                        {data.map((ad) => (
                            <>
                                {ad.category.id == id ? (
                                    <>
                                        <Grid
                                            item
                                            key={ad.id}
                                            xl={3}
                                            lg={3}
                                            md={4}
                                            sm={6}
                                            xs={6}
                                        >
                                            <AdCard key={ad.id} ad={ad} />
                                        </Grid>
                                    </>
                                ) : null}
                            </>
                        ))}
                    </Grid>
                </Box>
            </Container>
        );
    }
};

export default AdList;
