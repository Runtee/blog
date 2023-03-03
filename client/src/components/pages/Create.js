import Box from '@mui/material/Box';
import Navbar from '../Navbar';
import New from '../new';


export default function Home(props){
  const {write,setWrite} = props;
    return(
      <Box sx={{ bgcolor: '#ffffff' }} >
        <Navbar/>
        <New write= {write} setWrite= {setWrite}/>
      </Box>
    )
  }