import {styled} from '@mui/material/styles';
import { Button,InputBase,Typography } from '@mui/material';
import { Box } from '@mui/system';

export default function Subscribe() {
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
         backgroundColor:'#9595957a' ,
         padding:'10px 20px',
         borderRadius:'5px',
        
      }));
    return(
        <Box  spacing={2} sx={{padding:"5%",
        
         }}>
            <Box sx={{
         width:'100%',display:'flex', alignItems: 'center',
         justifyContent: 'center',}}>
            <div>
            <Typography
            variant="h5"
            component="div" 
            sx={{textAlign:'left',margin: '3px 0', fontWeight:700}}
            >
                Subscribe  Now!!!

            </Typography>
         
            <Typography
            variant="p"
            component="div"
            sx={{textAlign:'left',fontSize:'20px',margin: '3px 0', fontWeight:100}}
            >
                Subscribe to our newsletter to get the latest updates
            </Typography>
            </div>
            </Box>
            
            <Box sx={{margin:'3px 0' ,display:'flex', alignItems: 'center',
        justifyContent: 'center'}}>
            <StyledInputBase
              placeholder="Enter your email address…"
              inputProps={{ 'aria-label': 'search' }}
            />
            <Button sx={{marginLeft:'30px',backgroundColor:'#0a32ab', color:'white',padding:'14px 30px','&:hover': {backgroundColor:'#0139e3'}}}>
                Subscribe
            </Button>
            </Box>
            
        </Box>
    )
}