import React from 'react'
import "../components/Part3.css"
import { useRef } from "react";
import gsap from "gsap";
import Crsl from './Crsl';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
import pack from "../../images/Luko_Dog_Food_Box_F[1].png"

const Part3 = () => {
    const box6 = useRef();
    useGSAP(() => {
        var tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".part3",

                start: "10% 50%",
                end: "50% 50%",
                scrub: true,
             

            }
        });
        tl3.to(".content-luko", {
            opacity: "1",
        })
        tl3.to(".img-div-luko img", {
            opacity: "1",
        })
       
      


    }, { scope: box6 })

    return (
        <>
            <div className="part3-wrap" ref={box6} >
            <div className="rounded-div-wrapper-b">
                    <div className="rounded-div-b"></div>

                </div>

                <div className="part3" >

                    <div className="container-3">
                        <div className="content-luko">
                            <h1>What we <i>Serve</i>??</h1>

                            <p><i>Luko's</i> premium dog food combines high-quality meat and chicken to ensure a nutritious and delicious meal. Each bite supports your dog's health, vitality, and happiness, making Luko a trusted choice for pet owners who prioritize quality and care.</p>
                            <Crsl></Crsl>
                            
                        </div>
                        <div className="img-div-luko">

                            <img src={pack} alt="" />
                        </div>
                    </div>
                    
                </div>
            </div>
        </>

    )
}

export default Part3