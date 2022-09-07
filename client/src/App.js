import * as React from 'react';
import Box from '@mui/material/Box';
import Navbar from './components/Navbar';
import Center from './components/Center';
import Trending from './components/Trending';
import Categories from './components/Categories';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Box sx={{ bgcolor: '#ffffff' }} >
      <Navbar />
      <Center />
      <Trending />
      <Categories/>
      <Subscribe/>
      <Footer/>
    </Box>
  );
}
export default App;
