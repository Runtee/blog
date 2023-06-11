import React, { useState } from 'react';
import Home from './pages/Home';
import {
  Route,Routes,
 
} from "react-router-dom";
import Error from './pages/Error';
import Root from './pages/Root';
import Articles from './pages/Articles';
// import BlogPosts from './pages/BlogPosts';

const App = ()=>{
return(
  <Routes>
    <Route element={<Root/>}>
    <Route path='/' element={<Home/>}/>
    <Route path='/articles' element={<Articles/>}/>
    {/* <Route path='/:id' element={<BlogPosts/>}/>
    <Route path='/page/:pageNumber' element={<BlogPosts/>} />
    <Route path='/blog/:id' element={<Blog/>}/> */}
    <Route path="*" element={<Error />} />
    </Route>
  </Routes>
)
}

export default App;
