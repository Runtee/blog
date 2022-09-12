import { Box, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
export default function Footer() {
    return (
        <Box sx={{ padding: "1.5% 5%", backgroundColor: '#f5f5f5' }}>
            <Box  sx={{display:'flex', alignItems: 'center',
         justifyContent: 'center',}}>
                <GitHubIcon fontSize={'medium'} sx={{marginRight:'20px', '&:hover': {
                opacity:'0.7'
              } }}
              />
                <EmailIcon fontSize={'medium'} sx={{marginRight:'20px', '&:hover': {
                opacity:'0.7'
              } }}/>
                <TwitterIcon fontSize={'medium'} sx={{marginRight:'20px', '&:hover': {
                opacity:'0.7'
              } }}/>
                <LinkedInIcon fontSize={'medium'} sx={{marginRight:'20px', '&:hover': {
                opacity:'0.7'
              } }}/>
                <FacebookIcon fontSize={'medium'} sx={{marginRight:'20px', '&:hover': {
                opacity:'0.7'
              } }} />
            </Box>
              <Box>
                <Typography
                variant="p"
            component="div"
            sx={{textAlign:'center',fontSize:'18px',margin: '18px 0 0 0', fontWeight:100}}>
                Kevin Sookocheff  • © 2022  •  Kevin Sookocheff
                </Typography>
              </Box>
        </Box>
    )
}