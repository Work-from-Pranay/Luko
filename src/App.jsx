import './App.css'
import { useRef } from "react";
import gsap from "gsap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

import Homepage from './pages/Homepage';
import About from './pages/About'
import Navbar from './components/Navbar'


function App() {



  return (
    <>
      <BrowserRouter>

        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} /> */}
        </Routes>
        
      </BrowserRouter>

    </>
  )
}

export default App
