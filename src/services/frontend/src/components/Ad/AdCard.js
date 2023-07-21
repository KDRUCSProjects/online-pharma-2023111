import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Card, CardContent, CardMedia, Stack } from '@mui/material';

const AdCard = (props) => {
    const data = props.ad;
    return (
        <Card sx={{ height: 270, marginTop: 2, marginLeft: 2 }}>
            <CardMedia
                component="img"
                height="160"
                image={data.images[0].image}
                alt="hello"
            />
            <CardContent>
                <Stack
                    direction="row"
                    spacing={1}
                    justifyContent="space-between"
                    mb={1}
                >
                    <Box align="left">
                        <Typography
                            variant="h6"
                            sx={{
                                fontSize: {
                                    lg: '20px',
                                    sm: '20px',
                                    xs: '20px',
                                    md: '16px',
                                },
                            }}
                        >
                            {data.title}
                        </Typography>
                    </Box>
                    <Stack
                        direction="row"
                        justifyContent={'flex-end'}
                        spacing={1}
                    ></Stack>
                </Stack>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        fontSize: '14px',
                        fontWeight: 'bold',
                    }}
                >
                    <Typography
                        variant="h6"
                        fontSize={16}
                        color="#880e4f"
                        display={'inline'}
                        align="right"
                    >
                        {data.sell_price}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default AdCard;
