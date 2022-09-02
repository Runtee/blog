import * as React from 'react';
import Box from '@mui/material/Box';
import Navbar from './components/Navbar';
import { height } from '@mui/system';

function App() {
  return (
    <Box sx={{ bgcolor: '#eff0f3', height: '100vh' }} >
<Navbar/>
    </Box>
  );
  }
export default App;
