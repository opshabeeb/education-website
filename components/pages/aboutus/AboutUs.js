import React from 'react'
import miya from '../../../assets/img/miya.jpg'
import './AboutUs.css'
function AboutUs() {
  return (
    <div className="container">
        <div className="aboutus-container">
            <div className="team-members">
                <h2>Our Team</h2>
                <div className="member-card">
                    <img className="member-image" src={miya} />
                    <h3 className='member-name'>Miya kwarezma</h3>
                    <p className='member-role'>co-founder</p>

                    
                </div>
            </div>
            <div className="aboutus-desc">
                <h1 className='aboutus-heading'>About Us</h1>
                <p>
                    with a passion of of empowering learners of all ages,our misiion is to make edcation accessible,engaging and personalaized through our cutting edge educational technology platform
                </p>
            </div>
        </div>
    </div>
  )
}

export default AboutUs