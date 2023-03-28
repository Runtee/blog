import Box from '@mui/material/Box';
import Navbar from '../Navbar';
import Write from '../write/Write';



export default function Home(props){
  const {write,setWrite} = props;
    return(
      <Box sx={{ bgcolor: '#ffffff' }} >
        <Navbar/>
        <Write write= {write} setWrite= {setWrite}/>
      </Box>
    )
  }