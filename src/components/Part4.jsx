import React from 'react'
import "../components/Part4.css"
import { useRef } from "react";
import gsap from "gsap";
import Crsl from './Crsl';
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Part4 = () => {
    const box6 = useRef();
    useGSAP(() => {
        var tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".part4",

                start: "40% 50%",
                end: "50% 50%",
                scrub: true,
             

            }
        });
        tl3.to(".certi-cont", {
          
            opacity:1,
        })
        tl3.to(".certi-img", {
            opacity: "1",
            mixBlendMode:"darken"
        })
       
      


    }, { scope: box6 })
    return (
        <>
            <div className="part4-wrapper" ref={box6}>
                <div className="part4">
                    <div className="container">
                        <div className="certi-cont">
                            <h1>
                                Fourmulated As Per </h1>
                                <br />
                                <h1><i>Indian Climate</i></h1>
                            <p>Our dog food is specially formulated to meet the needs of dogs living in the Indian climate. It includes enhanced moisture content for hydration, easily digestible ingredients for hot weather, and essential nutrients to support overall health and energy. Keep your dog happy and healthy, no matter the season</p>
                        </div>
                        <div className="certi-img">
                            <img src="images/guranteeimage.jpeg" alt="" />
                            <img src="images/mii.png" alt="" />
                        </div>
                    </div>

                </div>
            </div>
            
        </>
    )
}

export default Part4