import { Box } from "@mui/system";
import { Button, Typography } from '@mui/material';
import MediaCard from "./Card2";

export default function Categories() {
    return (
        <Box sx={{ padding: "5%", borderBottom: '0.5px ridge #bbbbbb' }}>
            <Box sx={{display:'flex'}}>
            <Typography
                variant="h5"
                component="div">
                Categories
            </Typography>
            <Typography
                variant="h6"
                component="div"
                sx={{marginLeft:'auto',fontWeight:'100','&:hover': {textDecoration:'underline',fontWeight:'100', cursor:"pointer"}}}>
                See all categories {'>'}
            </Typography>
            </Box
            >
            <Button>
            <MediaCard/>
          
            </Button>
            <Button>
            <MediaCard/>
          
            </Button>
            <Button>
            <MediaCard/>
          
            </Button>
            <Button>
            <MediaCard/>
          
            </Button>
            <Button>
            <MediaCard/>
          
            </Button>
            <Button>
            <MediaCard/>
          
            </Button>

        </Box>
    )
}


