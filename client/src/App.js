import * as React from 'react';
import Home from './components/pages/home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Blog from './components/pages/Blog';
import All from './components/pages/All';

function App() {
  return (<>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/blog" element={<Blog />}/>
      <Route path="/all-post" element={<All/>}/>
      </Routes>
  </BrowserRouter>
  </>
    
    
  );
}
export default App;
