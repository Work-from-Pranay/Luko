import React from 'react'
import "../components/Part2.css"
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Part2 = () => {
    const box2 = useRef();
    useGSAP(() => {
        var tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".content",

                start: "20% 50%",
                end: "50% 50%",
                scrub: true,

            }
        });
        tl3.to(".para p", {
            opacity: "1",
        })
       
      


    }, { scope: box2 })
    return (
        <>
        <div className="part2-wrap " ref={box2}>

            <div className="part2" >
                <div className="rounded-div-wrapper">
                    <div className="rounded-div"></div>

                </div>
                <div className="wrapper" >

                    <div className="content" >

                        <div className="para">
                            <p>Welcome to <i>Luko</i>, where every meal is crafted with love and expertise to nourish your beloved canine companion. Our premium dog food is thoughtfully formulated with high-quality ingredients to support your dog's health, vitality, and happiness.

                                From puppies to seniors, we cater to dogs of all ages and sizes, ensuring they receive the nutrition they need for a life full of tail-wagging moments. Join the Luko family and provide your furry friend with the nourishment they deserve.</p>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
        </>
    )
}

export default Part2