import * as React from 'react';
import Home from './components/pages/home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Blog from './components/pages/Blog';
import All from './components/pages/All';
import Create from './components/pages/Create'
import { useState } from 'react';
function App() {
  const [write,setWrite] = useState("")
  console.log(write)
  return (<>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/blog" element={<Blog write= {write}/>}/>
      <Route path="/all-post" element={<All/>}/>
      <Route path="/create" element={<Create write= {write} setWrite= {setWrite}/>}/>
      </Routes>
  </BrowserRouter>
  </>
    
    
  );
}
export default App;
