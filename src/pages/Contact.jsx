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
                    <p>Monday To Friday,9AM to 5.30PM</p>

                </div>
                <div className="ctext">
                    <h1>Email</h1>
                    <p>luko.khatigroupofindustries.com</p>
                </div>
                <div className="ctext">
                    <h1>Address</h1>
                    <p>Khati Groups of Industries,Village Bijalpur, Indore, Madhya Pradesh 452012,India</p>
                    <p>Customer care & contact address: Same as manufacturer's address.</p>

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