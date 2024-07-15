import React from 'react'
import "../pages/About.css"
import Part3 from '../components/Part3'
import Footer from '../components/Footer';
import mimg from "../../images/abdog.png"



const About = () => {
  return (
    <>
      <div className="about-wrap">
        <div className="content-about">
          <h1>Welcome to Luko</h1>
          <div className="para-con">
            <p>At <i>Luko</i>, we make tasty and healthy dog food using the best natural ingredients. Owned by Khati Group of Industries, our goal is to keep your furry friend happy and healthy with every bite. We believe every dog deserves delicious and nutritious meals. Make mealtime special with Luko – where every bite is pure love!</p>

            <p>At Khati Groups of Industries, we understand that your furry friends are family, and their health and happiness are our top priorities. Luko is formulated with premium ingredients to support your dog's gut health and overall well-being, ensuring they lead a vibrant and active life.</p>
          </div>

        </div>
        <div className="about2">
          <h3>As per AAFCO (Association of American Feed Control Officials) </h3>
          <div className="about-chicken">
            <div className="real">
              <h1>Real Chicken</h1>
              <p>The clean combination of flesh and skin with or without accompanying bone, derived from the parts or whole carcasses of chicken or a combination there of, exclusive of feathers, heads, feet and entrails.</p>
            </div>
            <div className="chickmeal">
              <h1>Chicken Meal</h1>
              <p>Ground chicken meal is a dry product made from clean chicken flesh and skin with or without accompanying bone derived from whole carcasses of chicken. this excludes feathers, heads, feet, and entrails. It's a finely ground ingredient</p>
            </div>
            <div className="cbp">
              <h1>Chicken By-product Meal</h1>
              <p>consists of the ground, rendered, clean parts of the carcass of slaughtered chickens, such as necks, feet, undeveloped eggs and intestines</p>
            </div>
          </div>
        </div>
        <div className="abdog">
          <img src={mimg} alt="" />
        </div>
        <Footer></Footer>
      </div>

    </>
  )
}

export default About