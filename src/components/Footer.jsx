import React from 'react'
import "../components/Footer.css"
import Luko from "../../images/Luko.png"
const Footer = () => {
    return (
        <>
            <div className="footer-wrap">
                <div id="footer">


                    <img src={Luko} alt="" />
                    <div id="footer-bottom">
                        <p>© 2024 Luko. All rights reserved.</p>
                        <div className="footer-content">
                            <div className="lft">
                                <h2><i>OFFICE</i></h2>
                                <p>
                                    khati Groups Of Industries
                                    642,Bijalpur
                                    Indore,Madhya Pradesh
                                    452012,India
                                </p>
                            </div>
                            <div className="rght">
                                <h2><i>CONTACT</i></h2>
                                <p>9826583875 <br />
                                    Monday-Friday
                                    10:00 AM - 5:00 PM
                                    luko.khatigroupofindustries@gmail.com</p>
                            </div>
                        </div>



                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer