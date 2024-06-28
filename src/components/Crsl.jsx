import React from 'react'
import "../components/Crsl.css";
import n2 from "../../images/nutrition2.png"
import n3 from "../../images/nutrition2.png"

import n4 from "../../images/nutrition2.png"

import n5 from "../../images/nutrition2.png"


const Crsl = () => {
  return (
    <div className="scroller">
      <div className="scroller_in">
        <img src={n2} alt="" />
        <img src={n3} alt="" />
        <img src={n5} alt="" />
        <img src={n4} alt="" />

      </div>
      <div className="scroller_in">
        <img src={n2} alt="" />
        <img src={n3} alt="" />
        <img src={n5} alt="" />
        <img src={n4} alt="" />

      </div>
    </div>
  )
}

export default Crsl;