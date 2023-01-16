import Box from '@mui/material/Box';
import Navbar from '../Navbar';

import Footer from '../Footer';
export default function Home(){
    return(
      <Box sx={{ bgcolor: '#ffffff' }} >
        <Navbar />

        <Footer/>
      </Box>
    )
  }