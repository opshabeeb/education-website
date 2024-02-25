import React from 'react'
import './Community.css'
import tc from '../../../assets/img/tc.png'

function Community() {
    const handleClick=()=>{
        window.open('https://chat.whatsapp.com','_blank')
    }
  return (
    <div className="container">
        <div className="start-wrapper">
            <div className="start-img">
                <img src={tc} alt="" />
            </div>
            <div className="start-content">
                <h2 className='section-title'>Join Our Tech Community</h2>
                <p>Join hands with fellow tech lovers to explore emerging trends, share insights, and shape the future of technology.</p>
                <button className='register-button' onClick={handleClick}>Join Now</button>
            </div>
        </div>
    </div>
  )
}

export default Community