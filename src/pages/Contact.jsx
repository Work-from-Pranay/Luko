import React from 'react'
import "../pages/Contact.css"
import sneeker from "../../images/sneeker.png"
import lp from "../../images/leftpeek.png"

const Contact = () => {
    return (
        <div className="contact-wrap">
            <div className="con-content">
                <div className="ctext">
                    <h1>Timing</h1>

                </div>
                <div className="ctext">
                    <h1>call</h1>
                </div>
                <div className="ctext">
                    <h1>email</h1>

                </div>
            </div>
            <div className="snimg">
                <img src={sneeker} alt="" />
            </div>
            <div className="lp">
                <img src={lp} alt="" />
            </div>
        </div>
    )
}

export default Contact