import Box from '@mui/material/Box';
import Navbar from '../Navbar';
import Center from '../Center';
import Trending from '../Trending';
import Categories from '../Categories';
import Subscribe from '../Subscribe';
import Footer from '../Footer';
import New from '../new';
export default function Home(){
    return(
      <Box sx={{ bgcolor: '#ffffff' }} >
        <Navbar />
        <New/>
      </Box>
    )
  }