import { Box, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
export default function Footer() {
    return (
        <Box  spacing={2} sx={{ padding: "3% 5%", backgroundColor: '#f5f5f5' }}>
            <Box  sx={{display:'flex', alignItems: 'center',
         justifyContent: 'center',}}>
                <GitHubIcon fontSize={'large'} sx={{marginRight:'20px', '&:hover': {
                opacity:'0.7'
              } }}
              />
                <EmailIcon fontSize={'large'} sx={{marginRight:'20px', '&:hover': {
                opacity:'0.7'
              } }}/>
                <TwitterIcon fontSize={'large'} sx={{marginRight:'20px', '&:hover': {
                opacity:'0.7'
              } }}/>
                <LinkedInIcon fontSize={'large'} sx={{marginRight:'20px', '&:hover': {
                opacity:'0.7'
              } }}/>
                <FacebookIcon fontSize={'large'} sx={{marginRight:'20px', '&:hover': {
                opacity:'0.7'
              } }} />
            </Box>
              <Box>
                <Typography
                variant="p"
            component="div"
            sx={{textAlign:'center',fontSize:'20px',margin: '20px 0 0 0', fontWeight:100}}>
                Kevin Sookocheff  • © 2022  •  Kevin Sookocheff
                </Typography>
              </Box>
        </Box>
    )
}