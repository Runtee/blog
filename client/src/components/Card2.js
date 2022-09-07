import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import image2 from "../images/bruce-mars-GzumspFznSE-unsplash.jpg"

export default function Card2() {
    return (
            <Card sx={{ maxWidth: '180px', minWidth: '180px', '&:hover': {
                opacity:'0.5'
              } }}>
                <CardMedia
                    component="img"
                    height="190"
                    image={image2}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
    );
}
