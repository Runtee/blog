import { GitHub, LinkedIn, Mail, Twitter } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";

export default function Center() {
    return (
        <Box sx={{ backgroundColor: "#c7d1d6", padding: "20px 5%", flexGrow: 1 }}>
            <Grid container spacing={2}>

                <Grid item xs={12} md={6} sx={{ flexGrow: 1 }} >
                    <div style={{padding:'4% 0'}}>
                    <Typography
                        variant="h2"
                        component="div"
                    >
                       Explore the Possibilities
                    </Typography>
                    <Typography
                        variant="p"
                        component="div"
                        sx={{fontSize:'20px', fontWeight: 100,marginTop:'20px'}}
                    >
                        Welcome to the personal blog of Nonso. I love to code, read and also write about programming and tech related articles.
                    </Typography>
                    <Typography
                        variant="p"
                        component="div"
                        sx={{fontSize:'18px', fontWeight: 100,marginTop:'20px'}}
                    >
                        Follow me on my socials 
                    </Typography>
                    <div style={{margin: "20px 0", display:"flex", alignItems:"flex-start"}}>
                    <GitHub sx={{marginRight:"10px", color:"#1c1c1c"}}/>
                    <LinkedIn sx={{marginRight:"10px", color:"#1c1c1c"}}/>
                    <Mail sx={{marginRight:"10px", color:"#1c1c1c"}}/>
                    <Twitter sx={{color:"#1c1c1c"}}/>   
                    </div>
                    </div>
                    
                </Grid>
                <Grid item xs={12} md={6} sx={{ flexGrow: 1 }}>
                    <img src="assets/cookie-the-pom-gySMaocSdqs-unsplash.jpg" alt="img" style={{ width: '100%', height: '400px' }} />
                </Grid>
            </Grid>
        </Box>
    )
}