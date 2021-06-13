import React from "react"
import {FaTwitter, FaMailBulk, FaRocketchat, FaStore } from 'react-icons/fa';
import {IconContext } from "react-icons"

function ContactOurTeam(props) {


    return (
        <section>
            <h2>Contact Our Team</h2>

            <ul className="dateOpen">
                <li>Monday to Friday: 9am-8pm</li>
                <li>Saturday: 9am-6pm</li>
                <li>Sunday: 10am-7pm</li>
            </ul>

            <IconContext.Provider value={{className: 'iconsUlContact' }} > 

            <ul  className="ulContact">
                <li>
                    <h3> <FaRocketchat /> Chat Us</h3>
                    <p>We should answer you within  few minutes</p>
                </li>
                <li>
                    <h3><FaTwitter /> Twitter</h3>
                    <p>We should answer you within 1 hour</p>
                </li>
                <li>
                    <h3><FaMailBulk /> Email Us</h3>
                    <p>We should answer you within in few minutes</p>
                </li>
                <li>
                    <h3><FaStore /> Contact your store</h3>
                    <p>Find your store from list</p>
                </li>
            </ul>

            </IconContext.Provider >

        </section>
    )

}

export default ContactOurTeam
