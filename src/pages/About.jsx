import React from 'react'
import "../pages/About.css"
import Part3 from '../components/Part3'
import Footer from '../components/Footer';


const About = () => {
  return (
    <>
      <div className="about-wrap">
        <div className="content-about">
          <h1>Welcome to Khati Groups Of Industries</h1>
          <div className="para-con">
            <p>We believe in forging lasting relationships with our customers through trust, reliability, and exceptional value. Our commitment is to deliver high-quality products at affordable prices, ensuring that our customers always receive the best in the market.</p>

            <p>One of our flagship products is <i>Luko</i>, crafted with the utmost care and responsibility. At Khati Groups, we understand that your furry friends are family, and their health and happiness are our top priorities. Luko Dog Food is formulated with premium ingredients to support your dog's gut health and overall well-being, ensuring they lead a vibrant and active life.</p>
          </div>

        </div>
        <Footer></Footer>
      </div>

    </>
  )
}

export default About