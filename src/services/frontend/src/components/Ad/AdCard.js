import * as React from 'react';
import Typography from '@mui/material/Typography';
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Container,
    Stack,
} from '@mui/material';

const AdCard = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <Card sx={{ height: 270, marginTop: 2, marginLeft: 2 }}>
            <CardMedia
                component="img"
                height="160"
                image="http://localhost:8000/frontend/static/images/d1.avif"
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
                            Terbiderm Cream 10g
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
                        200$
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default AdCard;
