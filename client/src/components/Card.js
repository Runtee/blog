import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image2 from "../images/bruce-mars-GzumspFznSE-unsplash.jpg"
import { Grid } from '@mui/material';

export default function MediaCard() {
    return (
             <Grid item xs={12} md={6} lg={4} sx={{ flexGrow: 1,borderColor:'#002fba' }}>

            <Card sx={{ maxWidth: '100%', minWidth: '100%',  }}>
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
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button sx={{marginLeft:'auto'}} size="small">Read More</Button>
                </CardActions>
            </Card>
            </Grid>
    );
}
