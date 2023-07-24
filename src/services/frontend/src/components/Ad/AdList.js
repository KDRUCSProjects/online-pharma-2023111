import React from 'react';
import { Box, Breadcrumbs, Container, Grid, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from 'react-router-dom';
import AdCard from './AdCard';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getObjects } from '../Api/Api';

const AdList = () => {
    const { name, id } = useParams();
    const { data, error, isError, isLoading } = useQuery(['ad_list'], () => {
        return getObjects('ads');
    });
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
                                        xs={12}
                                    >
                                        <Link
                                            to={`/ad/detail/${ad.category.name}/${ad.title}/${ad.id}/`}
                                            style={{
                                                textDecoration: 'none',
                                            }}
                                        >
                                            <AdCard key={ad.id} ad={ad} />
                                        </Link>
                                    </Grid>
                                </>
                            ) : null}
                        </>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default AdList;
