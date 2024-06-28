import './App.css'
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
import Part2 from './components/Part2';
import Homepage from './pages/Homepage';

function App() {

 

  return (
    <>
      <Homepage></Homepage>
      
    </>
  )
}

export default App
