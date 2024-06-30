import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
import "../components/Hero.css"

import dog1 from "../../images/dog1.jpg"
import dog2 from "../../images/dog2.jpg"

import dog3 from "../../images/dog3.jpg"

import dog4 from "../../images/dog4.jpg"

import dog5 from "../../images/dog5.jpg"

import dog6 from "../../images/dog6.jpg"

import dog7 from "../../images/dog7.jpg"

import dog8 from "../../images/dog8.jpg"

import dog9 from "../../images/dog9.jpg"

import Luko from "../../images/Luko.png"




const Hero = () => {
  const box = useRef();
  useGSAP(() => {

    var tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "50% 50%",
        end: "260% 50%",
        scrub: 0.1,
        pin: true,
      }
    })
    const isMobile = window.innerWidth <= 500;
    const imgWidth = isMobile ? "60%" : "30%";

    tl5.to(".rotate-div", {
      rotate: -10,
      scale: 0.9,
    }, 'a')
      .to("#row-div-1", {
        marginTop: "-45%",
      }, 'a')
      .to("#row-div-2", {
        marginTop: "-32%",
      }, 'a')
      .to("#row-div-3", {
        marginTop: "-26%",
      }, 'a')
      .to("#row-div-4", {
        marginTop: "-45%",
      }, 'a')
      .to("#row-div-5", {
        marginTop: "-15%",
      }, 'a')
      .to(".overlay-div img", {
        opacity: "1",
        width: imgWidth,
      }, 'a')
      .to(".overlay-div h4", {
        opacity: "1",

      }, 'a')
      .to(".overlay-div", {
        backgroundColor: "#8b0a0ac6",
      }, 'a')
      .to(".overlay-text p", {
        opacity: "0",
        top: "87%",
      }, 'a')
      .to("#hero-que ", {
        opacity: "0",
        top: 0,
      }, 'a')
      
      .to("nav", {
        opacity: 1,
      }, 'a')
  }, { scope: box })
  return (
    <>
      <div id="main" ref={box}>
        <nav>
          <div className="lft-nav">
            <img src={Luko} alt="" />
          </div>
          <div className="rt-nav">

          </div>

        </nav>
        <div className="hero">
          <div className="overlay-text">
            <h3 id="hero-que">Seeking the Best Dog Meals?</h3>
            <p id="hero-p">Scroll down</p>
          </div>

          <div className="content-hero">
            <div className="rotate-div">
              <div id="row-div-1" className="row-div">
                <div className="img-div">
                  <img src={dog1} alt="" />
                </div>
                <div className="img-div">
                  <img src={dog2} alt="" />


                </div>
                <div className="img-div">
                  <img src={dog3} alt="" />


                </div>
                <div className="img-div">
                  <img src={dog4} alt="" />
                </div>


              </div>
              <div id="row-div-2" className="row-div">
                <div className="img-div">
                  <img src={dog9} alt="" />
                </div>
                <div className="img-div">
                  <img src={dog7} alt="" />


                </div>
                <div className="img-div">
                  <img src={dog6} alt="" />


                </div>
                <div className="img-div">
                  <img src={dog4} alt="" />
                </div>

              </div>
              <div id="row-div-3" className="row-div">
                <div className="img-div">
                  <img src={dog5} alt="" />
                </div>
                <div className="img-div">
                  <img src={dog4} alt="" />


                </div>
                <div className="img-div">
                  <img src={dog3} alt="" />


                </div>
                <div className="img-div">
                  <img src={dog1} alt="" />
                </div>

              </div>
              <div id="row-div-4" className="row-div">
                <div className="img-div">
                  <img src={dog8} alt="" />
                </div>
                <div className="img-div">
                  <img src={dog2} alt="" />


                </div>
                <div className="img-div">
                  <img src={dog1} alt="" />


                </div>
                <div className="img-div">
                  <img src={dog9} alt="" />
                </div>

              </div>
              <div id="row-div-5" className="row-div">
                <div className="img-div">
                  <img src={dog1} alt="" />
                </div>
                <div className="img-div">
                  <img src={dog2} alt="" />


                </div>
                <div className="img-div">
                  <img src={dog9} alt="" />


                </div>
                <div className="img-div">
                  <img src={dog6} alt="" />
                </div>

              </div>
            </div>
            <div className="overlay-div">
              <img src={Luko} alt="" />
              <h4>The Balance Your Buddy Deserves</h4>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default Hero