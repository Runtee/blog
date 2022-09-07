import { Box, Grid, Typography } from "@mui/material";
import image1 from "../images/cookie-the-pom-gySMaocSdqs-unsplash.jpg"

export default function Center() {
    return (
        <Box sx={{ backgroundColor: "#c7d1d6", padding: "5% 5%", flexGrow: 1 }}>
            <Grid container spacing={2}>

                <Grid item xs={12} md={6} sx={{ flexGrow: 1 }} >
                    <div style={{padding:'4% 0'}}>
                    <Typography
                        variant="h1"
                        component="div"
                    >
                        Make better

                        coffee
                    </Typography>
                    <Typography
                        variant="p"
                        component="div"
                        sx={{fontSize:'25px', fontWeight: 100,marginTop:'10px'}}
                    >
                        why learn how to blog?
                    </Typography>
                    </div>
                    
                </Grid>
                <Grid item xs={12} md={6} sx={{ flexGrow: 1 }}>
                    <img src={image1} alt="img" style={{ width: '100%', height: '400px' }} />
                </Grid>
            </Grid>
        </Box>
    )
}