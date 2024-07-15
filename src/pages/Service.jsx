import React from 'react'
import { useRef } from "react";
import { useEffect } from 'react';
import { gsap } from 'gsap';



import pack from "../../images/Luko_Dog_Food_Box_F[1].png"
import "../pages/Service.css"
import Footer from '../components/Footer';
import sdog from "../../images/sdog.png"



const Service = () => {
    const imgDivRef = useRef(null);
    const sref = useRef(null);
    useEffect(() => {
        gsap.fromTo(
            imgDivRef.current,
            { y: 200, opacity: 0,},
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
            
        );
        gsap.fromTo(
            sref.current,
            {  opacity: 0},
            {  opacity: 1, duration: 0.5,  },
            
        );
    }, []);
    return (
        <>
            <div className="service-wrap">
                <div className="service">
                    <div className="simg-div" ref={imgDivRef}>
                        <img src={pack} alt="" />
                    </div>
                    <div className="scontent">
                        <h1>Luko<i>-20kg</i></h1>

                        <p>Introducing Luko Dog Food, now available in a 20kg pack. Our formula features premium chicken and meat, ensuring your dog receives high-quality nutrition. Packed with essential vitamins and minerals, it promotes overall health, a shiny coat, and strong muscles. Deliciously crafted, it supports digestive health and boosts your dog's vitality and energy.</p>
                    </div>
                </div>
                <div className="sdog" ref={sref}>
                    <img src={sdog} alt="" />
                </div>
                <Footer></Footer>

            </div>
        </>
    )
}

export default Service