import { Grid,Typography } from '@mui/material';
import Card from './Card';

export default function Tranding() {
    return(
        <Grid container spacing={2} sx={{padding:"5%",borderBottom:'0.5px ridge #bbbbbb' }}>
            <Grid item xs={12}>
            <Typography
            variant="h5"
            component="div"
            >
                Featured Articles 
            </Typography>
            </Grid>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </Grid>
    )
}