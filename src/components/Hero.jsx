import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
import "../components/Hero.css"


const Hero = () => {
    const box = useRef();
    useGSAP(() => {
      var tl5 = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "50% 50%",
          end: "250% 50%",
          scrub: true,
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
        .to("nav", {
          opacity: 1,
        }, 'a')
    }, { scope: box })
    return (
        <>
          <div id="main" ref={box}>
            <nav>
              <div className="lft-nav">
                <img src="/images/Luko.png" alt="" />
              </div>
              <div className="rt-nav">
                
              </div>
    
            </nav>
            <div className="hero">
              <div className="content-hero">
                <div className="rotate-div">
                  <div id="row-div-1" className="row-div">
                    <div className="img-div">
                      <img src="./images/dog1.jpg" alt="" />
                    </div>
                    <div className="img-div">
                      <img src="./images/dog1.jpg" alt="" />
    
    
                    </div>
                    <div className="img-div">
                      <img src="./images/dog3.jpg" alt="" />
    
    
                    </div>
                    <div className="img-div">
                      <img src="./images/dog4.jpg" alt="" />
                    </div>
    
    
                  </div>
                  <div id="row-div-2" className="row-div">
                    <div className="img-div">
                      <img src="./images/dog3.jpg" alt="" />
                    </div>
                    <div className="img-div">
                      <img src="./images/dog7.jpg" alt="" />
    
    
                    </div>
                    <div className="img-div">
                      <img src="./images/dog6.jpg" alt="" />
    
    
                    </div>
                    <div className="img-div">
                      <img src="./images/dog4.jpg" alt="" />
                    </div>
    
                  </div>
                  <div id="row-div-3" className="row-div">
                    <div className="img-div">
                      <img src="./images/dog1.jpg" alt="" />
                    </div>
                    <div className="img-div">
                      <img src="./images/dog4.jpg" alt="" />
    
    
                    </div>
                    <div className="img-div">
                      <img src="./images/dog6.jpg" alt="" />
    
    
                    </div>
                    <div className="img-div">
                      <img src="./images/dog6.jpg" alt="" />
                    </div>
    
                  </div>
                  <div id="row-div-4" className="row-div">
                    <div className="img-div">
                      <img src="./images/dog8.jpg" alt="" />
                    </div>
                    <div className="img-div">
                      <img src="./images/dog2.jpg" alt="" />
    
    
                    </div>
                    <div className="img-div">
                      <img src="./images/dog9.jpg" alt="" />
    
    
                    </div>
                    <div className="img-div">
                      <img src="./images/dog6.jpg" alt="" />
                    </div>
    
                  </div>
                  <div id="row-div-5" className="row-div">
                    <div className="img-div">
                      <img src="./images/dog1.jpg" alt="" />
                    </div>
                    <div className="img-div">
                      <img src="./images/dog2.jpg" alt="" />
    
    
                    </div>
                    <div className="img-div">
                      <img src="./images/dog3.jpg" alt="" />
    
    
                    </div>
                    <div className="img-div">
                      <img src="./images/dog4.jpg" alt="" />
                    </div>
    
                  </div>
                </div>
                <div className="overlay-div">
                  <img src="/images/Luko.png" alt="" />
                  <h4>The Balance Your Buddy Deserves</h4>
                </div>
              </div>
            </div>
            
          </div>
    
        </>
      )
}

export default Hero