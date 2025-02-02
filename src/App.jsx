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
import Service from './pages/Service';
import Contact from './pages/Contact';



function App() {



  return (
    <>
      <BrowserRouter>

        <Navbar></Navbar>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<Contact />} />


          <Route path="/" element={<Homepage />} />
          {/* <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} /> */}
        </Routes>
        
        
      </BrowserRouter>

    </>
  )
}

export default App
