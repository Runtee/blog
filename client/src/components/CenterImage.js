import { Box } from "@mui/material";
import centerImage from "../images/bruce-mars-GzumspFznSE-unsplash.jpg"
export default function CenterImage() {
    return(
        <Box sx={{ padding: "1% 8% 5% 8%", flexGrow: 1,height:{md:'520px',sm:'300px' } }}>
            <img src={centerImage} alt='img' style={{maxWidth:'100%', width:'100%', height:'100%'
        }}/>
        </Box>
    )
}