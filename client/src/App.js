import * as React from 'react';
import Home from './components/pages/home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Blog from './components/pages/Blog';

function App() {
  return (<>
  <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home />}/>
      <Route path="/blog" element={<Blog />}/>

      </Routes>
  </BrowserRouter>
  </>
    
    
  );
}
export default App;
