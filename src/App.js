
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     
      
      <Navbar/>
      <Routes>
      
          <Route index element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/contact" element={<Contact/>} />
        
      </Routes>
   
    </div>
    </BrowserRouter>
      
  );
}

export default App;
 